/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'cat': "url('./images/cat.png')",
    },
    extend: {
      colors:  {
        "gs-50": "#0D1B2A",
        "gs-100": "#1B263B",
        "gs-200": "#415A77",
        "gs-300": "#778DA9",
        "gs-400": "#E0E1DD",

      },
      aspectRatio: {
        '16/11': '16 / 11',
      },

    }
  },
  plugins: [require("daisyui")],
}
