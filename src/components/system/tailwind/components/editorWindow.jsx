import { TailwindAutocomplete } from '../autocomplete'

const EditorWindow = ({ id }) => {
	return (
		<>
			<div
				className='bg-slate-300 dark:bg-slate-800 shadow-sm rounded-box w-80 dropdown menu'
				popover='auto'
				id={`popover-${id}`}
				style={{ positionAnchor: `--anchor-${id}` }}
			>
				<TailwindAutocomplete />
			</div>
		</>
	)
}

export default EditorWindow
