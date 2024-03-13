
const chroma = require('chroma-js');

function generatePalette(numColors, scheme) {
    const colors = chroma.scale(scheme).colors(numColors);
    return colors.map(color => color.hex());
}

// Example usage:
const numColors = 5;
const scheme = 'viridis'; // Example color scheme, you can use any supported by Chroma.js

const palette = generatePalette(numColors, scheme);
console.log('Generated Palette:', palette);