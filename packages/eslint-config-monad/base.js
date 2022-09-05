module.exports = {
  plugins: ["prettier", "unused-imports"],
  extends: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
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
