export const DeleteElement = (setItems, item) => {
	setItems((prevItems) =>
		prevItems.filter((element) => element.id !== item.id)
	)
}
