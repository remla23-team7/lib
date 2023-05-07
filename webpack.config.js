const path = require('path');
const { DefinePlugin } = require('webpack');
const packageJson = require('./package.json');

module.exports = {
  entry: './src/version_util.js',
  output: {
    filename: 'version_util.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'VersionUtil',
    libraryTarget: 'umd',
  },
  plugins: [
    new DefinePlugin({
      VERSION: JSON.stringify(packageJson.version),
    }),
  ],
  target: 'node',
  mode: 'production',
};
