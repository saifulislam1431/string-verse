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
          "primary": "#3b7197",
          "secondary": "#4a8db7",
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

