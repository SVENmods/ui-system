import 'gridstack/dist/gridstack.min.css'
import { GridStack } from 'gridstack'
import { useEffect, useRef, createRef, useState } from 'react'
import classNames from 'classnames'
import BtnDefault from '../../ui/group/buttons/default/btnDefault'
import Cell from './cell'

const Grid = () => {
	const refs = useRef({})
	const gridRef = useRef()

	const [items, setItems] = useState([
		{ id: 'item-1', content: <BtnDefault>Button</BtnDefault> },
		{ id: 'item-2' },
	])

	if (Object.keys(refs.current).length !== items.length) {
		items.forEach(({ id }) => {
			refs.current[id] = refs.current[id] || createRef()
		})
	}

	useEffect(() => {
		// let subOptions = {
		// 	cellHeight: 50, // should be 50 - top/bottom
		// 	column: 'auto', // size to match container
		// 	acceptWidgets: true, // will accept .grid-stack-item by default
		// 	margin: 5,
		// 	subGridDynamic: true, // make it recursive for all future sub-grids
		// 	float: true,
		// }
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
				},
				'.controlled'
			)
		const grid = gridRef.current
		grid.batchUpdate()
		grid.removeAll(false)
		items.forEach(({ id }) => grid.makeWidget(refs.current[id].current))
		grid.batchUpdate(false)
	}, [items])

	return (
		<div>
			<div>
				<button
					onClick={() =>
						setItems([
							...items,
							{ id: `item-${items.length + 1}` },
						])
					}
				>
					Add new widget
				</button>
				<div
					className={classNames(
						'grid-stack controlled border rounded-lg '
					)}
					// [&>.grid-stack-placeholder]:bg-red-500/80
				>
					{items.map((item) => {
						return (
							<Cell
								key={item.id}
								refs={refs}
								item={item}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Grid
