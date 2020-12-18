const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
console.log('IS DEV:', isDev);

module.exports = {
    optimization: {
        minimizer: [new TerserWebpackPlugin({}), new OptimizeCssAssetsWebpackPlugin({})],
    },    
    devtool: isDev ? 'source-map' : undefined,
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 1308,
        hot: isDev
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                          hmr: isDev,
                          reloadAll: true
                      },
                    },
                    'css-loader'
                  ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
              },
            {
                test: /\.(jpg|png|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                          hmr: isDev,
                          reloadAll: true
                      },
                    },
                    'css-loader',
                    'sass-loader'
                  ],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }

        ]
    }
}