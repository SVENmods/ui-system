import { useDroppable } from '@dnd-kit/core'
import classNames from 'classnames'
import { memo, useState } from 'react'
import { ResizableBox } from 'react-resizable'

const GridCell = memo(
	({
		id,
		children,
		isLastRow,
		editMode = false,
		viewMode = false,
		focusModeFlag = false,
		className,
	}) => {
		const { isOver, setNodeRef } = useDroppable({
			id: `cell-${id}`,
			disabled: !editMode,
		})

		const [colSpan, setColSpan] = useState(1)

		// Функция для вычисления col-span на основе ширины элемента
		const calculateColSpan = (width) => {
			console.log(width)

			const span = Math.round(width / 60)

			return Math.max(1, Math.min(12, span)) // Ограничиваем от 1 до 12
		}

		// Обработчик изменения размера
		const handleResize = (e, data) => {
			const newWidth = data.size.width
			const newColSpan = calculateColSpan(newWidth)
			setColSpan(newColSpan)
		}

		// Обработчик окончания изменения размера
		const handleResizeStop = (e, data) => {
			const newWidth = data.size.width
			const newColSpan = calculateColSpan(newWidth)
			setColSpan(newColSpan)
			console.log('resize stop', {
				width: newWidth,
				colSpan: newColSpan,
				target: e.target,
			})
		}

		return (
			<div
				ref={setNodeRef}
				className={classNames(
					'w-full h-full rounded-md transition-all duration-200',
					{
						'h-[0px]': isLastRow,
						'min-h-[3.75rem]': !isLastRow,
						'bg-base-100 border border-dashed border-base-content':
							isOver,
						// '': !isLastRow && editMode,
						'border border-dashed border-base-content':
							viewMode && editMode && !isLastRow,
						'border-4 border-slate-500/50 border-double':
							editMode && focusModeFlag,
					},
					`col-span-${colSpan}`,
					className
				)}
				id={`cell-${id}`}
			>
				<ResizableBox
					minConstraints={[60, 60]}
					draggableOpts={{ grid: [60, 60] }}
					onResizeStart={() => {
						console.log('resize start')
					}}
					onResize={handleResize}
					width={colSpan * 60}
					onResizeStop={handleResizeStop}
					className='w-full h-full'
				>
					{children}
				</ResizableBox>
			</div>
		)
	}
)

export default GridCell
