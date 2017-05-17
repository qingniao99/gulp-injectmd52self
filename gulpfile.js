var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var injectmd52self = require('./index');

gulp.task('build', function () {
    gulp.src('./example/aaa.txt')
        .pipe(injectmd52self('MD5VERSION'))
        .pipe(gulp.dest('./example/bbb'));
});