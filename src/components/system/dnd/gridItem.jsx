import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import classNames from 'classnames'
import { memo } from 'react'

const GridItem = memo(({ id, children, editMode = false }) => {
	const { attributes, listeners, setNodeRef, transform, isDragging } =
		useDraggable({
			id,
			disabled: !editMode,
		})

	const style = {
		transform: CSS.Transform.toString(transform),
		opacity: isDragging ? 0.5 : 1,
	}

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className={classNames(
				' p-2 rounded-md w-full h-full text-base-content flex items-center justify-center transition-all duration-200',
				{
					'cursor-move': editMode,
					'cursor-default': !editMode,
				}
			)}
		>
			{children}
		</div>
	)
})

export default GridItem
