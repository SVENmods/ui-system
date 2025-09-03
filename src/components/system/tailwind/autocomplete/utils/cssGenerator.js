/* eslint-disable no-dupe-keys */
// CSS Generator utility functions
import { spacingRules } from '../rules/spacing.js'
import { layoutRules } from '../rules/layout.js'
import { flexboxRules } from '../rules/flexbox.js'
import { typographyRules } from '../rules/typography.js'
import { borderRules } from '../rules/borders.js'
import { effectsRules } from '../rules/effects.js'

// Combine all CSS rules into one object
export const cssRules = {
	...spacingRules,
	...layoutRules,
	...flexboxRules,
	...typographyRules,
	...borderRules,
	...effectsRules,
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
	hover: '@media (hover: hover)',
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

// Parse color class to extract color name and alpha
const parseColorClass = (baseClass) => {
	// Match patterns like bg-red-500, text-blue-600/50, border-gray-300/25
	const colorMatch = baseClass.match(
		/^(bg|text|decoration|border|outline|shadow|inset-shadow|ring|inset-ring|accent|caret|fill|stroke)-([a-z]+)-(\d+)(?:\/(\d+))?$/
	)
	if (!colorMatch) return null

	const [, utility, colorName, shade, alpha] = colorMatch
	return { utility, colorName, shade, alpha }
}

// Get CSS property for color utility
const getColorProperty = (utility) => {
	const propertyMap = {
		bg: 'background-color',
		text: 'color',
		decoration: 'text-decoration-color',
		border: 'border-color',
		outline: 'outline-color',
		shadow: 'box-shadow',
		'inset-shadow': 'box-shadow',
		ring: 'box-shadow',
		'inset-ring': 'box-shadow',
		accent: 'accent-color',
		caret: 'caret-color',
		fill: 'fill',
		stroke: 'stroke',
	}
	return propertyMap[utility] || 'color'
}

// Generate CSS for color with alpha
const generateColorCSS = (baseClass) => {
	const colorInfo = parseColorClass(baseClass)
	if (!colorInfo) return null

	const { utility, colorName, shade, alpha } = colorInfo
	const property = getColorProperty(utility)
	const cssVariable = `var(--color-${colorName}-${shade})`

	// Handle special cases for box-shadow, ring, etc.
	if (['shadow', 'inset-shadow', 'ring', 'inset-ring'].includes(utility)) {
		if (alpha) {
			const fallbackCSS = `${property}: 0 0 0 1px ${cssVariable};`
			const modernCSS = `${property}: 0 0 0 1px color-mix(in oklab, ${cssVariable} ${alpha}%, transparent);`
			return { hasAlpha: true, fallbackCSS, modernCSS }
		}
		return `${property}: 0 0 0 1px ${cssVariable};`
	}

	if (alpha) {
		// Generate fallback CSS for browsers that don't support color-mix
		const fallbackCSS = `${property}: ${cssVariable};`

		// Generate modern CSS with color-mix
		const modernCSS = `${property}: color-mix(in oklab, ${cssVariable} ${alpha}%, transparent);`

		return { hasAlpha: true, fallbackCSS, modernCSS }
	}

	return `${property}: ${cssVariable};`
}

// Convert RGB values to CSS variables
const convertRGBToCSSVariable = (css) => {
	// Convert common RGB patterns to CSS variables based on Tailwind CSS v4.1
	const rgbToVariable = {
		// Red colors
		'oklch(0.971 0.013 17.38)': 'var(--color-red-50)',
		'oklch(0.936 0.032 17.717)': 'var(--color-red-100)',
		'oklch(0.885 0.062 18.334)': 'var(--color-red-200)',
		'oklch(0.808 0.114 19.571)': 'var(--color-red-300)',
		'oklch(0.704 0.191 22.216)': 'var(--color-red-400)',
		'oklch(0.637 0.237 25.331)': 'var(--color-red-500)',
		'oklch(0.577 0.245 27.325)': 'var(--color-red-600)',
		'oklch(0.505 0.213 27.518)': 'var(--color-red-700)',
		'oklch(0.444 0.177 26.899)': 'var(--color-red-800)',
		'oklch(0.396 0.141 25.723)': 'var(--color-red-900)',
		'oklch(0.258 0.092 26.042)': 'var(--color-red-950)',

		// Orange colors
		'oklch(0.98 0.016 73.684)': 'var(--color-orange-50)',
		'oklch(0.954 0.038 75.164)': 'var(--color-orange-100)',
		'oklch(0.901 0.076 70.697)': 'var(--color-orange-200)',
		'oklch(0.837 0.128 66.29)': 'var(--color-orange-300)',
		'oklch(0.75 0.183 55.934)': 'var(--color-orange-400)',
		'oklch(0.705 0.213 47.604)': 'var(--color-orange-500)',
		'oklch(0.646 0.222 41.116)': 'var(--color-orange-600)',
		'oklch(0.553 0.195 38.402)': 'var(--color-orange-700)',
		'oklch(0.47 0.157 37.304)': 'var(--color-orange-800)',
		'oklch(0.408 0.123 38.172)': 'var(--color-orange-900)',
		'oklch(0.266 0.079 36.259)': 'var(--color-orange-950)',

		// Amber colors
		'oklch(0.987 0.022 95.277)': 'var(--color-amber-50)',
		'oklch(0.962 0.059 95.617)': 'var(--color-amber-100)',
		'oklch(0.924 0.12 95.746)': 'var(--color-amber-200)',
		'oklch(0.879 0.169 91.605)': 'var(--color-amber-300)',
		'oklch(0.828 0.189 84.429)': 'var(--color-amber-400)',
		'oklch(0.769 0.188 70.08)': 'var(--color-amber-500)',
		'oklch(0.666 0.179 58.318)': 'var(--color-amber-600)',
		'oklch(0.555 0.163 48.998)': 'var(--color-amber-700)',
		'oklch(0.473 0.137 46.201)': 'var(--color-amber-800)',
		'oklch(0.414 0.112 45.904)': 'var(--color-amber-900)',
		'oklch(0.279 0.077 45.635)': 'var(--color-amber-950)',

		// Yellow colors
		'oklch(0.987 0.026 102.212)': 'var(--color-yellow-50)',
		'oklch(0.973 0.071 103.193)': 'var(--color-yellow-100)',
		'oklch(0.945 0.129 101.54)': 'var(--color-yellow-200)',
		'oklch(0.905 0.182 98.111)': 'var(--color-yellow-300)',
		'oklch(0.852 0.199 91.936)': 'var(--color-yellow-400)',
		'oklch(0.795 0.184 86.047)': 'var(--color-yellow-500)',
		'oklch(0.681 0.162 75.834)': 'var(--color-yellow-600)',
		'oklch(0.554 0.135 66.442)': 'var(--color-yellow-700)',
		'oklch(0.476 0.114 61.907)': 'var(--color-yellow-800)',
		'oklch(0.421 0.095 57.708)': 'var(--color-yellow-900)',
		'oklch(0.286 0.066 53.813)': 'var(--color-yellow-950)',

		// Lime colors
		'oklch(0.986 0.031 120.757)': 'var(--color-lime-50)',
		'oklch(0.967 0.067 122.328)': 'var(--color-lime-100)',
		'oklch(0.938 0.127 124.321)': 'var(--color-lime-200)',
		'oklch(0.897 0.196 126.665)': 'var(--color-lime-300)',
		'oklch(0.841 0.238 128.85)': 'var(--color-lime-400)',
		'oklch(0.768 0.233 130.85)': 'var(--color-lime-500)',
		'oklch(0.648 0.2 131.684)': 'var(--color-lime-600)',
		'oklch(0.532 0.157 131.589)': 'var(--color-lime-700)',
		'oklch(0.453 0.124 130.933)': 'var(--color-lime-800)',
		'oklch(0.405 0.101 131.063)': 'var(--color-lime-900)',
		'oklch(0.274 0.072 132.109)': 'var(--color-lime-950)',

		// Green colors
		'oklch(0.982 0.018 155.826)': 'var(--color-green-50)',
		'oklch(0.962 0.044 156.743)': 'var(--color-green-100)',
		'oklch(0.925 0.084 155.995)': 'var(--color-green-200)',
		'oklch(0.871 0.15 154.449)': 'var(--color-green-300)',
		'oklch(0.792 0.209 151.711)': 'var(--color-green-400)',
		'oklch(0.723 0.219 149.579)': 'var(--color-green-500)',
		'oklch(0.627 0.194 149.214)': 'var(--color-green-600)',
		'oklch(0.527 0.154 150.069)': 'var(--color-green-700)',
		'oklch(0.448 0.119 151.328)': 'var(--color-green-800)',
		'oklch(0.393 0.095 152.535)': 'var(--color-green-900)',
		'oklch(0.266 0.065 152.934)': 'var(--color-green-950)',

		// Emerald colors
		'oklch(0.979 0.021 166.113)': 'var(--color-emerald-50)',
		'oklch(0.95 0.052 163.051)': 'var(--color-emerald-100)',
		'oklch(0.905 0.093 164.15)': 'var(--color-emerald-200)',
		'oklch(0.845 0.143 164.978)': 'var(--color-emerald-300)',
		'oklch(0.765 0.177 163.223)': 'var(--color-emerald-400)',
		'oklch(0.696 0.17 162.48)': 'var(--color-emerald-500)',
		'oklch(0.596 0.145 163.225)': 'var(--color-emerald-600)',
		'oklch(0.508 0.118 165.612)': 'var(--color-emerald-700)',
		'oklch(0.432 0.095 166.913)': 'var(--color-emerald-800)',
		'oklch(0.378 0.077 168.94)': 'var(--color-emerald-900)',
		'oklch(0.262 0.051 172.552)': 'var(--color-emerald-950)',

		// Teal colors
		'oklch(0.984 0.014 180.72)': 'var(--color-teal-50)',
		'oklch(0.953 0.051 180.801)': 'var(--color-teal-100)',
		'oklch(0.91 0.096 180.426)': 'var(--color-teal-200)',
		'oklch(0.855 0.138 181.071)': 'var(--color-teal-300)',
		'oklch(0.777 0.152 181.912)': 'var(--color-teal-400)',
		'oklch(0.704 0.14 182.503)': 'var(--color-teal-500)',
		'oklch(0.6 0.118 184.704)': 'var(--color-teal-600)',
		'oklch(0.511 0.096 186.391)': 'var(--color-teal-700)',
		'oklch(0.437 0.078 188.216)': 'var(--color-teal-800)',
		'oklch(0.386 0.063 188.416)': 'var(--color-teal-900)',
		'oklch(0.277 0.046 192.524)': 'var(--color-teal-950)',

		// Cyan colors
		'oklch(0.984 0.019 200.873)': 'var(--color-cyan-50)',
		'oklch(0.956 0.045 203.388)': 'var(--color-cyan-100)',
		'oklch(0.917 0.08 205.041)': 'var(--color-cyan-200)',
		'oklch(0.865 0.127 207.078)': 'var(--color-cyan-300)',
		'oklch(0.789 0.154 211.53)': 'var(--color-cyan-400)',
		'oklch(0.715 0.143 215.221)': 'var(--color-cyan-500)',
		'oklch(0.609 0.126 221.723)': 'var(--color-cyan-600)',
		'oklch(0.52 0.105 223.128)': 'var(--color-cyan-700)',
		'oklch(0.45 0.085 224.283)': 'var(--color-cyan-800)',
		'oklch(0.398 0.07 227.392)': 'var(--color-cyan-900)',
		'oklch(0.302 0.056 229.695)': 'var(--color-cyan-950)',

		// Sky colors
		'oklch(0.977 0.013 236.62)': 'var(--color-sky-50)',
		'oklch(0.951 0.026 236.824)': 'var(--color-sky-100)',
		'oklch(0.901 0.058 230.902)': 'var(--color-sky-200)',
		'oklch(0.828 0.111 230.318)': 'var(--color-sky-300)',
		'oklch(0.746 0.16 232.661)': 'var(--color-sky-400)',
		'oklch(0.685 0.169 237.323)': 'var(--color-sky-500)',
		'oklch(0.588 0.158 241.966)': 'var(--color-sky-600)',
		'oklch(0.5 0.134 242.749)': 'var(--color-sky-700)',
		'oklch(0.443 0.11 240.79)': 'var(--color-sky-800)',
		'oklch(0.391 0.09 240.876)': 'var(--color-sky-900)',
		'oklch(0.293 0.066 243.157)': 'var(--color-sky-950)',

		// Blue colors
		'oklch(0.97 0.014 254.604)': 'var(--color-blue-50)',
		'oklch(0.932 0.032 255.585)': 'var(--color-blue-100)',
		'oklch(0.882 0.059 254.128)': 'var(--color-blue-200)',
		'oklch(0.809 0.105 251.813)': 'var(--color-blue-300)',
		'oklch(0.707 0.165 254.624)': 'var(--color-blue-400)',
		'oklch(0.623 0.214 259.815)': 'var(--color-blue-500)',
		'oklch(0.546 0.245 262.881)': 'var(--color-blue-600)',
		'oklch(0.488 0.243 264.376)': 'var(--color-blue-700)',
		'oklch(0.424 0.199 265.638)': 'var(--color-blue-800)',
		'oklch(0.379 0.146 265.522)': 'var(--color-blue-900)',
		'oklch(0.282 0.091 267.935)': 'var(--color-blue-950)',

		// Indigo colors
		'oklch(0.962 0.018 272.314)': 'var(--color-indigo-50)',
		'oklch(0.93 0.034 272.788)': 'var(--color-indigo-100)',
		'oklch(0.87 0.065 274.039)': 'var(--color-indigo-200)',
		'oklch(0.785 0.115 274.713)': 'var(--color-indigo-300)',
		'oklch(0.673 0.182 276.935)': 'var(--color-indigo-400)',
		'oklch(0.585 0.233 277.117)': 'var(--color-indigo-500)',
		'oklch(0.511 0.262 276.966)': 'var(--color-indigo-600)',
		'oklch(0.457 0.24 277.023)': 'var(--color-indigo-700)',
		'oklch(0.398 0.195 277.366)': 'var(--color-indigo-800)',
		'oklch(0.359 0.144 278.697)': 'var(--color-indigo-900)',
		'oklch(0.257 0.09 281.288)': 'var(--color-indigo-950)',

		// Violet colors
		'oklch(0.969 0.016 293.756)': 'var(--color-violet-50)',
		'oklch(0.943 0.029 294.588)': 'var(--color-violet-100)',
		'oklch(0.894 0.057 293.283)': 'var(--color-violet-200)',
		'oklch(0.811 0.111 293.571)': 'var(--color-violet-300)',
		'oklch(0.702 0.183 293.541)': 'var(--color-violet-400)',
		'oklch(0.606 0.25 292.717)': 'var(--color-violet-500)',
		'oklch(0.541 0.281 293.009)': 'var(--color-violet-600)',
		'oklch(0.491 0.27 292.581)': 'var(--color-violet-700)',
		'oklch(0.432 0.232 292.759)': 'var(--color-violet-800)',
		'oklch(0.38 0.189 293.745)': 'var(--color-violet-900)',
		'oklch(0.283 0.141 291.089)': 'var(--color-violet-950)',

		// Purple colors
		'oklch(0.977 0.014 308.299)': 'var(--color-purple-50)',
		'oklch(0.946 0.033 307.174)': 'var(--color-purple-100)',
		'oklch(0.902 0.063 306.703)': 'var(--color-purple-200)',
		'oklch(0.827 0.119 306.383)': 'var(--color-purple-300)',
		'oklch(0.714 0.203 305.504)': 'var(--color-purple-400)',
		'oklch(0.627 0.265 303.9)': 'var(--color-purple-500)',
		'oklch(0.558 0.288 302.321)': 'var(--color-purple-600)',
		'oklch(0.496 0.265 301.924)': 'var(--color-purple-700)',
		'oklch(0.438 0.218 303.724)': 'var(--color-purple-800)',
		'oklch(0.381 0.176 304.987)': 'var(--color-purple-900)',
		'oklch(0.291 0.149 302.717)': 'var(--color-purple-950)',

		// Fuchsia colors
		'oklch(0.977 0.017 320.058)': 'var(--color-fuchsia-50)',
		'oklch(0.952 0.037 318.852)': 'var(--color-fuchsia-100)',
		'oklch(0.903 0.076 319.62)': 'var(--color-fuchsia-200)',
		'oklch(0.833 0.145 321.434)': 'var(--color-fuchsia-300)',
		'oklch(0.74 0.238 322.16)': 'var(--color-fuchsia-400)',
		'oklch(0.667 0.295 322.15)': 'var(--color-fuchsia-500)',
		'oklch(0.591 0.293 322.896)': 'var(--color-fuchsia-600)',
		'oklch(0.518 0.253 323.949)': 'var(--color-fuchsia-700)',
		'oklch(0.452 0.211 324.591)': 'var(--color-fuchsia-800)',
		'oklch(0.401 0.17 325.612)': 'var(--color-fuchsia-900)',
		'oklch(0.293 0.136 325.661)': 'var(--color-fuchsia-950)',

		// Pink colors
		'oklch(0.971 0.014 343.198)': 'var(--color-pink-50)',
		'oklch(0.948 0.028 342.258)': 'var(--color-pink-100)',
		'oklch(0.899 0.061 343.231)': 'var(--color-pink-200)',
		'oklch(0.823 0.12 346.018)': 'var(--color-pink-300)',
		'oklch(0.718 0.202 349.761)': 'var(--color-pink-400)',
		'oklch(0.656 0.241 354.308)': 'var(--color-pink-500)',
		'oklch(0.592 0.249 0.584)': 'var(--color-pink-600)',
		'oklch(0.525 0.223 3.958)': 'var(--color-pink-700)',
		'oklch(0.459 0.187 3.815)': 'var(--color-pink-800)',
		'oklch(0.408 0.153 2.432)': 'var(--color-pink-900)',
		'oklch(0.284 0.109 3.907)': 'var(--color-pink-950)',

		// Rose colors
		'oklch(0.969 0.015 12.422)': 'var(--color-rose-50)',
		'oklch(0.941 0.03 12.58)': 'var(--color-rose-100)',
		'oklch(0.892 0.058 10.001)': 'var(--color-rose-200)',
		'oklch(0.81 0.117 11.638)': 'var(--color-rose-300)',
		'oklch(0.712 0.194 13.428)': 'var(--color-rose-400)',
		'oklch(0.645 0.246 16.439)': 'var(--color-rose-500)',
		'oklch(0.586 0.253 17.585)': 'var(--color-rose-600)',
		'oklch(0.514 0.222 16.935)': 'var(--color-rose-700)',
		'oklch(0.455 0.188 13.697)': 'var(--color-rose-800)',
		'oklch(0.41 0.159 10.272)': 'var(--color-rose-900)',
		'oklch(0.271 0.105 12.094)': 'var(--color-rose-950)',

		// Slate colors
		'oklch(0.984 0.003 247.858)': 'var(--color-slate-50)',
		'oklch(0.968 0.007 247.896)': 'var(--color-slate-100)',
		'oklch(0.929 0.013 255.508)': 'var(--color-slate-200)',
		'oklch(0.869 0.022 252.894)': 'var(--color-slate-300)',
		'oklch(0.704 0.04 256.788)': 'var(--color-slate-400)',
		'oklch(0.554 0.046 257.417)': 'var(--color-slate-500)',
		'oklch(0.446 0.043 257.281)': 'var(--color-slate-600)',
		'oklch(0.372 0.044 257.287)': 'var(--color-slate-700)',
		'oklch(0.279 0.041 260.031)': 'var(--color-slate-800)',
		'oklch(0.208 0.042 265.755)': 'var(--color-slate-900)',
		'oklch(0.129 0.042 264.695)': 'var(--color-slate-950)',

		// Gray colors
		'oklch(0.985 0.002 247.839)': 'var(--color-gray-50)',
		'oklch(0.967 0.003 264.542)': 'var(--color-gray-100)',
		'oklch(0.928 0.006 264.531)': 'var(--color-gray-200)',
		'oklch(0.872 0.01 258.338)': 'var(--color-gray-300)',
		'oklch(0.707 0.022 261.325)': 'var(--color-gray-400)',
		'oklch(0.551 0.027 264.364)': 'var(--color-gray-500)',
		'oklch(0.446 0.03 256.802)': 'var(--color-gray-600)',
		'oklch(0.373 0.034 259.733)': 'var(--color-gray-700)',
		'oklch(0.278 0.033 256.848)': 'var(--color-gray-800)',
		'oklch(0.21 0.034 264.665)': 'var(--color-gray-900)',
		'oklch(0.13 0.028 261.692)': 'var(--color-gray-950)',

		// Zinc colors
		'oklch(0.985 0 0)': 'var(--color-zinc-50)',
		'oklch(0.967 0.001 286.375)': 'var(--color-zinc-100)',
		'oklch(0.92 0.004 286.32)': 'var(--color-zinc-200)',
		'oklch(0.871 0.006 286.286)': 'var(--color-zinc-300)',
		'oklch(0.705 0.015 286.067)': 'var(--color-zinc-400)',
		'oklch(0.552 0.016 285.938)': 'var(--color-zinc-500)',
		'oklch(0.442 0.017 285.786)': 'var(--color-zinc-600)',
		'oklch(0.37 0.013 285.805)': 'var(--color-zinc-700)',
		'oklch(0.274 0.006 286.033)': 'var(--color-zinc-800)',
		'oklch(0.21 0.006 285.885)': 'var(--color-zinc-900)',
		'oklch(0.141 0.005 285.823)': 'var(--color-zinc-950)',

		// Neutral colors
		'oklch(0.985 0 0)': 'var(--color-neutral-50)',
		'oklch(0.97 0 0)': 'var(--color-neutral-100)',
		'oklch(0.922 0 0)': 'var(--color-neutral-200)',
		'oklch(0.87 0 0)': 'var(--color-neutral-300)',
		'oklch(0.708 0 0)': 'var(--color-neutral-400)',
		'oklch(0.556 0 0)': 'var(--color-neutral-500)',
		'oklch(0.439 0 0)': 'var(--color-neutral-600)',
		'oklch(0.371 0 0)': 'var(--color-neutral-700)',
		'oklch(0.269 0 0)': 'var(--color-neutral-800)',
		'oklch(0.205 0 0)': 'var(--color-neutral-900)',
		'oklch(0.145 0 0)': 'var(--color-neutral-950)',

		// Stone colors
		'oklch(0.985 0.001 106.423)': 'var(--color-stone-50)',
		'oklch(0.97 0.001 106.424)': 'var(--color-stone-100)',
		'oklch(0.923 0.003 48.717)': 'var(--color-stone-200)',
		'oklch(0.869 0.005 56.366)': 'var(--color-stone-300)',
		'oklch(0.709 0.01 56.259)': 'var(--color-stone-400)',
		'oklch(0.553 0.013 58.071)': 'var(--color-stone-500)',
		'oklch(0.444 0.011 73.639)': 'var(--color-stone-600)',
		'oklch(0.374 0.01 67.558)': 'var(--color-stone-700)',
		'oklch(0.268 0.007 34.298)': 'var(--color-stone-800)',
		'oklch(0.216 0.006 56.043)': 'var(--color-stone-900)',
		'oklch(0.147 0.004 49.25)': 'var(--color-stone-950)',

		// White and Black
		'oklch(1 0 0)': 'var(--color-white)',
		'oklch(0 0 0)': 'var(--color-black)',

		// Legacy RGB support
		'rgb(239 68 68 / var(--tw-text-opacity))': 'var(--color-red-500)',
		'rgb(59 130 246 / var(--tw-text-opacity))': 'var(--color-blue-500)',
		'rgb(34 197 94 / var(--tw-text-opacity))': 'var(--color-green-500)',
		'rgb(107 114 128 / var(--tw-text-opacity))': 'var(--color-gray-500)',
		'rgb(255 255 255 / var(--tw-text-opacity))': 'var(--color-white)',
		'rgb(0 0 0 / var(--tw-text-opacity))': 'var(--color-black)',
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
	let hasAlpha = false
	let alphaData = null

	// First check if it's a color class
	const colorCSS = generateColorCSS(baseClass)
	if (colorCSS) {
		if (typeof colorCSS === 'object' && colorCSS.hasAlpha) {
			hasAlpha = true
			alphaData = colorCSS
			baseCSS = colorCSS.fallbackCSS
		} else {
			baseCSS = colorCSS
		}
	} else if (cssRules[baseClass]) {
		// Check if class exists in our rules
		baseCSS = cssRules[baseClass]
		// Convert RGB values to CSS variables
		baseCSS = convertRGBToCSSVariable(baseCSS)
	} else {
		// Handle arbitrary values
		baseCSS = generateArbitraryCSS(baseClass) || ''
	}

	if (!baseCSS) return ''

	// If no modifiers and has alpha, return special format
	if (modifiers.length === 0 && hasAlpha) {
		const escapedClassName = className.replace(/\//g, '\\/')
		return `@supports (color: color-mix(in lab, red, red)) {\n    .${escapedClassName} {\n        ${alphaData.modernCSS}\n    }\n}\n.${escapedClassName} {\n    ${alphaData.fallbackCSS}\n}`
	}

	// If no modifiers, return base CSS with class selector
	if (modifiers.length === 0) {
		return `.${className} {\n    ${baseCSS}\n}`
	}

	// Create the class name with escaped colons and slashes
	const escapedClassName = className
		.replace(/:/g, '\\:')
		.replace(/\//g, '\\/')

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
			if (modifier === 'hover') {
				// Special handling for hover to add :hover to the selector
				result = `${variants[modifier]} {\n    .${escapedClassName}:hover {\n        ${result}\n    }\n}`
			} else {
				result = `${variants[modifier]} {\n    ${result}\n}`
			}
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

		// Handle group-hover, group-focus, etc. variants
		if (modifier.startsWith('group-')) {
			const groupModifier = modifier.replace('group-', '')
			if (variants[groupModifier]) {
				// For group-hover, we need special handling
				if (groupModifier === 'hover') {
					result = `&:is(:where(.group):hover *) {\n    @media (hover: hover) {\n        ${result}\n    }\n}`
				} else {
					result = `&:is(:where(.group)${variants[groupModifier].replace('&:', '')} *) {\n    ${result}\n}`
				}
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
	if (hasAlpha) {
		// For classes with alpha, we need to handle the @supports rule differently
		const modernResult = alphaData.modernCSS
		const fallbackResult = alphaData.fallbackCSS

		// Apply modifiers to both modern and fallback CSS
		let modernWithModifiers = modernResult
		let fallbackWithModifiers = fallbackResult

		// Process modifiers for both versions
		for (let i = modifiers.length - 1; i >= 0; i--) {
			const modifier = modifiers[i]
			// Apply the same modifier processing logic to both versions
			if (breakpoints[modifier]) {
				modernWithModifiers = `${breakpoints[modifier]} {\n    ${modernWithModifiers}\n}`
				fallbackWithModifiers = `${breakpoints[modifier]} {\n    ${fallbackWithModifiers}\n}`
			} else if (variants[modifier]) {
				if (modifier === 'hover') {
					// Special handling for hover to add :hover to the selector
					modernWithModifiers = `${variants[modifier]} {\n    .${escapedClassName}:hover {\n        ${modernWithModifiers}\n    }\n}`
					fallbackWithModifiers = `${variants[modifier]} {\n    .${escapedClassName}:hover {\n        ${fallbackWithModifiers}\n    }\n}`
				} else {
					modernWithModifiers = `${variants[modifier]} {\n    ${modernWithModifiers}\n}`
					fallbackWithModifiers = `${variants[modifier]} {\n    ${fallbackWithModifiers}\n}`
				}
			} else if (modifier.startsWith('group-')) {
				const groupModifier = modifier.replace('group-', '')
				if (variants[groupModifier]) {
					if (groupModifier === 'hover') {
						modernWithModifiers = `&:is(:where(.group):hover *) {\n    @media (hover: hover) {\n        ${modernWithModifiers}\n    }\n}`
						fallbackWithModifiers = `&:is(:where(.group):hover *) {\n    @media (hover: hover) {\n        ${fallbackWithModifiers}\n    }\n}`
					} else {
						modernWithModifiers = `&:is(:where(.group)${variants[groupModifier].replace('&:', '')} *) {\n    ${modernWithModifiers}\n}`
						fallbackWithModifiers = `&:is(:where(.group)${variants[groupModifier].replace('&:', '')} *) {\n    ${fallbackWithModifiers}\n}`
					}
				}
			}
		}

		return `@supports (color: color-mix(in lab, red, red)) {\n    .${escapedClassName} {\n        ${modernWithModifiers}\n    }\n}\n.${escapedClassName} {\n    ${fallbackWithModifiers}\n}`
	}

	return `.${escapedClassName} {\n    ${result}\n}`
}
