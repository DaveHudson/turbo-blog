import commonJs from "@rollup/plugin-commonjs";
import jsonPlugin from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "api/api.js",
  output: {
    exports: "default",
    file: "api/index.js",
    format: "cjs"
  },
  plugins: [
    nodeResolve({ preferBuiltins: true, moduleDirectories: ["@remix-run/vercel"] }),
    commonJs(),
    jsonPlugin()
  ]
};