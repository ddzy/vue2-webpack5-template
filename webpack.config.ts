import * as path from 'path';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as Webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css|sass|scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        // webpack5 内置了 asset 模块, 用来代替 file-loader & url-loader & raw-loader 处理静态资源
        test: /\.png|jpg|gif|jpeg|svg/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'images/[base]',
        },
      },
      {
        test: /\.txt|xlsx/,
        type: 'asset',
        generator: {
          filename: 'files/[base]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      // 将 tsconfig 中配置的路径别名映射到 webpack.resolve.alias 上
      new TsconfigPathsPlugin()
    ],
  },
  devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 8888,
    compress: true,
    hot: true,
    clientLogLevel: 'silent',
    noInfo: true,
  },
} as Webpack.Configuration;