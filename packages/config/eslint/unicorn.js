/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:unicorn/recommended"],
  plugins: ["unicorn"],
  rules: {
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-null": "off",
    "unicorn/no-static-only-class": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/no-nested-ternary": "off",
  },
}
