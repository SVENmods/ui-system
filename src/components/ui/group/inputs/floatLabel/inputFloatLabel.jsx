const InputFloatLabel = ({ name, placeholder, onChange, type }) => {
	return (
		<>
			<label className='floating-label'>
				<span>{name ? name : 'Email'}</span>
				<input
					type={type ? type : 'text'}
					placeholder={
						placeholder ? placeholder : 'mail@site.com'
					}
					className='input input-md'
					onChange={onChange ? onChange : () => {}}
				/>
			</label>
		</>
	)
}

export default InputFloatLabel
