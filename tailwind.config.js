/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatRTL: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-25px)' },
        },
      },
      animation: {
        floatRTL: 'floatRTL 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  
};