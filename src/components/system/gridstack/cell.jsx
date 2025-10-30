import classNames from 'classnames'

const Cell = ({ refs, item, children }) => {
	const itemContentClasses =
		'grid-stack-item-content border border-base-content rounded-lg bg-blue-300/40'

	return (
		<>
			<div
				ref={refs.current[item.id]}
				key={item.id}
				className={'grid-stack-item'}
			>
				<div className={classNames(itemContentClasses)}>
					<div>{children}</div>
				</div>
			</div>
		</>
	)
}

export default Cell
