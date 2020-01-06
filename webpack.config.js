const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                include: path.join(__dirname, './'),
            }
        ]
    },
    plugins: [],
    entry: {
        index: './index.ts',
    },
    output: {
        filename: 'webStorage.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'WebStorage',
        libraryTarget: 'umd',
        libraryExport: "default",
    }
}
