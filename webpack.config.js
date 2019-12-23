var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

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
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: 'jquery',
                    entry: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
                    global: 'jQuery',
                    attributes: {
                        integrity: 'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=',
                        crossorigin: 'anonymous',
                    },
                },
                {
                    module: 'bootstrap',
                    entry: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                    attributes: {
                        integrity: 'sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO',
                        crossorigin: 'anonymous',
                    },
                },
                {
                    module: 'font-awesome',
                    entry: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
                    attributes: {
                        integrity: 'sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=',
                        crossorigin: 'anonymous',
                    },
                }


            ]



        }),
        

    ]
}










// var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// // const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//     entry: {
//         'main': './index.js'
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.js',
//         // chunkFilename: 'main.js',
//         // publicPath: 'https://raed-react-app.firebaseapp.com/dist/'
//     },
//     module: {
//         rules: [
//             { test: /\.(js|jsx)$/, use: 'babel-loader' },
//             {
//                 test: /\.(sa|sc|c)ss$/,
//                 use: [
//                     // {
//                     //     loader: MiniCssExtractPlugin.loader
//                     // },
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
//         // new MiniCssExtractPlugin({
//         //     filename: "main.css"
//         // })
//     ]

// }