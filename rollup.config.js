import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  dest: 'index.bundle.js',
  format: 'iife',
  plugins: [commonjs({
    include: 'request-base.js'
  })]
};
