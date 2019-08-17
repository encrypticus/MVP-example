/* eslint-disable */
// const merge = require('webpack-merge'); // объединяет массивы и объекты конфигураций из нескольких файлов-модулей
// const pug = require('./webpack/loaders/pug'); // модуль обработки pug-файлов
// const sass = require('./webpack/loaders/sass'); // модуль обработки sass|scss-файлов
// const miniCssExtractPlugin = require('./webpack/plugins/miniCssExtractPlugin'); // плагин обработки css-файлов
// const sourceMap = require('./webpack/options/sourceMap'); // опция генерации карты кода
// const optimization = require('./webpack/options/optimization'); // опция оптимизации css- js-кода
// const watch = require('./webpack/options/watch'); // опция наблюдения за файлами для пересборки
// const font = require('./webpack/loaders/font'); // модуль обработки файлов шрифтов
// const htmlWebpackPlugin = require('./webpack/plugins/htmlWebpackPlugin');// модуль генерирует html-файл в папке сборки
// const cleanWebpackPlugin = require('./webpack/plugins/cleanWebpackPlugin'); // модуль очищает папку сборки перед пересборкой
// const styleLintPlugin = require('./webpack/plugins/styleLintPlugin'); // линтер стилевых файлов
// const browserSync = require('./webpack/plugins/browserSyncPlugin'); // в комментариях не нуждается
// const jquery = require('./webpack/plugins/jquery'); // плагин, добавляющий jquery в проект
// const css = require('./webpack/loaders/css'); // модуль обработки css-файлов
// const image = require('./webpack/loaders/image'); // модуль обработки файлов изображений
// const video = require('./webpack/loaders/video'); // модуль обработки видеофайлов
// const copyWebpackPlugin = require('./webpack/plugins/copyWebpackPlugin'); // плагин копирования файлов

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

// функция вторым аргументом принимает args.mode от прописанных в package.json скриптов: args.mode = development или args.mode = production
// module.exports = (env, args) => {
//
//   if (args.mode !== 'development' && args.mode !== 'production') {
//     args.mode = 'development';
//   }
//
//   let mode = 'development';
//   let isDev = mode === args.mode; // флаг, указывающий режим сборки
//
//   // точки входа
//   const config = merge({
//         entry: {
//           'index': './src/js/index.js',
//         },
//
//         output: { // точка выхода
//           filename: '[name].js', // имя выходного js-файла
//           path: path.resolve(__dirname, 'dist'), // директория, в которой будет лежать выходной файл
//         },
//
//         module: { // модули, обрабатывающие файлы с указанным расширением
//           rules: [
//
//             {
//               test: /\.js$/,
//               exclude: /node_modules/,
//               loader: 'babel-loader'
//             },
//           ]
//         }
//       },
//       cleanWebpackPlugin(),
//       miniCssExtractPlugin(),
//       optimization(),
//       watch(),
//       font(),
//       image(),
//       video(),
//       pug(isDev),
//       sass(isDev),
//       copyWebpackPlugin([{from: 'src/favicons', to: 'favicons'}]),
//       htmlWebpackPlugin({filename: 'index.html', template: 'src/pages/index.pug', inject: false}),
//       styleLintPlugin(),
//       env.browserSync === 'open' ? browserSync() : {},
//       jquery()
//   );
//
//   if (isDev) { // в режиме разработки
//     return merge(
//         config,
//         sourceMap()
//     );
//   }
//
//   if (!isDev) { // в режиме продакшн
//     return merge(
//         config
//     );
//   }
// };
module.exports = {
  entry: {
    'index': './src/js/index.js',
  },

  output: { // точка выхода
    filename: '[name].js', // имя выходного js-файла
    path: path.resolve(__dirname, 'dist'), // директория, в которой будет лежать выходной файл
  },

  devtool: 'source-map',

  watch: true,

  module: { // модули, обрабатывающие файлы с указанным расширением
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.scss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true},
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        exclude: /img/,
        use: [
          {
            loader: 'file-loader',
            options: {name: './fonts/[name].[ext]'}
          }
        ]
      },

      {
        test: /\.(png|gif|jpg|jpeg|svg)$/,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {name: './img/[name][hash:7].[ext]'}
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          }
        ]
      },

      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'video:poster', 'video:src']
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              exports: false
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({filename: 'styles.css', chunkFilename: '[id].css'}),
    new CleanWebpackPlugin('dist', {root: process.cwd(), exclude: ['.git']}),
    new HtmlWebpackPlugin({filename: 'index.html', template: 'src/pages/index.pug', inject: false}),
    new CopyWebpackPlugin([{from: 'src/favicons', to: 'favicons'}]),
    new StyleLintPlugin({
      context: './',
      fix: true,
      files: ['**/*.scss', '**/*.css'],
      quiet: false,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};
