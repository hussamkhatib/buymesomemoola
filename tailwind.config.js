module.exports = {
  purge: ['./pages/**/*.jsx', '.src/components/**/*.jsx'],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'max-content 1fr max-content',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
};
