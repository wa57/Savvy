// Include main libs
var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    transform = require('vinyl-transform'),
    globify = require('require-globify'),
    bulkify = require('bulkify');

// Include Gulp plugins
var minify_css = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    annotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps');

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

//console.log(gulp.src(paths.js));
/*gulp.task('js', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './assets/js/app.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify()).on('error', function(e){
            console.log(e);
         })
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});*/

/*gulp.task('js', function () {
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src(paths.js)
        .pipe(browserified)
        .pipe(uglify()).on('error', function(e){
            console.log(e);
         })
        .pipe(gulp.dest('build'));
});*/

gulp.task('js', function() {
    return browserify('./app.js')
        .transform(bulkify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(annotate())
        .pipe(buffer())
        .pipe(uglify()).on('error', function(e){
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

/*gulp.task('css', function() {
    return browserify(css_paths)
        .bundle()
        .pipe(source('bundle.css'))
        .pipe(buffer())
        .pipe(sass())
        .pipe(minify_css())
        .pipe(gulp.dest('build'));
});*/

gulp.task('watch', function(){
    // Watch .js files
    //gulp.watch(js_paths, ['js']);
    gulp.watch(paths.js, ['js']);

    //Watch .css files
    gulp.watch(paths.css, ['css']);
})

gulp.task('default', ['js', 'css', 'watch']);
