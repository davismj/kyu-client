var path = require('path');
var appRoot = 'app/';

module.exports = {
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.scss',
  output: 'dist/'
};
