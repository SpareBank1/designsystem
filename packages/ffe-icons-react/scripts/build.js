#!/usr/bin/env node
const path = require('path');
const glob = require('glob');

const { generateSources } = require('./lib');

const iconFilesPath = glob.sync(
    path.join(
        path.dirname(require.resolve('@sb1/ffe-icons/package.json')),
        'icons',
        '**',
        '*.svg',
    ),
);

const outDir = path.resolve(__dirname, '..', 'gen-src');

generateSources(iconFilesPath, outDir);
