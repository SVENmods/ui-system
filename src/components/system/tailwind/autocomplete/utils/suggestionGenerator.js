// Suggestion Generator utility functions
import { cssRules } from './cssGenerator.js'

// Modifier patterns for autocomplete
export const modifierPatterns = {
	// Breakpoints
	breakpoints: ['sm', 'md', 'lg', 'xl', '2xl'],
	maxBreakpoints: ['max-sm', 'max-md', 'max-lg', 'max-xl', 'max-2xl'],
	customBreakpoints: ['min-[', 'max-['],

	// Container queries
	containerQueries: [
		'@3xs',
		'@2xs',
		'@xs',
		'@sm',
		'@md',
		'@lg',
		'@xl',
		'@2xl',
		'@3xl',
		'@4xl',
		'@5xl',
		'@6xl',
		'@7xl',
	],
	maxContainerQueries: [
		'@max-3xs',
		'@max-2xs',
		'@max-xs',
		'@max-sm',
		'@max-md',
		'@max-lg',
		'@max-xl',
		'@max-2xl',
		'@max-3xl',
		'@max-4xl',
		'@max-5xl',
		'@max-6xl',
		'@max-7xl',
	],
	customContainerQueries: ['@min-[', '@max-['],

	// Pseudo-classes
	pseudoClasses: [
		'hover',
		'focus',
		'focus-within',
		'focus-visible',
		'active',
		'visited',
		'target',
		'first',
		'last',
		'only',
		'odd',
		'even',
		'first-of-type',
		'last-of-type',
		'only-of-type',
		'empty',
		'disabled',
		'enabled',
		'checked',
		'indeterminate',
		'default',
		'optional',
		'required',
		'valid',
		'invalid',
		'user-valid',
		'user-invalid',
		'in-range',
		'out-of-range',
		'placeholder-shown',
		'details-content',
		'autofill',
		'read-only',
	],

	// Pseudo-elements
	pseudoElements: [
		'before',
		'after',
		'first-letter',
		'first-line',
		'marker',
		'selection',
		'file',
		'backdrop',
		'placeholder',
	],

	// Media queries
	mediaQueries: [
		'dark',
		'motion-safe',
		'motion-reduce',
		'contrast-more',
		'contrast-less',
		'forced-colors',
		'inverted-colors',
		'pointer-fine',
		'pointer-coarse',
		'pointer-none',
		'any-pointer-fine',
		'any-pointer-coarse',
		'any-pointer-none',
		'portrait',
		'landscape',
		'noscript',
		'print',
	],

	// Direction
	direction: ['rtl', 'ltr'],

	// State
	state: ['open', 'starting'],

	// Special variants
	special: ['*', '**'],

	// Complex variants
	complex: [
		'has-[',
		'group-[',
		'peer-[',
		'in-[',
		'not-[',
		'nth-[',
		'aria-[',
		'data-[',
		'supports-[',
	],

	// Inert variant
	inert: ['inert'],
}

