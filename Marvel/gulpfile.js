var gulp    = require('gulp'),
    order   = require('gulp-order'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    sass    = require('gulp-sass'),
    jade    = require('gulp-jade'),
    rename  = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    watch   = require('gulp-watch')
;

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8000
    });
});

//For min-scripts
gulp.task('minscripts', function(){
    gulp.src('js/lib/*.min.js')
        .pipe(order([
            "jquery-2.2.0.min.js",
            "bootstrap.min.js",
            "owl.carousel.min.js"
        ]))
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('js/'));
});

//For main scripts
gulp.task('scripts', function(){
    gulp.src('js/main/main.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('js/'));
});

//For min-styles
gulp.task('minstyles', function(){
    gulp.src('css/*.css')
        .pipe(order([
            "bootstrap.min.css",
            "font-awesome.min.js",
            "owl.carousel.css"
        ]))
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});

//For Styles
gulp.task('styles', function(){
    gulp.src('css/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});

//For Templates
gulp.task('templates', function(){
    gulp.src('templates/**/index.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./'));

    // gulp.src('templates/**/articlePage.jade')
    //     .pipe(jade({pretty: true}))
    //     .pipe(gulp.dest('pages/'));
});

//For Watch Task
gulp.task('watch', function(){
    gulp.watch('templates/**/*.jade',['templates']);
    gulp.watch('css/**/*.scss',['styles']);
    gulp.watch('js/**/*.js',['scripts']);
    gulp.watch("**/*.html").on('change', browserSync.reload);

});

//For Default Task

// gulp.task('default', ['minscripts','styles','scripts','templates','watch']);
    gulp.task('default', ['minscripts','scripts','minstyles','styles','templates','browser-sync','watch']);
