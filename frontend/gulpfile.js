// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Concatenate JS Files & Minify
var paths = [
    'assets/lib/*.js',
    'scripts/*.js',
    'components/**/*.js'
]

gulp.task('scripts', function(){
    return gulp.src(paths)
        .pipe(concat('main.js'))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function(){
    // Watch .js files
    gulp.watch(paths, ['scripts']);
})

gulp.task('default', ['scripts', 'watch']);

//In terminal type "gulp" to run all tasks
