import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";

// export default {
//   input: "api/api.js",
//   output: {
//     exports: "default",
//     file: "api/index.js",
//     format: "cjs"
//   },
//   plugins: [
//     nodeResolve({ preferBuiltins: true}),
//     commonJs(),
//     resolve({
//       moduleDirectories: ["node_modules"]
//     }),
//     jsonPlugin()
//   ]
// };

export default {
  input: "api/api.js",
  output: {
    file: "api/index.js",
    format: 'esm'
  },
    plugins: [
    nodeResolve({ preferBuiltins: true}),
    resolve({
      moduleDirectories: ["node_modules"]
    }),
  ]
};