/* eslint-disable */
const webpack = require('karma-webpack');
const webpackConfig = require('./webpack.config.js');
const merge = require('webpack-merge');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// webpackConfig.entry = () => ({});

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine-jquery', 'jasmine'],

    client: {
      jasmine: {
        random: false
      }
    },

    files: [
      // 'src/js/index.js',
      // 'src/sass/*.scss',
      'tests/*spec.js',
    ],

    exclude: ['src/js/demo.js'],

    plugins: [
      webpack,
      'karma-jasmine',
      'karma-coverage',
      'karma-jasmine-jquery',
      'karma-chrome-launcher',
    ],

    preprocessors: {
      // 'src/js/*.js': ['coverage', 'webpack'],
      // 'src/sass/*.scss': ['webpack'],
      // 'src/js/index.js': ['webpack' ],
      'tests/*spec.js': ['webpack'],
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    webpack: merge(webpackConfig, {}),
    webpackMiddleware: {
      noInfo: true,
    },

    // module: {
    //
    //   rules: [
    //     {
    //       test: /\.(svg|eot|ttf|woff|woff2)$/,
    //       use:'file-loader'
    //     },
    //
    //     { // модули, обрабатывающие файлы с указанным расширением
    //       rules: [
    //
    //         {
    //           test: /\.js$/,
    //           exclude: /node_modules/,
    //           loader: 'babel-loader'
    //         },
    //
    //         {
    //           test: /\.(scss|sass)$/,
    //           use: [
    //             MiniCssExtractPlugin.loader,
    //             // генерация sourcemap в зависимости от режима сборки; для того чтобы карта сгенерировалась обязательно
    //             // нужно у обоих лоадеров: sass-loader и css-loader установить параметр sourceMap=true + прописать
    //             // свойство сборщика 'devtool: 'source-map''
    //             {
    //               loader: 'css-loader',
    //               options: {
    //                 sourceMap: false
    //               }
    //             },
    //             // {
    //             //   loader: 'postcss-loader',
    //             //   options: {
    //             //     plugins: () => [autoprefixer()]
    //             //   }
    //             // },
    //             {
    //               loader: 'sass-loader',
    //               options: {
    //                 sourceMap: false
    //               }
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // }
  });
};
