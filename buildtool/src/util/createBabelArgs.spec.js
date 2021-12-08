const createBabelArgs = require('./createBabelArgs');

describe('createBabelArgs', () => {
    test('minimal args', () =>
        expect(
            createBabelArgs({
                source: 'sourceDir',
                cjs: 'cjsDir',
                es: 'esDir',
            }),
        ).toMatchSnapshot());

    test('cjs only', () =>
        expect(
            createBabelArgs({
                source: 'sourceDir',
                cjs: 'cjsDir',
                es: false,
            }),
        ).toMatchSnapshot());

    test('esm only', () =>
        expect(
            createBabelArgs({
                source: 'sourceDir',
                cjs: false,
                es: 'esDir',
            }),
        ).toMatchSnapshot());
});
