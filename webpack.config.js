const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  // mode: 'development',
  entry: './script.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[hash][ext][query]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    // new HtmlWebpackPlugin({
    //   template: './index.html'
    // }),
    new CleanWebpackPlugin(),
    require('autoprefixer'),
    new CopyPlugin({
      patterns: [{ from: 'assets', to: 'assets' }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  }
}
