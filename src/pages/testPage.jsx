import SideNav from '../components/system/sidenav'
import { useState, useRef, React, useEffect, useMemo } from 'react'
import ContextCell from '../components/system/dnd/contextCell'
import BtnDefault from '../components/ui/group/buttons/default/btnDefault'
import Toggle from '../components/ui/group/toggle/default/toggle'
import classNames from 'classnames'
import ModalDnd from '../components/system/dnd/modalDnd'
import DeleteElement from '../components/system/dnd/deleteElement'
import { DuplicateElement } from '../components/system/dnd/duplicateElement'
import { Responsive, WidthProvider } from 'react-grid-layout'
import TestComp from './test'
import TestMove from './testMove'
import HTMLReactParser from 'html-react-parser/lib/index'
import { SHA256 } from 'crypto-js'
import InputFloatLabel from '../components/ui/group/inputs/floatLabel/inputFloatLabel'
import Grid from '../components/system/gridstack/grid'
import GridStackComponent from '../components/system/gridstack/gridStackComponent'
import Cell from '../components/system/gridstack/cell'
import { GridStack } from 'gridstack'
import { createRef } from 'react'
import ReactDOMServer from 'react-dom/server'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDebouncedCallback } from 'use-debounce'
const ResponsiveGridLayout = WidthProvider(Responsive)

