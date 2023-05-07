/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "cust-yellow": "#f9d816",
        "cust-orange": "#ff6611",
        "cust-blue": "#19397f",
        "cust-purple": "#be0575",
        "cust-beige": "#FDFAE2",
        "cust-black": "#242424;",
      },
    },
  },
  plugins: [],
}

