import { useRef } from 'react'

export const Item = ({ children, ...props }) => {
	const ref = useRef(null)
	return (
		<div
			{...props}
			ref={ref}
			className='opacity-90 p-2 border border-base-content rounded-md text-base-content scale-[0.9]'
		>
			{children}
		</div>
	)
}
