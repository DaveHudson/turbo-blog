import commonJs from "@rollup/plugin-commonjs";
import jsonPlugin from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "api/api.js",
  output: {
    exports: "default",
    file: "api/index.js",
    format: "cjs"
  },
  plugins: [
    commonJs(),
    resolve({
      preferBuiltins: true,
      moduleDirectories: ["node_modules"]   
    }),    
    jsonPlugin()
  ]
};