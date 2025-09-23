import classNames from 'classnames'

const Cell = ({ refs, item }) => {
	const itemContentClasses =
		'grid-stack-item-content border border-base-content rounded-lg'

	return (
		<>
			<div
				ref={refs.current[item.id]}
				key={item.id}
				className={'grid-stack-item '}
			>
				<div className={classNames(itemContentClasses)}>
					<div>{item.content ? item.content : item.id}</div>
				</div>
			</div>
		</>
	)
}

export default Cell
