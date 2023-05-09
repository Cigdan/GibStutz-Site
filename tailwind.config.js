/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'cat': "url('./images/cat.png')",
    },
    extend: {
      colors:  {
        "gs-50": "#000000",
        "gs-100": "#394867",
        "gs-200": "#212A3E",
        "gs-300": "#9BA4B5",
        "gs-400": "#F1F6F9",

      }
    }
  },
  plugins: [require("daisyui")],
}
