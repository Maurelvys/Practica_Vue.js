const path = require('path');

module.exports = {
    entry: './src/bases/01-const-let.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};