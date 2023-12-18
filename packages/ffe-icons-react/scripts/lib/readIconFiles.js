const path = require('path');
const svg2jsxStr = require('./svg2jsxStr');
const fs = require('fs');
const caseUtil = require('case');

module.exports = files =>
    files.reduce((acc, filePath) => {
        const fileName = path.basename(filePath, '.svg');
        const safeFileName = !isNaN(fileName.charAt(0))
            ? `ffe${fileName}`
            : fileName;

        acc.push({
            fileName,
            iconName: caseUtil.pascal(safeFileName),
            svg: svg2jsxStr(fs.readFileSync(filePath, 'utf-8')),
        });

        return acc;
    }, []);
