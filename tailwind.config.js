/** @type {import('tailwindcss').Config} */

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//       backgroundImage: {
//         "hero-pattern":
//           "url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1682941478/topography_y1faek.svg')",
//       },
//       colors: {
//         "cust-yellow": "#f9d816",
//         "cust-orange": "#ff6611",
//         "cust-blue": "#19397f",
//         "cust-purple": "#be0575",
//         "cust-beige": "#FDFAE2",
//         "cust-black": "#242424;",
//       },
//     },
//   },
//   plugins: [],
// };

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1682941478/topography_y1faek.svg')",
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
});
