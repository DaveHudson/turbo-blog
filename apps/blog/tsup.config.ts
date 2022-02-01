import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["api/index.ts"],
  outDir: "./api/build",
  noExternal: ["@remix-run/vercel"],
});
