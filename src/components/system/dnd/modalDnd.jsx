import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'
import { useState, useEffect } from 'react'
import TailwindAutocomplete from './../tailwind/autocomplete/TailwindAutocomplete'

// Draggable modal-box component
const DraggableModalBox = ({ children, position, id }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: `modal-box-${id}`,
	})

	const style = {
		transform: `translate3d(${position.x + (transform?.x || 0)}px, ${position.y + (transform?.y || 0)}px, 0)`,
	}

	return (
		<div
			ref={setNodeRef}
			style={style}
			className='modal-box'
			id={`modal-box-${id}`}
		>
			{/* Drag handle - only this area is draggable */}
			<div
				{...listeners}
				{...attributes}
				className='flex justify-center items-center px-4 pb-2 border-gray-300 cursor-move select-none'
			>
				<div className='flex space-x-1'>
					<div className='bg-gray-400 rounded-full w-1 h-1'></div>
					<div className='bg-gray-400 rounded-full w-1 h-1'></div>
					<div className='bg-gray-400 rounded-full w-1 h-1'></div>
					<div className='bg-gray-400 rounded-full w-1 h-1'></div>
					<div className='bg-gray-400 rounded-full w-1 h-1'></div>
					<div className='bg-gray-400 rounded-full w-1 h-1'></div>
				</div>
			</div>

			{/* Modal content - not draggable */}
			<div className=''>{children}</div>
		</div>
	)
}

// Droppable dialog area
const DroppableDialog = ({ children, id }) => {
	const { setNodeRef } = useDroppable({
		id: `dialog-area-${id}`,
	})

	return (
		<dialog
			id={`dialog-area-${id}`}
			className='open:bg-transparent modal'
			ref={setNodeRef}
		>
			{children}
		</dialog>
	)
}

const ModalDnd = ({ id, setFocusModeFlag }) => {
	const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

	const handleCloseModal = () => {
		document.getElementById(`dialog-area-${id}`).close()
		setFocusModeFlag(false)
	}

	// Обработчик для закрытия модального окна при нажатии ESC
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				const modal = document.getElementById(`dialog-area-${id}`)
				if (modal && modal.open) {
					modal.close()
					setFocusModeFlag(false)
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [id, setFocusModeFlag])

	// Обработчик для закрытия модального окна при клике вне области
	useEffect(() => {
		const handleClickOutside = (event) => {
			const modal = document.getElementById(`dialog-area-${id}`)
			if (modal && modal.open && event.target === modal) {
				modal.close()
				setFocusModeFlag(false)
			}
		}

		const modal = document.getElementById(`dialog-area-${id}`)
		if (modal) {
			modal.addEventListener('click', handleClickOutside)
			return () => {
				modal.removeEventListener('click', handleClickOutside)
			}
		}
	}, [id, setFocusModeFlag])

	const handleDragEnd = (event) => {
		const { delta } = event
		setModalPosition((prev) => ({
			x: prev.x + delta.x,
			y: prev.y + delta.y,
		}))
	}

	return (
		<>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			{/* <button
				className='btn'
				onClick={handleOpenModal}
				id={`open-modal-${id}`}
			>
				open modal
			</button> */}

			<DndContext onDragEnd={handleDragEnd}>
				<DroppableDialog id={id}>
					<DraggableModalBox position={modalPosition} id={id}>
						<TailwindAutocomplete id={id} />
					</DraggableModalBox>
					<form method='dialog' className='modal-backdrop'>
						<button onClick={handleCloseModal}>close</button>
					</form>
				</DroppableDialog>
			</DndContext>
		</>
	)
}

export default ModalDnd
