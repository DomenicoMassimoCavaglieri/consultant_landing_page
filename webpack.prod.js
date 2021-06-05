const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "./images/[name].[hash].[ext]",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: "./src/template.html",
            inject: 'body',

            // 'meta': {
            //     'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
            //     //<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

            //     'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', 'content': 'default-src https:' },
            //     //<meta http-equiv="Content-Security-Policy" content="default-src https:">

            //     'og:image': { 'property': 'og:image', 'content': '../src/assets/images/open_graph_image.jpg' },
            //     //<meta property="og:image" content="../src/assets/images/open_graph_image.jpg">

            //     'twitter:image': '../src/assets/images/open_graph_image.jpg'
            //     //<meta name="twitter:image" content="../src/assets/images/open_graph_image.jpg">
            // }

        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'postcss-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                fiber: require("fibers"),
                            },
                        },
                    },
                ]
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                title: 'Custom template',
                template: "./src/template.html",
                inject: 'body'
            }),
        ],
    }
});
