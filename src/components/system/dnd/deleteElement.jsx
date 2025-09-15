const DeleteElement = (setItems, item) => {
	setItems((prevItems) =>
		prevItems.filter((element) => element.i !== item.i)
	)
}

export default DeleteElement
