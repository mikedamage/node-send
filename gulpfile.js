'use strict';

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();
var stylish = require('jshint-stylish');

var files = {
  version: [
    'package.json'
  ],
  binaries: 'bin/*'
};

gulp.task('bump:patch', function() {
  return gulp.src(files.version)
    .pipe(plugins.bump({ type: 'patch' }))
    .pipe(gulp.dest('./'));
});

gulp.task('bump:minor', function() {
  return gulp.src(files.version)
    .pipe(plugins.bump({ type: 'minor' }))
    .pipe(gulp.dest('./'));
});

gulp.task('bump:major', function() {
  return gulp.src(files.version)
    .pipe(plugins.bump({ type: 'major' }))
    .pipe(gulp.dest('./'));
});

gulp.task('jshint', function() {
  return gulp.src(files.binaries)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter(stylish));
});

gulp.task('watch', function(cb) {
  gulp.watch(files.binaries, [ 'jshint' ]);
  cb();
});

gulp.task('default', [ 'jshint' ]);
