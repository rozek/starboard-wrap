import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import {terser} from 'rollup-plugin-terser';

const pkg = require("./package.json");

export default {
  input: `dist/lib/index.js`,
  output: [
    {file: 'dist/index.js', format: 'es'},
    {file: 'dist/index.min.js', format: 'es', plugins: [terser()]},
    {file: 'dist/index.cjs', format: 'cjs'},
    {file: 'dist/index.iife.js', format: 'iife', name: "starboardWrap"}
  ],
  plugins: [
    replace({"__STARBOARD_WRAP_VERSION__": pkg.version}),
    resolve(),
    commonjs(),
  ]
};
