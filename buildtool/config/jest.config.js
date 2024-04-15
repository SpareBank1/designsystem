const path = require('path');

module.exports = {
    preset: 'ts-jest',
    rootDir: path.join(process.cwd(), 'src'),
    setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],
    modulePathIgnorePatterns: ['test'],
    testEnvironment: 'jsdom',
    transform: {
        '\\.js$': [
            'babel-jest',
            {
                configFile: path.join(__dirname, 'babel.config.js'),
            },
        ],
    },
};
