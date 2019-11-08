var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var FileManagerPlugin = require('filemanager-webpack-plugin');
module.exports = {
    entry: {
        index:'./src/index.js',
        // app: './src/app.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname,'build'),
        // publicPath:'/assets'//现在不需要
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        }),
        new FileManagerPlugin({
            onStart:{
                delete:['build']
            }
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            chunks:['index'],//分别引入对应的js
            template:'./public/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     filename:'app.html',
        //     chunks:['app'],
        //     template:'./public/index.html'
        // }),
    ],
    devServer:{
        port: 3000
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'images/[name].[ext]'
                    }
                }
            },
            {
                test:/\.js$/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    }
}