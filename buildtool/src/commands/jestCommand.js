const { spawn } = require('child_process');
const path = require('path');

module.exports = function(args) {
    const arg = [
        'jest',
        '--config',
        path.relative(
            process.cwd(),
            path.join(__dirname, '../../config/jest.config.js'),
        ),
        '--rootDir',
        process.cwd(),
        ...args,
    ];

    return spawn('npx', arg, {
        cwd: process.cwd(),
        stdio: 'inherit',
    }).on('exit', code => {
        if (code) {
            process.exit(code);
        }
    });
};
