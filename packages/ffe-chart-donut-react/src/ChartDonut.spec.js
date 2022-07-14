import React from 'react';

import ChartDonut from '../src';

const defaultProps = {
    firstLabel: 'Foo',
    lastLabel: 'Bar',
    name: 'Baz',
    percentage: 42,
};

const renderShallow = (props = {}) =>
    shallow(<ChartDonut {...defaultProps} {...props} />);

describe('ChartDonut', () => {
    it('renders two SVGs', () => {
        const el = renderShallow();

        expect(el.find('svg')).toHaveLength(2);
    });

    it('renders html for the name of the circle', () => {
        const el = renderShallow();

        expect(el.find('.ffe-chart-donut__name')).toHaveLength(1);
        expect(el.find('.ffe-chart-donut__name').text()).toBe('Baz');
    });

    it('renders a default background of "none"', () => {
        const el = renderShallow();

        expect(
            el
                .find('circle')
                .at(0)
                .prop('fill'),
        ).toEqual('none');
        expect(
            el
                .find('circle')
                .at(1)
                .prop('fill'),
        ).toEqual('none');
    });

    it('renders a background of "white" on one circle when two are rendered', () => {
        const el = renderShallow({
            background: 'white',
            percentage: 50,
        });

        expect(
            el
                .find('circle')
                .at(0)
                .prop('fill'),
        ).toEqual('white');
        expect(
            el
                .find('circle')
                .at(1)
                .prop('fill'),
        ).toEqual('none');
    });

    it('renders a background of "white" on one circle when one is rendered', () => {
        const el = renderShallow({
            background: 'white',
            percentage: 99,
        });

        expect(
            el
                .find('circle')
                .at(0)
                .prop('fill'),
        ).toEqual('white');
    });

    it('renders a background of "white" on one circle when one is rendered', () => {
        const el = renderShallow({
            background: 'white',
            percentage: 1,
        });

        expect(
            el
                .find('circle')
                .at(0)
                .prop('fill'),
        ).toEqual('white');
    });

    it('renders html for the labels and their percentages', () => {
        const el = renderShallow();

        expect(el.find('.ffe-chart-donut__type')).toHaveLength(2);
        expect(el.find('.ffe-chart-donut__amount')).toHaveLength(2);

        expect(
            el
                .find('.ffe-chart-donut__type')
                .at(0)
                .text(),
        ).toBe('Foo');
        expect(
            el
                .find('.ffe-chart-donut__amount')
                .at(0)
                .text(),
        ).toMatch(/58/);

        expect(
            el
                .find('.ffe-chart-donut__type')
                .at(1)
                .text(),
        ).toBe('Bar');
        expect(
            el
                .find('.ffe-chart-donut__amount')
                .at(1)
                .text(),
        ).toMatch(/42/);
    });
});
