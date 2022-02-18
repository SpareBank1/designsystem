const path = require('path');
const svg2jsxStr = require('./svg2jsxStr');
const fs = require('fs');
const caseUtil = require('case');

module.exports = files =>
    files.reduce((acc, filePath) => {
        const fileName = path.basename(filePath, '.svg');

        acc.push({
            fileName,
            iconName: caseUtil.pascal(fileName),
            svg: svg2jsxStr(fs.readFileSync(filePath, 'utf-8')),
        });

        return acc;
    }, []);
