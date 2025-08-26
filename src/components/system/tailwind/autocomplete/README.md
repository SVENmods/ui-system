# TailwindAutocomplete Component

A comprehensive Tailwind CSS autocomplete component with CSS generation capabilities.

## Features

- **Intelligent Autocomplete**: Suggests Tailwind CSS classes as you type
- **CSS Generation**: Converts Tailwind classes to their corresponding CSS rules
- **Modifier Support**: Full support for all Tailwind modifiers including:
     - Breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)
     - Max breakpoints (`max-sm:`, `max-md:`, etc.)
     - Custom breakpoints (`min-[640px]:`, `max-[768px]:`)
     - Container queries (`@sm:`, `@md:`, `@lg:`, etc.)
     - Pseudo-classes (`hover:`, `focus:`, `active:`, etc.)
     - Pseudo-elements (`before:`, `after:`, `placeholder:`, etc.)
     - Media queries (`dark:`, `motion-safe:`, `print:`, etc.)
     - Complex variants (`has-[...]:`, `group-[...]:`, `peer-[...]:`, etc.)
     - And many more!

## File Structure

```
autocomplete/
├── TailwindAutocomplete.jsx    # Main component
├── index.js                    # Entry point with exports
├── README.md                   # This documentation
├── rules/                      # CSS rule definitions
│   ├── spacing.js             # Spacing utilities (padding, margin, width, height)
│   ├── layout.js              # Layout utilities (display, position, etc.)
│   ├── flexbox.js             # Flexbox and Grid utilities
│   ├── typography.js          # Typography utilities
│   └── borders.js             # Border utilities
├── utils/                      # Utility functions
│   ├── cssGenerator.js        # CSS generation logic
│   └── suggestionGenerator.js # Autocomplete suggestion logic
└── test-examples.js           # Test cases for CSS generation
```

## Usage

### Basic Usage

```jsx
import TailwindAutocomplete from './components/system/tailwind/autocomplete'

function App() {
	return (
		<div>
			<TailwindAutocomplete />
		</div>
	)
}
```

### Programmatic Usage

```jsx
import {
	generateTailwindCSS,
	generateTailwindSuggestions,
} from './components/system/tailwind/autocomplete'

// Generate CSS for a Tailwind class
const css = generateTailwindCSS('hover:sm:bg-blue-500')
console.log(css)
// Output:
// .hover\:sm\:bg-blue-500 {
//     @media (width >= 40rem) {
//         &:hover {
//             background-color: var(--color-blue-500);
//         }
//     }
// }

// Generate suggestions
const suggestions = generateTailwindSuggestions('hover:')
console.log(suggestions)
// Output: ['hover:bg-blue-500', 'hover:text-white', ...]
```

## CSS Generation Examples

### Basic Classes

```jsx
generateTailwindCSS('w-4') // "width: calc(var(--spacing) * 4);"
generateTailwindCSS('p-2') // "padding: calc(var(--spacing) * 2);"
generateTailwindCSS('text-center') // "text-align: center;"
```

### With Modifiers

```jsx
generateTailwindCSS('hover:bg-blue-500')
// Output:
// .hover\:bg-blue-500 {
//     &:hover {
//         background-color: var(--color-blue-500);
//     }
// }

generateTailwindCSS('sm:w-full')
// Output:
// .sm\:w-full {
//     @media (width >= 40rem) {
//         width: 100%;
//     }
// }

generateTailwindCSS('dark:sm:hover:bg-gray-800')
// Output:
// .dark\:sm\:hover\:bg-gray-800 {
//     @media (prefers-color-scheme: dark) {
//         @media (width >= 40rem) {
//             &:hover {
//                 background-color: var(--color-gray-800);
//             }
//         }
//     }
// }
```

### Arbitrary Values

```jsx
generateTailwindCSS('w-[100px]') // "width: 100px;"
generateTailwindCSS('h-[50vh]') // "height: 50vh;"
generateTailwindCSS('text-[#ff0000]') // "color: #ff0000;"
```

### Complex Variants

```jsx
generateTailwindCSS('has-[.child]:bg-blue-500')
// Output:
// .has-\[\.child\]\:bg-blue-500 {
//     &:has(.child) {
//         background-color: var(--color-blue-500);
//     }
// }

generateTailwindCSS('group-hover:bg-red-500')
// Output:
// .group-hover\:bg-red-500 {
//     &:is(:where(.group)hover *) {
//         background-color: var(--color-red-500);
//     }
// }
```

## Supported Modifiers

### Breakpoints

- `sm:` → `@media (width >= 40rem)`
- `md:` → `@media (width >= 48rem)`
- `lg:` → `@media (width >= 64rem)`
- `xl:` → `@media (width >= 80rem)`
- `2xl:` → `@media (width >= 96rem)`

### Max Breakpoints

