module.exports = {
  mode: "jit",
  content: ["index.html", "./**/*.js"],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/assets/bg.png')",
      },
    },
  },
};
