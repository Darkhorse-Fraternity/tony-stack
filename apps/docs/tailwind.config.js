/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@monad-stack/**/src/**/*.{js,ts,jsx,tsx}",
    // "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@monad-stack/tailwind-config")],
};