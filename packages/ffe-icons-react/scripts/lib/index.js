const mkdirp = require('mkdirp');
const readIconFiles = require('./readIconFiles');
const generateJSXIcons = require('./generateJSXIcons');
const generateModuleIndex = require('./generateModuleIndex');
const generateTypeDef = require('./generateTypeDef');

const generateSources = (iconFilesPath, outDir) => {
    mkdirp.sync(outDir);

    const icons = readIconFiles(iconFilesPath);

    generateJSXIcons(icons, outDir);
    generateModuleIndex(icons, outDir);
    generateTypeDef(icons, outDir);
};

module.exports = {
    generateSources,
};