// Tailwind CSS patterns for autocomplete
export const patterns = {
	// Layout
	display: [
		'block',
		'inline-block',
		'inline',
		'flex',
		'inline-flex',
		'grid',
		'inline-grid',
		'contents',
		'hidden',
	],
	position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
	'z-index': ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],

	// Spacing
	padding: [
		'p-0',
		'p-1',
		'p-2',
		'p-3',
		'p-4',
		'p-5',
		'p-6',
		'p-8',
		'p-10',
		'p-12',
		'p-16',
		'p-20',
		'p-24',
		'p-32',
		'p-40',
		'p-48',
		'p-56',
		'p-64',
	],
	margin: [
		'm-0',
		'm-1',
		'm-2',
		'm-3',
		'm-4',
		'm-5',
		'm-6',
		'm-8',
		'm-10',
		'm-12',
		'm-16',
		'm-20',
		'm-24',
		'm-32',
		'm-40',
		'm-48',
		'm-56',
		'm-64',
	],
	width: [
		'w-0',
		'w-1',
		'w-2',
		'w-3',
		'w-4',
		'w-5',
		'w-6',
		'w-8',
		'w-10',
		'w-12',
		'w-16',
		'w-20',
		'w-24',
		'w-32',
		'w-40',
		'w-48',
		'w-56',
		'w-64',
		'w-auto',
		'w-full',
		'w-screen',
		'w-min',
		'w-max',
		'w-fit',
	],
	height: [
		'h-0',
		'h-1',
		'h-2',
		'h-3',
		'h-4',
		'h-5',
		'h-6',
		'h-8',
		'h-10',
		'h-12',
		'h-16',
		'h-20',
		'h-24',
		'h-32',
		'h-40',
		'h-48',
		'h-56',
		'h-64',
		'h-auto',
		'h-full',
		'h-screen',
		'h-min',
		'h-max',
		'h-fit',
	],

	// Flexbox
	flex: ['flex', 'inline-flex'],
	'flex-direction': [
		'flex-row',
		'flex-row-reverse',
		'flex-col',
		'flex-col-reverse',
	],
	'flex-wrap': ['flex-wrap', 'flex-nowrap', 'flex-wrap-reverse'],
	'flex-grow': ['grow-0', 'grow'],
	'flex-shrink': ['shrink-0', 'shrink'],
	'flex-basis': ['basis-0', 'basis-auto', 'basis-full'],
	order: [
		'order-1',
		'order-2',
		'order-3',
		'order-4',
		'order-5',
		'order-6',
		'order-7',
		'order-8',
		'order-9',
		'order-10',
		'order-11',
		'order-12',
		'order-first',
		'order-last',
		'order-none',
	],

	// Grid
	'grid-cols': [
		'grid-cols-1',
		'grid-cols-2',
		'grid-cols-3',
		'grid-cols-4',
		'grid-cols-5',
		'grid-cols-6',
		'grid-cols-7',
		'grid-cols-8',
		'grid-cols-9',
		'grid-cols-10',
		'grid-cols-11',
		'grid-cols-12',
		'grid-cols-none',
	],
	'grid-rows': [
		'grid-rows-1',
		'grid-rows-2',
		'grid-rows-3',
		'grid-rows-4',
		'grid-rows-5',
		'grid-rows-6',
		'grid-rows-none',
	],
	'col-span': [
		'col-span-1',
		'col-span-2',
		'col-span-3',
		'col-span-4',
		'col-span-5',
		'col-span-6',
		'col-span-7',
		'col-span-8',
		'col-span-9',
		'col-span-10',
		'col-span-11',
		'col-span-12',
		'col-span-full',
	],
	'row-span': [
		'row-span-1',
		'row-span-2',
		'row-span-3',
		'row-span-4',
		'row-span-5',
		'row-span-6',
		'row-span-full',
	],
	gap: [
		'gap-0',
		'gap-1',
		'gap-2',
		'gap-3',
		'gap-4',
		'gap-5',
		'gap-6',
		'gap-8',
		'gap-10',
		'gap-12',
		'gap-16',
		'gap-20',
		'gap-24',
		'gap-32',
		'gap-40',
		'gap-48',
		'gap-56',
		'gap-64',
		'gap-px',
	],

	// Typography
	'font-family': ['font-sans', 'font-serif', 'font-mono'],
	'font-size': [
		'text-xs',
		'text-sm',
		'text-base',
		'text-lg',
		'text-xl',
		'text-2xl',
		'text-3xl',
		'text-4xl',
		'text-5xl',
		'text-6xl',
		'text-7xl',
		'text-8xl',
		'text-9xl',
	],
	'font-weight': [
		'font-thin',
		'font-extralight',
		'font-light',
		'font-normal',
		'font-medium',
		'font-semibold',
		'font-bold',
		'font-extrabold',
		'font-black',
	],
	'font-style': ['italic', 'not-italic'],
	'text-align': [
		'text-left',
		'text-center',
		'text-right',
		'text-justify',
		'text-start',
		'text-end',
	],
	'text-color': [
		'text-inherit',
		'text-current',
		'text-transparent',
		'text-black',
		'text-white',
	],
	'line-height': [
		'leading-none',
		'leading-tight',
		'leading-snug',
		'leading-normal',
		'leading-relaxed',
		'leading-loose',
	],
	'letter-spacing': [
		'tracking-tighter',
		'tracking-tight',
		'tracking-normal',
		'tracking-wide',
		'tracking-wider',
		'tracking-widest',
	],

	// Borders
	'border-width': ['border-0', 'border', 'border-2', 'border-4', 'border-8'],
	'border-radius': [
		'rounded-none',
		'rounded-sm',
		'rounded',
		'rounded-md',
		'rounded-lg',
		'rounded-xl',
		'rounded-2xl',
		'rounded-3xl',
		'rounded-full',
	],
	'border-style': [
		'border-solid',
		'border-dashed',
		'border-dotted',
		'border-double',
		'border-hidden',
		'border-none',
	],
	'border-color': [
		'border-transparent',
		'border-current',
		'border-black',
		'border-white',
	],

	// Background
	'background-color': [
		'bg-transparent',
		'bg-current',
		'bg-black',
		'bg-white',
	],

	// Layout utilities
	visibility: ['visible', 'invisible', 'collapse'],
	resize: ['resize-none', 'resize', 'resize-y', 'resize-x'],
	'aspect-ratio': ['aspect-auto', 'aspect-square', 'aspect-video'],
	columns: [
		'columns-1',
		'columns-2',
		'columns-3',
		'columns-4',
		'columns-5',
		'columns-6',
		'columns-7',
		'columns-8',
		'columns-9',
		'columns-10',
		'columns-11',
		'columns-12',
		'columns-auto',
	],
	'break-after': [
		'break-after-auto',
		'break-after-avoid',
		'break-after-all',
		'break-after-avoid-page',
		'break-after-page',
		'break-after-left',
		'break-after-right',
		'break-after-column',
	],
	'break-before': [
		'break-before-auto',
		'break-before-avoid',
		'break-before-all',
		'break-before-avoid-page',
		'break-before-page',
		'break-before-left',
		'break-before-right',
		'break-before-column',
	],
	'break-inside': [
		'break-inside-auto',
		'break-inside-avoid',
		'break-inside-avoid-page',
		'break-inside-avoid-column',
	],
	'box-decoration': ['box-decoration-clone', 'box-decoration-slice'],
	'box-sizing': ['box-border', 'box-content'],
	float: ['float', 'float-right', 'float-none'],
	clear: ['clear', 'clear-right', 'clear-both', 'clear-none'],
	isolation: ['isolation', 'isolation-auto'],
	'object-fit': [
		'object-contain',
		'object-cover',
		'object-fill',
		'object-none',
		'object-scale-down',
	],
	'object-position': [
		'object-bottom',
		'object-center',
		'object-left',
		'object-left-bottom',
		'object-left-top',
		'object-right',
		'object-right-bottom',
		'object-right-top',
		'object-top',
	],
	overflow: [
		'overflow-auto',
		'overflow-hidden',
		'overflow-clip',
		'overflow-visible',
		'overflow-scroll',
	],
	overscroll: ['overscroll-auto', 'overscroll-contain', 'overscroll-none'],
}

