module.exports = {
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['<rootDir>/packages/*/src/**/*.spec.(js|jsx)'],
    transform: {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/transform.js',
    },
    transformIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/packages/*/node_modules/',
    ],
    setupTestFrameworkScriptFile: '<rootDir>/test-setup.js',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/packages/.*/lib/',
        '<rootDir>/packages/.*/es/',
    ],
};
