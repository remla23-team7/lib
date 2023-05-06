const path = require('path');

module.exports = {
  entry: './src/version_util.js',
  output: {
    filename: 'version_util.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'VersionUtil',
    libraryTarget: 'umd',
  },
  mode: 'production',
};