// Special values for specific properties
export const specialValues = {
	'break-after': [
		'auto',
		'avoid',
		'all',
		'avoid-page',
		'page',
		'left',
		'right',
		'column',
	],
	'break-before': [
		'auto',
		'avoid',
		'all',
		'avoid-page',
		'page',
		'left',
		'right',
		'column',
	],
	'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
	'box-decoration': ['clone', 'slice'],
	box: ['border', 'content'],
	float: ['left', 'right', 'none'],
	clear: ['left', 'right', 'both', 'none'],
	isolation: ['isolate', 'auto'],
	object: ['contain', 'cover', 'fill', 'none', 'scale-down'],
	overflow: ['auto', 'hidden', 'clip', 'visible', 'scroll'],
	'overflow-x': ['auto', 'hidden', 'clip', 'visible', 'scroll'],
	'overflow-y': ['auto', 'hidden', 'clip', 'visible', 'scroll'],
	overscroll: ['auto', 'contain', 'none'],
	'overscroll-x': ['auto', 'contain', 'none'],
	'overscroll-y': ['auto', 'contain', 'none'],
	position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
	visibility: ['visible', 'hidden', 'collapse'],
	resize: ['none', 'both', 'vertical', 'horizontal'],
}

// Size patterns for numeric values
export const sizePatterns =
	/^(p|m|w|h|gap|space|rounded|border|text|leading|tracking|top|right|bottom|left|z|order|col-span|row-span|col-start|grid-cols|grid-rows|row-start|basis|flex|grow|shrink|inset|columns|aspect|break-after|break-before|break-inside|box-decoration|box|float|clear|isolation|object|overflow|overscroll|position|visibility|resize)-/

