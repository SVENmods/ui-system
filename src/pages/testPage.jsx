import SideNav from '../components/system/sidenav'
import { useState, useRef } from 'react'
import ContextCell from '../components/system/dnd/contextCell'
import BtnDefault from '../components/ui/group/buttons/default/btnDefault'
import Toggle from '../components/ui/group/toggle/default/toggle'
import classNames from 'classnames'
import ModalDnd from '../components/system/dnd/modalDnd'
import { DeleteElement } from '../components/system/dnd/deleteElement'
import { DuplicateElement } from '../components/system/dnd/duplicateElement'
import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveGridLayout = WidthProvider(Responsive)

const TestPage = () => {
	const [items, setItems] = useState([
		{
			i: '1',
			x: 0,
			y: 0,
			w: 1,
			h: 2,
			content: <BtnDefault>Button</BtnDefault>,
		},
		{ i: 'b', x: 1, y: 0, w: 3, h: 2 },
		{ i: 'c', x: 4, y: 0, w: 1, h: 2 },
		{ i: 'd', x: 4, y: 0, w: 1, h: 2 },
		{ i: 'e', x: 4, y: 0, w: 1, h: 2 },
	])
	const [editMode, setEditMode] = useState(false)
	const [viewMode, setViewMode] = useState(false)
	const classRef = useRef(null)

	const [focusedCellId, setFocusedCellId] = useState(null)

	const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

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

						<ResponsiveGridLayout
							className={classNames(
								'mt-5 layout rounded-md overflow-hidden',
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
								xl: 12,
								lg: 10,
								md: 8,
								sm: 6,
								xs: 4,
								xxs: 2,
							}}
							rowHeight={25}
							verticalCompact={false}
						>
							{items.map((item) => (
								<div
									key={item.i}
									className={classNames(
										'rounded-lg',
										{
											'bg-slate-300 dark:bg-slate-800 border border-solid':
												focusedCellId ===
												item.i,
											'border border-dashed':
												viewMode,
											'bg-base-100 cursor-grab':
												editMode,
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
									>
										<div className='w-full h-full'>
											<span>
												{item.content
													? item.content
													: item.i}
											</span>
										</div>
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
					</div>
				</div>
			</main>
		</>
	)
}

export default TestPage
