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
      colors: {      
        'light': "#FAFAFA",
        'dark': "#303131", 
      },
      textColor: {
        "light": "#111827",
        "light-accent": "#6B7280",
        "dark": "#D1D1D1",
        "dark-accent": "#A5A7AD",
      }
    },
  },
  variants: {},
  plugins: []
};