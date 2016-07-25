var express = require('express');
var fs = require('fs');
var webpack = require('webpack');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var app = express();

var isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  var config = require('../webpack/webpack.config.dev-client.js');
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}


// Render sass
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, '../app'),
  dest: path.join(__dirname, '../static'),
  indentedSyntax: false,
  sourceMap: false,
  response: true,
  debug: isDev,
  outputStyle: isDev ? 'extended' : 'compressed'
}));

// Bootstrap application settings
require('./config/express')(app);

// Static Files
app.use('/assets', express.static(path.join(__dirname, '../static')));

// Bootstrap routes
require('./config/routes')(app);

app.listen(app.get('port'));
