import React from 'react';
import { shallow } from 'enzyme';

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
