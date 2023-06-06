/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        lightThem: {
          "primary": "#4A89DC",
          "secondary": "#5E9DEE",
          "accent": "#74bde0",
          "neutral": "#28282B ",
          "error" : "#EE0C36",
          "base-100": "#eaebed",
        },
      },
      "forest",
    ],
  },

  plugins: [require("daisyui")],
}