// Parse class name to extract modifiers and base class
const parseClassName = (className) => {
	if (!className) return { modifiers: [], baseClass: '' }

	const parts = className.split(':')
	const baseClass = parts[parts.length - 1]
	const modifiers = parts.slice(0, -1)

	return { modifiers, baseClass }
}

// Generate suggestions for Tailwind classes
export const generateTailwindSuggestions = (input) => {
	if (!input) return []

	const suggestions = []
	const cleanInput = input.toLowerCase()

	// Parse the input to separate modifiers from base class
	const { modifiers, baseClass } = parseClassName(cleanInput)

	// If we have modifiers, generate suggestions for the base class and then add modifiers
	if (modifiers.length > 0) {
		const baseSuggestions = generateSuggestions(baseClass)
		return baseSuggestions.map(
			(suggestion) => `${modifiers.join(':')}:${suggestion}`
		)
	}

	// Check if input is a modifier prefix
	const modifierSuggestions = generateModifierSuggestions(cleanInput)
	if (modifierSuggestions.length > 0) {
		suggestions.push(...modifierSuggestions)
	}

	// Generate regular suggestions
	const regularSuggestions = generateSuggestions(cleanInput)
	suggestions.push(...regularSuggestions)

	return [...new Set(suggestions)].slice(0, 50) // Limit to 50 suggestions
}

// Generate modifier suggestions
const generateModifierSuggestions = (input) => {
	const suggestions = []

	// Flatten all modifier patterns
	const allModifiers = [
		...modifierPatterns.breakpoints,
		...modifierPatterns.maxBreakpoints,
		...modifierPatterns.containerQueries,
		...modifierPatterns.maxContainerQueries,
		...modifierPatterns.pseudoClasses,
		...modifierPatterns.pseudoElements,
		...modifierPatterns.mediaQueries,
		...modifierPatterns.direction,
		...modifierPatterns.state,
		...modifierPatterns.special,
		...modifierPatterns.inert,
	]

	// Add complex variants
	allModifiers.push(...modifierPatterns.complex)

	// Filter modifiers that start with input
	const matchingModifiers = allModifiers.filter((modifier) =>
		modifier.startsWith(input)
	)

	// Add colon to make them valid modifier suggestions
	suggestions.push(...matchingModifiers.map((modifier) => `${modifier}:`))

	return suggestions
}

// Helper function to generate suggestions
const generateSuggestions = (input) => {
	const suggestions = []

	// Check exact matches first
	if (cssRules[input]) {
		suggestions.push(input)
	}

	// Check patterns
	for (const [category, classes] of Object.entries(patterns)) {
		if (
			category.startsWith(input) ||
			input.startsWith(category.split('-')[0])
		) {
			suggestions.push(
				...classes.filter((cls) => cls.startsWith(input))
			)
		}
	}

	// Check size patterns
	const sizeMatch = input.match(sizePatterns)
	if (sizeMatch) {
		const prefix = sizeMatch[1]
		const numericSuggestions = generateNumericSuggestions(prefix, input)
		suggestions.push(...numericSuggestions)
	}

	// Check special values
	for (const [property, values] of Object.entries(specialValues)) {
		if (input.startsWith(property)) {
			const propertySuggestions = values.map(
				(value) => `${property}-${value}`
			)
			suggestions.push(
				...propertySuggestions.filter((s) => s.startsWith(input))
			)
		}
	}

	// Generate fractional suggestions
	const fractionalSuggestions = generateFractionalSuggestions(input)
	suggestions.push(...fractionalSuggestions)

	// Generate arbitrary value suggestions
	const arbitrarySuggestions = generateArbitrarySuggestions(input)
	suggestions.push(...arbitrarySuggestions)

	// Generate negative suggestions
	const negativeSuggestions = generateNegativeSuggestions(input)
	suggestions.push(...negativeSuggestions)

	return [...new Set(suggestions)].slice(0, 50) // Limit to 50 suggestions
}

