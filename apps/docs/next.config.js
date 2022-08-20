const moduls = ["@monad-stack/ui","@monad-stack/utils"]
const withTM = require("next-transpile-modules")(moduls);

module.exports = withTM({
  reactStrictMode: true,
});
