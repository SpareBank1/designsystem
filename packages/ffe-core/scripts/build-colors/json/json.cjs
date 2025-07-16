#!/usr/bin/env node
const { writeToFile } = require('../../utils.cjs');

function buildJSONColors(paths, colors) {
    paths.forEach(path => {
        writeToFile(path + '/colors-semantic.json')(
            JSON.stringify(colors, null, 2),
        );
    });
}

module.exports = { buildJSONColors };
