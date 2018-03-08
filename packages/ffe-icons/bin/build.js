#!/usr/bin/env node
'use strict'; // eslint-disable-line strict

const deepAssign = require('deep-assign');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const SVGSpriter = require('svg-sprite');
const Vinyl = require('vinyl');

const ICONS_PATH = path.join(__dirname, '..', 'icons');
const defaultSVGOptions = {
    log: 'info',
    svg: {
        dimensionAttributes: false,
    },
    shape: {
        dimension: {
            maxWidth: 150,
        },
    },
    mode: {
        symbol: {
            sprite: 'ffe-icons.svg',
            example: true,
        },
    },
};

// convenience to avoid having file extension in config
const appendSvgExtension = icons =>
    icons.map(name => (name.endsWith('.svg') ? name : `${name}.svg`));

const options = require('yargs')
    .config('opts')
    .options({
        icons: {
            default: '**/*.svg',
            type: 'array',
            coerce: appendSvgExtension,
        },
        projectIcons: {
            type: 'array',
            coerce: appendSvgExtension,
        },
        dest: {
            default: 'dist',
            normalize: true,
            coerce: path.resolve,
        },
        config: {
            default: defaultSVGOptions,
            coerce: config => deepAssign(defaultSVGOptions, config),
        },
    }).argv;

options.config.dest = options.dest;

const matchesIcon = icons =>
    icons.includes('*.svg') || icons.includes('**/*.svg')
        ? () => true
        : fileName => icons.includes(path.basename(fileName));

// https://github.com/jkphl/svg-sprite#usage-pattern
const spriter = new SVGSpriter(options.config);

fs
    .readdirSync(ICONS_PATH)
    .filter(fileName => fileName.match(/\.svg$/))
    .filter(matchesIcon(options.icons))
    .forEach(fileName => {
        const iconPath = path.join(ICONS_PATH, fileName);
        spriter.add(
            new Vinyl({
                path: iconPath,
                base: ICONS_PATH,
                contents: fs.readFileSync(iconPath),
            }),
        );
    });

if (options.projectIcons) {
    options.projectIcons.forEach(fileName => {
        const iconPath = path.join(fileName);
        spriter.add(
            new Vinyl({
                path: fileName.substring(fileName.lastIndexOf('/') - 1),
                base: process.cwd(),
                contents: fs.readFileSync(iconPath),
            }),
        );
    });
}

spriter.compile(function(error, result) {
    for (const mode in result) {
        if (Object.prototype.hasOwnProperty.call(result, mode)) {
            for (const resource in result[mode]) {
                if (
                    Object.prototype.hasOwnProperty.call(result[mode], resource)
                ) {
                    mkdirp.sync(path.dirname(result[mode][resource].path));
                    fs.writeFileSync(
                        result[mode][resource].path,
                        result[mode][resource].contents,
                    );
                }
            }
        }
    }
});
