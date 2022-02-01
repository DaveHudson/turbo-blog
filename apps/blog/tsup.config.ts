import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["api/index.ts"],
  outDir: "./api",
  noExternal: ["../../node_modules/@remix-run/vercel"],
});
