const Dotenv = require('dotenv-webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(css|s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: "source-map",
        plugins: [ new MiniCssExtractPlugin(), new Dotenv({
        path: path.resolve(__dirname, '..', './.env.production')
    })]
}