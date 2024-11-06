const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    flowbite.content(),
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        burgundy: {
          DEFAULT: '#800020',
          100: '#1a0006',
          200: '#33000d',
          300: '#4d0013',
          400: '#660019',
          500: '#800020',
          600: '#cc0033',
          700: '#ff1a53',
          800: '#ff668c',
          900: '#ffb3c6',
        },
        night: {
          DEFAULT: '#12130f',
          100: '#040403',
          200: '#080806',
          300: '#0b0c09',
          400: '#0f100d',
          500: '#12130f',
          600: '#454939',
          700: '#777e63',
          800: '#a6ac95',
          900: '#d2d5ca',
        },
        floral_white: {
          DEFAULT: '#fff8f0',
          100: '#633500',
          200: '#c66a00',
          300: '#ff9c2a',
          400: '#ffca8d',
          500: '#fff8f0',
          600: '#fff9f3',
          700: '#fffbf6',
          800: '#fffcf9',
          900: '#fffefc',
        },
        primary: "bg-burgundy-500 hover:bg-burgundy-600 text-floral_white-400 transition duration-300 ease-in-out",
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
  darkMode: 'media',
};
