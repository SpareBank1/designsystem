const { spawn } = require('child_process');

module.exports = function (args) {
    const arg = ['tsc', '--project', './tsconfig.esm.json', '--watch', ...args];

    return spawn('npx', arg, {
        cwd: process.cwd(),
        stdio: 'inherit',
    }).on('exit', code => {
        if (code) {
            process.exit(code);
        }
    });
};
