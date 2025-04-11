#!/usr/bin/env node
const path = require('path');

const writeToFile = require('./lib/writeToFile.cjs');
const renderLessVarsToCSSProps = require('./lib/renderLessVarsToCSSProps.cjs');
const extractCustomProps = require('./lib/extractCustomProps.cjs');
const { genTSSource, genTSModIndex } = require('./lib/genTypeScript.cjs');

const configFilePath = process.argv[2];

if (!configFilePath) {
    console.error('Usage: build.js path/to/build.config.js');
    process.exit(1);
}

const config = require(path.resolve(configFilePath));
const lessFiles = config.sources.map(p => path.resolve(p));

const basename = fname => path.basename(fname, '.less');
const cssFilePathFor = fname =>
    path.join(config.output.css, `${basename(fname)}.css`);
const tsFilePathFor = fname =>
    path.join(config.output.typescript, `${basename(fname)}.ts`);

const pipeline = lessFile =>
    renderLessVarsToCSSProps(lessFile)
        .then(writeToFile(cssFilePathFor(lessFile)))
        .then(extractCustomProps)
        .then(genTSSource)
        .then(writeToFile(tsFilePathFor(lessFile)));

Promise.all(lessFiles.map(pipeline))
    .then(() => genTSModIndex(lessFiles.map(basename)))
    .then(writeToFile(path.join(config.output.typescript, 'index.ts')))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
