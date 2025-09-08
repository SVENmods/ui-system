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
import { ResizableBox } from 'react-resizable'

const TestPage = () => {
	const [items, setItems] = useState([
		{
			id: '1',
			position: { x: 0, y: 0 },
			content: <BtnDefault>Button</BtnDefault>,
			size: { width: 1, height: 1 },
		},
		{ id: '2', position: { x: 1, y: 0 }, size: { width: 1, height: 1 } },
		{ id: '3', position: { x: 2, y: 0 }, size: { width: 1, height: 1 } },
		{ id: '4', position: { x: 0, y: 1 }, size: { width: 1, height: 1 } },
		{ id: '5', position: { x: 1, y: 1 }, size: { width: 1, height: 1 } },
	])
	const [activeId, setActiveId] = useState(null)
	const [dragOverY, setDragOverY] = useState(null)
	const [editMode, setEditMode] = useState(false)
	const [viewMode, setViewMode] = useState(false)

	// Мемоизируем вычисления для оптимизации
	const maxY = useMemo(
		() => Math.max(...items.map((item) => item.position.y), 0),
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

	// Мемоизируем рендеринг ячеек сетки
	const gridCells = useMemo(() => {
		return Array.from({ length: 12 * gridRows }, (_, index) => {
			const x = index % 12
			const y = Math.floor(index / 12)
			const item = items.find(
				(item) => item.position.x === x && item.position.y === y
			)
			const isLastRow = y === gridRows - 1

			return (
				<GridCell
					key={index}
					id={index}
					isLastRow={isLastRow}
					editMode={editMode}
					viewMode={viewMode}
					focusModeFlag={focusedCellId === index}
				>
					{item && (
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
	}, [items, gridRows, editMode, viewMode, focusedCellId, modalPosition])

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
						{/* <ModalDnd /> */}
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
									className={classNames(
										'gap-2 grid grid-cols-12 w-full',
										`grid-row-${gridRows - 1}`
									)}
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
						<div className='mt-5'></div>
						<ResizableBox
							width={200}
							height={200}
							minConstraints={[60, 60]}
							draggableOpts={{ grid: [60, 60] }}
							className='border'
						>
							<span>Contents</span>
						</ResizableBox>
					</div>
				</div>
			</main>
		</>
	)
}

export default TestPage
