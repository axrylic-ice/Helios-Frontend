module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
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
    },
  },
  plugins: [],
};