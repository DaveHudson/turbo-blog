import {nodeResolve} from "@rollup/plugin-node-resolve";

export default {
  input: 'api/api.js',
  output: {
    file: 'api/index.js',
    format: 'cjs'
  },
  plugins: [nodeResolve()]
};
