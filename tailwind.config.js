module.exports = {
  purge: ['./pages/**/*.jsx', '.src/components/**/*.jsx'],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'max-content 1fr max-content',
      },
      height: {
        hero: '32rem',
        creatorCard: 'calc(100% - 200px)',
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
