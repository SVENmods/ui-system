export const DuplicateElement = (setItems, item) => {
	setItems((prevItems) => {
		// Find the maximum numeric ID in the list
		const maxId = Math.max(
			...prevItems
				.map((i) => parseInt(i.id) || 0)
				.filter((id) => !isNaN(id)),
			0
		)

		const newId = (maxId + 1).toString()

		// Find the rightmost position in the grid
		const maxX = Math.max(...prevItems.map((i) => i.position.x), 0)
		const maxY = Math.max(...prevItems.map((i) => i.position.y), 0)

		const newPosition = {
			x: maxX + 1,
			y: maxY,
		}

		return [
			...prevItems,
			{
				...item,
				id: newId,
				position: newPosition,
			},
		]
	})
}
