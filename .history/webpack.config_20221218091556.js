const path = require('path');

module.exports = {
    entry: {
        app: './src/assets/js/index.js'
    },
    output: {
        clean: true,
        filename: '[name].bundle.js',
        path: path.resolve(__dirname)
    }
};