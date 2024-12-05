const fs = require('node:fs');
const path = require('path');

const readFileSync = filePath => {
    try {
        return fs.readFileSync(path.join(__dirname, filePath), 'utf8');
    } catch (err) {
        console.error(err);
        return null;
    }
};

const writeFileSync = (filePath, data) => {
    try {
        fs.writeFileSync(path.join(__dirname, filePath), data, 'utf8');
    } catch (err) {
        console.error(err);
    }
};

module.exports = { readFileSync, writeFileSync };
