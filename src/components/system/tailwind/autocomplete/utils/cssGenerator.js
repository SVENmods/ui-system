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

// Generate CSS for a Tailwind class
export const generateTailwindCSS = (className) => {
	if (!className) return ''

	// Remove state modifiers for CSS generation
	const cleanClass = className.replace(
		/^(hover|focus|active|disabled|group-hover|dark|sm|md|lg|xl|2xl):/,
		''
	)

	// Check if class exists in our rules
	if (cssRules[cleanClass]) {
		return cssRules[cleanClass]
	}

	// Handle arbitrary values like w-[100px]
	const arbitraryMatch = cleanClass.match(
		/^([^-]+(?:-[^-]+)?)-\[([^\]]+)\]$/
	)
	if (arbitraryMatch) {
		const [, prefix, value] = arbitraryMatch

		// Handle special cases
		if (cssProperties[prefix]) {
			const property = cssProperties[prefix]
			return `${property}: ${value};`
		}

		// Handle common patterns
		if (prefix === 'w') {
			return `width: ${value};`
		}
		if (prefix === 'h') {
			return `height: ${value};`
		}
		if (prefix === 'p') {
			return `padding: ${value};`
		}
		if (prefix === 'm') {
			return `margin: ${value};`
		}
		if (prefix === 'text') {
			return `color: ${value};`
		}
		if (prefix === 'bg') {
			return `background-color: ${value};`
		}
		if (prefix === 'border') {
			return `border-color: ${value};`
		}
		if (prefix === 'rounded') {
			return `border-radius: ${value};`
		}
		if (
			prefix === 'top' ||
			prefix === 'right' ||
			prefix === 'bottom' ||
			prefix === 'left'
		) {
			return `${prefix}: ${value};`
		}
		if (prefix === 'z') {
			return `z-index: ${value};`
		}
		if (prefix === 'gap') {
			return `gap: ${value};`
		}
		if (prefix === 'space') {
			return `gap: ${value};`
		}
		if (prefix === 'leading') {
			return `line-height: ${value};`
		}
		if (prefix === 'tracking') {
			return `letter-spacing: ${value};`
		}
		if (prefix === 'order') {
			return `order: ${value};`
		}
		if (prefix === 'basis') {
			return `flex-basis: ${value};`
		}
		if (prefix === 'flex') {
			return `flex: ${value};`
		}
		if (prefix === 'grow') {
			return `flex-grow: ${value};`
		}
		if (prefix === 'shrink') {
			return `flex-shrink: ${value};`
		}
		if (prefix === 'inset') {
			return `inset: ${value};`
		}
		if (prefix === 'columns') {
			return `columns: ${value};`
		}
		if (prefix === 'aspect') {
			return `aspect-ratio: ${value};`
		}
		if (prefix === 'break-after') {
			return `break-after: ${value};`
		}
		if (prefix === 'break-before') {
			return `break-before: ${value};`
		}
		if (prefix === 'break-inside') {
			return `break-inside: ${value};`
		}
		if (prefix === 'box-decoration') {
			return `box-decoration-break: ${value};`
		}
		if (prefix === 'box') {
			return `box-sizing: ${value};`
		}
		if (prefix === 'float') {
			return `float: ${value};`
		}
		if (prefix === 'clear') {
			return `clear: ${value};`
		}
		if (prefix === 'isolation') {
			return `isolation: ${value};`
		}
		if (prefix === 'object') {
			return `object-position: ${value};`
		}
		if (prefix === 'overflow') {
			return `overflow: ${value};`
		}
		if (prefix === 'overscroll') {
			return `overscroll-behavior: ${value};`
		}
		if (prefix === 'position') {
			return `position: ${value};`
		}
		if (prefix === 'visibility') {
			return `visibility: ${value};`
		}
		if (prefix === 'resize') {
			return `resize: ${value};`
		}
	}

	return ''
}
