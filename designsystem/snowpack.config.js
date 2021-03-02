/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    workspaceRoot: '..',
    mount: {
        webapp: '/',
        './lib': '/lib',
    },
    alias: { '@designsystem': './lib' },
    plugins: ['@snowpack/plugin-react-refresh'],
    routes: [],
    optimize: {},
    packageOptions: {},
    devOptions: {},
    buildOptions: {},
};
