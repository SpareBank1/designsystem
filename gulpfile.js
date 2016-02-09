'use strict';

var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    plumber = require('gulp-plumber'),
    replace = require('gulp-replace'),
    objectAssign = require('object-assign'),

    argv = require('yargs').argv,

    options = {
        'icons': '**/*.svg',
        'dest': 'dist/',
        'cwd': './',
        'config': {
            'log': 'info',
            'svg': {
                'dimensionAttributes': false
            },
            'shape': {
                dimension: {
                    maxWidth: 150
                }
            },
            'mode': {
                symbol: {
                    sprite: 'sb1-icons.svg',
                    example: true
                }
            }
        }
    };


if (argv.opts) {
    var opts = require(argv.opts);
    options = objectAssign(options, opts);

    options.cwd = '../../';

    // convenience to avoid having file extension in config
    options.icons = options.icons.map(function (icon) {
        return icon + '.svg';
    });

    if (!opts.dest) {
        throw Error('ffe-icons was given an options object, but no destination for the generated sprite! Update your ' +
            'config file (e.g. icons.json) to include a "dest" property with a path to where you want the generated sprite.');
    }
}


gulp.task('default', function () {
    return gulp.src(options.icons, {cwd: 'icons'})
        .pipe(plumber())
        .pipe(svgSprite(options.config)).on('error', function (error) { console.log(error); })
        .pipe(gulp.dest(options.dest, { cwd: options.cwd }));
});
