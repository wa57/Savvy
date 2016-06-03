// Include main libs
var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    transform = require('vinyl-transform'),
    bulkify = require('bulkify');

// Include Gulp plugins
var minify_css = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    annotate = require('gulp-ng-annotate');

var paths = {
    js: [
        './app.js',
        'assets/**/*.js',
        'components/**/*.js'
    ],
    css: [
        'assets/css/*.css',
        'assets/css/*.scss',
        'components/**/*.scss'
    ]
};

gulp.task('js', function() {
    return browserify('./app.js')
        .transform(bulkify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(annotate())
        .pipe(buffer())
        .pipe(uglify({'ascii-only': true})).on('error', function(e){
            console.log(e);
         })
        .pipe(gulp.dest('build'));
});

gulp.task('css', function() {
    gulp.src(paths.css)
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(minify_css())
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.css, ['css']);
})

gulp.task('default', ['js', 'css', 'watch']);
