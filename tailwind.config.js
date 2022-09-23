/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ffc584",

          "secondary": "#fc198a",

          "accent": "#e5a07b",

          "neutral": "#1E212E",

          "base-100": "#F8F9FC",

          "info": "#7CA7DF",

          "success": "#26A691",

          "warning": "#F3B61B",

          "error": "#F94F39",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
