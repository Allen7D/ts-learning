const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts', // webpack的入口文件
  output: {
    filename: 'main.js', // webpack的导出文件
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.vue'], // 忽略后缀
  },
  module: {
    rules: [{
      test: /\.tsx?$/, // 正则匹配：匹配 ts文件或 tsx文件
      use: 'ts-loader', // 将 TypeScript 代码编译为 JavaScript 代码
      exclude: /node_modules/ // 排除范围(对其不做处理)
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    stats: 'errors-only',
    compress: false,
    host: 'localhost',
    port: 8089
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico', // 设置网页的ico
      title: 'TS Learning', // 设置网页的title
    })
  ]
}
