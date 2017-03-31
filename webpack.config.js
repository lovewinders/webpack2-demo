/**
 * Title:
 * Description:
 * Author: admin-zhangb
 * Email: lovewinders@163.com
 * Date: 2017/3/29 17:25
 *
 */
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    context: __dirname,
    entry: ['./src/app.js'],
    output: {
        //path: __dirname + 'dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['latest']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    /*{
                        loader: 'poss-loader'
                    },*/
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {//['style-loader','css-loader','postcss-loader']
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')({
                                        browsers: ['last 20 versions']
                                    })
                                ]
                            }
                        }
                    }
                ]
            },{
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },{
                test: /\.(png|jpg|gif|svg)/i,
                use: [
                    {
                        loader: 'file-loader?name=[name]-[hash:4].[ext]&publicPath=image/&outputPath=image/'
                        //loader: 'url-loader?limit=2000&name=[name]-[hash:4].[ext]&outputPath=image/'
                    },
                    {
                        loader: 'image-webpack-loader?bypassOnDebug'
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
};