#!/usr/bin/env node
'use strict'; // eslint-disable-line strict

const fs = require('fs');
const path = require('path');
const svgstore = require('svgstore');

const ICONS_PATH = path.join(__dirname, '..', 'icons');

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
    }).argv;

const matchesIcon = icons =>
    icons.includes('*.svg') || icons.includes('**/*.svg')
        ? () => true
        : fileName => icons.includes(path.basename(fileName));

const sprite = svgstore();

fs
    .readdirSync(ICONS_PATH)
    .filter(fileName => fileName.match(/\.svg$/))
    .filter(matchesIcon(options.icons))
    .forEach(fileName => {
        const iconPath = path.join(ICONS_PATH, fileName);
        const iconName = fileName.split('.svg')[0];
        sprite.add(iconName, fs.readFileSync(iconPath), 'utf-8');
    });

if (options.projectIcons) {
    options.projectIcons
        .forEach((fileName) => {
            const iconPath = path.join(fileName);
            const iconName = fileName.split('.svg')[0];
            sprite.add(iconName, fs.readFileSync(iconPath), 'utf-8');
        });
}

fs.writeFileSync(
    path.join(options.dest, 'ffe-icons.svg'),
    sprite
);
