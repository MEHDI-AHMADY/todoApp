/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : "poppins",
        "poppinsMedium" : "poppins Medium",
        "poppinsSemiBold" : "poppins SemiBold",
        "poppinsBoldItalic" : "poppins BoldItalic"
      },
    },
  },
  plugins: [],
}

