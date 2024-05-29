/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E6DDBC",
          200: "#c8bf9f",
          300: "#847c5e",
        },
        accent: {
          100: "#822626",
          200: "#ffb4a9",
        },
        color: {
          100: "#525252",
          200: "#7e7e7e",
        },
        dark: {
          100: "#262525",
          200: "#353434",
          300: "#4e4d4d",
        },
      },
    },
  },
  plugins: [],
};