/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["prettier", "eslint:recommended"],
  overrides: [
    {
      extends: ["monad/turbo"],
      parser: "@typescript-eslint/parser",
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        ecmaVersion: 6,
        tsconfigRootDir: __dirname,
        project: [
          "./tsconfig.json",
          "./apps/*/tsconfig.json",
          "./packages/**/*/tsconfig.json",
        ],
      },
    },
  ],
  root: true,
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    ".eslintrc.js",
    "**/*.config.js",
    "**/*.config.cjs",
    "packages/config/**",
  ],
}

module.exports = config
