var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, '..', 'dist', 'assets');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

var commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel',
    query: {
      "presets": ["react-hmre", "es2015", "react", "airbnb", "stage-0"]
    },
    include: path.join(__dirname, '..', 'app'),
    exclude: path.join(__dirname, '/node_modules/')
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
    loader: 'url',
    query: {
        name: '[hash].[ext]',
        limit: 10000,
    }
  },
  { test: /\.html$/, loader: 'html-loader' }
];

module.exports = {
    devtool: 'eval',
    name: 'browser',
    context: path.join(__dirname, '..', 'app'),
    entry: {
      app: ['./client', hotMiddlewareScript]
    },
    output: {
      path: assetsPath,
      filename: '[name].js',
      publicPath: '/assets/'
    },
    module: {
      loaders: commonLoaders.concat([])
    },
    externals: {
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.css'],
      modulesDirectories: [
        'app', 'node_modules'
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        __DEVCLIENT__: true,
        __DEVSERVER__: false
      })
    ]
};