- `max-sm:` → `@media (width < 40rem)`
- `max-md:` → `@media (width < 48rem)`
- `max-lg:` → `@media (width < 64rem)`
- `max-xl:` → `@media (width < 80rem)`
- `max-2xl:` → `@media (width < 96rem)`

### Custom Breakpoints

- `min-[640px]:` → `@media (width >= 640px)`
- `max-[768px]:` → `@media (width < 768px)`

### Container Queries

- `@sm:` → `@container (width >= 24rem)`
- `@md:` → `@container (width >= 28rem)`
- `@lg:` → `@container (width >= 32rem)`
- `@min-[400px]:` → `@container (width >= 400px)`

### Pseudo-classes

- `hover:` → `&:hover`
- `focus:` → `&:focus`
- `active:` → `&:active`
- `disabled:` → `&:disabled`
- `checked:` → `&:checked`
- And many more...

### Pseudo-elements

- `before:` → `&::before`
- `after:` → `&::after`
- `placeholder:` → `&::placeholder`
- `selection:` → `&::selection`

### Media Queries

- `dark:` → `@media (prefers-color-scheme: dark)`
- `motion-safe:` → `@media (prefers-reduced-motion: no-preference)`
- `print:` → `@media print`
- `portrait:` → `@media (orientation: portrait)`

### Complex Variants

- `has-[...]:` → `&:has(...)`
- `group-[...]:` → `&:is(:where(.group)... *)`
- `peer-[...]:` → `&:is(:where(.peer)... ~ *)`
- `not-[...]:` → `&:not(...)`
- `nth-[...]:` → `&:nth-child(...)`
- `aria-[...]:` → `&[aria-...]`
- `data-[...]:` → `&[data-...]`

## CSS Output Format

The CSS generator produces output in SCSS format with nested selectors and CSS variables:

### Classes without modifiers

```css
.w-4 {
	width: calc(var(--spacing) * 4);
}
```

### Classes with modifiers

```css
.hover\:text-red-500 {
	&:hover {
		color: var(--color-red-500);
	}
}
```

### Classes with breakpoints

```css
.sm\:w-full {
	@media (width >= 40rem) {
		width: 100%;
	}
}
```

### Complex nested modifiers

```css
.dark\:sm\:hover\:bg-gray-800 {
	@media (prefers-color-scheme: dark) {
		@media (width >= 40rem) {
			&:hover {
				background-color: var(--color-gray-800);
			}
		}
	}
}
```

## CSS Variables

The generator automatically converts RGB values to CSS variables:

- `rgb(239 68 68)` → `var(--color-red-500)`
- `rgb(59 130 246)` → `var(--color-blue-500)`
- `rgb(34 197 94)` → `var(--color-green-500)`
- `rgb(107 114 128)` → `var(--color-gray-500)`
- `rgb(255 255 255)` → `var(--color-white)`
- `rgb(0 0 0)` → `var(--color-black)`
- `rgb(31 41 55)` → `var(--color-gray-800)`
- `rgb(17 24 39)` → `var(--color-gray-900)`

## Adding New Rules

### Adding CSS Rules

1. **Create or update a rule file** in the `rules/` directory:

```jsx
// rules/colors.js
export const colorRules = {
	'text-red-500': 'color: var(--color-red-500);',
	'bg-blue-500': 'background-color: var(--color-blue-500);',
	'border-green-500': 'border-color: var(--color-green-500);',
}
```

2. **Import and add to cssRules** in `utils/cssGenerator.js`:

```jsx
import { colorRules } from '../rules/colors.js'

export const cssRules = {
	...spacingRules,
	...layoutRules,
	...flexboxRules,
	...typographyRules,
	...borderRules,
	...colorRules, // Add your new rules
}
```

### Adding Suggestion Patterns

1. **Add patterns** in `utils/suggestionGenerator.js`:

```jsx
export const patterns = {
	// ... existing patterns
	'background-color': [
		'bg-red-500',
		'bg-blue-500',
		'bg-green-500',
		// ... more colors
	],
}
```

2. **Add special values** if needed:

```jsx
export const specialValues = {
	// ... existing special values
	'background-color': ['red-500', 'blue-500', 'green-500'],
}
```

## Testing

Use the test examples file to verify CSS generation:

```jsx
import testCSSGeneration from './test-examples.js'

// Run tests in browser console
testCSSGeneration()
```

## Browser Support

The CSS generator produces SCSS format that needs to be compiled to CSS. The generated SCSS uses modern CSS features that work in all modern browsers. Some features like container queries may require polyfills for older browsers.

## Contributing

When adding new features:

1. Update the appropriate rule files in `rules/`
2. Add patterns to `suggestionGenerator.js`
3. Update this README with examples
4. Add test cases to `test-examples.js`
5. Ensure all modifiers are properly handled in `cssGenerator.js`
