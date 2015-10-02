'use strict';

var gulp         = require('gulp'),
    svgSprite    = require('gulp-svg-sprite'),
    plumber      = require('gulp-plumber'),
    replace      = require('gulp-replace'),
    svgGlob      = '**/*.svg',
    config       = {
        "log": "info",
        "svg": {
            "dimensionAttributes": false
        },
        "shape": {
            dimension       : {                         // Dimension related options
                maxWidth    : 100,                     // Max. shape width
                precision   : 2,                        // Floating point precision
                attributes  : false                    // Width and height attributes on embedded shapes
            }
        },
        "mode": {
            symbol: {
                sprite          : "sb1-icons.svg",
                example         : true
            }
        },
        "variables": {}
    };

gulp.task('sb1-icons', function() {
    return gulp.src(svgGlob, {cwd: 'icons'})
        .pipe(plumber())
        .pipe(svgSprite(config)).on('error', function(error){ console.log(error); })
        .pipe(gulp.dest('dist/sb1-icons'))
});

gulp.task('sfo-icons', function() {
    return gulp.src(svgGlob, {cwd: 'sfo-icons'})
        .pipe(plumber())
        .pipe(replace(' fill="#002776"', '')) // Remove royal-blue
        .pipe(svgSprite(config)).on('error', function(error){ console.log(error); })
        .pipe(gulp.dest('dist/sfo-icons'))
});