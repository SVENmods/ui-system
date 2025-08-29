const EditorWindow = ({ id }) => {
	return (
		<>
			<div
				className='bg-sky-600 shadow-sm rounded-box w-52 dropdown menu'
				popover='auto'
				id={`popover-${id}`}
				style={{ positionAnchor: `--anchor-${id}` }}
			>
				Editor Window of {id} item
			</div>
		</>
	)
}

export default EditorWindow
