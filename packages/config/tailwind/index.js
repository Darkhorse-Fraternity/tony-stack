/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwindcss-animate"),
    require("@monad-stack/tailwindcss-plugins"),
    require("@monad-stack/tailwindcss-plugins/daisyui-extends"),
  ],
  themes: ["winter"],
  daisyui: {
    themes: ["winter"],
    darkTheme: "forest",
  },
}
