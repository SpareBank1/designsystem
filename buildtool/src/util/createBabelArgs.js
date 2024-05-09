const path = require('path');

module.exports = function (opts) {
    const shared = [
        '--package',
        '@babel/core',
        '--package',
        '@babel/cli',
        'babel',
        '--config-file',
        path.relative(
            opts.cwd || process.cwd(),
            path.join(__dirname, '../../config/babel.config.js'),
        ),
        '--extensions',
        '.ts,.js,.tsx,.jsx,.cjs,.mjs',
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
