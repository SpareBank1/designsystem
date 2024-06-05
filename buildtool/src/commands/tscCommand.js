const { spawn } = require('child_process');

module.exports = function (args) {
    const arg = [
        'tsc',
        '-b',
        args.includes('--es') && './tsconfig.esm.json',
        args.includes('--cjs') && './tsconfig.cjs.json',
        args.includes('--types') && './tsconfig.types.json',
    ].filter(Boolean);

    return spawn('npx', arg, {
        cwd: process.cwd(),
        stdio: 'inherit',
    }).on('exit', code => {
        if (code) {
            process.exit(code);
        }
    });
};
