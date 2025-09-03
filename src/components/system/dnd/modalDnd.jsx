import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'
import { useEffect } from 'react'
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
			className='group border hover:border-sky-800 border-transparent h-fit transition-[border] duration-300 modal-box'
			id={`modal-box-${id}`}
		>
			{/* Drag handle - only this area is draggable */}
			<div
				{...listeners}
				{...attributes}
				className='flex justify-center items-center px-4 pb-2 border-gray-300 cursor-move select-none'
			>
				<div className='flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
					<div className='flex space-x-0.5'>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
					</div>
					<div className='flex space-x-0.5'>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
						<div className='bg-gray-400 rounded-full w-1 h-1'></div>
					</div>
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
			className='justify-stretch open:bg-transparent modal'
			ref={setNodeRef}
			style={{ alignItems: 'inherit', justifyItems: 'inherit' }}
		>
			{children}
		</dialog>
	)
}

const ModalDnd = ({
	id,
	setFocusModeFlag,
	modalPosition,
	setModalPosition,
	itemId,
}) => {
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
		setModalPosition((modalPosition) => ({
			x: modalPosition.x + delta.x,
			y: modalPosition.y + delta.y,
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
						<TailwindAutocomplete id={id} itemId={itemId} />
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
