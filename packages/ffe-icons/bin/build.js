const path = require('path');
const fs = require('fs');
const { makedirs } = require('./utils');
const { getIconNames } = require('./getIconNames');
const { getDownloads, downloadAll } = require('./downloadSvgs');
const {
    createListOfRemovedIcons,
    deleteRemovedIconsFiles,
} = require('./deleteSvg');

(async () => {
    const weights = [300, 400, 500];
    const sizes = [
        { name: 'sm', opsz: 20 },
        { name: 'md', opsz: 24 },
        { name: 'lg', opsz: 40 },
        { name: 'xl', opsz: 48 },
    ];
    const fill = [0, 1];

    const iconNames = await getIconNames();
    const listOfRemovedIcons = await createListOfRemovedIcons(iconNames);
    let downloads = [];

    for (const weight of weights) {
        for (const fillValue of fill) {
            const type = fillValue === 1 ? 'filled' : 'open';

            for (const size of sizes) {
                let folderPath = `../icons/${type}/${weight}/${size.name}`;
                if (type === 'filled') {
                    folderPath = `../icons/${type}/${size.name}`;
                }
                const dirPath = path.resolve(__dirname, folderPath);
                if (!fs.existsSync(dirPath)) {
                    await makedirs(dirPath);
                }
                if (listOfRemovedIcons.length > 0) {
                    await deleteRemovedIconsFiles(listOfRemovedIcons, dirPath);
                }
                downloads = downloads.concat(
                    getDownloads(iconNames, weight, fillValue, size, dirPath),
                );
            }
        }
    }
    console.log('Downloading SVG files...');
    await downloadAll(downloads);
    console.log('All done!');
})();
