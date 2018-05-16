/**
 * Created by mohwa on 2018. 2. 14..
 */

const path = require('path');
const fs = require('fs');

const webpack = require('webpack');

const {Config, environment} = require('webpack-config');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const envConfig = environment.get('config');

const rootPath = path.join(__dirname, '..');

const srcPath = path.join(rootPath, 'src');
const buildPath = path.join(rootPath, 'dist');

const entry = path.join(srcPath, 'entry');

const config = {
    entry: {
        "mohwa-ui": entry,
        "mohwa-ui.min": entry
    },
    module: {
        rules: [
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                {
                    loader: 'css-loader',
                    options: {minimize: true}
                }, 'sass-loader']
            })
        }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            include: /\.min\.js$/
        }),
        new ExtractTextPlugin('[name].css')
    ]
};

module.exports = new Config().extend(path.join(__dirname, 'webpack.base.config.js')).merge(config);