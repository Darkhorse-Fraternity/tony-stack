/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "./next.js",
    "./ts.js",
    "./base.js",
    "./import.js",
    "./sonarjs.js",
    "./unicorn.js",
  ]
};
