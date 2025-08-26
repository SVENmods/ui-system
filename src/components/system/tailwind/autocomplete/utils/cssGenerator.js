// CSS Generator utility functions
import { spacingRules } from '../rules/spacing.js'
import { layoutRules } from '../rules/layout.js'
import { flexboxRules } from '../rules/flexbox.js'
import { typographyRules } from '../rules/typography.js'
import { borderRules } from '../rules/borders.js'

// Combine all CSS rules into one object
export const cssRules = {
	...spacingRules,
	...layoutRules,
	...flexboxRules,
	...typographyRules,
	...borderRules,
}

// CSS properties mapping for arbitrary values
export const cssProperties = {
	'grid-cols': 'grid-template-columns',
	'grid-rows': 'grid-template-rows',
	'col-span': 'grid-column',
	'row-span': 'grid-row',
	aspect: 'aspect-ratio',
	columns: 'columns',
	object: 'object-position',
}

// Breakpoint definitions
const breakpoints = {
	sm: '@media (width >= 40rem)',
	md: '@media (width >= 48rem)',
	lg: '@media (width >= 64rem)',
	xl: '@media (width >= 80rem)',
	'2xl': '@media (width >= 96rem)',
	'max-sm': '@media (width < 40rem)',
	'max-md': '@media (width < 48rem)',
	'max-lg': '@media (width < 64rem)',
	'max-xl': '@media (width < 80rem)',
	'max-2xl': '@media (width < 96rem)',
}

// Variant definitions
const variants = {
	// Pseudo-classes
	hover: '&:hover',
	focus: '&:focus',
	focus_within: '&:focus-within',
	focus_visible: '&:focus-visible',
	active: '&:active',
	visited: '&:visited',
	target: '&:target',
	first: '&:first-child',
	last: '&:last-child',
	only: '&:only-child',
	odd: '&:nth-child(odd)',
	even: '&:nth-child(even)',
	'first-of-type': '&:first-of-type',
	'last-of-type': '&:last-of-type',
	'only-of-type': '&:only-type',
	empty: '&:empty',
	disabled: '&:disabled',
	enabled: '&:enabled',
	checked: '&:checked',
	indeterminate: '&:indeterminate',
	default: '&:default',
	optional: '&:optional',
	required: '&:required',
	valid: '&:valid',
	invalid: '&:invalid',
	'user-valid': '&:user-valid',
	'user-invalid': '&:user-invalid',
	'in-range': '&:in-range',
	'out-of-range': '&:out-of-range',
	'placeholder-shown': '&:placeholder-shown',
	'details-content': '&:details-content',
	autofill: '&:autofill',
	'read-only': '&:read-only',

	// Pseudo-elements
	before: '&::before',
	after: '&::after',
	'first-letter': '&::first-letter',
	'first-line': '&::first-line',
	marker: '&::marker, & *::marker',
	selection: '&::selection',
	file: '&::file-selector-button',
	backdrop: '&::backdrop',
	placeholder: '&::placeholder',

	// Media queries
	dark: '@media (prefers-color-scheme: dark)',
	'motion-safe': '@media (prefers-reduced-motion: no-preference)',
	'motion-reduce': '@media (prefers-reduced-motion: reduce)',
	'contrast-more': '@media (prefers-contrast: more)',
	'contrast-less': '@media (prefers-contrast: less)',
	'forced-colors': '@media (forced-colors: active)',
	'inverted-colors': '@media (inverted-colors: inverted)',
	'pointer-fine': '@media (pointer: fine)',
	'pointer-coarse': '@media (pointer: coarse)',
	'pointer-none': '@media (pointer: none)',
	'any-pointer-fine': '@media (any-pointer: fine)',
	'any-pointer-coarse': '@media (any-pointer: coarse)',
	'any-pointer-none': '@media (any-pointer: none)',
	portrait: '@media (orientation: portrait)',
	landscape: '@media (orientation: landscape)',
	noscript: '@media (scripting: none)',
	print: '@media print',

	// Direction
	rtl: '&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)',
	ltr: '&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)',

	// State
	open: '&:is([open], :popover-open, :open)',
	starting: '@starting-style',
}

// Parse class name to extract modifiers and base class
const parseClassName = (className) => {
	if (!className) return { modifiers: [], baseClass: '' }

	const parts = className.split(':')
	const baseClass = parts[parts.length - 1]
	const modifiers = parts.slice(0, -1)

	return { modifiers, baseClass }
}

