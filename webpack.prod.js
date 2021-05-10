const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: "./src/template.html",
            inject: 'body'
        }),
    ],
});
