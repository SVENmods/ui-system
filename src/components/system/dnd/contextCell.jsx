import * as ContextMenu from '@radix-ui/react-context-menu'
import { useState } from 'react'
import classNames from 'classnames'

const ContextCell = ({ children, editMode }) => {
	const [bookmarksChecked, setBookmarksChecked] = useState(true)
	const [urlsChecked, setUrlsChecked] = useState(false)
	const [person, setPerson] = useState('pedro')

	const itemClass =
		'group relative flex items-center data-[highlighted]:bg-base-300 pr-[5px] pl-[25px] rounded-[3px] outline-none h-[25px] text-[13px] text-base-content leading-none cursor-pointer select-none data-[disabled]:text-gray-500 data-[disabled]:cursor-not-allowed'

	return (
		<ContextMenu.Root>
			<ContextMenu.Trigger disabled={!editMode} className=''>
				{children}
			</ContextMenu.Trigger>
			<ContextMenu.Portal>
				<ContextMenu.Content
					className='bg-base-100 shadow-lg p-2 border border-base-300 rounded-lg min-w-[220px] overflow-hidden'
					sideOffset={5}
					align='end'
				>
					<ContextMenu.Item className={classNames(itemClass)}>
						Back <div className='ml-auto pl-5'>⌘+[</div>
					</ContextMenu.Item>
					<ContextMenu.Item
						className={classNames(itemClass)}
						disabled
					>
						Forward{' '}
						<div className='ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white'>
							⌘+]
						</div>
					</ContextMenu.Item>
					<ContextMenu.Item className={classNames(itemClass)}>
						Reload <div className='ml-auto pl-5'>⌘+R</div>
					</ContextMenu.Item>
					<ContextMenu.Sub>
						<ContextMenu.SubTrigger
							className={classNames(itemClass)}
						>
							More Tools
							<div className='ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-base-content'>
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
										d='m8.25 4.5 7.5 7.5-7.5 7.5'
									/>
								</svg>
							</div>
						</ContextMenu.SubTrigger>
						<ContextMenu.Portal>
							<ContextMenu.SubContent
								className='bg-base-200 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] p-[5px] rounded-md min-w-[220px] overflow-hidden'
								sideOffset={2}
								alignOffset={-5}
							>
								<ContextMenu.Item
									className={classNames(itemClass)}
								>
									Save Page As…{' '}
									<div className='ml-auto pl-5'>
										⌘+S
									</div>
								</ContextMenu.Item>
								<ContextMenu.Item
									className={classNames(itemClass)}
								>
									Create Shortcut…
								</ContextMenu.Item>
								<ContextMenu.Item
									className={classNames(itemClass)}
								>
									Name Window…
								</ContextMenu.Item>
								<ContextMenu.Separator className='bg-base-content m-[5px] h-px' />
								<ContextMenu.Item
									className={classNames(itemClass)}
								>
									Developer Tools
								</ContextMenu.Item>
							</ContextMenu.SubContent>
						</ContextMenu.Portal>
					</ContextMenu.Sub>

					<ContextMenu.Separator className='bg-base-content m-[5px] h-px' />

					<ContextMenu.CheckboxItem
						className={classNames(itemClass)}
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<ContextMenu.ItemIndicator className='inline-flex left-0 absolute justify-center items-center w-[25px]'>
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
									d='m4.5 12.75 6 6 9-13.5'
								/>
							</svg>
						</ContextMenu.ItemIndicator>
						Show Bookmarks{' '}
						<div className='ml-auto pl-5'>⌘+B</div>
					</ContextMenu.CheckboxItem>
					<ContextMenu.CheckboxItem
						className={classNames(itemClass)}
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<ContextMenu.ItemIndicator className='inline-flex left-0 absolute justify-center items-center w-[25px]'>
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
									d='m4.5 12.75 6 6 9-13.5'
								/>
							</svg>
						</ContextMenu.ItemIndicator>
						Show Full URLs
					</ContextMenu.CheckboxItem>

					<ContextMenu.Separator className='bg-base-content m-[5px] h-px' />

					<ContextMenu.Label className='pl-[25px] text-mauve11 text-xs leading-[25px]'>
						People
					</ContextMenu.Label>
					<ContextMenu.RadioGroup
						value={person}
						onValueChange={setPerson}
					>
						<ContextMenu.RadioItem
							className={classNames(itemClass)}
							value='pedro'
						>
							<ContextMenu.ItemIndicator className='inline-flex left-0 absolute justify-center items-center w-[25px]'>
								<span className='text-[.5rem]'>
									{'\u2B24'}
								</span>
							</ContextMenu.ItemIndicator>
							Pedro Duarte
						</ContextMenu.RadioItem>
						<ContextMenu.RadioItem
							className={classNames(itemClass)}
							value='colm'
						>
							<ContextMenu.ItemIndicator className='inline-flex left-0 absolute justify-center items-center w-[25px]'>
								<span className='text-[.5rem]'>
									{'\u2B24'}
								</span>
							</ContextMenu.ItemIndicator>
							Colm Tuite
						</ContextMenu.RadioItem>
					</ContextMenu.RadioGroup>
				</ContextMenu.Content>
			</ContextMenu.Portal>
		</ContextMenu.Root>
	)
}

export default ContextCell
