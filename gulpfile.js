/**
 *Created by guoxiangwen on 2015/10/16.
 *@author guoxiangwen
 *@version v1.0
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');//js语法检查
var concat = require('gulp-concat');//js合并
var uglify = require('gulp-uglify');//js压缩,美化
var rename = require('gulp-rename');//文件命名
var ngAnnotate = require('gulp-ng-annotate');//解决ng注入问题
var connect = require('gulp-connect');
var webserver = require('gulp-webserver');

var path = {
    script: [],
    images: ''
};

//js文件
gulp.task('js', function () {
    return gulp.src('js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('build'))
});
gulp.task("server", function () {
    gulp.src('.')
        .pipe(webserver({
            path:"/",
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }))
})
//监视文件变化
gulp.task('watch', function () {
    gulp.watch('js/**/*.js', ['js'])
})


gulp.task('default', ['js', 'watch'], function () {
    console.log("默认任务");
});