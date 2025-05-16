const fs = require('fs/promises');
const path = require('path');

/* Function: createListOfRemovedIcons
    Creates and returns an array of all the filenames of svg-files that exist,
    but are no longer mentioned in the Material Symbols Codepoints.

    Since we know all the different subfolder / variations of the icons contain the same iconnames,
    we only need to check 1 folder.
*/
const createListOfRemovedIcons = async iconNames => {
    const directory = path.resolve(__dirname, '../icons/300/filled/lg');
    try {
        await fs.access(directory);
        const filesInDir = await fs.readdir(directory);
        const removedIcons = filesInDir.filter(
            fileName => !iconNames.includes(fileName.replace('.svg', '')),
        );
        return removedIcons;
    } catch (err) {
        console.log('Directory does not exist in check for removed icons');
        return [];
    }
};

/* Function: deleteSvgFile
    Does the actual deleting of the file
 */
const deleteSvgFile = async fileName => {
    try {
        await fs.unlink(fileName);
        console.log(`Deleted file ${fileName}`);
    } catch (err) {
        console.error(`Failed to delete file ${fileName}: ${err}`);
    }
};

/* Function: deleteRemovedIconsFiles
   Loop through the list of fileNames that should be deleted in a specific directory
   and call the delete function.
*/
const deleteRemovedIconsFiles = async (listOfRemovedIcons, directory) => {
    for (const fileName of listOfRemovedIcons) {
        const filePath = path.join(directory, fileName);
        await deleteSvgFile(filePath);
    }
};

module.exports = { createListOfRemovedIcons, deleteRemovedIconsFiles };
