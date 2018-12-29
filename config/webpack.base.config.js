const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../main.js')
  },
  output: {
    path: path.resolve(__dirname, '../static'),
    // path: './static',
    filename: 'js/[name].[hash:4].js',
    chunkFilename: 'js/[name].[hash:4].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              // plugins: ['@babel-']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // { loader: 'style-loader'},
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            // options: {
            //     ident: 'postcss',
            //     plugins: [
            //         require('postcss-import')(),
            //         require('postcss-preset-env')(),
            //         require('cssnano')()
            //     ]
            //     // plugins: (loader) => [
            //     //   require('postcss-import')({ root: loader.resourcePath }),
            //     //   require('postcss-preset-env')(),
            //     //   require('cssnano')()
            //     // ]
            //   }
          },
          { loader: 'sass-loader' }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-test',
      filename: 'view/index.html',
      template: './index.html',
      // templateParameters: true,
      // templateParameters: ['title'],
      // inject: false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      // chunkFilename: '[id].[name].[contenthash].css'
    })
  ],
}