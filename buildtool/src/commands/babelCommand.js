const { spawn } = require('child_process');
const createBabelArgs = require('../util/createBabelArgs');

module.exports = function(options) {
    const args = createBabelArgs(options);
    args.forEach(arg => {
        let data = '';
        const cmd = spawn('npx', arg);

        cmd.stdout.setEncoding('utf8');
        cmd.stdout.on('data', d => {
            data += d;
        });

        cmd.stderr.setEncoding('utf8');
        cmd.stderr.on('data', err => {
            console.error(err);
        });

        cmd.on('close', code => {
            if (code) {
                process.exit(code);
            }

            console.log('ffe-buildtool:', arg.join(' '));
            console.log(data.trim());
        });
    });
};
