const colors = require('tailwindcss/colors');

// Setting some custom names
colors.popupsbg = colors.white;
colors.neutral = colors.slate;
colors.primary = colors.indigo;
colors.primarytxt = colors.white;
colors.warning = colors.yellow;
colors.warningtxt = colors.black;
colors.error = colors.red;
colors.errortxt = colors.white;

module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.tsx',
        './public/index.html',
    ],
    theme: {
        extend: {},
        colors,
    },
    variants: {},
    plugins: [],
};
