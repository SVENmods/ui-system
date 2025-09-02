import React, { useState, useMemo, useRef, useEffect } from 'react'
import { generateTailwindCSS } from './utils/cssGenerator.js'
import { generateTailwindSuggestions } from './utils/suggestionGenerator.js'

const TailwindAutocomplete = ({ id }) => {
	const [inputValue, setInputValue] = useState('')
	const [suggestions, setSuggestions] = useState([])
	const [showSuggestions, setShowSuggestions] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const inputRef = useRef(null)
	const suggestionsRef = useRef(null)

	// Generate CSS for the current input
	const generatedCSS = useMemo(() => {
		return generateTailwindCSS(inputValue)
	}, [inputValue])

	// Generate suggestions based on input
	useEffect(() => {
		if (inputValue.trim()) {
			const newSuggestions = generateTailwindSuggestions(inputValue)
			setSuggestions(newSuggestions)
			setShowSuggestions(newSuggestions.length > 0)
			setSelectedIndex(0)
		} else {
			setSuggestions([])
			setShowSuggestions(false)
		}
	}, [inputValue])

	// Handle input change
	const handleInputChange = (e) => {
		const value = e.target.value
		setInputValue(value)
	}

	// Handle suggestion selection
	const handleSuggestionClick = (suggestion) => {
		setInputValue(suggestion)
		setShowSuggestions(false)
		inputRef.current?.focus()
	}

	// Handle keyboard navigation
	const handleKeyDown = (e) => {
		if (!showSuggestions) return

		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault()
				setSelectedIndex((prev) =>
					prev < suggestions.length - 1 ? prev + 1 : 0
				)
				break
			case 'ArrowUp':
				e.preventDefault()
				setSelectedIndex((prev) =>
					prev > 0 ? prev - 1 : suggestions.length - 1
				)
				break
			case 'Enter':
				e.preventDefault()
				if (suggestions[selectedIndex]) {
					handleSuggestionClick(suggestions[selectedIndex])
				}
				break
			case 'Escape':
				setShowSuggestions(false)
				break
		}
	}

	// Handle input focus
	const handleInputFocus = () => {
		if (suggestions.length > 0) {
			setShowSuggestions(true)
		}
	}

	// Handle input blur
	const handleInputBlur = () => {
		// Delay hiding suggestions to allow for clicks
		setTimeout(() => {
			setShowSuggestions(false)
		}, 150)
	}

	return (
		<div className='relative w-full max-w-md'>
			<span>{id}</span>
			<div className='mb-4'>
				<label
					htmlFor='tailwind-input'
					className='block mb-2 font-medium text-sm text-base-content'
				>
					Tailwind CSS Class
				</label>
				<input
					ref={inputRef}
					id='tailwind-input'
					type='text'
					value={inputValue}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					placeholder='Enter Tailwind class (e.g., w-4, hover:bg-blue-500)'
					className='shadow-sm px-3 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
				/>
			</div>

			{/* Suggestions Dropdown */}
			{showSuggestions && suggestions.length > 0 && (
				<div
					ref={suggestionsRef}
					className='z-10 absolute bg-base-300 shadow-lg mt-1 rounded-md w-full max-h-60 overflow-y-auto'
				>
					{suggestions.map((suggestion, index) => (
						<div
							key={suggestion}
							onClick={() =>
								handleSuggestionClick(suggestion)
							}
							className={`px-3 py-2 cursor-pointer text-sm ${
								index === selectedIndex
									? 'bg-base-200 text-blue-400'
									: 'hover:bg-base-100'
							}`}
						>
							{suggestion}
						</div>
					))}
				</div>
			)}

			{/* Generated CSS Display */}
			{generatedCSS && (
				<div className='mt-4'>
					<label className='block mb-2 font-medium text-sm text-base-content italic'>
						Generated CSS
					</label>
					{/* <div
						className='test-block'
						data-dynamic-class-id='1234'
					>
						test
					</div> */}
					<div className='bg-base-300 p-3 rounded-md'>
						<code className='text-sm text-base-content'>
							{generatedCSS}
						</code>
					</div>
				</div>
			)}

			{/* Instructions */}
			<div className='bg-base-200 mt-6 p-4 rounded-md'>
				<h3 className='mb-2 font-medium text-blue-500 text-sm'>
					How to use:
				</h3>
				<ul className='space-y-1 text-blue-400 text-sm'>
					<li>• Type a Tailwind class to see suggestions</li>
					<li>• Use arrow keys to navigate suggestions</li>
					<li>• Press Enter to select a suggestion</li>
					<li>
						• Use state modifiers like hover:, focus:, etc.
					</li>
					<li>• Use arbitrary values like w-[100px]</li>
					<li>• Use fractional values like w-1/2</li>
				</ul>
			</div>
		</div>
	)
}

export default TailwindAutocomplete
