#!/usr/local/bin/node

'use strict';

const argv = require('yargs').argv;
const deepAssign = require('deep-assign');
const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const path = require('path');
const SVGSpriter = require('svg-sprite');
const Vinyl = require('vinyl');

const ICONS_PATH = path.join(__dirname, '..', 'icons');

let options = {
    icons: '**/*.svg',
    dest: 'dist/',
    cwd: '../',
    config: {
        log: 'info',
        svg: {
            dimensionAttributes: false
        },
        shape: {
            dimension: {
                maxWidth: 150
            }
        },
        mode: {
            symbol: {
                sprite: 'ffe-icons.svg',
                example: true
            }
        }
    }
};

if (argv.opts) {
    options.cwd = '../../../';
    const opts = require(`../../../${argv.opts}`);

    // deepAssign does not handle arrays, so copy the icon array and delete it from opts before assigning the rest
    options.icons = opts.icons.slice(0);
    delete opts.icons;

    options = deepAssign(options, opts);

    // convenience to avoid having file extension in config
    options.icons = options.icons.map(icon => `${icon}.svg`);

    if (!opts.dest) {
        throw Error('ffe-icons was given an options object, but no destination for the generated sprite! Update your ' +
            'config file (e.g. icons.json) to include a "dest" property with a path to where you want the generated sprite.');
    }
}

options.config.dest = path.join(__dirname, options.cwd, options.dest);

// https://github.com/jkphl/svg-sprite#usage-pattern
const spriter = new SVGSpriter(options.config);


fs.readdirSync(ICONS_PATH)
    .filter(fname => fname.match(/\.svg$/))
    .forEach((fileName) => {
        const iconPath = path.join(ICONS_PATH, fileName);
        spriter.add(new Vinyl({
            path: iconPath,
            base: ICONS_PATH,
            contents: fs.readFileSync(iconPath)
        }));
    });

spriter.compile(function(error, result) {
    for (let mode in result) {
        for (let resource in result[mode]) {
            mkdirp.sync(path.dirname(result[mode][resource].path));
            fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
        }
    }
});
