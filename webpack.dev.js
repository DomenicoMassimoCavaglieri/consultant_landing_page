const path = require("path");
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "./assets/[name].[hash].[ext]",
        clean: true
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Custom template',
    //         template: "./src/template.html",
    //         inject: 'body'
    //     }),
    // ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    }
});
