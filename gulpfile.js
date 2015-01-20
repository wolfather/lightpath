var gulp = require('gulp'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    jsmin = require('gulp-jsmin');


gulp.task('default',['jade','less', 'jsmin', 'watch'], function() {});


gulp.task('jade', function(){
    return gulp.src('dev/html/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('build/html'))
});


gulp.task('jsmin', function () {
    gulp.src('dev/js/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('build/js'));
});



gulp.task('less', function () {
    return gulp.src('dev/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('build/css'))
});


gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('dev/less/*.less', ['less']);
    gulp.watch('dev/js/*.js', ['jsmin']);
    gulp.watch('dev/html/*.jade', ['jade']);
});