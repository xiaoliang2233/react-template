const isDev = process.env.NODE_ENV === 'development'
const path = require('path');
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    mode:  isDev ? 'development' : 'production',
    entry: path.resolve(__dirname, './index.jsx'),
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'  // 可以把css放在页面上
            },
            {
              loader: 'css-loader'    // 放在后面的先被解析
            }
          ]
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        }
      ]
    },
    plugins: [
        new htmlPlugin({
            template: "./index.html"
        })
    ],
    devServer: {
        historyApiFallback: true
    }
};
