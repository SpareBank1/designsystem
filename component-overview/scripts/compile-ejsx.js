#!/usr/bin/env node
const path = require('path');
const { writeFile, readFile, mkdir } = require('fs').promises;
const transformSourceCode = require('./lib/transformExampleCode');
const createExampleModule = require('./lib/createExampleModule');

const writeToFile = targetFile => data =>
    mkdir(path.dirname(targetFile), { recursive: true }).then(() =>
        writeFile(targetFile, data).then(() => targetFile),
    );

const replaceFileExt = (fname, newExt) =>
    path.join(
        path.dirname(fname),
        `${path.basename(fname, path.extname(fname))}.${newExt}`,
    );

const getOutputFileName = fname =>
    path.resolve('gen-src', replaceFileExt(fname, 'js'));

const compileFile = fname =>
    readFile(fname, 'utf8')
        .then(code =>
            transformSourceCode(code, fname.replace(/^\/?examples\/?/, '')),
        )
        .then(writeToFile(getOutputFileName(fname)));

Promise.all(
    process.argv
        .slice(2)
        .map(path.normalize)
        .map(compileFile),
)
    .then(createExampleModule(path.resolve('gen-src', 'examples')))
    .then(writeToFile(getOutputFileName('examples/index.js')));
//.then(res => console.log(res))
