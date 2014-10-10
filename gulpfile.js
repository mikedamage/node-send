'use strict';

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

var files = {
  version: [
    'package.json'
  ]
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
