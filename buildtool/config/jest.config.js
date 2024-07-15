const path = require('path');

module.exports = {
    preset: 'ts-jest',
    rootDir: path.join(process.cwd(), 'src'),
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    modulePathIgnorePatterns: ['test'],
    testEnvironment: 'jsdom',
};
