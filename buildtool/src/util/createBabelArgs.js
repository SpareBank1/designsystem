const path = require('path');

module.exports = function(opts) {
    const shared = [
        '--package',
        '@babel/cli',
        'babel',
        '--config-file',
        path.relative(
            process.cwd(),
            path.join(__dirname, '../../config/babel.config.js'),
        ),
        '--ignore',
        '**/*.spec.js',
    ];

    const args = [];

    if (opts.es) {
        let cmd = [...shared, '--env-name', 'es', '-d', opts.es];
        if (opts.watch) {
            cmd = cmd.concat(['--watch']);
        }

        args.push([...cmd, opts.source]);
    }

    if (opts.cjs) {
        args.push([
            ...shared,
            '--env-name',
            'cjs',
            '-d',
            opts.cjs,
            opts.source,
        ]);
    }

    return args;
};
