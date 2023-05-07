import path from 'path';

module.exports = (env) => {
  return {
    mode: 'production',
    entry: './src/version_util.js',
    output: {
      filename: 'version_util.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'VersionUtil',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    }
  };
};
