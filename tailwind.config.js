/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1700px",
      },
    },
    screens: {
      xs: "1px",
      ...defaultTheme.screens,
    },
    minHeight: {
      96: "376px",
    },
    extend: {},
  },
  plugins: [],
};
