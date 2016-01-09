// npm install gulp gulp-mocha gulp-util
 
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
  "use strict";
  return gulp.src(['./*.js', './test/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('watch-js', function() {
	"use strict";
    gulp.watch(['./*.js'], ['jshint']);
});

gulp.task('mocha', function() {
	"use strict";
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
	});

gulp.task('watch-mocha', function() {
	"use strict";
    gulp.watch(['lib/**', 'test/**'], ['mocha']);
});


gulp.task('default', ['jshint', 'mocha', 'watch-mocha', 
						'watch-js']); 



