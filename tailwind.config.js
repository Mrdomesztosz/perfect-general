/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#D62828', // Ez a piros
          dark: '#B01E1E',    // Sötétebb piros
          black: '#111111',   // Fekete
          gray: '#F3F4F6',    // Háttérszürke
          white: '#FFFFFF',
        }
      },
    },
  },
  plugins: [],
};