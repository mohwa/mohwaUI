/**
 * Created by mohwa on 2018. 5. 25..
 */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (config) {

    config.set({
        browsers: ['Chrome'],
        reporters: ['spec'],
        webpack: {
            //devtool: 'inline-source-map',
            devtool: 'source-map',
            module: {
                rules: [{
                    test: /\.js$/,
                    include: ['test'],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['es2015'],
                            plugins: ['transform-runtime']
                        }
                    }
                },
                {
                    test: /\.html$/,
                    exclude: path.join(__dirname, 'index.html'),
                    use: {
                      loader: 'html-loader'
                    }
                }]
            }
        },
        frameworks: ['mocha'],
        files: [
            'test/**/*.spec.js',
            'src/assets/sass/*.scss'
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-safari-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            // 카르마에서 웹팩 트랜스파일링을 사용할 수 있게 해주는 플러그인
            'karma-webpack',
            'karma-spec-reporter',
            'karma-scss-preprocessor'
        ],
        preprocessors: {
            'test/**/*.spec.js': ['webpack', 'sourcemap'],
            'src/assets/sass/*.scss': ['scss']
        },
        //coverageReporter: {
        //    type: 'html',
        //    dir: 'coverage'
        //},
        webpackMiddleware: {
            //please don't spam the console when running in karma!
            noInfo: true
        },
        singleRun: false
    });
};