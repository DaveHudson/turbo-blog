import commonJs from "@rollup/plugin-commonjs";
import jsonPlugin from "@rollup/plugin-json";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "api/index.js",
  output: {
    exports: "default",
    file: "api/index.js",
    format: "cjs"
  },
  plugins: [
    nodeResolve({ preferBuiltins: true}),
    commonJs(),
    resolve({
      moduleDirectories: ["node_modules"]
    }),
    jsonPlugin()
  ]
};