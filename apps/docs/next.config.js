const moduls = ["@monad-stack/daisy-hot-toast", "@monad-stack/utils"];
const withTM = require("next-transpile-modules")(moduls);

module.exports = withTM({
  reactStrictMode: true,
});
