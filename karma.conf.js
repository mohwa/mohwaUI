/**
 * Created by mohwa on 2018. 5. 25..
 */

const path = require('path');
//const testPath = path.join(__dirname, 'test');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        reporters: ['progress'],
        webpack: {
            //devtool: 'inline-source-map',
            module: {
                rules: [
                {
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
                }]
            }
        },
        frameworks: ['mocha'],
        files: [
            './test/**/*.spec.js'
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            // 카르마에서 웹팩 트랜스파일링을 사용할 수 있게 해주는 플러그인
            'karma-webpack',
            'karma-growl-reporter'
        ],
        preprocessors: {
            './test/**/*.spec.js': ['webpack']
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage'
        },
        webpackMiddleware: {
            //please don't spam the console when running in karma!
            noInfo: true
        },
        singleRun: false
    });
};