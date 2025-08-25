import React, { useState, useMemo, useRef, useEffect } from 'react'

// Генератор классов Tailwind на лету
const generateTailwindSuggestions = (input) => {
	if (!input) return []

	const inputLower = input.toLowerCase()
	const suggestions = new Set()

	// Основные категории и паттерны Tailwind согласно документации
	const patterns = {
		// Layout
		layout: [
			'aspect-',
			'columns-',
			'break-after-',
			'break-before-',
			'break-inside-',
			'box-decoration-',
			'box-sizing-',
			'display-',
			'float-',
			'clear-',
			'isolation-',
			'object-fit-',
			'object-position-',
			'overflow-',
			'overscroll-',
			'position-',
			'top-',
			'right-',
			'bottom-',
			'left-',
			'visibility-',
			'z-',
		],
		// Flexbox & Grid
		flexbox_grid: [
			'flex-basis-',
			'flex-direction-',
			'flex-wrap-',
			'flex-',
			'flex-grow-',
			'flex-shrink-',
			'order-',
			'grid-template-columns-',
			'grid-column-',
			'grid-template-rows-',
			'grid-row-',
			'grid-auto-flow-',
			'grid-auto-columns-',
			'grid-auto-rows-',
			'gap-',
			'justify-content-',
			'justify-items-',
			'justify-self-',
			'align-content-',
			'align-items-',
			'align-self-',
			'place-content-',
			'place-items-',
			'place-self-',
		],
		// Spacing
		spacing: ['p-', 'm-', 'space-', 'gap-', 'inset-'],
		// Sizing
		sizing: ['w-', 'h-', 'min-w-', 'max-w-', 'min-h-', 'max-h-', 'size-'],
		// Typography
		typography: [
			'font-family-',
			'font-size-',
			'font-smoothing-',
			'font-style-',
			'font-weight-',
			'font-stretch-',
			'font-variant-',
			'letter-spacing-',
			'line-clamp-',
			'line-height-',
			'list-style-image-',
			'list-style-position-',
			'list-style-type-',
			'text-align-',
			'text-',
			'text-decoration-line-',
			'text-decoration-color-',
			'text-decoration-style-',
			'text-decoration-thickness-',
			'text-underline-offset-',
			'text-transform-',
			'text-overflow-',
			'text-wrap-',
			'text-indent-',
			'vertical-align-',
			'white-space-',
			'word-break-',
			'overflow-wrap-',
			'hyphens-',
			'content-',
		],
		// Backgrounds
		backgrounds: [
			'bg-attachment-',
			'bg-clip-',
			'bg-color-',
			'bg-image-',
			'bg-origin-',
			'bg-position-',
			'bg-repeat-',
			'bg-size-',
			'bg-',
		],
		// Borders
		borders: [
			'border-radius-',
			'border-width-',
			'border-color-',
			'border-style-',
			'outline-width-',
			'outline-color-',
			'outline-style-',
			'outline-offset-',
			'border-',
			'rounded-',
			'divide-',
			'outline-',
		],
		// Effects
		effects: [
			'box-shadow-',
			'text-shadow-',
			'opacity-',
			'mix-blend-',
			'bg-blend-',
			'mask-clip-',
			'mask-composite-',
			'mask-image-',
			'mask-mode-',
			'mask-origin-',
			'mask-position-',
			'mask-repeat-',
			'mask-size-',
			'mask-type-',
			'shadow-',
		],
		// Filters
		filters: [
			'filter-',
			'backdrop-filter-',
			'blur-',
			'brightness-',
			'contrast-',
			'drop-shadow-',
			'grayscale-',
			'hue-rotate-',
			'invert-',
			'saturate-',
			'sepia-',
		],
		// Tables
		tables: [
			'border-collapse-',
			'border-spacing-',
			'table-layout-',
			'caption-side-',
		],
		// Transitions & Animation
		transitions: [
			'transition-property-',
			'transition-behavior-',
			'transition-duration-',
			'transition-timing-',
			'transition-delay-',
			'animation-',
		],
		// Transforms
		transforms: [
			'backface-visibility-',
			'perspective-',
			'perspective-origin-',
			'rotate-',
			'scale-',
			'skew-',
			'transform-',
			'transform-origin-',
			'transform-style-',
			'translate-',
		],
		// Interactivity
		interactivity: [
			'accent-color-',
			'appearance-',
			'caret-color-',
			'color-scheme-',
			'cursor-',
			'field-sizing-',
			'pointer-events-',
			'resize-',
			'scroll-behavior-',
			'scroll-margin-',
			'scroll-padding-',
			'scroll-snap-align-',
			'scroll-snap-stop-',
			'scroll-snap-type-',
			'touch-action-',
			'user-select-',
			'will-change-',
		],
		// SVG
		svg: ['fill-', 'stroke-', 'stroke-width-'],
		// Accessibility
		accessibility: ['forced-color-adjust-'],
	}

	// Проверяем, есть ли уже модификатор состояния в начале
	const hasStateModifier =
		/^(hover|focus|active|disabled|group-hover|dark|sm|md|lg|xl|2xl):/.test(
			inputLower
		)

	if (hasStateModifier) {
		// Если есть модификатор состояния, предлагаем классы для этого состояния
		const stateModifier =
			inputLower.match(
				/^(hover|focus|active|disabled|group-hover|dark|sm|md|lg|xl|2xl):/
			)[1] + ':'
		const remainingInput = inputLower.replace(
			/^(hover|focus|active|disabled|group-hover|dark|sm|md|lg|xl|2xl):/,
			''
		)

		// Генерируем предложения для оставшейся части ввода
		Object.values(patterns)
			.flat()
			.forEach((pattern) => {
				if (
					pattern.includes(remainingInput) ||
					remainingInput.includes(pattern.replace(':', ''))
				) {
					suggestions.add(`${stateModifier}${pattern}`)
				}
			})
	} else {
		// Обычная генерация предложений
		Object.values(patterns)
			.flat()
			.forEach((pattern) => {
				if (
					pattern.includes(inputLower) ||
					inputLower.includes(pattern.replace(':', ''))
				) {
					suggestions.add(pattern)
				}
			})
	}

	// Числовые значения для размеров и позиционирования
	const sizePatterns =
		/^(p|m|w|h|gap|space|rounded|border|text|leading|tracking|top|right|bottom|left|z|order|col-span|row-span|col-start|grid-cols|grid-rows|row-start|basis|flex|grow|shrink|inset|columns|aspect)/

	// Дробные значения
	const fractions = [
		'1/2',
		'1/3',
		'2/3',
		'1/4',
		'2/4',
		'3/4',
		'1/5',
		'2/5',
		'3/5',
		'4/5',
		'1/6',
		'2/6',
		'3/6',
		'4/6',
		'5/6',
		'1/12',
		'2/12',
		'3/12',
		'4/12',
		'5/12',
		'6/12',
		'7/12',
		'8/12',
		'9/12',
		'10/12',
		'11/12',
	]

	// Стандартные числовые значения
	const sizes = [
		0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16,
		20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
	]

	// Специальные значения для разных классов
	const specialValues = {
		aspect: ['square', 'video', 'auto'],
		z: [-10, -20, -30, -40, -50, 0, 10, 20, 30, 40, 50],
		order: [
			-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4,
			5, 6, 7, 8, 9, 10, 11, 12,
		],
		'col-span': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'full'],
		'row-span': [1, 2, 3, 4, 5, 6, 'full'],
		'col-start': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 'auto'],
		'row-start': [1, 2, 3, 4, 5, 6, 7, 'auto'],
		'grid-cols': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none'],
		'grid-rows': [1, 2, 3, 4, 5, 6, 'none'],
		flex: [1, 'auto', 'initial', 'none'],
		grow: [0, 1],
		shrink: [0, 1],
		inset: ['auto', 'full'],
		columns: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			'auto',
			'3xs',
			'2xs',
			'xs',
			'sm',
			'md',
			'lg',
			'xl',
			'2xl',
			'3xl',
			'4xl',
			'5xl',
			'6xl',
			'7xl',
		],
	}

	const generateSuggestions = (baseClass, stateModifier = '') => {
		// Проверяем, есть ли уже квадратные скобки
		if (baseClass.includes('[') && baseClass.includes(']')) {
			// Если есть квадратные скобки, предлагаем только валидные конструкции
			const bracketMatch = baseClass.match(/^([^-]+)-\[([^\]]+)\]$/)
			if (bracketMatch) {
				const value = bracketMatch[2]
				// Проверяем, что значение в скобках валидно
				if (
					/^[\d.]+$/.test(value) ||
					/^[\d.]+\/[\d.]+$/.test(value) ||
					/^[\d.]+%$/.test(value) ||
					/^[\d.]+px$/.test(value) ||
					/^[\d.]+rem$/.test(value) ||
					/^[\d.]+em$/.test(value)
				) {
					suggestions.add(`${stateModifier}${baseClass}`)
				}
			}
			return
		}

		// Стандартные числовые значения
		sizes.forEach((size) => {
			suggestions.add(`${stateModifier}${baseClass}-${size}`)
		})

		// Дробные значения для поддерживаемых классов
		const fractionClasses = [
			'w',
			'h',
			'min-w',
			'max-w',
			'min-h',
			'max-h',
			'basis',
			'flex',
			'inset',
			'p',
			'm',
		]
		if (fractionClasses.includes(baseClass)) {
			fractions.forEach((fraction) => {
				suggestions.add(`${stateModifier}${baseClass}-${fraction}`)
			})
		}

		// Специальные значения
		if (specialValues[baseClass]) {
			specialValues[baseClass].forEach((value) => {
				suggestions.add(`${stateModifier}${baseClass}-${value}`)
			})
		}

		// Отрицательные значения для поддерживаемых классов
		const negativeClasses = ['m', 'inset', 'order']
		if (negativeClasses.includes(baseClass)) {
			sizes.forEach((size) => {
				if (size > 0) {
					suggestions.add(
						`${stateModifier}-${baseClass}-${size}`
					)
				}
			})
		}

		// Отрицательные дробные значения
		if (negativeClasses.includes(baseClass)) {
			fractions.forEach((fraction) => {
				suggestions.add(`${stateModifier}-${baseClass}-${fraction}`)
			})
		}

		// Произвольные значения в квадратных скобках
		const arbitraryExamples = [
			'[100px]',
			'[50%]',
			'[2rem]',
			'[1.5em]',
			'[calc(100%-1rem)]',
			'[max(100px,50%)]',
		]
		arbitraryExamples.forEach((example) => {
			suggestions.add(`${stateModifier}${baseClass}${example}`)
		})
	}

	if (hasStateModifier) {
		const stateModifier =
			inputLower.match(
				/^(hover|focus|active|disabled|group-hover|dark|sm|md|lg|xl|2xl):/
			)[1] + ':'
		const remainingInput = inputLower.replace(
			/^(hover|focus|active|disabled|group-hover|dark|sm|md|lg|xl|2xl):/,
			''
		)

		if (sizePatterns.test(remainingInput)) {
			const baseClass = remainingInput.split('-')[0]
			generateSuggestions(baseClass, stateModifier)
		}
	} else if (sizePatterns.test(inputLower)) {
		const baseClass = input.split('-')[0]
		generateSuggestions(baseClass)
	}

	// Цвета
	const colorPatterns = /^(bg|text|border|ring|accent|caret|fill|stroke)/

	if (hasStateModifier) {
		const stateModifier =
			inputLower.match(
				/^(hover|focus|active|disabled|group-hover|dark|sm|md|lg|xl|2xl):/
			)[1] + ':'
		const remainingInput = inputLower.replace(
			/^(hover|focus|active|disabled|group-hover|dark|sm|md|lg|xl|2xl):/,
			''
		)

		if (colorPatterns.test(remainingInput)) {
			const colors = [
				'slate',
				'gray',
				'zinc',
				'neutral',
				'stone',
				'red',
				'orange',
				'amber',
				'yellow',
				'lime',
				'green',
				'emerald',
				'teal',
				'cyan',
				'sky',
				'blue',
				'indigo',
				'violet',
				'purple',
				'fuchsia',
				'pink',
				'rose',
				'white',
				'black',
				'transparent',
				'current',
			]
			const shades = [
				50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
			]
			const baseClass = remainingInput.split('-')[0]

			colors.forEach((color) => {
				if (
					color === 'white' ||
					color === 'black' ||
					color === 'transparent' ||
					color === 'current'
				) {
					suggestions.add(
						`${stateModifier}${baseClass}-${color}`
					)
				} else {
					shades.forEach((shade) => {
						suggestions.add(
							`${stateModifier}${baseClass}-${color}-${shade}`
						)
					})
				}
			})
		}
	} else if (colorPatterns.test(inputLower)) {
		const colors = [
			'slate',
			'gray',
			'zinc',
			'neutral',
			'stone',
			'red',
			'orange',
			'amber',
			'yellow',
			'lime',
			'green',
			'emerald',
			'teal',
			'cyan',
			'sky',
			'blue',
			'indigo',
			'violet',
			'purple',
			'fuchsia',
			'pink',
			'rose',
			'white',
			'black',
			'transparent',
			'current',
		]
		const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
		const baseClass = input.split('-')[0]

		colors.forEach((color) => {
			if (
				color === 'white' ||
				color === 'black' ||
				color === 'transparent' ||
				color === 'current'
			) {
				suggestions.add(`${baseClass}-${color}`)
			} else {
				shades.forEach((shade) => {
					suggestions.add(`${baseClass}-${color}-${shade}`)
				})
			}
		})
	}

	// Состояния и модификаторы
	const modifiers = [
		'hover:',
		'focus:',
		'active:',
		'disabled:',
		'group-hover:',
		'group-focus:',
		'group-active:',
		'dark:',
		'sm:',
		'md:',
		'lg:',
		'xl:',
		'2xl:',
		'max-sm:',
		'max-md:',
		'max-lg:',
		'max-xl:',
		'max-2xl:',
		'min-sm:',
		'min-md:',
		'min-lg:',
		'min-xl:',
		'min-2xl:',
		'portrait:',
		'landscape:',
		'motion-safe:',
		'motion-reduce:',
		'print:',
		'supports-',
	]

	// Предлагаем модификаторы только если нет уже введенного модификатора
	if (!hasStateModifier) {
		modifiers.forEach((modifier) => {
			if (
				inputLower.includes(modifier.replace(':', '')) ||
				modifier.includes(inputLower)
			) {
				suggestions.add(modifier)
			}
		})
	}

	// Фильтрация и сортировка результатов
	return Array.from(suggestions)
		.filter((suggestion) => suggestion.toLowerCase().includes(inputLower))
		.sort((a, b) => a.localeCompare(b))
		.slice(0, 20) // Ограничиваем количество предложений
}

