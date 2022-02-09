const path = require('path');

module.exports = {
    rootDir: path.join(process.cwd(), 'src'),
    setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],
    transform: {
        '\\.js$': [
            'babel-jest',
            {
                configFile: path.join(__dirname, 'babel.config.js'),
            },
        ],
    },
};
