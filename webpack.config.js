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
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }]
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
