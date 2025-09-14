import React, { useRef } from 'react'
import Moveable from 'react-moveable'

const TestMove = () => {
	const targetRef = useRef(null)
	const moveableRef = useRef(null)

	return (
		<>
			<div
				className='container drag-container'
				style={{
					width: '500px',
					height: '500px',
					border: '1px solid #ccc',
					position: 'relative',
				}}
			>
				<div
					className='target'
					ref={targetRef}
					id='target'
					style={{
						width: '200px',
						height: '150px',
						background: '#4CAF50',
						color: 'white',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'move',
						position: 'absolute',
						top: '50px',
						left: '50px',
					}}
				>
					Target
				</div>
				<Moveable
					ref={moveableRef}
					target={targetRef}
					draggable={true}
					bounds={{ left: 0, top: 0, right: 500, bottom: 500 }}
					throttleDrag={1}
					edgeDraggable={false}
					startDragRotate={0}
					throttleDragRotate={0}
					scalable={true}
					keepRatio={false}
					throttleScale={0}
					snappable={true}
					snapGridWidth={60}
					snapGridHeight={60}
					isDisplayGridGuidelines={true}
					snapGap={true}
					snapDirections={{
						top: true,
						left: true,
						bottom: true,
						right: true,
						center: true,
						middle: true,
					}}
					elementSnapDirections={{
						top: true,
						left: true,
						bottom: true,
						right: true,
						center: true,
						middle: true,
					}}
					onDrag={(e) => {
						e.target.style.transform = e.transform
					}}
					onScale={(e) => {
						e.target.style.transform = e.drag.transform
					}}
				/>
			</div>
		</>
	)
}

export default TestMove
