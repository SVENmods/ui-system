import { useCallback } from 'react'
export const useHandleDragEnd = (
	setItems,
	setActiveId,
	setDragOverY,
	gridRows,
	editMode
) =>
	useCallback(
		(event) => {
			if (!editMode) return
			const { active, over } = event
			// console.log('Drag ended:', {
			// 	activeId: active.id,
			// 	overId: over?.id,
			// })

			if (over?.id && over.id.startsWith('cell-')) {
				const cellId = over.id
				const cellIndex = parseInt(cellId.replace('cell-', ''))
				const x = cellIndex % 12
				const y = Math.floor(cellIndex / 12)

				// console.log('Target position:', { x, y })

				// Позволяем перемещать элементы на любую позицию в пределах расширенной сетки
				if (x >= 0 && x < 12 && y >= 0 && y < gridRows) {
					setItems((prevItems) => {
						// Находим перетаскиваемый элемент
						const draggedItem = prevItems.find(
							(item) => item.id === active.id
						)

						if (!draggedItem) return prevItems

						const oldPosition = draggedItem.position
						const newPosition = { x, y }

						// console.log('Moving item:', {
						// 	id: active.id,
						// 	from: oldPosition,
						// 	to: newPosition,
						// })

						// Если позиция не изменилась, ничего не делаем
						if (
							oldPosition.x === newPosition.x &&
							oldPosition.y === newPosition.y
						) {
							return prevItems
						}

						// Находим элемент, который уже находится на целевой позиции
						const targetItem = prevItems.find(
							(item) =>
								item.position.x === x &&
								item.position.y === y
						)

						if (targetItem) {
							// console.log(
							// 	'Swapping with item:',
							// 	targetItem.id
							// )
							// Обмениваем позиции элементов
							return prevItems.map((item) => {
								if (item.id === active.id) {
									return {
										...item,
										position: newPosition,
									}
								} else if (item.id === targetItem.id) {
									return {
										...item,
										position: oldPosition,
									}
								}
								return item
							})
						} else {
							// console.log('Moving to empty position')
							// Просто перемещаем элемент на пустую позицию
							return prevItems.map((item) =>
								item.id === active.id
									? {
											...item,
											position: newPosition,
										}
									: item
							)
						}
					})
				}
			}

			setActiveId(null)
			setDragOverY(null)
		},
		[setItems, setActiveId, setDragOverY, gridRows, editMode]
	)
