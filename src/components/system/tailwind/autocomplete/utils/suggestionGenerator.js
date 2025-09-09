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

	// Group variants
	group: [
		'group-hover',
		'group-focus',
		'group-focus-within',
		'group-focus-visible',
		'group-active',
		'group-visited',
		'group-target',
		'group-first',
		'group-last',
		'group-only',
		'group-odd',
		'group-even',
		'group-first-of-type',
		'group-last-of-type',
		'group-only-of-type',
		'group-empty',
		'group-disabled',
		'group-enabled',
		'group-checked',
		'group-indeterminate',
		'group-default',
		'group-optional',
		'group-required',
		'group-valid',
		'group-invalid',
		'group-user-valid',
		'group-user-invalid',
		'group-in-range',
		'group-out-of-range',
		'group-placeholder-shown',
		'group-details-content',
		'group-autofill',
		'group-read-only',
		'group-before',
		'group-after',
		'group-first-letter',
		'group-first-line',
		'group-marker',
		'group-selection',
		'group-file',
		'group-backdrop',
		'group-placeholder',
		'group-dark',
		'group-motion-safe',
		'group-motion-reduce',
		'group-contrast-more',
		'group-contrast-less',
		'group-forced-colors',
		'group-inverted-colors',
		'group-pointer-fine',
		'group-pointer-coarse',
		'group-pointer-none',
		'group-any-pointer-fine',
		'group-any-pointer-coarse',
		'group-any-pointer-none',
		'group-portrait',
		'group-landscape',
		'group-noscript',
		'group-print',
		'group-rtl',
		'group-ltr',
		'group-open',
		'group-starting',
		'group-inert',
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
	'padding-top': [
		'pt-0',
		'pt-1',
		'pt-2',
		'pt-3',
		'pt-4',
		'pt-5',
		'pt-6',
		'pt-8',
		'pt-10',
		'pt-12',
		'pt-16',
		'pt-20',
		'pt-24',
		'pt-32',
		'pt-40',
		'pt-48',
		'pt-56',
		'pt-64',
	],
	'padding-start': [
		'ps-0',
		'ps-1',
		'ps-2',
		'ps-3',
		'ps-4',
		'ps-5',
		'ps-6',
		'ps-8',
		'ps-10',
		'ps-12',
		'ps-16',
		'ps-20',
		'ps-24',
		'ps-32',
		'ps-40',
		'ps-48',
		'ps-56',
		'ps-64',
	],
	'padding-bottom': [
		'pb-0',
		'pb-1',
		'pb-2',
		'pb-3',
		'pb-4',
		'pb-5',
		'pb-6',
		'pb-8',
		'pb-10',
		'pb-12',
		'pb-16',
		'pb-20',
		'pb-24',
		'pb-32',
		'pb-40',
		'pb-48',
		'pb-56',
		'pb-64',
	],
	'padding-end': [
		'pe-0',
		'pe-1',
		'pe-2',
		'pe-3',
		'pe-4',
		'pe-5',
		'pe-6',
		'pe-8',
		'pe-10',
		'pe-12',
		'pe-16',
		'pe-20',
		'pe-24',
		'pe-32',
		'pe-40',
		'pe-48',
		'pe-56',
		'pe-64',
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
	'margin-top': [
		'mt-0',
		'mt-1',
		'mt-2',
		'mt-3',
		'mt-4',
		'mt-5',
		'mt-6',
		'mt-8',
		'mt-10',
		'mt-12',
		'mt-16',
		'mt-20',
		'mt-24',
		'mt-32',
		'mt-40',
		'mt-48',
		'mt-56',
		'mt-64',
	],
	'margin-start': [
		'ms-0',
		'ms-1',
		'ms-2',
		'ms-3',
		'ms-4',
		'ms-5',
		'ms-6',
		'ms-8',
		'ms-10',
		'ms-12',
		'ms-16',
		'ms-20',
		'ms-24',
		'ms-32',
		'ms-40',
		'ms-48',
		'ms-56',
		'ms-64',
	],
	'margin-bottom': [
		'mb-0',
		'mb-1',
		'mb-2',
		'mb-3',
		'mb-4',
		'mb-5',
		'mb-6',
		'mb-8',
		'mb-10',
		'mb-12',
		'mb-16',
		'mb-20',
		'mb-24',
		'mb-32',
		'mb-40',
		'mb-48',
		'mb-56',
		'mb-64',
	],
	'margin-end': [
		'me-0',
		'me-1',
		'me-2',
		'me-3',
		'me-4',
		'me-5',
		'me-6',
		'me-8',
		'me-10',
		'me-12',
		'me-16',
		'me-20',
		'me-24',
		'me-32',
		'me-40',
		'me-48',
		'me-56',
		'me-64',
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
	/^(p|pt|ps|pb|pe|m|mt|ms|mb|me|w|h|gap|space|rounded|border|text|leading|tracking|top|right|bottom|left|z|order|col-span|row-span|col-start|grid-cols|grid-rows|row-start|basis|flex|grow|shrink|inset|columns|aspect|break-after|break-before|break-inside|box-decoration|box|float|clear|isolation|object|overflow|overscroll|position|visibility|resize)-/

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

	// Special handling for group-* modifiers
	if (modifiers.length > 0) {
		const lastModifier = modifiers[modifiers.length - 1]

		// If the last modifier is a group modifier and baseClass is empty, suggest all possible classes
		if (lastModifier.startsWith('group-') && !baseClass) {
			const allClassSuggestions = generateAllClassSuggestions()
			return allClassSuggestions.map(
				(suggestion) => `${modifiers.join(':')}:${suggestion}`
			)
		}

		// If we have modifiers, generate suggestions for the base class and then add modifiers
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
		...modifierPatterns.group,
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

	// Check for prefix patterns (like opacity-, scale-, etc.)
	const prefixMatch = input.match(/^([a-z]+)-?$/)
	if (prefixMatch) {
		const prefix = prefixMatch[1]
		// Generate common values for known prefixes
		const prefixValues = {
			opacity: [
				'0',
				'5',
				'10',
				'20',
				'25',
				'30',
				'40',
				'50',
				'60',
				'70',
				'75',
				'80',
				'90',
				'95',
				'100',
			],
			scale: [
				'0',
				'50',
				'75',
				'90',
				'95',
				'100',
				'105',
				'110',
				'125',
				'150',
			],
			rotate: ['0', '1', '2', '3', '6', '12', '45', '90', '180'],
			translate: [
				'x-0',
				'x-1',
				'x-2',
				'x-3',
				'x-4',
				'x-5',
				'x-6',
				'y-0',
				'y-1',
				'y-2',
				'y-3',
				'y-4',
				'y-5',
				'y-6',
			],
			skew: [
				'x-0',
				'x-1',
				'x-2',
				'x-3',
				'x-6',
				'x-12',
				'y-0',
				'y-1',
				'y-2',
				'y-3',
				'y-6',
				'y-12',
			],
			duration: [
				'75',
				'100',
				'150',
				'200',
				'300',
				'500',
				'700',
				'1000',
			],
			delay: ['75', '100', '150', '200', '300', '500', '700', '1000'],
			ring: ['0', '1', '2', '4', '8', 'inset'],
			'ring-offset': ['0', '1', '2', '4', '8'],
			blur: ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl'],
			brightness: [
				'0',
				'50',
				'75',
				'90',
				'95',
				'100',
				'105',
				'110',
				'125',
				'150',
				'200',
			],
			contrast: ['0', '50', '75', '100', '125', '150', '200'],
			'backdrop-blur': [
				'none',
				'sm',
				'',
				'md',
				'lg',
				'xl',
				'2xl',
				'3xl',
			],
			'backdrop-brightness': [
				'0',
				'50',
				'75',
				'90',
				'95',
				'100',
				'105',
				'110',
				'125',
				'150',
				'200',
			],
			'backdrop-contrast': [
				'0',
				'50',
				'75',
				'100',
				'125',
				'150',
				'200',
			],
			'backdrop-opacity': [
				'0',
				'5',
				'10',
				'20',
				'25',
				'30',
				'40',
				'50',
				'60',
				'70',
				'75',
				'80',
				'90',
				'95',
				'100',
			],
		}

		if (prefixValues[prefix]) {
			suggestions.push(
				...prefixValues[prefix].map((value) => `${prefix}-${value}`)
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
		const fractionPrefixes = [
			'w',
			'h',
			'basis',
			'inset',
			'p',
			'pt',
			'ps',
			'pb',
			'pe',
			'm',
			'mt',
			'ms',
			'mb',
			'me',
		]

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

// Generate all possible class suggestions (for group-* modifiers)
const generateAllClassSuggestions = () => {
	const suggestions = []

	// Flatten all patterns into a single array
	for (const [, classes] of Object.entries(patterns)) {
		suggestions.push(...classes)
	}

	// Add common utility classes
	const commonClasses = [
		'block',
		'inline-block',
		'inline',
		'flex',
		'inline-flex',
		'grid',
		'inline-grid',
		'hidden',
		'visible',
		'invisible',
		'collapse',
		'static',
		'relative',
		'absolute',
		'fixed',
		'sticky',
		'z-0',
		'z-10',
		'z-20',
		'z-30',
		'z-40',
		'z-50',
		'z-auto',
		'opacity-0',
		'opacity-5',
		'opacity-10',
		'opacity-20',
		'opacity-25',
		'opacity-30',
		'opacity-40',
		'opacity-50',
		'opacity-60',
		'opacity-70',
		'opacity-75',
		'opacity-80',
		'opacity-90',
		'opacity-95',
		'opacity-100',
		'scale-0',
		'scale-50',
		'scale-75',
		'scale-90',
		'scale-95',
		'scale-100',
		'scale-105',
		'scale-110',
		'scale-125',
		'scale-150',
		'rotate-0',
		'rotate-1',
		'rotate-2',
		'rotate-3',
		'rotate-6',
		'rotate-12',
		'rotate-45',
		'rotate-90',
		'rotate-180',
		'translate-x-0',
		'translate-x-1',
		'translate-x-2',
		'translate-x-3',
		'translate-x-4',
		'translate-x-5',
		'translate-x-6',
		'translate-y-0',
		'translate-y-1',
		'translate-y-2',
		'translate-y-3',
		'translate-y-4',
		'translate-y-5',
		'translate-y-6',
		'skew-x-0',
		'skew-x-1',
		'skew-x-2',
		'skew-x-3',
		'skew-x-6',
		'skew-x-12',
		'skew-y-0',
		'skew-y-1',
		'skew-y-2',
		'skew-y-3',
		'skew-y-6',
		'skew-y-12',
		'origin-center',
		'origin-top',
		'origin-top-right',
		'origin-right',
		'origin-bottom-right',
		'origin-bottom',
		'origin-bottom-left',
		'origin-left',
		'origin-top-left',
		'transition-none',
		'transition-all',
		'transition',
		'transition-colors',
		'transition-opacity',
		'transition-shadow',
		'transition-transform',
		'duration-75',
		'duration-100',
		'duration-150',
		'duration-200',
		'duration-300',
		'duration-500',
		'duration-700',
		'duration-1000',
		'ease-linear',
		'ease-in',
		'ease-out',
		'ease-in-out',
		'delay-75',
		'delay-100',
		'delay-150',
		'delay-200',
		'delay-300',
		'delay-500',
		'delay-700',
		'delay-1000',
		'animate-none',
		'animate-spin',
		'animate-ping',
		'animate-pulse',
		'animate-bounce',
		'cursor-auto',
		'cursor-default',
		'cursor-pointer',
		'cursor-wait',
		'cursor-text',
		'cursor-move',
		'cursor-help',
		'cursor-not-allowed',
		'select-none',
		'select-text',
		'select-all',
		'select-auto',
		'resize-none',
		'resize',
		'resize-y',
		'resize-x',
		'snap-none',
		'snap-x',
		'snap-y',
		'snap-both',
		'snap-mandatory',
		'snap-proximity',
		'list-none',
		'list-disc',
		'list-decimal',
		'appearance-none',
		'appearance-auto',
		'outline-none',
		'outline',
		'outline-dashed',
		'outline-dotted',
		'outline-double',
		'outline-offset-0',
		'outline-offset-1',
		'outline-offset-2',
		'outline-offset-4',
		'outline-offset-8',
		'ring-0',
		'ring-1',
		'ring-2',
		'ring-4',
		'ring-8',
		'ring-inset',
		'ring-offset-0',
		'ring-offset-1',
		'ring-offset-2',
		'ring-offset-4',
		'ring-offset-8',
		'blur-none',
		'blur-sm',
		'blur',
		'blur-md',
		'blur-lg',
		'blur-xl',
		'blur-2xl',
		'blur-3xl',
		'brightness-0',
		'brightness-50',
		'brightness-75',
		'brightness-90',
		'brightness-95',
		'brightness-100',
		'brightness-105',
		'brightness-110',
		'brightness-125',
		'brightness-150',
		'brightness-200',
		'contrast-0',
		'contrast-50',
		'contrast-75',
		'contrast-100',
		'contrast-125',
		'contrast-150',
		'contrast-200',
		'drop-shadow-none',
		'drop-shadow-sm',
		'drop-shadow',
		'drop-shadow-md',
		'drop-shadow-lg',
		'drop-shadow-xl',
		'drop-shadow-2xl',
		'grayscale',
		'grayscale-0',
		'hue-rotate-0',
		'hue-rotate-15',
		'hue-rotate-30',
		'hue-rotate-60',
		'hue-rotate-90',
		'hue-rotate-180',
		'invert',
		'invert-0',
		'saturate-0',
		'saturate-50',
		'saturate-100',
		'saturate-150',
		'saturate-200',
		'sepia',
		'sepia-0',
		'backdrop-blur-none',
		'backdrop-blur-sm',
		'backdrop-blur',
		'backdrop-blur-md',
		'backdrop-blur-lg',
		'backdrop-blur-xl',
		'backdrop-blur-2xl',
		'backdrop-blur-3xl',
		'backdrop-brightness-0',
		'backdrop-brightness-50',
		'backdrop-brightness-75',
		'backdrop-brightness-90',
		'backdrop-brightness-95',
		'backdrop-brightness-100',
		'backdrop-brightness-105',
		'backdrop-brightness-110',
		'backdrop-brightness-125',
		'backdrop-brightness-150',
		'backdrop-brightness-200',
		'backdrop-contrast-0',
		'backdrop-contrast-50',
		'backdrop-contrast-75',
		'backdrop-contrast-100',
		'backdrop-contrast-125',
		'backdrop-contrast-150',
		'backdrop-contrast-200',
		'backdrop-grayscale',
		'backdrop-grayscale-0',
		'backdrop-hue-rotate-0',
		'backdrop-hue-rotate-15',
		'backdrop-hue-rotate-30',
		'backdrop-hue-rotate-60',
		'backdrop-hue-rotate-90',
		'backdrop-hue-rotate-180',
		'backdrop-invert',
		'backdrop-invert-0',
		'backdrop-opacity-0',
		'backdrop-opacity-5',
		'backdrop-opacity-10',
		'backdrop-opacity-20',
		'backdrop-opacity-25',
		'backdrop-opacity-30',
		'backdrop-opacity-40',
		'backdrop-opacity-50',
		'backdrop-opacity-60',
		'backdrop-opacity-70',
		'backdrop-opacity-75',
		'backdrop-opacity-80',
		'backdrop-opacity-90',
		'backdrop-opacity-95',
		'backdrop-opacity-100',
		'backdrop-saturate-0',
		'backdrop-saturate-50',
		'backdrop-saturate-100',
		'backdrop-saturate-150',
		'backdrop-saturate-200',
		'backdrop-sepia',
		'backdrop-sepia-0',
	]

	suggestions.push(...commonClasses)

	return [...new Set(suggestions)].slice(0, 100) // Limit to 100 suggestions
}
