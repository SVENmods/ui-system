import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'
import { useState } from 'react'

// Draggable modal-box component
const DraggableModalBox = ({ children, position }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: 'modal-box',
	})

	const style = {
		transform: `translate3d(${position.x + (transform?.x || 0)}px, ${position.y + (transform?.y || 0)}px, 0)`,
	}

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			className='cursor-move select-none modal-box'
		>
			{children}
		</div>
	)
}

// Droppable dialog area
const DroppableDialog = ({ children }) => {
	const { setNodeRef } = useDroppable({
		id: 'dialog-area',
	})

	return (
		<dialog
			id='my_modal_2'
			className='open:bg-transparent modal'
			ref={setNodeRef}
		>
			{children}
		</dialog>
	)
}

const ModalDnd = () => {
	const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

	const handleOpenModal = () => {
		document.getElementById('my_modal_2').showModal()
	}

	const handleCloseModal = () => {
		document.getElementById('my_modal_2').close()
	}

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
			<button className='btn' onClick={handleOpenModal}>
				open modal
			</button>

			<DndContext onDragEnd={handleDragEnd}>
				<DroppableDialog>
					<DraggableModalBox position={modalPosition}>
						<h3 className='font-bold text-lg'>Hello!</h3>
						<p className='py-4'>
							Press ESC key or click outside to close
						</p>
						<div className='modal-action'>
							<button
								className='btn btn-primary'
								onClick={handleCloseModal}
							>
								Close
							</button>
						</div>
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
