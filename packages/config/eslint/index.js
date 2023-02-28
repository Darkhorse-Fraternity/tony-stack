/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "next",
    "./ts.js",
    "./base.js",
    "./import.js",
    "./sonarjs.js",
    "./unicorn.js",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  }
};
