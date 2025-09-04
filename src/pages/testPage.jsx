import SideNav from '../components/system/sidenav'
import {
	closestCenter,
	DndContext,
	DragOverlay,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core'
import GridItem from '../components/system/dnd/gridItem'
import GridCell from '../components/system/dnd/gridCell'
import { useState, useMemo, useCallback } from 'react'
import { Item } from '../components/system/dnd/item'
import ContextCell from '../components/system/dnd/contextCell'
import BtnDefault from './../components/ui/group/buttons/default/btnDefault'
import Toggle from './../components/ui/group/toggle/default/toggle'
import classNames from 'classnames'
import ModalDnd from '../components/system/dnd/modalDnd'
import { DeleteElement } from '../components/system/dnd/deleteElement'
import { DuplicateElement } from '../components/system/dnd/duplicateElement'
import { useHandleDragEnd } from '../components/system/dnd/hooks/useHandleDragEnd'
import { changeSize } from '../components/system/dnd/changeSize'

const TestPage = () => {
	const [items, setItems] = useState([
		{
			id: '1',
			position: { x: 0, y: 0 },
			content: <BtnDefault>Button 1</BtnDefault>,
			size: { width: 3, height: 1 },
		},
		{
			id: '2',
			position: { x: 3, y: 0 },
			size: { width: 2, height: 2 },
		},
		{
			id: '3',
			position: { x: 5, y: 0 },
			size: { width: 1, height: 1 },
		},
		{
			id: '4',
			position: { x: 0, y: 1 },
			size: { width: 1, height: 1 },
		},
		{
			id: '5',
			position: { x: 1, y: 1 },
			size: { width: 2, height: 1 },
		},
	])
	const [activeId, setActiveId] = useState(null)
	const [dragOverY, setDragOverY] = useState(null)
	const [editMode, setEditMode] = useState(false)
	const [viewMode, setViewMode] = useState(false)

	// Функции для работы с размерами ячеек
	const checkCollision = useCallback((item, newSize, items) => {
		const { position, id } = item
		const newEndX = position.x + newSize.width
		const newEndY = position.y + newSize.height

		return items.filter((otherItem) => {
			if (otherItem.id === id) return false

			const otherEndX =
				otherItem.position.x + (otherItem.size?.width || 1)
			const otherEndY =
				otherItem.position.y + (otherItem.size?.height || 1)

			// Проверяем пересечение по горизонтали и вертикали
			const horizontalOverlap =
				position.x < otherEndX && newEndX > otherItem.position.x
			const verticalOverlap =
				position.y < otherEndY && newEndY > otherItem.position.y

			return horizontalOverlap && verticalOverlap
		})
	}, [])

	const resolveConflicts = useCallback(
		(item, newSize, items) => {
			const conflicts = checkCollision(item, newSize, items)
			if (conflicts.length === 0) return items

			let updatedItems = [...items]

			// Сдвигаем конфликтующие элементы
			conflicts.forEach((conflictItem) => {
				const conflictIndex = updatedItems.findIndex(
					(i) => i.id === conflictItem.id
				)
				if (conflictIndex !== -1) {
					// Сдвигаем вниз на одну позицию
					updatedItems[conflictIndex] = {
						...updatedItems[conflictIndex],
						position: {
							...updatedItems[conflictIndex].position,
							y:
								updatedItems[conflictIndex].position.y +
								1,
						},
					}
				}
			})

			// Рекурсивно проверяем новые конфликты
			return resolveConflicts(item, newSize, updatedItems)
		},
		[checkCollision]
	)

	const updateItemSize = useCallback(
		(itemId, newSize) => {
			setItems((prevItems) => {
				const itemIndex = prevItems.findIndex(
					(item) => item.id === itemId
				)
				if (itemIndex === -1) return prevItems

				const item = prevItems[itemIndex]
				const updatedItem = { ...item, size: newSize }

				// Разрешаем конфликты
				const resolvedItems = resolveConflicts(
					updatedItem,
					newSize,
					prevItems
				)

				// Обновляем размер элемента
				const finalItems = [...resolvedItems]
				finalItems[itemIndex] = updatedItem

				return finalItems
			})
		},
		[resolveConflicts]
	)

	// Мемоизируем вычисления для оптимизации
	const maxY = useMemo(
		() =>
			Math.max(
				...items.map(
					(item) =>
						item.position.y + (item.size?.height || 1) - 1
				),
				0
			),
		[items]
	)
	const gridRows = useMemo(
		() => Math.max(maxY + 2, dragOverY ? dragOverY + 2 : maxY + 2),
		[maxY, dragOverY]
	)

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: (event, args) => {
				switch (event.code) {
					case 'Space':
					case 'Enter':
						return args.active.rect.current.translated
					case 'ArrowLeft':
						return {
							x: args.active.rect.current.translated.x - 1,
							y: args.active.rect.current.translated.y,
						}
					case 'ArrowRight':
						return {
							x: args.active.rect.current.translated.x + 1,
							y: args.active.rect.current.translated.y,
						}
					case 'ArrowDown':
						return {
							x: args.active.rect.current.translated.x,
							y: args.active.rect.current.translated.y + 1,
						}
					case 'ArrowUp':
						return {
							x: args.active.rect.current.translated.x,
							y: args.active.rect.current.translated.y - 1,
						}
					default:
						return args.active.rect.current.translated
				}
			},
		})
	)

	const [focusedCellId, setFocusedCellId] = useState(null)

	const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

	// Мемоизируем рендеринг ячеек сетки с span-логикой
	const gridCells = useMemo(() => {
		// Создаем массив для отслеживания занятых ячеек
		const occupiedCells = new Set()

		// Сначала отмечаем все занятые ячейки
		items.forEach((item) => {
			const { position, size } = item
			const width = size?.width || 1
			const height = size?.height || 1

			for (let x = position.x; x < position.x + width; x++) {
				for (let y = position.y; y < position.y + height; y++) {
					occupiedCells.add(`${x},${y}`)
				}
			}
		})

		// Рендерим все ячейки сетки
		return Array.from({ length: 12 * gridRows }, (_, index) => {
			const x = index % 12
			const y = Math.floor(index / 12)
			const isLastRow = y === gridRows - 1

			// Находим элемент, который занимает эту ячейку
			const item = items.find((item) => {
				const { position, size } = item
				const width = size?.width || 1
				const height = size?.height || 1

				return (
					x >= position.x &&
					x < position.x + width &&
					y >= position.y &&
					y < position.y + height
				)
			})

			// Рендерим элемент только в его начальной позиции
			const shouldRenderItem =
				item && item.position.x === x && item.position.y === y

			return (
				<GridCell
					key={index}
					id={index}
					isLastRow={isLastRow}
					editMode={editMode}
					viewMode={viewMode}
					focusModeFlag={focusedCellId === index}
					item={shouldRenderItem ? item : null}
					updateItemSize={updateItemSize}
				>
					{shouldRenderItem && (
						<>
							<ContextCell
								editMode={editMode}
								viewMode={viewMode}
								id={index}
								deleteElement={() => {
									DeleteElement(setItems, item)
								}}
								duplicateElement={() => {
									DuplicateElement(setItems, item)
								}}
								setFocusModeFlag={(isFocused) => {
									setFocusedCellId(
										isFocused ? index : null
									)
								}}
								modalPosition={modalPosition}
								setModalPosition={setModalPosition}
								changeSize={() => {
									changeSize()
								}}
							>
								<GridItem
									id={item.id}
									editMode={editMode}
									viewMode={viewMode}
									focusModeFlag={
										focusedCellId === index
									}
								>
									{item.content
										? item.content
										: item.id}
								</GridItem>
							</ContextCell>
							<ModalDnd
								id={index}
								setFocusModeFlag={(isFocused) => {
									setFocusedCellId(
										isFocused ? index : null
									)
								}}
								modalPosition={modalPosition}
								setModalPosition={setModalPosition}
								itemId={item.id}
							/>
						</>
					)}
				</GridCell>
			)
		})
	}, [
		items,
		gridRows,
		editMode,
		viewMode,
		focusedCellId,
		modalPosition,
		updateItemSize,
	])

	const handleDragStart = useCallback(
		(event) => {
			if (!editMode) return
			const { active } = event
			// console.log('Drag started:', active.id)
			setActiveId(active.id)
			setDragOverY(null)
		},
		[editMode]
	)

	const handleDragOver = useCallback(
		(event) => {
			if (!editMode) return
			const { over } = event

			if (over?.id && over.id.startsWith('cell-')) {
				const cellIndex = parseInt(over.id.replace('cell-', ''))
				const y = Math.floor(cellIndex / 12)

				// Если перетаскиваем за пределы текущей сетки, расширяем её
				if (y > maxY) {
					setDragOverY(y)
				}
			}
		},
		[maxY, editMode]
	)

	const handleDragEnd = useHandleDragEnd(
		setItems,
		setActiveId,
		setDragOverY,
		gridRows,
		editMode
	)

	return (
		<>
			<main>
				<div className='flex flex-row flex-wrap lg:flex-nowrap items-start content-start gap-x-6 pt-2 w-full h-full'>
					<SideNav className={'lg:w-[20%] w-full'} />
					<div className='w-full lg:w-[80%]'>
						<div className='flex items-center gap-4'>
							<div className='flex items-center gap-2'>
								<span className='font-medium text-sm'>
									Edit Mode:
								</span>
								<Toggle
									checked={editMode}
									onCheckedChange={() =>
										setEditMode(!editMode)
									}
								/>
							</div>
							<div className='flex items-center gap-2'>
								<span className='font-medium text-sm'>
									View Mode:
								</span>
								<Toggle
									checked={viewMode && editMode}
									onCheckedChange={() =>
										setViewMode(!viewMode)
									}
									disabled={viewMode}
								/>
							</div>
						</div>
						<div
							className={classNames('mt-5 rounded-md', {
								'bg-base-100': !editMode,
								'bg-base-300': editMode,
							})}
						>
							<DndContext
								sensors={editMode ? sensors : undefined}
								collisionDetection={
									editMode
										? closestCenter
										: undefined
								}
								onDragStart={handleDragStart}
								onDragOver={handleDragOver}
								onDragEnd={handleDragEnd}
							>
								<div
									className='gap-2 grid grid-cols-12 w-full'
									style={{
										gridTemplateRows: `repeat(${gridRows - 1}, minmax(60px, auto)) minmax(0px, auto)`,
									}}
								>
									{gridCells}
								</div>
								<DragOverlay>
									{activeId ? (
										<Item id={activeId}>
											{(() => {
												const activeItem =
													items.find(
														(item) =>
															item.id ===
															activeId
													)
												return (
													activeItem?.content ||
													activeId
												)
											})()}
										</Item>
									) : null}
								</DragOverlay>
							</DndContext>
						</div>
						<div className='mt-5'>
							<input type='text' name='' id='' />
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default TestPage
