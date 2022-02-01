import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["api/index.ts"],
  outDir: "./api/_build",
  noExternal: ["@remix-run/vercel"],
});
