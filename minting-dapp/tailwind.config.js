const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.stone[200],
        },
        titles: colors.indigo[600],
        links: {
          txt: colors.stone[600],
          hover_txt: colors.indigo[700],
        },
        loading_spinner: colors.indigo[500],
        // popups include 1) the wallet address grid 2) total price column, 3) mint amount column, 
        // 4) borders applies to wallet address and mint div's
        popups: {
          bg: colors.stone[400],
          txt: colors.stone[800],
          internal_border: colors.stone[500],
        },
        warning: {
          txt: colors.slate[800],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs - inlude '-' an '+'
        btn: {
          txt: colors.slate[800],
          bg: colors.stone[400],
          border: colors.stone[400],
          hover_txt: colors.slate[800],
          hover_bg: colors.stone[500],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.white,
          bg: colors.green[500],
          border: colors.indigo[500],
          hover_txt: colors.white,
          hover_bg: colors.green[600],
          hover_border: colors.green[600],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        // applies to wallet/supply div
        label: colors.stone[600],
        txt_input: {
          txt: colors.stone[800],
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.stone[600],
          focus_bg: colors.slate[50],
          focus_border: colors.indigo[300],
          placeholder_txt: colors.stone[600],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.indigo[100],
        },

        // Mint widget the preview column
        token_preview: colors.stone[400],
      },
    },
  },
  variants: {},
  plugins: [],
};
