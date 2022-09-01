/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#202020',
        content: '#515151',
        contentLight: '#9a9a9a',
        contentLink: '#268bd2',
      },
    },
  },
  plugins: [],
};
