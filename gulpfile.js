'use strict';

var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    plumber = require('gulp-plumber'),
    replace = require('gulp-replace'),
    deepAssign = require('deep-assign'),

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
                    sprite: 'ffe-icons.svg',
                    example: true
                }
            }
        }
    };


if (argv.opts) {
    options.cwd = '../../';
    
    var opts = require(argv.opts);
    
    // deepAssign does not handle arrays, so copy the icon array and delete it from opts before assigning the rest
    options.icons = opts.icons.slice(0);
    delete opts.icons;  
    
    options = deepAssign(options, opts);

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
        .pipe(replace(' fill="#002776"', '')) // Remove royal-blue. Instead, use CSS to give the SVG its primary color
        .pipe(svgSprite(options.config)).on('error', function (error) { console.log(error); })
        .pipe(gulp.dest(options.dest, { cwd: options.cwd }));
});
