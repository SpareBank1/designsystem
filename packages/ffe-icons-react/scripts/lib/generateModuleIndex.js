const path = require('path');
const fs = require('fs');

module.exports = (icons, outDir) => {
    const sourceCode = icons
        .map(
            icon =>
                `export { default as ${icon.iconName} } from './${icon.fileName}';`,
        )
        .join('\n');

    fs.writeFileSync(path.join(outDir, 'index.js'), sourceCode);
};
