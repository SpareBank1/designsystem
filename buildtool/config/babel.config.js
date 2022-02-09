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
        [
            '../src/util/babel-plugin-ffe-icons',
            {
                sourceSubpath: api.env('es') ? 'es' : 'lib',
            },
        ],
    ],
});
