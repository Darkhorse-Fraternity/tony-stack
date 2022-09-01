module.exports = {
  plugins: ["@typescript-eslint", "prettier", "unused-imports"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    camelcase: "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: "function",
        format: ["PascalCase", "camelCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase", "UPPER_CASE"],
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
    ],
    "prefer-template": 1,
    "no-param-reassign": "error",
    "react/self-closing-comp": "warn",
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
