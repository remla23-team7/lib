const path = require('path');
const { DefinePlugin } = require('webpack');
const packageJson = require('./package.json');

module.exports = {
  mode: 'production',
  entry: './src/version_util.js',
  output: {
    filename: 'version_util.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'VersionUtil',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [
    new DefinePlugin({
      'process.env.VERSION': JSON.stringify(packageJson.version),
    }),
  ],
};
