import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
// import { useDroppable } from '@dnd-kit/core'
import classNames from 'classnames'
import { memo } from 'react'

const GridItem = memo(({ id, children, editMode = false }) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id,
			disabled: !editMode,
		})

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	// const { isOver } = useDroppable({
	// 	id: `droppable-${id}`,
	// })

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
					// 'bg-red-500': !isOver,
				}
			)}
		>
			{children}
		</div>
	)
})

export default GridItem
