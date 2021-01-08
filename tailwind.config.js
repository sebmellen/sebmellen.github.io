// As of 2020-12-22, this tailwind.config.js file includes all colors
// from the Tailwind CSS color palette reference laid out in full at this
// link: https://tailwindcss.com/docs/customizing-colors#color-palette-reference.
// Note that this will increase your unpurged Tailwind CSS file size immensely,
// for me it went from 3.64MB to 7.62MB! Be sure to purge your CSS in production!

// First we import the tailwindcss/colors dependency, as referenced
// here: https://tailwindcss.com/docs/customizing-colors#curating-colors
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./**/*.html", "./**/*.js"],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      // Now we build the full color palette, using all colors available
      // as shown at this link: https://tailwindcss.com/docs/customizing-colors#color-palette-reference
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      gray: colors.gray,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
  },
  variants: {
    extend: {
      backgroundClip: ["hover", "focus"],
    },
  },
  plugins: [],
};
