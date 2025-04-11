const fs = require('fs').promises;
const path = require('path');

module.exports = filename => data =>
    fs
        .mkdir(path.dirname(filename), { recursive: true })
        .then(() => fs.writeFile(filename, data, 'utf8'))
        .then(() => console.log(`wrote ${filename}`))
        .then(() => data); // return input data for smoother pipelines
