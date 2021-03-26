import json from '@rollup/plugin-json';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'lib/index.js',
            format: 'cjs',
        },
        {
            file: 'lib/esm/index.js',
            format: 'es',
        },
    ],
    plugins: [json()],
};
