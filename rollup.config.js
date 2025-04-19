import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

// Explicitly configure Babel to handle JSX
const babelOptions = {
  babelHelpers: 'bundled',
  presets: [
    ['@babel/preset-react', {
      runtime: 'automatic' // This is crucial for JSX in .js files
    }]
  ],
  extensions: ['.js', '.jsx']
};

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs({
      include: /node_modules/,
      extensions: ['.js']
    }),
    babel(babelOptions),
    terser()
  ]
};