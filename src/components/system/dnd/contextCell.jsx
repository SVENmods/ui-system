import * as ContextMenu from '@radix-ui/react-context-menu'
import classNames from 'classnames'

const ContextCell = ({
	children,
	editMode,
	id,
	deleteElement,
	duplicateElement,
}) => {
	const itemClass =
		'group relative flex items-center data-[highlighted]:bg-base-300 pr-[5px] pl-[25px] rounded-[3px] outline-none h-[25px] text-[13px] text-base-content leading-none cursor-pointer select-none data-[disabled]:text-gray-500 data-[disabled]:cursor-not-allowed gap-2'

	return (
		<ContextMenu.Root>
			<ContextMenu.Trigger
				disabled={!editMode}
				className=''
				style={{ anchorName: `--anchor-${id}` }}
			>
				{children}
			</ContextMenu.Trigger>
			<ContextMenu.Portal>
				<ContextMenu.Content
					className='bg-base-100 shadow-lg p-2 border border-base-300 rounded-lg min-w-[220px] overflow-hidden'
					sideOffset={5}
					align='end'
				>
					<ContextMenu.Item
						className={classNames(itemClass)}
						onSelect={() => {
							const pop = document.getElementById(
								`popover-${id}`
							)
							if (
								pop &&
								typeof pop.showPopover === 'function'
							) {
								pop.showPopover()
							}
						}}
					>
						<span>Tailwind Editor</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-4'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
							/>
						</svg>
					</ContextMenu.Item>
					<ContextMenu.Item
						className={classNames('text-red-500', itemClass)}
						onSelect={deleteElement}
					>
						<span>Delete element</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-4'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
							/>
						</svg>
					</ContextMenu.Item>
					<ContextMenu.Item
						className={classNames(itemClass)}
						onSelect={duplicateElement}
					>
						<span>Duplicate element</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-4'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6'
							/>
						</svg>
					</ContextMenu.Item>
					<ContextMenu.Item
						className={classNames(itemClass)}
						disabled
					>
						<span>Edit text</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-4'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
							/>
						</svg>
					</ContextMenu.Item>
				</ContextMenu.Content>
			</ContextMenu.Portal>
		</ContextMenu.Root>
	)
}

export default ContextCell
