const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path')

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.(css|s(a|c)ss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
                use: {
                  loader: 'url-loader',
                },
            },
        ]
    },
    plugins: [new Dotenv({
        path: path.resolve(__dirname, '..', './.env.development')
    }) ,new webpack.HotModuleReplacementPlugin()]
}
