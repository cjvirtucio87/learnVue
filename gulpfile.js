// Node File IO
// const fs = require('fs');

// ify's
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const vueify = require('vueify');

// gulp
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');

function compile (watch) {
  const stream = watchify(browserify('./src/main.js', { debug: true })
                      .transform(vueify)
                      .transform(babelify));

  function _bundle () {
    stream.bundle()
      .on('error', function (err) { console.error(err); this.emit('end'); })
      .pipe(source('./src/main.js'))
      .pipe(buffer())
      .pipe(rename('vue-app.js'))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/'));
  }

  if (watch) {
    stream.on('update', function () {
      console.log('bundling..');
      _bundle();
    });
  }

  _bundle();
}

function watch () {
  return compile(true);
}

gulp.task('build', function () { return compile(); });
gulp.task('watch', function () { return watch(); });
gulp.task('default', ['watch']);
