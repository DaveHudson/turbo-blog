import {nodeResolve} from "@rollup/plugin-node-resolve";
import path from "path";

export default {
  input: 'api/api.js',
  output: {
    file: 'api/index.js',
  },
  plugins: [
    nodeResolve({
      preferBuiltins: true,
      rootDir: path.join(process.cwd(), '../..'),
      moduleDirectories: ['node_modules'],
      exportConditions: ['node']
    })
  ],
};
