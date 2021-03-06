const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  entry: [
    './src/index.js', './src/styles/global.scss'
  ],
  output: {
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }, {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment
            ? 'style-loader'
            : MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          }
        ]
      }, {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader', {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }, {
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        },
        test: /\.(otf|eot|svg|ttf|woff)$/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new HtmlWebPackPlugin({template: "./src/index.html", filename: "./index.html"}),
    new MiniCssExtractPlugin({
      filename: isDevelopment
        ? '[name].css'
        : '[name].[hash].css',
      chunkFilename: isDevelopment
        ? '[id].css'
        : '[id].[hash].css'
    })
  ]
};