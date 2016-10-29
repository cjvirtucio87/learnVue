'use strict';

let fs = require('fs');
let browserify = require('browserify');
let babelify = require('babelify');

browserify({debug: true})
  .transform(babelify)
  .require('./script.js', {entry: true})
  .bundle()
  .on('error', err => { console.log('ERROR: ' + err.message); })
  .pipe(fs.createWriteStream('bundle.js'));
