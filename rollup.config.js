import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';

const IS_PROD = !process.env.ROLLUP_WATCH;

const configExtension = {
  input: 'src/background/index.ts',
  output: { name: 'background', file: 'dist/background.js', format: 'umd' },
  plugins: [typescript(), commonjs(), resolve(), IS_PROD && terser()]
};

const configPopup = {
  input: 'src/popup/index.ts',
  output: {
    sourcemap: !IS_PROD,
    format: 'iife',
    name: 'app',
    file: 'dist/bundle.js'
  },
  plugins: [
    copy({ targets: [{ src: 'src/popup/index.html', dest: 'dist' }] }),
    typescript(),
    svelte({
      dev: !IS_PROD,
      css: css => {
        css.write('dist/bundle.css', false);
      }
    }),
    resolve(),
    commonjs(),
    !IS_PROD && serve({ contentBase: ['dist'], port: 1234 }),
    !IS_PROD && livereload({ watch: 'dist' }),
    IS_PROD && terser()
  ]
};

export default [configExtension, configPopup];