const TailwindAutocomplete = () => {
	const [inputValue, setInputValue] = useState('')
	const [suggestions, setSuggestions] = useState([])
	const [showSuggestions, setShowSuggestions] = useState(false)
	const inputRef = useRef(null)

	// Генерация предложений с использованием useMemo для оптимизации
	const generatedSuggestions = useMemo(() => {
		return generateTailwindSuggestions(inputValue)
	}, [inputValue])

	useEffect(() => {
		setSuggestions(generatedSuggestions)
	}, [generatedSuggestions])

	const handleInputChange = (e) => {
		const value = e.target.value
		setInputValue(value)
		setShowSuggestions(value.length > 0)
	}

	const handleSuggestionClick = (suggestion) => {
		setInputValue(suggestion)
		setShowSuggestions(false)
		inputRef.current?.focus()
	}

	const handleInputFocus = () => {
		if (inputValue.length > 0) {
			setShowSuggestions(true)
		}
	}

	const handleInputBlur = () => {
		setTimeout(() => setShowSuggestions(false), 200)
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Escape') {
			setShowSuggestions(false)
		}
	}

	return (
		<div className='relative mx-auto w-full max-w-xl'>
			<input
				ref={inputRef}
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				onKeyDown={handleKeyDown}
				placeholder='Введите класс Tailwind (например: bg-blue, p-4, hover:text...)'
				className='px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-800 placeholder-gray-400'
			/>

			{showSuggestions && suggestions.length > 0 && (
				<div className='z-50 absolute bg-white shadow-xl mt-1 border border-gray-200 rounded-lg w-full max-h-60 overflow-y-auto'>
					<div className='bg-gray-50 p-2 border-gray-200 border-b text-gray-500 text-xs'>
						Предложения классов Tailwind
					</div>
					{suggestions.map((suggestion, index) => (
						<div
							key={index}
							onClick={() =>
								handleSuggestionClick(suggestion)
							}
							className='hover:bg-blue-50 px-4 py-2 border-gray-100 border-b last:border-b-0 transition-colors duration-150 cursor-pointer'
						>
							<span className='font-mono text-blue-600 text-sm'>
								{suggestion}
							</span>
						</div>
					))}
				</div>
			)}

			{inputValue && !showSuggestions && (
				<div className='mt-2 text-gray-500 text-sm'>
					<span className='bg-gray-100 px-2 py-1 rounded font-mono'>
						{inputValue}
					</span>
				</div>
			)}
		</div>
	)
}

export default TailwindAutocomplete
