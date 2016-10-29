'use strict';

// node's filesystem module
let fs = require('fs');
// browserify
let browserify = require('browserify');
// requiring modules and plugins to be used with browserify
let babelify = require('babelify');

browserify({cache: {}, packageCache: {}, debug: true})
  .transform(babelify)
  .require('src/app.js', {entry: true})
  .bundle()
  .on('error', err => { console.log('ERROR: ' + err.message); })
  .pipe(fs.createWriteStream('dist/vue-app.js'));
