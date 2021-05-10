const path = require("path"); //output (costrutto di Node.js)
const HtmlWebpackPlugin = require("html-webpack-plugin");//un plugin va inserito in ingresso
const {CleanWebpackPlugin} = require("clean-webpack-plugin");//un plugin va inserito in ingresso

module.exports = {
    mode: "development", //Modalità sviluppo di Webpack per avere dei riferimenti nel dev tool
    entry: {
        index: './src/index.js',
        print: './src/print.js',
      }, //File entry point JS del progetto multiplo
    devtool: "inline-source-map", //Permette di vedere normalmente il devtool
    devServer: {
        contentBase:"/dist"
    },
    plugin: [ //Qui verranno inseriti tutti i plugin
        new HtmlWebpackPlugin(), //Può anche avere un configurazione
        new CleanWebpackPlugin({})
    ],
    output: {
        filename: '[name].bundle.js', //Nome del file JS in dist con una variabile che crea dinamicamente il no,e dei pacchetti in dist
        path: path.resolve(__dirname, "dist") //Percorso del file di output .js con il costrutto di Node.js
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Quale tipo di file
                use: [
                    "style-loader", //Il nome dei loader 
                    "css-loader"  //che gestiranno quei tipi di file
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, //Supporto integrato per le immagini
                type: 'asset/images',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, //Supporto integrato per i font
                type: 'asset/resource',
            }
        ]
    }
};