# TailwindAutocomplete Component

This directory contains the refactored TailwindAutocomplete component with an organized folder structure for better maintainability and extensibility.

## Folder Structure

```
autocomplete/
├── README.md                    # This documentation file
├── index.js                     # Main exports
├── TailwindAutocomplete.jsx     # Main component
├── rules/                       # CSS rules organized by category
│   ├── spacing.js              # Spacing, padding, margin, width, height
│   ├── layout.js               # Display, position, z-index, layout utilities
│   ├── flexbox.js              # Flexbox and Grid properties
│   ├── typography.js           # Font, text, and typography properties
│   └── borders.js              # Border properties
└── utils/                       # Utility functions
    ├── cssGenerator.js         # CSS generation logic
    └── suggestionGenerator.js  # Autocomplete suggestion logic
```

## Files Description

### Main Component

- **`TailwindAutocomplete.jsx`**: The main React component that provides the autocomplete interface
- **`index.js`**: Exports the main component and utilities for easy importing

### Rules (CSS Definitions)

- **`spacing.js`**: Contains spacing-related CSS rules (padding, margin, width, height, fractional values)
- **`layout.js`**: Contains layout-related CSS rules (display, position, z-index, visibility, etc.)
- **`flexbox.js`**: Contains flexbox and grid CSS rules (flex properties, grid properties, gap, etc.)
- **`typography.js`**: Contains typography-related CSS rules (font, text, colors, etc.)
- **`borders.js`**: Contains border-related CSS rules (border width, radius, style, color)

### Utilities

- **`cssGenerator.js`**: Contains the `generateTailwindCSS` function and CSS rules combination
- **`suggestionGenerator.js`**: Contains the `generateTailwindSuggestions` function and suggestion patterns

## Usage

### Basic Import

```jsx
import { TailwindAutocomplete } from './autocomplete/index.js'
```

### Using Individual Utilities

```jsx
import {
	generateTailwindCSS,
	generateTailwindSuggestions,
} from './autocomplete/index.js'

// Generate CSS for a Tailwind class
const css = generateTailwindCSS('w-4') // Returns: "width: calc(var(--spacing) * 1);"

// Generate suggestions for input
const suggestions = generateTailwindSuggestions('w-') // Returns array of width-related classes
```

### Using Individual Rule Sets

```jsx
import {
	spacingRules,
	layoutRules,
	flexboxRules,
} from './autocomplete/index.js'

// Access specific rule sets
console.log(spacingRules['w-4']) // "width: calc(var(--spacing) * 1);"
console.log(layoutRules['flex']) // "display: flex;"
```

## Features

### CSS Generation

- Converts Tailwind classes to corresponding CSS rules
- Handles state modifiers (hover:, focus:, etc.)
- Supports arbitrary values (w-[100px])
- Supports fractional values (w-1/2)
- Supports negative values (-m-4)

### Autocomplete Suggestions

- Intelligent suggestion generation based on input patterns
- Support for state modifiers
- Support for arbitrary values
- Support for fractional values
- Support for negative values
- Keyboard navigation (arrow keys, enter, escape)

### Supported Categories

- **Spacing**: padding, margin, width, height, gap
- **Layout**: display, position, z-index, visibility, resize
- **Flexbox**: flex properties, grid properties, alignment
- **Typography**: font properties, text properties, colors
- **Borders**: border width, radius, style, color
- **Background**: background colors
- **Effects**: shadows, opacity, transforms

## Adding New Rules

To add new CSS rules:

1. **Identify the category** (spacing, layout, flexbox, typography, borders)
2. **Add to the appropriate rules file** in the `rules/` directory
3. **Update the patterns** in `utils/suggestionGenerator.js` if needed
4. **Update the cssGenerator.js** to import the new rules

### Example: Adding a new spacing rule

```javascript
// In rules/spacing.js
export const spacingRules = {
	// ... existing rules
	'p-128': 'padding: calc(var(--spacing) * 32);', // New rule
}
```

### Example: Adding a new pattern

```javascript
// In utils/suggestionGenerator.js
export const patterns = {
	// ... existing patterns
	'new-property': ['new-value-1', 'new-value-2', 'new-value-3'],
}
```
