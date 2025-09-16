import SideNav from '../components/system/sidenav'
import { useState, useRef, React } from 'react'
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
	const [viewMode, setViewMode] = useState(false)
	const classRef = useRef(null)

	const [focusedCellId, setFocusedCellId] = useState(null)

	const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

	const [gapToggle, setGapToggle] = useState(true)

	const [draggingElement, setDraggingElement] = useState(null)

	const rowHeight = 1

	const onDrop = (layout, layoutItem, event) => {
		console.log('Drop event:', event)
		console.log('Layout item:', layoutItem)

		layoutItem = {
			...layoutItem,
			w: 0,
			h: 0,
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
						</div>

						<div
							className=''
							draggable={true}
							unselectable='on'
							onDragStart={(e) => {
								console.log(e)
								setDraggingElement(e.target.innerHTML)
							}}
						>
							<BtnDefault>Button</BtnDefault>
						</div>
						<ResponsiveGridLayout
							className={classNames(
								'mt-5 layout rounded-md',
								{
									'bg-base-100': !editMode,
									'bg-base-300': editMode,
								}
							)}
							layouts={{ xl: items }}
							breakpoints={{
								'2xl': 1536,
								xl: 1280,
								lg: 1024,
								md: 768,
								sm: 640,
								xs: 480,
								xxs: 0,
							}}
							cols={{
								'2xl': 12,
								xl: 12,
								lg: 10,
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
						<div className='mt-10'></div>
						<TestComp />
						<div className='mt-10'></div>
						<TestMove />
					</div>
				</div>
			</main>
		</>
	)
}

export default TestPage
