module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
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
    themes: ['bumblebee'],
  },
};
