/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    // '.required': {},
    ".table-align-top :where(th, td)": { verticalAlign: "top" },
    "table th:first-child": { left: "auto !important" },
  });
});
