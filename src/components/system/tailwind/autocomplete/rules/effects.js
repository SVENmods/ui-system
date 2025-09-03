// Effects rules for Tailwind CSS classes
export const effectsRules = {
	// Opacity
	'opacity-0': 'opacity: 0;',
	'opacity-5': 'opacity: 0.05;',
	'opacity-10': 'opacity: 0.1;',
	'opacity-20': 'opacity: 0.2;',
	'opacity-25': 'opacity: 0.25;',
	'opacity-30': 'opacity: 0.3;',
	'opacity-40': 'opacity: 0.4;',
	'opacity-50': 'opacity: 0.5;',
	'opacity-60': 'opacity: 0.6;',
	'opacity-70': 'opacity: 0.7;',
	'opacity-75': 'opacity: 0.75;',
	'opacity-80': 'opacity: 0.8;',
	'opacity-90': 'opacity: 0.9;',
	'opacity-95': 'opacity: 0.95;',
	'opacity-100': 'opacity: 1;',

	// Display
	block: 'display: block;',
	'inline-block': 'display: inline-block;',
	inline: 'display: inline;',
	flex: 'display: flex;',
	'inline-flex': 'display: inline-flex;',
	grid: 'display: grid;',
	'inline-grid': 'display: inline-grid;',
	contents: 'display: contents;',
	hidden: 'display: none;',
	visible: 'visibility: visible;',
	invisible: 'visibility: hidden;',
	collapse: 'visibility: collapse;',

	// Position
	static: 'position: static;',
	relative: 'position: relative;',
	absolute: 'position: absolute;',
	fixed: 'position: fixed;',
	sticky: 'position: sticky;',

	// Z-index
	'z-0': 'z-index: 0;',
	'z-10': 'z-index: 10;',
	'z-20': 'z-index: 20;',
	'z-30': 'z-index: 30;',
	'z-40': 'z-index: 40;',
	'z-50': 'z-index: 50;',
	'z-auto': 'z-index: auto;',

	// Transform
	'scale-0': 'transform: scale(0);',
	'scale-50': 'transform: scale(0.5);',
	'scale-75': 'transform: scale(0.75);',
	'scale-90': 'transform: scale(0.9);',
	'scale-95': 'transform: scale(0.95);',
	'scale-100': 'transform: scale(1);',
	'scale-105': 'transform: scale(1.05);',
	'scale-110': 'transform: scale(1.1);',
	'scale-125': 'transform: scale(1.25);',
	'scale-150': 'transform: scale(1.5);',

	'rotate-0': 'transform: rotate(0deg);',
	'rotate-1': 'transform: rotate(1deg);',
	'rotate-2': 'transform: rotate(2deg);',
	'rotate-3': 'transform: rotate(3deg);',
	'rotate-6': 'transform: rotate(6deg);',
	'rotate-12': 'transform: rotate(12deg);',
	'rotate-45': 'transform: rotate(45deg);',
	'rotate-90': 'transform: rotate(90deg);',
	'rotate-180': 'transform: rotate(180deg);',

	'translate-x-0': 'transform: translateX(0);',
	'translate-x-1': 'transform: translateX(0.25rem);',
	'translate-x-2': 'transform: translateX(0.5rem);',
	'translate-x-3': 'transform: translateX(0.75rem);',
	'translate-x-4': 'transform: translateX(1rem);',
	'translate-x-5': 'transform: translateX(1.25rem);',
	'translate-x-6': 'transform: translateX(1.5rem);',

	'translate-y-0': 'transform: translateY(0);',
	'translate-y-1': 'transform: translateY(0.25rem);',
	'translate-y-2': 'transform: translateY(0.5rem);',
	'translate-y-3': 'transform: translateY(0.75rem);',
	'translate-y-4': 'transform: translateY(1rem);',
	'translate-y-5': 'transform: translateY(1.25rem);',
	'translate-y-6': 'transform: translateY(1.5rem);',

	'skew-x-0': 'transform: skewX(0deg);',
	'skew-x-1': 'transform: skewX(1deg);',
	'skew-x-2': 'transform: skewX(2deg);',
	'skew-x-3': 'transform: skewX(3deg);',
	'skew-x-6': 'transform: skewX(6deg);',
	'skew-x-12': 'transform: skewX(12deg);',

	'skew-y-0': 'transform: skewY(0deg);',
	'skew-y-1': 'transform: skewY(1deg);',
	'skew-y-2': 'transform: skewY(2deg);',
	'skew-y-3': 'transform: skewY(3deg);',
	'skew-y-6': 'transform: skewY(6deg);',
	'skew-y-12': 'transform: skewY(12deg);',

	// Transform origin
	'origin-center': 'transform-origin: center;',
	'origin-top': 'transform-origin: top;',
	'origin-top-right': 'transform-origin: top right;',
	'origin-right': 'transform-origin: right;',
	'origin-bottom-right': 'transform-origin: bottom right;',
	'origin-bottom': 'transform-origin: bottom;',
	'origin-bottom-left': 'transform-origin: bottom left;',
	'origin-left': 'transform-origin: left;',
	'origin-top-left': 'transform-origin: top left;',

	// Transitions
	'transition-none': 'transition-property: none;',
	'transition-all': 'transition-property: all;',
	transition:
		'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;',
	'transition-colors':
		'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;',
	'transition-opacity': 'transition-property: opacity;',
	'transition-shadow': 'transition-property: box-shadow;',
	'transition-transform': 'transition-property: transform;',

	// Duration
	'duration-75': 'transition-duration: 75ms;',
	'duration-100': 'transition-duration: 100ms;',
	'duration-150': 'transition-duration: 150ms;',
	'duration-200': 'transition-duration: 200ms;',
	'duration-300': 'transition-duration: 300ms;',
	'duration-500': 'transition-duration: 500ms;',
	'duration-700': 'transition-duration: 700ms;',
	'duration-1000': 'transition-duration: 1000ms;',

	// Easing
	'ease-linear': 'transition-timing-function: linear;',
	'ease-in': 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);',
	'ease-out': 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);',
	'ease-in-out': 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',

	// Delay
	'delay-75': 'transition-delay: 75ms;',
	'delay-100': 'transition-delay: 100ms;',
	'delay-150': 'transition-delay: 150ms;',
	'delay-200': 'transition-delay: 200ms;',
	'delay-300': 'transition-delay: 300ms;',
	'delay-500': 'transition-delay: 500ms;',
	'delay-700': 'transition-delay: 700ms;',
	'delay-1000': 'transition-delay: 1000ms;',

	// Animations
	'animate-none': 'animation: none;',
	'animate-spin': 'animation: spin 1s linear infinite;',
	'animate-ping': 'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;',
	'animate-pulse':
		'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
	'animate-bounce': 'animation: bounce 1s infinite;',

	// Cursor
	'cursor-auto': 'cursor: auto;',
	'cursor-default': 'cursor: default;',
	'cursor-pointer': 'cursor: pointer;',
	'cursor-wait': 'cursor: wait;',
	'cursor-text': 'cursor: text;',
	'cursor-move': 'cursor: move;',
	'cursor-help': 'cursor: help;',
	'cursor-not-allowed': 'cursor: not-allowed;',

	// User select
	'select-none': 'user-select: none;',
	'select-text': 'user-select: text;',
	'select-all': 'user-select: all;',
	'select-auto': 'user-select: auto;',

	// Resize
	'resize-none': 'resize: none;',
	resize: 'resize: both;',
	'resize-y': 'resize: vertical;',
	'resize-x': 'resize: horizontal;',

	// Scroll snap
	'snap-none': 'scroll-snap-type: none;',
	'snap-x': 'scroll-snap-type: x mandatory;',
	'snap-y': 'scroll-snap-type: y mandatory;',
	'snap-both': 'scroll-snap-type: both mandatory;',
	'snap-mandatory': 'scroll-snap-type: mandatory;',
	'snap-proximity': 'scroll-snap-type: proximity;',

	// List style
	'list-none': 'list-style-type: none;',
	'list-disc': 'list-style-type: disc;',
	'list-decimal': 'list-style-type: decimal;',

	// Appearance
	'appearance-none': 'appearance: none;',
	'appearance-auto': 'appearance: auto;',

	// Outline
	'outline-none': 'outline: 2px solid transparent; outline-offset: 2px;',
	outline: 'outline-style: solid;',
	'outline-dashed': 'outline-style: dashed;',
	'outline-dotted': 'outline-style: dotted;',
	'outline-double': 'outline-style: double;',

	// Outline offset
	'outline-offset-0': 'outline-offset: 0px;',
	'outline-offset-1': 'outline-offset: 1px;',
	'outline-offset-2': 'outline-offset: 2px;',
	'outline-offset-4': 'outline-offset: 4px;',
	'outline-offset-8': 'outline-offset: 8px;',

	// Ring
	'ring-0': 'box-shadow: 0 0 #0000;',
	'ring-1': 'box-shadow: 0 0 0 1px #000;',
	'ring-2': 'box-shadow: 0 0 0 2px #000;',
	'ring-4': 'box-shadow: 0 0 0 4px #000;',
	'ring-8': 'box-shadow: 0 0 0 8px #000;',
	'ring-inset': 'box-shadow: inset 0 0 0 1px #000;',

	// Ring offset
	'ring-offset-0': 'box-shadow: 0 0 0 0 #000;',
	'ring-offset-1': 'box-shadow: 0 0 0 1px #000;',
	'ring-offset-2': 'box-shadow: 0 0 0 2px #000;',
	'ring-offset-4': 'box-shadow: 0 0 0 4px #000;',
	'ring-offset-8': 'box-shadow: 0 0 0 8px #000;',

	// Filters
	'blur-none': 'filter: blur(0);',
	'blur-sm': 'filter: blur(4px);',
	blur: 'filter: blur(8px);',
	'blur-md': 'filter: blur(12px);',
	'blur-lg': 'filter: blur(16px);',
	'blur-xl': 'filter: blur(24px);',
	'blur-2xl': 'filter: blur(40px);',
	'blur-3xl': 'filter: blur(64px);',

	'brightness-0': 'filter: brightness(0);',
	'brightness-50': 'filter: brightness(0.5);',
	'brightness-75': 'filter: brightness(0.75);',
	'brightness-90': 'filter: brightness(0.9);',
	'brightness-95': 'filter: brightness(0.95);',
	'brightness-100': 'filter: brightness(1);',
	'brightness-105': 'filter: brightness(1.05);',
	'brightness-110': 'filter: brightness(1.1);',
	'brightness-125': 'filter: brightness(1.25);',
	'brightness-150': 'filter: brightness(1.5);',
	'brightness-200': 'filter: brightness(2);',

	'contrast-0': 'filter: contrast(0);',
	'contrast-50': 'filter: contrast(0.5);',
	'contrast-75': 'filter: contrast(0.75);',
	'contrast-100': 'filter: contrast(1);',
	'contrast-125': 'filter: contrast(1.25);',
	'contrast-150': 'filter: contrast(1.5);',
	'contrast-200': 'filter: contrast(2);',

	'drop-shadow-none': 'filter: drop-shadow(0 0 #0000);',
	'drop-shadow-sm': 'filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));',
	'drop-shadow':
		'filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));',
	'drop-shadow-md':
		'filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
	'drop-shadow-lg':
		'filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));',
	'drop-shadow-xl':
		'filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));',
	'drop-shadow-2xl': 'filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));',

	grayscale: 'filter: grayscale(100%);',
	'grayscale-0': 'filter: grayscale(0);',

	'hue-rotate-0': 'filter: hue-rotate(0deg);',
	'hue-rotate-15': 'filter: hue-rotate(15deg);',
	'hue-rotate-30': 'filter: hue-rotate(30deg);',
	'hue-rotate-60': 'filter: hue-rotate(60deg);',
	'hue-rotate-90': 'filter: hue-rotate(90deg);',
	'hue-rotate-180': 'filter: hue-rotate(180deg);',

	invert: 'filter: invert(100%);',
	'invert-0': 'filter: invert(0);',

	'saturate-0': 'filter: saturate(0);',
	'saturate-50': 'filter: saturate(0.5);',
	'saturate-100': 'filter: saturate(1);',
	'saturate-150': 'filter: saturate(1.5);',
	'saturate-200': 'filter: saturate(2);',

	sepia: 'filter: sepia(100%);',
	'sepia-0': 'filter: sepia(0);',

	// Backdrop filters
	'backdrop-blur-none': 'backdrop-filter: blur(0);',
	'backdrop-blur-sm': 'backdrop-filter: blur(4px);',
	'backdrop-blur': 'backdrop-filter: blur(8px);',
	'backdrop-blur-md': 'backdrop-filter: blur(12px);',
	'backdrop-blur-lg': 'backdrop-filter: blur(16px);',
	'backdrop-blur-xl': 'backdrop-filter: blur(24px);',
	'backdrop-blur-2xl': 'backdrop-filter: blur(40px);',
	'backdrop-blur-3xl': 'backdrop-filter: blur(64px);',

	'backdrop-brightness-0': 'backdrop-filter: brightness(0);',
	'backdrop-brightness-50': 'backdrop-filter: brightness(0.5);',
	'backdrop-brightness-75': 'backdrop-filter: brightness(0.75);',
	'backdrop-brightness-90': 'backdrop-filter: brightness(0.9);',
	'backdrop-brightness-95': 'backdrop-filter: brightness(0.95);',
	'backdrop-brightness-100': 'backdrop-filter: brightness(1);',
	'backdrop-brightness-105': 'backdrop-filter: brightness(1.05);',
	'backdrop-brightness-110': 'backdrop-filter: brightness(1.1);',
	'backdrop-brightness-125': 'backdrop-filter: brightness(1.25);',
	'backdrop-brightness-150': 'backdrop-filter: brightness(1.5);',
	'backdrop-brightness-200': 'backdrop-filter: brightness(2);',

	'backdrop-contrast-0': 'backdrop-filter: contrast(0);',
	'backdrop-contrast-50': 'backdrop-filter: contrast(0.5);',
	'backdrop-contrast-75': 'backdrop-filter: contrast(0.75);',
	'backdrop-contrast-100': 'backdrop-filter: contrast(1);',
	'backdrop-contrast-125': 'backdrop-filter: contrast(1.25);',
	'backdrop-contrast-150': 'backdrop-filter: contrast(1.5);',
	'backdrop-contrast-200': 'backdrop-filter: contrast(2);',

	'backdrop-grayscale': 'backdrop-filter: grayscale(100%);',
	'backdrop-grayscale-0': 'backdrop-filter: grayscale(0);',

	'backdrop-hue-rotate-0': 'backdrop-filter: hue-rotate(0deg);',
	'backdrop-hue-rotate-15': 'backdrop-filter: hue-rotate(15deg);',
	'backdrop-hue-rotate-30': 'backdrop-filter: hue-rotate(30deg);',
	'backdrop-hue-rotate-60': 'backdrop-filter: hue-rotate(60deg);',
	'backdrop-hue-rotate-90': 'backdrop-filter: hue-rotate(90deg);',
	'backdrop-hue-rotate-180': 'backdrop-filter: hue-rotate(180deg);',

	'backdrop-invert': 'backdrop-filter: invert(100%);',
	'backdrop-invert-0': 'backdrop-filter: invert(0);',

	'backdrop-opacity-0': 'backdrop-filter: opacity(0);',
	'backdrop-opacity-5': 'backdrop-filter: opacity(0.05);',
	'backdrop-opacity-10': 'backdrop-filter: opacity(0.1);',
	'backdrop-opacity-20': 'backdrop-filter: opacity(0.2);',
	'backdrop-opacity-25': 'backdrop-filter: opacity(0.25);',
	'backdrop-opacity-30': 'backdrop-filter: opacity(0.3);',
	'backdrop-opacity-40': 'backdrop-filter: opacity(0.4);',
	'backdrop-opacity-50': 'backdrop-filter: opacity(0.5);',
	'backdrop-opacity-60': 'backdrop-filter: opacity(0.6);',
	'backdrop-opacity-70': 'backdrop-filter: opacity(0.7);',
	'backdrop-opacity-75': 'backdrop-filter: opacity(0.75);',
	'backdrop-opacity-80': 'backdrop-filter: opacity(0.8);',
	'backdrop-opacity-90': 'backdrop-filter: opacity(0.9);',
	'backdrop-opacity-95': 'backdrop-filter: opacity(0.95);',
	'backdrop-opacity-100': 'backdrop-filter: opacity(1);',

	'backdrop-saturate-0': 'backdrop-filter: saturate(0);',
	'backdrop-saturate-50': 'backdrop-filter: saturate(0.5);',
	'backdrop-saturate-100': 'backdrop-filter: saturate(1);',
	'backdrop-saturate-150': 'backdrop-filter: saturate(1.5);',
	'backdrop-saturate-200': 'backdrop-filter: saturate(2);',

	'backdrop-sepia': 'backdrop-filter: sepia(100%);',
	'backdrop-sepia-0': 'backdrop-filter: sepia(0);',
}
