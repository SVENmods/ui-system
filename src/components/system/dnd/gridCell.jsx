import { useDroppable } from '@dnd-kit/core'
import classNames from 'classnames'
import { memo } from 'react'

const GridCell = memo(
	({ id, children, isLastRow, editMode = false, viewMode = false }) => {
		const { isOver, setNodeRef } = useDroppable({
			id: `cell-${id}`,
			disabled: !editMode,
		})

		return (
			<div
				ref={setNodeRef}
				className={classNames(
					'w-full h-full rounded-md transition-all duration-200 ',
					{
						'h-[0px]': isLastRow,
						'bg-base-300 border border-dashed border-base-content':
							isOver,
						// '': !isLastRow && editMode,
						'border border-dashed border-base-content':
							viewMode && editMode && !isLastRow,
					}
				)}
			>
				{children}
			</div>
		)
	}
)

export default GridCell
