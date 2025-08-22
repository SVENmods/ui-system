const Toggle = ({ checked, onCheckedChange }) => {
	return (
		<input
			type='checkbox'
			checked={checked}
			onChange={onCheckedChange}
			className='toggle'
		/>
	)
}

export default Toggle
