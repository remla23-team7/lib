const path = require('path');

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
        },
        resolve: {
            extensions: ['.ts', '.js', '.d.ts'],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
    };
};
