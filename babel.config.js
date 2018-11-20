module.exports = api => ({
    presets: [
        [
            '@babel/env',
            {
                targets: ['last 2 versions', 'ie 11'],
                modules: api.env('es') ? false : 'commonjs',
            },
        ],
        '@babel/react',
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        '@babel/plugin-proposal-json-strings',
    ],
});
