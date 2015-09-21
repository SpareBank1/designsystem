var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('doc-gen', function() {
    return gulp.src('icons/*')
        .pipe(concat('index.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['doc-gen']);
