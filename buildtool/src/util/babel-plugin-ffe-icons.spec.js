const babel = require('@babel/core');
const plugin = require('./babel-plugin-ffe-icons');

const actual = `import React from 'react';
import { AtvIkon, BamseIkon as MinBamseIkon } from '@sb1/ffe-icons-react';
const foo = 'bar';`;

describe('change to default imports', () => {
    const { code } = babel.transform(actual, { plugins: [plugin] });
    test('imports from lib path', () =>
        expect(code).toMatch('@sb1/ffe-icons-react/lib/bamse-ikon'));
    test('imports icon name', () =>
        expect(code).toMatch('import MinBamseIkon'));
    test('snapshot', () => expect(code).toMatchSnapshot());
});

describe('change to default imports from esm', () => {
    const { code } = babel.transform(actual, {
        plugins: [[plugin, { sourceSubpath: 'es' }]],
    });
    test('imports from es path', () =>
        expect(code).toMatch('@sb1/ffe-icons-react/es/bamse-ikon'));
    test('snapshot', () => expect(code).toMatchSnapshot());
});
