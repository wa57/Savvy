// Include main libs
var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

// Include Gulp plugins
var concat = require('gulp-concat'),
    minify_css = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

// Concatenate JS Files & Minify
var js_paths = [
    'assets/lib/angular.min.js',
    'assets/lib/angular-ui-router.js',
    'assets/lib/google_charts.js',
    'assets/js/*.js',
    'components/home/home_controller.js',
    'components/login/login_controller.js',
    'components/nav/nav_controller.js',
    'components/product/product_controller.js',
    'components/search/search_controller.js',
    'components/signup/signup_controller.js',
    'components/submit/submit_controller.js'
]

var css_paths = [
    'assets/css/*.css'
]

gulp.task('js', function(){
    gulp.src(js_paths)
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('css', function() {
    gulp.src(css_paths)
        .pipe(concat('main.min.css'))
        .pipe(sass())
        .pipe(minify_css())
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
    // Watch .js files
    gulp.watch(js_paths, ['js']);

    //Watch .css files
    gulp.watch(css_paths, ['css']);
})

gulp.task('default', ['js', 'css', 'watch']);
