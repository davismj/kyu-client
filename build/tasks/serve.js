var gulp = require('gulp');
var paths = require('../paths');
var webserver = require('gulp-webserver');

gulp.task('serve', ['build'], function(done) {
  return gulp.src('.')
    .pipe(webserver({
      livereload: true,
      port: 9000
    }));
});