// Generate numeric suggestions
const generateNumericSuggestions = (prefix, input) => {
	const suggestions = []
	const numbers = [
		0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16,
		20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
	]

	for (const num of numbers) {
		const suggestion = `${prefix}-${num}`
		if (suggestion.startsWith(input)) {
			suggestions.push(suggestion)
		}
	}

	return suggestions
}

// Generate fractional suggestions
const generateFractionalSuggestions = (input) => {
	const suggestions = []
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

	// Check if input matches a size pattern that supports fractions
	const sizeMatch = input.match(sizePatterns)
	if (sizeMatch) {
		const prefix = sizeMatch[1]
		const fractionPrefixes = ['w', 'h', 'basis', 'inset']

		if (fractionPrefixes.includes(prefix)) {
			for (const fraction of fractions) {
				const suggestion = `${prefix}-${fraction}`
				if (suggestion.startsWith(input)) {
					suggestions.push(suggestion)
				}
			}
		}
	}

	return suggestions
}

// Generate arbitrary value suggestions
const generateArbitrarySuggestions = (input) => {
	const suggestions = []

	// Check if input ends with '[' to suggest arbitrary values
	if (input.endsWith('[')) {
		const prefix = input.slice(0, -1)
		const arbitraryExamples = [
			'100px',
			'50%',
			'2rem',
			'1.5em',
			'calc(100% - 1rem)',
			'var(--spacing)',
		]

		for (const example of arbitraryExamples) {
			suggestions.push(`${prefix}[${example}]`)
		}
	}

	// Check if input contains '[' but doesn't end with ']'
	const bracketMatch = input.match(/^(.+)\[([^\]]*)$/)
	if (bracketMatch) {
		const [, prefix, value] = bracketMatch

		// Validate arbitrary value
		if (isValidArbitraryValue(value)) {
			suggestions.push(`${prefix}[${value}]`)
		}
	}

	return suggestions
}

// Generate negative suggestions
const generateNegativeSuggestions = (input) => {
	const suggestions = []

	// Check if input starts with '-' to suggest negative values
	if (input.startsWith('-')) {
		const withoutMinus = input.slice(1)
		const sizeMatch = withoutMinus.match(sizePatterns)

		if (sizeMatch) {
			const prefix = sizeMatch[1]
			const numbers = [
				1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64,
				72, 80, 96,
			]

			for (const num of numbers) {
				const suggestion = `-${prefix}-${num}`
				if (suggestion.startsWith(input)) {
					suggestions.push(suggestion)
				}
			}
		}
	}

	return suggestions
}

// Validate arbitrary value
const isValidArbitraryValue = (value) => {
	// Basic validation for arbitrary values
	const validPatterns = [
		/^\d+px$/, // 100px
		/^\d+%$/, // 50%
		/^\d+rem$/, // 2rem
		/^\d+em$/, // 1.5em
		/^\d+vh$/, // 100vh
		/^\d+vw$/, // 100vw
		/^calc\(.+\)$/, // calc(100% - 1rem)
		/^var\(--.+\)$/, // var(--spacing)
		/^#[0-9a-fA-F]{3,6}$/, // #ff0000 or #f00
		/^rgb\(.+\)$/, // rgb(255, 0, 0)
		/^rgba\(.+\)$/, // rgba(255, 0, 0, 0.5)
		/^hsl\(.+\)$/, // hsl(0, 100%, 50%)
		/^hsla\(.+\)$/, // hsla(0, 100%, 50%, 0.5)
		/^[a-zA-Z-]+$/, // auto, inherit, etc.
	]

	return validPatterns.some((pattern) => pattern.test(value))
}
