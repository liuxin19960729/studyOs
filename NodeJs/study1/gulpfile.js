var gulp = require('gulp');
var ts = require('gulp-typescript');
gulp.task('default', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            module:"commonjs",
        })).pipe(gulp.dest('./'));//gulp.dest('built/local')  计算机write的文件流把文件写的位置
});