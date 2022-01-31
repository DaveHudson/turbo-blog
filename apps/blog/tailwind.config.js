const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  darkMode: "media",
  content: ["./app/**/*.{ts,tsx,jsx,js}", "../../node_modules/ui/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: []
};