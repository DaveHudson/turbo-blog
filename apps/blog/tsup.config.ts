import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["api/index.ts"],
  outDir: "./api",
});

// entryPoints: {
//   foo: 'index.js',
//   'bar/baz': 'bar/index.js',
// },