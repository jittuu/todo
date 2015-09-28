var gulp = require('gulp'),
   ts = require('gulp-typescript');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('typescript', function() {
   console.log('Compiling typescript');
  return gulp.src(['src/*.ts'])
    .pipe(ts({module: 'commonjs'})).js.pipe(gulp.dest('./built/'))
});
