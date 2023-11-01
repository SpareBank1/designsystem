/*
    This function is manually triggered, and will fetch all the names of the symbols.
    The names are then gathered in an array that is used for typescript typings in the symbols component. 
    
    Important to only run this when we update the icon-font files, as we might sometimes be out of sync with whats
    the latest in material icons.
*/
const path = require('path');
const fs = require('fs').promises;
const fetchSymbolNames = require('./fetchSymbolNames');

const writeToFile = async (filePath, content) => {
    try {
        await fs.writeFile(filePath, content);
        console.log('File written successfully');
    } catch (error) {
        console.error('Error writing file:', error);
    }
};

const generateSymbolTypings = async () => {
    const symbolNames = await fetchSymbolNames();
    const fileContent = `export type SymbolName = ${symbolNames.join(' | ')}`;
    const filePath = path.join(__dirname, '../src/typings/symbolNames.ts');

    await writeToFile(filePath, fileContent);
};

generateSymbolTypings();
