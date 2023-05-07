import path from 'path';
import { DefinePlugin } from 'webpack';
import packageJson from './package.json';

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
