const ToggleDisabled = () => {
	return (
		<div className='flex flex-row gap-2'>
			<input type='checkbox' className='toggle' disabled />
			<input
				type='checkbox'
				className='toggle'
				disabled
				defaultChecked
			/>
		</div>
	)
}

export default ToggleDisabled
