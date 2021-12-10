const path = require('path');

module.exports = function(opts) {
    const shared = [
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
        args.push([...shared, '--env-name', 'es', '-d', opts.es, opts.source]);
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
