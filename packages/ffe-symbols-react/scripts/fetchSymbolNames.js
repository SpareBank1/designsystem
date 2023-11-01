/*  Fetches all the icon names by using the codepoints in the font */
const fetchSymbolNames = async () => {
    let folderNames = [];
    const url =
        'https://raw.githubusercontent.com/google/material-design-icons/master/variablefont/MaterialSymbolsRounded%5BFILL%2CGRAD%2Copsz%2Cwght%5D.codepoints';
    const response = await fetch(url);
    const data = await response.text();

    const lines = data.split('\n');
    const names = lines
        .filter(line => line.trim() !== '')
        .map(line => `'${line.split(' ')[0]}'`);
    folderNames = [...folderNames, ...names];

    return folderNames;
};

module.exports = fetchSymbolNames;
