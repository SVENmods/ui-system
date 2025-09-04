import { useDroppable } from '@dnd-kit/core'
import classNames from 'classnames'
import { memo } from 'react'
import { ResizableBox } from 'react-resizable'

const GridCell = memo(
	({
		id,
		children,
		isLastRow,
		editMode = false,
		viewMode = false,
		focusModeFlag = false,
		item = null,
		updateItemSize = null,
	}) => {
		const { isOver, setNodeRef } = useDroppable({
			id: `cell-${id}`,
			disabled: !editMode,
		})

		const handleResize = (event, { size }) => {
			if (item && updateItemSize) {
				// Конвертируем пиксели в колонки (60px = 1 колонка)
				const newWidth = Math.max(
					1,
					Math.min(12, Math.round(size.width / 60))
				)
				const newHeight = Math.max(1, Math.round(size.height / 60))

				updateItemSize(item.id, {
					width: newWidth,
					height: newHeight,
				})
			}
		}

		const getSpanClasses = () => {
			if (!item || !item.size) return ''

			const { width, height } = item.size
			const colSpan = `col-span-${width}`
			const rowSpan = height > 1 ? `row-span-${height}` : ''

			return `${colSpan} ${rowSpan}`.trim()
		}

		return children ? (
			<ResizableBox
				width={(item?.size?.width || 1) * 60}
				height={(item?.size?.height || 1) * 60}
				draggableOpts={{ grid: [60, 60] }}
				minConstraints={[60, 60]}
				maxConstraints={[720, 10000]} // 12 колонок * 60px, максимальная высота
				onResize={handleResize}
				className={classNames('w-full h-full', getSpanClasses())}
			>
				<div
					ref={setNodeRef}
					className={classNames(
						'w-full h-full rounded-md transition-colors duration-200',
						{
							'h-[0px]': isLastRow,
							'bg-base-100 border-1 border-dashed border-base-content':
								isOver,
							'border-1 border-dashed border-base-content':
								viewMode && editMode && !isLastRow,
							'border-4 border-slate-500/50 border-double':
								editMode && focusModeFlag,
						}
					)}
					id={`cell-${id}`}
				>
					{children}
				</div>
			</ResizableBox>
		) : (
			<div
				ref={setNodeRef}
				className={classNames(
					'w-full h-full rounded-md transition-colors duration-200',
					{
						'h-[0px]': isLastRow,
						'bg-base-100 border-1 border-dashed border-base-content':
							isOver,
						'border-1 border-dashed border-base-content':
							viewMode && editMode && !isLastRow,
						'border-4 border-slate-500/50 border-double':
							editMode && focusModeFlag,
					}
				)}
				id={`cell-${id}`}
			>
				{children}
			</div>
		)
	}
)

export default GridCell
