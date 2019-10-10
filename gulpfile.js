//run gulp css 
const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
gulp.task('css', function() {
  return gulp.src('css/*.css')
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest('.'));
});