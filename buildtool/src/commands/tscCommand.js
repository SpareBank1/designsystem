const { spawn } = require('child_process');

module.exports = function (args) {
    const arg = [
        'tsc',
        '-b',
        './tsconfig.cjs.json',
        './tsconfig.esm.json',
        './tsconfig.types.json',
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
