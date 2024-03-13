````markdown
# Color Palette Generator

This npm package allows you to generate color palettes in JavaScript based on the number of colors and desired color scheme using the `chroma-js` library.

## Installation

To install the package, use npm:

```bash
npm install color-palette-generator
```

## Usage

```javascript
const ColorPaletteGenerator = require('color-palette-generator');

// Define the number of colors in the palette
const numColors = 5;

// Define the color scheme (e.g., 'viridis', 'cool', 'warm', etc.)
const scheme = 'viridis';

// Generate the color palette
const palette = ColorPaletteGenerator.generatePalette(numColors, scheme);

console.log('Generated Palette:', palette);
```

## API

### `generatePalette(numColors, scheme)`

Generates a color palette with the specified number of colors and color scheme.

- `numColors`: The number of colors in the palette.
- `scheme`: The desired color scheme (e.g., 'viridis', 'cool', 'warm', etc.).

Returns an array of hex values representing the colors in the palette.

## Supported Color Schemes

The following color schemes are supported by default:
- viridis
- inferno
- magma
- plasma
- warm
- cool
- rainbow
- sinebow
- turbo
- turbo_r

For more information about color schemes, refer to the Chroma.js documentation.

## License

This package is licensed under the MIT License.