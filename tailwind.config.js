/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1E2022",
          200: "#34373b",
          300: "#F0F5F9",
        },
        accent: {
          100: "#788189",
          200: "#e1e4e6",
        },
        color: {
          100: "#1E2022",
          200: "#52616B",
        },
        dark: {
          100: "#F0F5F9",
          200: "#C9D6DF",
          300: "#bfc7d1",
        },
      },
    },
  },
  plugins: [],
};