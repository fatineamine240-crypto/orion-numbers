/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        appFont: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(343 94% 55% / 1)',
        secondary: 'hsl(343 94% 50% / 1)',
      },
    },
  },
  plugins: [],
};
