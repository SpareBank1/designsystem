#!/usr/bin/env node
const path = require('path');
const tokens = require('./tokens');
const parseLess = require('./parseLess');
const toCss = require('./toCss');
const toTs = require('./toTs');
const toLess = require('./toLess');
const configFilePath = process.argv[2];

if (!configFilePath) {
    console.error('Usage: build.js path/to/build.config.js');
    process.exit(1);
}

const config = require(path.resolve(configFilePath));
const lessFiles = config.sources.map(p => path.resolve(p));
const { getLightMode } = tokens;

/*console.log(getLightMode());
console.log(lessFiles);*/

/*console.log(configFilePath);

parseLess(lessFiles[0]).then(it => console.log(it));
parseLess(lessFiles[1]).then(it => console.log(it));*/

Promise.all(lessFiles.map(parseLess)).then(([it]) => {
    console.log(toCss(it));
    console.log(toTs(it));
    console.log(toLess(it));
});

/*console.log(toCss(getLightMode()));*/
