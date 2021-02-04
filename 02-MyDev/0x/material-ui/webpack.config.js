const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader:'babel-loader'
                }
            ]
        },
        {
            test: /\.html$/i,
            use: [
                {
                    loader: 'html-loader'
                }
            ]
        }
        ],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      watchContentBase: true,
      compress: true,
      port: 9000
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
    }
};