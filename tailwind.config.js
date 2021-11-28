module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.jsx', './src/**/*.jsx'],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'max-content 1fr max-content',
      },
      padding: {
        twenty: '20%',
        fifty: '50%',
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
    themes: ['bumblebee'],
  },
};