// Generate CSS for arbitrary values
const generateArbitraryCSS = (baseClass) => {
	const arbitraryMatch = baseClass.match(/^([^-]+(?:-[^-]+)?)-\[([^\]]+)\]$/)
	if (!arbitraryMatch) return null

	const [, prefix, value] = arbitraryMatch

	// Handle special cases
	if (cssProperties[prefix]) {
		const property = cssProperties[prefix]
		return `${property}: ${value};`
	}

	// Handle common patterns
	const propertyMap = {
		w: 'width',
		h: 'height',
		p: 'padding',
		m: 'margin',
		text: 'color',
		bg: 'background-color',
		border: 'border-color',
		rounded: 'border-radius',
		top: 'top',
		right: 'right',
		bottom: 'bottom',
		left: 'left',
		z: 'z-index',
		gap: 'gap',
		space: 'gap',
		leading: 'line-height',
		tracking: 'letter-spacing',
		order: 'order',
		basis: 'flex-basis',
		flex: 'flex',
		grow: 'flex-grow',
		shrink: 'flex-shrink',
		inset: 'inset',
		columns: 'columns',
		aspect: 'aspect-ratio',
		'break-after': 'break-after',
		'break-before': 'break-before',
		'break-inside': 'break-inside',
		'box-decoration': 'box-decoration-break',
		box: 'box-sizing',
		float: 'float',
		clear: 'clear',
		isolation: 'isolation',
		object: 'object-position',
		overflow: 'overflow',
		overscroll: 'overscroll-behavior',
		position: 'position',
		visibility: 'visibility',
		resize: 'resize',
	}

	if (propertyMap[prefix]) {
		return `${propertyMap[prefix]}: ${value};`
	}

	return null
}

