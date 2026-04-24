/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#F3BE68",
        surface: "#080808",
        text: "#E5E2E1",
      },
      borderRadius: {
        card: "16px",
        pill: "30px",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};