const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],

            },
            {
                test: /\.(png|jpeg|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],

    },
};