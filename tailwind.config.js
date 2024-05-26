/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: "#daa520",
      },
      fontFamily: {
        poppin: '"Poppins", sans-serif',
      },
    },
  },
  plugins: [],
};