const TestPage = () => {
	const [editMode, setEditMode] = useState(true)

	const [items, setItems] = useState([
		{
			i: '1',
			x: 0,
			y: 0,
			w: 1,
			h: 1,
			content: <BtnDefault>Button</BtnDefault>,
			justifyMode: 'left',
			alignMode: 'top',
			defaultCols: 1,
			defaultRows: 20,
		},
		{
			i: 'b',
			x: 1,
			y: 0,
			w: 3,
			h: 2,
			justifyMode: 'center',
			alignMode: 'center',
		},
		{
			i: 'c',
			x: 4,
			y: 0,
			w: 1,
			h: 2,
			justifyMode: 'center',
			alignMode: 'center',
		},
		{
			i: 'd',
			x: 4,
			y: 0,
			w: 1,
			h: 2,
			justifyMode: 'center',
			alignMode: 'center',
		},
		{
			i: 'e',
			x: 4,
			y: 0,
			w: 1,
			h: 2,
			justifyMode: 'center',
			alignMode: 'center',
		},
	])

	const [savingToLS, setSavingToLS] = useState(true)

	const [pendingSave, setPendingSave] = useState(false)
	// const [itemsGridStack, setItemsGridStack] = useState([
	// 	{ id: 'item-1', content: <BtnDefault>Button</BtnDefault> },
	// 	{ id: 'item-2' },
	// 	{ id: 'item-3' },
	// ])

	// const [itemSaved, setItemSaved] = useState(null)

	const [viewMode, setViewMode] = useState(false)
	const classRef = useRef(null)

	const [focusedCellId, setFocusedCellId] = useState(null)

	const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

	const [gapToggle, setGapToggle] = useState(true)

	const [draggingElement, setDraggingElement] = useState(null)

	const [rowHeight, setRowHeight] = useState(40)

	const [globalLayouts, setGlobalLayouts] = useState(items)

	const [autoSaving, setAutoSaving] = useState(true)

	const onDrop = (layout, layoutItem, event) => {
		// Функция для вычисления высоты элемента
		const calculateElementHeight = (elementHTML) => {
			if (!elementHTML) return 1

			// Создаем временный элемент для измерения
			const tempDiv = document.createElement('div')
			tempDiv.innerHTML = elementHTML
			tempDiv.style.position = 'absolute'
			tempDiv.style.visibility = 'hidden'
			tempDiv.style.top = '-9999px'
			tempDiv.style.left = '-9999px'
			tempDiv.style.width = '100px' // Устанавливаем базовую ширину

			document.body.appendChild(tempDiv)

			const height = tempDiv.offsetHeight
			document.body.removeChild(tempDiv)

			// Конвертируем пиксели в единицы сетки (1 единица = rowHeight)
			const gridHeight = Math.max(1, Math.ceil(height / rowHeight))

			return gridHeight
		}

		const elementHeight = calculateElementHeight(draggingElement)

		layoutItem = {
			...layoutItem,
			w: 1,
			h: elementHeight,
			content: HTMLReactParser(draggingElement),
			i: SHA256(
				new Date().getTime().toString().slice(0, 5) +
					Math.random().toString(36).substring(2, 5)
			).toString(),
			justifyMode: 'left',
			alignMode: 'top',
		}
		setItems((prevItems) => [...prevItems, layoutItem])
	}

	// const onLayoutChange = (layout) => {
	// 		setItems(mergeItems(items, layout))
	// 		saveToLS()
	// }

	const onLayoutChangeDebounced = useDebouncedCallback((layout, layouts) => {
		setGlobalLayouts(layout)
		setItems(mergeItems(items, layout))
		saveToLS(mergeItems(items, layout))
	}, 1000)

	const saveToLS = (layout) => {
		if (localStorage && items) {
			// toast('Layout saved')

			// Prepare a serializable copy (avoid circular refs from React elements)
			const serializable = layout.map((item) => {
				const { content, ...rest } = item
				let contentHtml = null
				if (typeof content === 'string') {
					contentHtml = content
				} else if (content) {
					try {
						contentHtml =
							ReactDOMServer.renderToStaticMarkup(content)
					} catch (e) {
						contentHtml = null
					}
				}
				return { ...rest, content: contentHtml }
			})

			localStorage.setItem('layout', JSON.stringify(serializable))
			setPendingSave(false)
		}
	}

	// мердж items и globalLayouts для обновления координат элементов
	const mergeItems = (items, globalLayouts) => {
		// Создать быструю lookup-таблицу по id
		const layoutMap = Object.fromEntries(
			globalLayouts.map((item) => [item.i, item])
		)

		return items.map((item) => {
			// если для данного элемента есть layout-объект - обновить координаты
			if (layoutMap[item.i]) {
				const { x, y, w, h } = layoutMap[item.i]
				return { ...item, x, y, w, h }
			}
			// иначе вернуть без изменений
			return item
		})
	}

	const toastConfig = {
		// position: 'top-right',
		// autoClose: 1000,
		// closeOnClick: true,
		// closeButton: false,
		// hideProgressBar: true,
	}

	return (
		<>
			<main className='pb-28'>
				<div className='flex flex-row flex-wrap lg:flex-nowrap items-start content-start gap-x-6 pt-2 w-full h-full'>
					<SideNav className={'lg:w-[20%] w-full'} />
					{/* <BtnDefault onClick={() => loadFromTS()}>
						Load Layout
					</BtnDefault> */}
					<BtnDefault
						onClick={() => {
							new Promise((resolve) => {
								resolve(saveToLS(globalLayouts))
							}).then(() => {
								toast('Layout saved')
							})
						}}
						disabled={globalLayouts == items}
					>
						Save Layout
					</BtnDefault>
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
							<div className='flex items-center gap-2'>
								<span className='font-medium text-sm'>
									Gap toggle:
								</span>
								<Toggle
									checked={gapToggle}
									onCheckedChange={() =>
										setGapToggle(!gapToggle)
									}
								/>
							</div>
							<div className='flex items-center gap-2'>
								<span className='font-medium text-sm'>
									Row Height:
								</span>
								<InputFloatLabel
									name='Row Height'
									placeholder='Row Height in px min 1'
									onChange={(e) => {
										if (
											Number(e.target.value) <
											1
										) {
											setRowHeight(1)
											e.target.value = 1
										} else {
											setRowHeight(
												Number(
													e.target.value
												)
											)
										}
									}}
									type='number'
								/>
							</div>
							<div className='flex items-center gap-2'>
								<span className='font-medium text-sm'>
									Auto saving:
								</span>
								<Toggle
									checked={autoSaving}
									onCheckedChange={() =>
										setAutoSaving(!autoSaving)
									}
									disabled={autoSaving}
								/>
							</div>
						</div>

						<div
							className=''
							draggable={true}
							unselectable='on'
							onDragStart={(e) => {
								setDraggingElement(e.target.innerHTML)
							}}
						>
							<BtnDefault>Button</BtnDefault>
						</div>
						<div className='flex justify-end'>
							<div
								className='top-[1.75rem] right-[.25rem] tooltip-left z-10 relative w-[1.5rem] h-[1.5rem] tooltip'
								data-tip={
									pendingSave
										? 'Pending save'
										: 'Layout saved'
								}
							>
								{pendingSave && (
									<span className='text-info loading loading-spinner loading-md'></span>
								)}
								{!pendingSave && (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='stroke-success size-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
										/>
									</svg>
								)}
							</div>
						</div>
						<ResponsiveGridLayout
							className={classNames('layout rounded-md', {
								'bg-base-100': !editMode,
								'bg-base-300': editMode,
							})}
							layouts={{ xl: items }}
							breakpoints={{
								xl: 1280,
								lg: 1024,
								md: 768,
								sm: 640,
								xs: 480,
								xxs: 0,
							}}
							cols={{
								xl: 12,
								lg: 12,
								md: 8,
								sm: 6,
								xs: 4,
								xxs: 2,
							}}
							rowHeight={rowHeight}
							verticalCompact={false}
							margin={gapToggle ? [10, 10] : [0, 0]}
							autoSize={true}
							id='grid-layout'
							isDroppable={editMode}
							onDrop={onDrop}
							isDraggable={editMode}
							isResizable={editMode}
							useCSSTransforms={true}
							onLayoutChange={(layout, layouts) => {
								setPendingSave(true)
								if (autoSaving) {
									onLayoutChangeDebounced(
										layout,
										layouts
									)
								}
							}}
						>
							{items.map((item) => (
								<div
									key={item.i}
									className={classNames(
										'rounded-lg flex',
										{
											'bg-slate-300 dark:bg-slate-800 border border-solid':
												focusedCellId ===
												item.i,
											'border border-dashed':
												editMode &&
												viewMode,
											'bg-base-100 cursor-grab':
												editMode,
											'justify-start':
												item.justifyMode ===
												'left',
											'justify-center':
												item.justifyMode ===
												'center',
											'justify-end':
												item.justifyMode ===
												'right',
											'items-start':
												item.alignMode ===
												'top',
											'items-center':
												item.alignMode ===
												'center',
											'items-end':
												item.alignMode ===
												'bottom',
										}
									)}
									id={`cell-${item.i}`}
									ref={classRef}
								>
									<ContextCell
										editMode={editMode}
										viewMode={viewMode}
										id={item.i}
										deleteElement={() => {
											DeleteElement(
												setItems,
												item
											)
										}}
										duplicateElement={() => {
											DuplicateElement(
												setItems,
												item
											)
										}}
										setFocusModeFlag={(
											isFocused
										) => {
											setFocusedCellId(
												isFocused
													? item.i
													: null
											)
										}}
										modalPosition={modalPosition}
										setModalPosition={
											setModalPosition
										}
										justifyMode={item.justifyMode}
										setJustifyMode={(
											justifyMode
										) => {
											setItems((prevItems) =>
												prevItems.map(
													(prevItem) =>
														prevItem.i ===
														item.i
															? {
																	...prevItem,
																	justifyMode,
																}
															: prevItem
												)
											)
										}}
										alignMode={item.alignMode}
										setAlignMode={(alignMode) => {
											setItems((prevItems) =>
												prevItems.map(
													(prevItem) =>
														prevItem.i ===
														item.i
															? {
																	...prevItem,
																	alignMode,
																}
															: prevItem
												)
											)
										}}
									>
										{item.content
											? item.content
											: item.i}
									</ContextCell>
								</div>
							))}
						</ResponsiveGridLayout>
						{items.map((item) => (
							<ModalDnd
								key={item.i}
								id={item.i}
								setFocusModeFlag={(isFocused) => {
									setFocusedCellId(
										isFocused ? item.i : null
									)
								}}
								modalPosition={modalPosition}
								setModalPosition={setModalPosition}
								itemId={item.i}
							/>
						))}
						{/* <div className='mt-10'></div>
						<TestComp />
						<div className='mt-10'></div>
						<TestMove />
						<div className='mt-10'></div> */}
						{/* <Grid /> */}
						<div className='mt-10'></div>
						{/* <GridStackComponent
							items={itemsGridStack}
							setItems={setItemsGridStack}
							className='border rounded-lg'
						/> */}

						<div className='mt-10'></div>
					</div>
				</div>
				<ToastContainer
					position='top-right'
					hideProgressBar
					closeOnClick
					draggable
					pauseOnHover
					// toastClassName={() => 'toast toast-top toast-end'}
					bodyClassName={() => 'p-0'}
					limit={5}
					autoClose={5000}
					pauseOnFocusLoss={true}
				/>
			</main>
		</>
	)
}

export default TestPage
