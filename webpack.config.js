const path = require("path"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "product", 
    entry: {
        index: './src/index.js',
      },
    //devtool: "inline-source-map", 
    devServer: {
        contentBase:"/dist"
    },
    plugins: [ 
        new HtmlWebpackPlugin( { 
            title : 'Custom template' , 
            template : './src/index.html',
            inject: 'body' 
          } ), 
        new CleanWebpackPlugin({})
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [
                    "style-loader", 
                    "css-loader"  
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, 
                type: 'asset/images',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, 
                type: 'asset/resource',
            }
        ]
    }
};
