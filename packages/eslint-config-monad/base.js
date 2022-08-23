module.exports = {
  plugins: ["@typescript-eslint", "prettier", "unused-imports"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "prefer-template": 1,
    "react/self-closing-comp": "warn",
    "no-console": "error",
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
