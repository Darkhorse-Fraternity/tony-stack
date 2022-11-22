/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-monad`
  extends: ["monad/turbo"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  }
};
