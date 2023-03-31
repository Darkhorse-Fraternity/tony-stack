/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      parser: "@typescript-eslint/parser",
      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/eslint-recommended",
      ],

      // parserOptions: {
      //   project: ["./tsconfig.json"], // Specify it only for TypeScript files
      // },

      rules: {
        "@typescript-eslint/no-explicit-any": "error",
        camelcase: "off",
        "@typescript-eslint/naming-convention": [
          "error",
          // {
          //   selector: "default",
          //   format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
          //   filter: {
          //     regex: "^_.*$",
          //     match: false,
          //   },
          // },
          {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
          },
          {
            selector: "interface",
            format: ["PascalCase"],
            prefix: ["I"],
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
          },
          {
            selector: "memberLike",
            modifiers: ["private"],
            format: ["camelCase"],
            leadingUnderscore: "forbid",
          },
          // {
          //   selector: "variable",
          //   types: ["boolean"],
          //   format: ["PascalCase"],
          //   prefix: ["is", "should", "has", "can", "did", "will"],
          // },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports", fixStyle: "inline-type-imports" },
        ],
        "@typescript-eslint/ban-ts-comment": [
          "warn",
          {
            "ts-ignore": "allow-with-description",
          },
        ],
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
        "@typescript-eslint/ban-types": [
          "error",
          {
            types: {
              Object: {
                message:
                  "Avoid using the `Object` type. Did you mean `object`?",
              },
              Function: {
                message:
                  "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
              },
              Boolean: {
                message:
                  "Avoid using the `Boolean` type. Did you mean `boolean`?",
                fixWith: "boolean",
              },
              Number: {
                message:
                  "Avoid using the `Number` type. Did you mean `number`?",
                fixWith: "number",
              },
              Symbol: {
                message:
                  "Avoid using the `Symbol` type. Did you mean `symbol`?",
                fixWith: "symbol",
              },
              String: {
                message:
                  "Avoid using the `String` type. Did you mean `string`?",
                fixWith: "string",
              },
              "{}": {
                message: "Use Record<K, V> instead",
                fixWith: "Record<K, V>",
              },
              object: {
                message: "Use Record<K, V> instead",
                fixWith: "Record<K, V>",
              },
            },
          },
        ],
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/no-angle-bracket-type-assertion": "off",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "warn",
        "@typescript-eslint/no-duplicate-enum-values": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/consistent-indexed-object-style": "error",
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-require-imports": "error",
        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-use-before-declare": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
          "error",
          "single",
          {
            avoidEscape: true,
            allowTemplateLiterals: true,
          },
        ],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-duplicate-imports": ["error"],
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-expressions": ["error"],
      },
    },
  ],
}
