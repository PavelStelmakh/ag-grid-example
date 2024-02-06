const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssLoaderOptions = {
  modules: {
    mode: 'local',
    localIdentName: '[local]'
  }
};

const devServer = {
  open: true,
  hot: true,
  historyApiFallback: true,
  static: [ 'src', 'dist' ],
  liveReload: false,
  port: 8085,
  client: {
    overlay: false
  }
};

const getConfig = () => ({
  mode: 'development',
  entry: {
    main: './src/main.jsx'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    library: {
      type: 'umd'
    },
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: cssLoaderOptions
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: cssLoaderOptions
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
  devServer,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
  ]
});

process.stdout.write('Building React Components:\n');

module.exports = getConfig();
