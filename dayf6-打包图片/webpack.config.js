const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
var ProgressBarPlugin = require('progress-bar-webpack-plugin'); // 打包进度插件

const config = {
  mode: 'production', // 打包环境的配置
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [ // 注意loader的顺序以及写法，否则会报错！！！！！
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: [{
          // https://www.webpackjs.com/loaders/url-loader/
          // url-loader包含file-loader ---一般只需要下载 url-loader 但是这个项目不下载file-loader配置时候会报错
          loader: 'url-loader',
          options: {
            limit: 999,
            mimetype: 'image/png',
            // fallback: 'responsive-loader' // 未知错误所以需要注释(待解决ING)
          }
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `${Math.random()}___QQ:752781621`,
      filename: 'index.html'
    }),
    new ProgressBarPlugin()
  ]
};

module.exports = config;