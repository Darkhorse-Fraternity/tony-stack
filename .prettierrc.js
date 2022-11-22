/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 80,
  singleQuote: false,
  semi: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  // tailwindConfig: "./packages/tailwind-config", // Make an error
};