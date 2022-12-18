const path = require('path');

module.exports = {
    entry: {
        app: './src/assets/js/index.js'
    },
    output: {
        clean: true,
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        static: './src',
        compress: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /|
            }
        ]
    }

};