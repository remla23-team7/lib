const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = (env) => {
  const version = env && env.VERSION ? env.VERSION : '0.0.1';

  return {
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
        'process.env.VERSION': JSON.stringify(version),
      }),
    ],
  };
};
