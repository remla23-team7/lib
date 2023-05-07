const path = require('path');
const VersionUtil = require('./src/version_util');

const packageJson = require('./package.json');
const version = packageJson.version;

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
    // Define the version number as a global variable
    {
      apply: (compiler) => {
        compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
          compilation.hooks.optimizeChunkAssets.tap('MyPlugin', (chunks) => {
            for (const chunk of chunks) {
              for (const file of chunk.files) {
                if (file === 'version_util.js') {
                  const source = compilation.assets[file].source();
                  const result = source.replace(
                      'new VersionUtil();',
                      `new VersionUtil('${version}');`
                  );
                  compilation.assets[file] = {
                    source: () => result,
                    size: () => result.length,
                  };
                }
              }
            }
          });
        });
      },
    },
  ],
};
