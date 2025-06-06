/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // You can safely extend with more utilities here
      animation: {
        'slow-spin': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [
    // Scrollbar hiding utility
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
}
