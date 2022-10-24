const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'animations');

fs.readdirSync(FILE_PATH).forEach(file => {
    if (file.indexOf('.json' > -1))
        exports[file.replace('.json', '')] = require(`./animations/${file}`);
});
