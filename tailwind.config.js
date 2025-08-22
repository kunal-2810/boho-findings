/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    'tap-highlight-transparent',
  ],
  theme: {
    extend: {
      tapHighlightColor: {
        transparent: 'transparent',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.tap-highlight-transparent': {
          '-webkit-tap-highlight-color': 'transparent',
        },
        '.touch-callout-none': {
          '-webkit-touch-callout': 'none',
        },
      });
    },
  ],
};
