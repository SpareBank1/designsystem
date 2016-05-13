import fs from 'fs';

/**
 * Generates a json file with the name of every icon in a list
 * */
fs.readdir('./node_modules/ffe-icons/icons', (err, files) => {
    const iconlist = files.filter(f => f.indexOf('.svg') !== -1).map(f => f.replace('.svg', ''));
    fs.writeFile('iconlist.json', JSON.stringify(iconlist));
});
