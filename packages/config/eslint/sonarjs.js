/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:sonarjs/recommended"],
  plugins: ["sonarjs"],
  rules: {
    "sonarjs/no-duplicate-string": "off",
  },
};
