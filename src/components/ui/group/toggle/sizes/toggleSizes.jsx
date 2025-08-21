const ToggleSizes = () => {
	return (
		<div className='flex flex-row flex-wrap gap-2'>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-xs'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-sm'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-md'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-lg'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='toggle toggle-xl'
			/>
		</div>
	)
}

export default ToggleSizes
