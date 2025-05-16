const { apply, fileExists } = require('./utils');
const path = require('path');
const fs = require('fs/promises');

/* Function: generateDownloadUrl
    Takes the icon name, fill, weight and size, and generate the url to download the svg from.
*/
const generateDownloadUrl = (iconName, fill, weight, size) => {
    let style = `wght${weight}${fill === 0 ? '' : 'fill1'}`;
    if (fill === 0 && weight === 400) {
        style = 'default';
    }
    return `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/${iconName}/${style}/${size}px.svg`;
};

/* Function: getDownloads
    Returns an array for each variation of the icons with the download url, filename and filepath.
    The array is later used to know what to download and where to save the files.
*/
const getDownloads = (iconNames, weight, fill, size, dirPath) => {
    const downloads = [];
    if (!iconNames || !weight || !size || fill === undefined) {
        throw new Error('iconNames, weight, fill or size is not provided');
    }

    for (const icon of iconNames) {
        const safeIconName = icon; // Fix for icons that has a number as the first character - which is not valid const name
        downloads.push({
            url: generateDownloadUrl(safeIconName, fill, weight, size.opsz),
            fileName: `${icon}.svg`,
            filePath: dirPath,
        });
    }
    return downloads;
};

/* Function: download
    Does the actual downloading of the file
 */
const download = async downloadElement => {
    const { url, fileName, filePath } = downloadElement;
    const fileLocation = path.resolve(__dirname, `${filePath}/${fileName}`);
    try {
        console.log(`Downloading ${fileLocation}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        await fs.writeFile(fileLocation, data);
    } catch (error) {
        console.error(
            `Failed to download file from ${url} to ${fileLocation}. Error: ${error.message}`,
        );
    }
};

/* Function: downloadAll
    Takes all the downloads, and apply the download function to each of them.
    Also let you set if you want to ignore existing files, this is on by default.
*/
const downloadAll = async (downloads, { ignoreExisting = true } = {}) => {
    let allDownloads = [];
    if (ignoreExisting) {
        for (const file of downloads) {
            const fileAlreadyExists = await fileExists(
                `${file.filePath}/${file.fileName}`,
            );
            if (!fileAlreadyExists) {
                allDownloads.push(file);
            }
        }
    } else {
        allDownloads = downloads;
    }
    await apply(download, allDownloads);
};

module.exports = { getDownloads, downloadAll };
