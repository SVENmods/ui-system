const ToggleColors = () => {
	return (
		<div className='flex flex-row flex-wrap gap-2'>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-primary'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-secondary'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-accent'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-neutral'
			/>

			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-info'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-success'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-warning'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-error'
			/>
		</div>
	)
}

export default ToggleColors
