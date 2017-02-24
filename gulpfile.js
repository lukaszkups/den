var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// compile and minify /src/.scss to /dist/.css and /dist/.min.css file
gulp.task('sass', function(){
  return gulp.src('./src/den.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(function(path){path.extname = '.css'}))
    .pipe(gulp.dest('./dist/'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename(function(path){path.extname = '.min.css'}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function(){
  gulp.watch('./src/den.scss', ['sass']);
});
