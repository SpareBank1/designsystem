const createBabelArgs = require('./createBabelArgs');

describe('createBabelArgs', () => {
    test('minimal args', () =>
        expect(
            createBabelArgs({
                cwd: __dirname,
                source: 'sourceDir',
                cjs: 'cjsDir',
                es: 'esDir',
            }),
        ).toMatchSnapshot());

    test('cjs only', () =>
        expect(
            createBabelArgs({
                cwd: __dirname,
                source: 'sourceDir',
                cjs: 'cjsDir',
                es: false,
            }),
        ).toMatchSnapshot());

    test('esm only', () =>
        expect(
            createBabelArgs({
                cwd: __dirname,
                source: 'sourceDir',
                cjs: false,
                es: 'esDir',
            }),
        ).toMatchSnapshot());

    test('with watch', () =>
        expect(
            createBabelArgs({
                cwd: __dirname,
                source: 'sourceDir',
                cjs: false,
                es: 'esDir',
                watch: true,
            }),
        ).toMatchSnapshot());
});
