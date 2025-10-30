import 'gridstack/dist/gridstack.min.css'
import { GridStack } from 'gridstack'
import { useEffect, useRef, createRef, useMemo } from 'react'
import classNames from 'classnames'
import Cell from './cell'
import BtnDefault from '../../ui/group/buttons/default/btnDefault'
import ReactDOMServer from 'react-dom/server'
import HTMLReactParser from 'html-react-parser'

const GridStackComponent = ({ items, className, setItems }) => {
	const refs = useRef({})
	const gridRef = useRef()

	if (Object.keys(refs.current).length !== items.length) {
		items.forEach(({ id }) => {
			refs.current[id] = refs.current[id] || createRef()
		})
	}

	const insert = useMemo(
		() => [
			{
				w: 1,
				h: 1,
				name: 'button',
				component: <BtnDefault>Button</BtnDefault>,
			},
			{
				w: 1,
				h: 1,
				name: 'new item 2',
				content: 'content item 2',
				component: 'content item 2',
			},
			{
				w: 1,
				h: 1,
				name: 'new item 3',
				content: 'content item 3',
				component: 'content item 3',
			},
		],
		[]
	)
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
				},
				'.controlled'
			)
		const grid = gridRef.current
		grid.batchUpdate()
		grid.removeAll(false)
		items.forEach(({ id }) => grid.makeWidget(refs.current[id].current))
		grid.batchUpdate(false)

		GridStack.setupDragIn(
			'.sideman>.grid-stack-item',
			{
				stop: (e) => {
					console.log('e', e)
					console.log(
						'grid change dropping',
						grid.save(true, true)
					)
				},
				start: (e) => {
					console.log('e', e)
					// console.log(
					// 	'e.target.gridstackNode.component',
					// 	ReactDOMServer.renderToStaticMarkup(
					// 		e.target.gridstackNode.component
					// 	)
					// )
					// const toRender = ReactDOMServer.renderToStaticMarkup(
					// 	e.target.gridstackNode.component
					// )
					// e.target.gridstackNode.component = toRender
					// e.target.innerHTML = toRender
				},
			},
			insert
		)
		grid.on('change', () => {
			console.log('grid change', grid.save(true, true))
		})
		grid.on('dropped', () => {
			console.log('grid dropped')
		})
		console.log(
			'test',
			ReactDOMServer.renderToStaticMarkup(
				<BtnDefault>Button</BtnDefault>
			).toString()
		)
	}, [items]) // eslint-disable-line react-hooks/exhaustive-deps

	const saveLayout = (layout) => {}
	return (
		<>
			<div className='group flex items-start side-panel'>
				{insert.map((element, index) => {
					return (
						<div className='grid-stack-item' key={index}>
							<div className='grid-stack-item-content p-2 border rounded-lg'>
								<div className='hidden group-[.side-panel]:block'>
									{element.name}
								</div>
								<div className='group-[.side-panel]:hidden component'>
									{element.component}
								</div>
							</div>
						</div>
					)
				})}
				{/* <div className='grid-stack-item'>
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
				</div> */}
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
