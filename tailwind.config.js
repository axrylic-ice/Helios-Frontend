module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
 theme: {
    extend: {
      colors: {
        bg: "#0E0E0E",
        surface: "#151515",
        card: "rgba(21,21,21,0.5)",
        border: "rgba(79,69,56,0.15)",

        gold: "#F3BE68",
        goldDark: "#C29241",

        green: "#43E188",
        textPrimary: "#E5E2E1",
        textSecondary: "#D3C4B2",
        danger: "#93000A"
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      borderRadius: {
        xl2: "16px",
        xl3: "24px",
        xl4: "48px"
      }
    }
  },
  plugins: [],
};