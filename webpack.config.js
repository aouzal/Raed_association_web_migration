var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: ["babel-polyfill", './index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        chunkFilename: 'main.js',
         publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader',
                

            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },

                ]
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.(png|jpe?g|gif|svg|cur)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'img'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
      },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),        
    ]
}










// var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
//  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//     entry: {
//         'main': './index.js'
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.js',
//         // chunkFilename: 'main.js',
//          publicPath: '/'
//     },
//     module: {
//         rules: [
//             { test: /\.(js|jsx)$/, use: 'babel-loader' },
//             {
//                 test: /\.(sa|sc|c)ss$/,
//                 use: [
//                     {
//                         loader: MiniCssExtractPlugin.loader
//                     },
//                     {
//                         loader: "css-loader",
//                     },
//                     // {
//                     //     loader: "postcss-loader"
//                     // },
//                     {
//                         loader: "sass-loader",
//                         options: {
//                             implementation: require("sass")
//                         }
//                     }
//                 ]
//             },
//             { test: /\.json$/, loader: 'json-loader' },
//             {
//                 test: /\.(png|jpe?g|gif|svg|cur)$/,
//                 use: [
//                     {
//                         loader: "file-loader",
//                         options: {
//                             outputPath: 'img'
//                         }
//                     }
//                 ]
//             },
//             {
//                 test: /\.(woff|woff2|ttf|otf|eot)$/,
//                 use: [
//                     {
//                         loader: "file-loader",
//                         options: {
//                             outputPath: 'fonts'
//                         }
//                     }
//                 ]
//             }

//         ]
//     },

//     mode: 'development',
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './index.html'
//         }),
//         new MiniCssExtractPlugin({
//             filename: "main.css"
//         })
//     ]

// }