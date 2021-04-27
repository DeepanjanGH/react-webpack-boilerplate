const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.js'),
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, '..', './dist'),
        filename: 'bundle.js',
    },
    plugins: [new CleanWebpackPlugin() ,new HtmlWebpackPlugin({
        title: "Welcome to React Application",
        template: path.resolve(__dirname, '..', "./src/index.html")
    })],
    devServer: {
        contentBase: path.resolve(__dirname, '..', './dist'),
        hot: true
    },
};