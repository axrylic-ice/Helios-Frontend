module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        surface: "#151515",
        card: "rgba(21,21,21,0.5)",
        border: "rgba(79,69,56,0.15)",

        gold: "#F3BE68",
        goldDark: "#C29241",

        green: "#43E188",
        textPrimary: "#E5E2E1",
        textSecondary: "#D3C4B2",
        danger: "#93000A",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        serif: ["IBM Plex Serif", "serif"],
      },
      borderRadius: {
        xl2: "16px",
        xl3: "24px",
        xl4: "48px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
        glow: "0 0 40px rgba(243,190,104,0.15)",
      },

      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
