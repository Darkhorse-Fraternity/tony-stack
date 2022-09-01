/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addComponents, theme }) {
    addComponents({
      // '.required': {},
      ".abs-center": {
        position: "absolute",
        top: "50%",
        left: "50%",
        "--transform-translate-x": "-50%",
        "--transform-translate-y": "-50%",
      },
      ".flex-center": {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
      },
      ".spinner": {
        width: "50px",
        "aspect-ratio": "1",
        "--_c": "radial-gradient(farthest-side,hsl(var(--p)) 92%,#0000)",
        background:
          "var(--_c) top,var(--_c) left,var(--_c) right,var(--_c) bottom",
        "background-size": "12px 12px",
        "background-repeat": "no-repeat",
        animation: "rotateTo5 1s infinite",
      },
      "@keyframes rotateTo5": theme("keyframes.rotateTo5"),
      ".required": {
        "&::before": {
          content: "'*'",
          "margin-left": "0.25rem",
          "font-weight": "400",
          color: "rgb(255 68 27)",
        },
      },
    });
  },
  {
    theme: {
      extend: {
        keyframes: {
          rotateTo5: {
            to: {
              transform: "rotate(.5turn)",
            },
          },
        },
      },
    },
  }
);