// Convert RGB values to CSS variables
const convertRGBToCSSVariable = (css) => {
	// Convert common RGB patterns to CSS variables
	const rgbToVariable = {
		'rgb(239 68 68)': 'var(--color-red-500)',
		'rgb(59 130 246)': 'var(--color-blue-500)',
		'rgb(34 197 94)': 'var(--color-green-500)',
		'rgb(107 114 128)': 'var(--color-gray-500)',
		'rgb(255 255 255)': 'var(--color-white)',
		'rgb(0 0 0)': 'var(--color-black)',
		'rgb(31 41 55)': 'var(--color-gray-800)',
		'rgb(17 24 39)': 'var(--color-gray-900)',
		'rgb(239 68 68 / var(--tw-text-opacity))': 'var(--color-red-500)',
		'rgb(59 130 246 / var(--tw-text-opacity))': 'var(--color-blue-500)',
		'rgb(34 197 94 / var(--tw-text-opacity))': 'var(--color-green-500)',
		'rgb(107 114 128 / var(--tw-text-opacity))': 'var(--color-gray-500)',
		'rgb(255 255 255 / var(--tw-text-opacity))': 'var(--color-white)',
		'rgb(0 0 0 / var(--tw-text-opacity))': 'var(--color-black)',
		'rgb(31 41 55 / var(--tw-bg-opacity))': 'var(--color-gray-800)',
		'rgb(17 24 39 / var(--tw-bg-opacity))': 'var(--color-gray-900)',
	}

	let result = css
	for (const [rgb, variable] of Object.entries(rgbToVariable)) {
		result = result.replace(
			new RegExp(rgb.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
			variable
		)
	}

	return result
}

// Generate CSS for a Tailwind class
export const generateTailwindCSS = (className) => {
	if (!className) return ''

	const { modifiers, baseClass } = parseClassName(className)

	// Generate base CSS
	let baseCSS = ''

	// Check if class exists in our rules
	if (cssRules[baseClass]) {
		baseCSS = cssRules[baseClass]
	} else {
		// Handle arbitrary values
		baseCSS = generateArbitraryCSS(baseClass) || ''
	}

	if (!baseCSS) return ''

	// Convert RGB values to CSS variables
	baseCSS = convertRGBToCSSVariable(baseCSS)

	// If no modifiers, return base CSS
	if (modifiers.length === 0) {
		return baseCSS
	}

	// Create the class name with escaped colons
	const escapedClassName = className.replace(/:/g, '\\:')

	// Handle modifiers in SCSS format
	let result = baseCSS

	// Process modifiers in reverse order (innermost first)
	for (let i = modifiers.length - 1; i >= 0; i--) {
		const modifier = modifiers[i]

		// Handle breakpoints
		if (breakpoints[modifier]) {
			result = `${breakpoints[modifier]} {\n    ${result}\n}`
			continue
		}

		// Handle custom breakpoints like min-[640px]
		if (modifier.startsWith('min-[')) {
			const value = modifier.match(/min-\[([^\]]+)\]/)?.[1]
			if (value) {
				result = `@media (width >= ${value}) {\n    ${result}\n}`
				continue
			}
		}

		if (modifier.startsWith('max-[')) {
			const value = modifier.match(/max-\[([^\]]+)\]/)?.[1]
			if (value) {
				result = `@media (width < ${value}) {\n    ${result}\n}`
				continue
			}
		}

		// Handle container queries
		if (modifier.startsWith('@')) {
			const containerMatch = modifier.match(/@([^-]+)-?\[?([^\]]*)\]?/)
			if (containerMatch) {
				const [, size, value] = containerMatch
				if (value) {
					result = `@container (width >= ${value}) {\n    ${result}\n}`
				} else {
					// Handle predefined container sizes
					const containerSizes = {
						'3xs': '16rem',
						'2xs': '18rem',
						xs: '20rem',
						sm: '24rem',
						md: '28rem',
						lg: '32rem',
						xl: '36rem',
						'2xl': '42rem',
						'3xl': '48rem',
						'4xl': '56rem',
						'5xl': '64rem',
						'6xl': '72rem',
						'7xl': '80rem',
					}
					if (containerSizes[size]) {
						result = `@container (width >= ${containerSizes[size]}) {\n    ${result}\n}`
					}
				}
				continue
			}
		}

		// Handle max container queries
		if (modifier.startsWith('@max-')) {
			const containerMatch = modifier.match(
				/@max-([^-]+)-?\[?([^\]]*)\]?/
			)
			if (containerMatch) {
				const [, size, value] = containerMatch
				if (value) {
					result = `@container (width < ${value}) {\n    ${result}\n}`
				} else {
					// Handle predefined container sizes
					const containerSizes = {
						'3xs': '16rem',
						'2xs': '18rem',
						xs: '20rem',
						sm: '24rem',
						md: '28rem',
						lg: '32rem',
						xl: '36rem',
						'2xl': '42rem',
						'3xl': '48rem',
						'4xl': '56rem',
						'5xl': '64rem',
						'6xl': '72rem',
						'7xl': '80rem',
					}
					if (containerSizes[size]) {
						result = `@container (width < ${containerSizes[size]}) {\n    ${result}\n}`
					}
				}
				continue
			}
		}

		// Handle supports queries
		if (modifier.startsWith('supports-[')) {
			const value = modifier.match(/supports-\[([^\]]+)\]/)?.[1]
			if (value) {
				result = `@supports (${value}) {\n    ${result}\n}`
				continue
			}
		}

		// Handle variants
		if (variants[modifier]) {
			result = `${variants[modifier]} {\n    ${result}\n}`
			continue
		}

		// Handle special variants
		if (modifier === '*') {
			result = `:is(& > *) {\n    ${result}\n}`
			continue
		}

		if (modifier === '**') {
			result = `:is(& *) {\n    ${result}\n}`
			continue
		}

		// Handle has-[...] variants
		if (modifier.startsWith('has-[')) {
			const value = modifier.match(/has-\[([^\]]+)\]/)?.[1]
			if (value) {
				result = `&:has(${value}) {\n    ${result}\n}`
				continue
			}
		}

		// Handle group-[...] variants
		if (modifier.startsWith('group-[')) {
			const value = modifier.match(/group-\[([^\]]+)\]/)?.[1]
			if (value) {
				result = `&:is(:where(.group)${value} *) {\n    ${result}\n}`
				continue
			}
		}

		// Handle peer-[...] variants
		if (modifier.startsWith('peer-[')) {
			const value = modifier.match(/peer-\[([^\]]+)\]/)?.[1]
			if (value) {
				result = `&:is(:where(.peer)${value} ~ *) {\n    ${result}\n}`
				continue
			}
		}

		// Handle in-[...] variants
		if (modifier.startsWith('in-[')) {
			const value = modifier.match(/in-\[([^\]]+)\]/)?.[1]
			if (value) {
				result = `:where(${value}) & {\n    ${result}\n}`
				continue
			}
		}

		// Handle not-[...] variants
		if (modifier.startsWith('not-[')) {
			const value = modifier.match(/not-\[([^\]]+)\]/)?.[1]
			if (value) {
				result = `&:not(${value}) {\n    ${result}\n}`
				continue
			}
		}

		// Handle nth-[...] variants
		if (modifier.startsWith('nth-[')) {
			const value = modifier.match(/nth-\[([^\]]+)\]/)?.[1]
			if (value) {
				result = `&:nth-child(${value}) {\n    ${result}\n}`
				continue
			}
		}

		// Handle aria-[...] variants
		if (modifier.startsWith('aria-[')) {
			const value = modifier.match(/aria-\[([^\]]+)\]/)?.[1]
			if (value) {
				result = `&[aria-${value}] {\n    ${result}\n}`
				continue
			}
		}

		// Handle data-[...] variants
		if (modifier.startsWith('data-[')) {
			const value = modifier.match(/data-\[([^\]]+)\]/)?.[1]
			if (value) {
				result = `&[data-${value}] {\n    ${result}\n}`
				continue
			}
		}

		// Handle inert variant
		if (modifier === 'inert') {
			result = `&:is([inert], [inert] *) {\n    ${result}\n}`
			continue
		}
	}

	// Wrap in the main class selector
	return `.${escapedClassName} {\n    ${result}\n}`
}
