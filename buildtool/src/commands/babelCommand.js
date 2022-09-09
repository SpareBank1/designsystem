const { spawn } = require('child_process');
const createBabelArgs = require('../util/createBabelArgs');

module.exports = options =>
    createBabelArgs(options).forEach(args =>
        spawn('npx', args, { stdio: 'inherit' }).on('exit', code => {
            if (code) {
                process.exit(code);
            }
        }),
    );
