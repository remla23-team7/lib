const path = require('path');
const { DefinePlugin } = require('webpack');

const version = require('./package.json').version;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'my-library.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'myLibrary',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [
    new DefinePlugin({
      'process.env.VERSION': JSON.stringify(version),
    }),
  ],
};
