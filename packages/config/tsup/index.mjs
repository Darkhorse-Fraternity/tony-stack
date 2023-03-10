import { defineConfig } from "tsup"


export default defineConfig((options) => ({
  minify: !options.watch,
  entry: ["./index.ts"],
  format: ["esm", "cjs"],
  clean: true,
  dts: true,
  sourcemap:true,
  external: ["react", "react-dom"],
}))
