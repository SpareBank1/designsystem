module.exports = api => {
    return {
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
    };
};
