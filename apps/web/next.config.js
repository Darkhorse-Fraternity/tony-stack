const withTM = require("next-transpile-modules")(["@monad-stack/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
