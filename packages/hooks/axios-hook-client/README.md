
This package is an extension to daisyui 

install base depends
```bash
pnpm i  tailwindcss postcss autoprefixer daisyui
```

set the tailwind config

```json
{
  content: [
    ...,
    "./node_modules/@monad-stack/**/*.{js,ts,jsx,tsx}",
  ],
  ...,
  plugins: [
    ...,
    require("daisyui"),
    require("tailwindcss-animate"),
  ],
}

```