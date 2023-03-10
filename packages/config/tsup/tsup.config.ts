import { defineConfig } from "tsup"

export default defineConfig((options) => ({
  minify: !options.watch,
  entry: ["./index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap:true,
}))
