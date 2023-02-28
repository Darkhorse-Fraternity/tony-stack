/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@monad-stack/**/src/**/*.{js,ts,jsx,tsx}",
    // "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
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
