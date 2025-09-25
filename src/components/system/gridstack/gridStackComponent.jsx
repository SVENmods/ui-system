import 'gridstack/dist/gridstack.min.css'
import { GridStack } from 'gridstack'
import { useEffect, useRef, createRef } from 'react'
import classNames from 'classnames'
import Cell from './cell'
import BtnDefault from '../../ui/group/buttons/default/btnDefault'

const GridStackComponent = ({ items, className }) => {
	const refs = useRef({})
	const gridRef = useRef()

	if (Object.keys(refs.current).length !== items.length) {
		items.forEach(({ id }) => {
			refs.current[id] = refs.current[id] || createRef()
		})
	}
	useEffect(() => {
		gridRef.current =
			gridRef.current ||
			GridStack.init(
				{
					float: true,
					margin: 4,
					//! can contain one word
					// placeholderClass: '',
					cellHeight: 'auto',
					// sizeToContent: true,
					acceptWidgets: true,
					// subGridOpts: subOptions,
					// subGridDynamic: true,
					columnOpts: {
						breakpointForWindow: true,
						breakpoints: [
							{ w: 768, c: 2 },
							{ w: 992, c: 6 },
							{ w: 1200, c: 8 },
							{ w: 1400, c: 10 },
						],
					},
					onChange: (event, eventData) => {
						console.log('event', event, eventData)
					},
				},
				'.controlled'
			)
		const grid = gridRef.current
		grid.batchUpdate()
		grid.removeAll(false)
		items.forEach(({ id }) => grid.makeWidget(refs.current[id].current))
		grid.batchUpdate(false)
		let insert = [{ w: 1, h: 1 }]
		GridStack.setupDragIn(
			'.sidepanel>.grid-stack-item',
			undefined,
			insert
		)
		grid.on('change', (event, eventData) => {
			console.log('grid change', grid.save(true, true))
		})
	}, [items])

	return (
		<>
			<div className='group: flex items-start [&>.grid-stack-item-content>*]:pointer-events-none sidepanel'>
				<div className='grid-stack-item'>
					<div
						className='grid-stack-item-content bg-red-500 p-2 border rounded-lg'
						content={<BtnDefault>Button</BtnDefault>}
					>
						Button
					</div>
				</div>
				<div className='grid-stack-item'>
					<div className='grid-stack-item-content bg-blue-500 p-2 border rounded-lg'>
						new item 2
					</div>
				</div>
				<div className='grid-stack-item'>
					<div className='grid-stack-item-content bg-gray-500 p-2 border rounded-lg'>
						new item 3
					</div>
				</div>
			</div>
			<div
				className={classNames('grid-stack controlled ', className)}
				// [&>.grid-stack-placeholder]:bg-red-500/80
			>
				{items.map((item) => {
					return <Cell key={item.id} refs={refs} item={item} />
				})}
			</div>
		</>
	)
}

export default GridStackComponent
