const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./hugo_stats.json", "./layouts/**/*.html"],
  darkMode: "class",
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "3xl": "1792px",
      },
      backgroundImage: {
        'background-texture': "url('/images/escheresque_ste.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
