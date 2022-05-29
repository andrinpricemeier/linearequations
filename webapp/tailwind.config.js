const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"xkcdScript", "xkcd Script"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#080c10",
        white: "#ffffff",
        green: "#265c5a",
        blue: "#117abb",
        red: "#d55465",
      },
    },
  },
  plugins: [],
};
