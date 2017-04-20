import React from 'react';
import { shallow } from 'enzyme';

import ChartDonut from '../src';

const defaultProps = {
    firstLabel: 'Foo',
    lastLabel: 'Bar',
    name: 'Baz',
    percentage: 42,
};

const renderShallow = (props = {}) => shallow(<ChartDonut {...defaultProps} {...props} />);

describe('ChartDonut', () => {
    it('renders two SVGs', () => {
        const el = renderShallow();

        expect(el.find('svg')).to.have.length(2);
    });

    it('renders html for the name of the circle', () => {
        const el = renderShallow();

        expect(el.find('.ffe-chart-donut__name')).to.have.length(1);
        expect(el.find('.ffe-chart-donut__name').text()).to.be('Baz');
    });

    it('renders html for the labels and their percentages', () => {
        const el = renderShallow();

        expect(el.find('.ffe-chart-donut__type')).to.have.length(2);
        expect(el.find('.ffe-chart-donut__amount')).to.have.length(2);

        expect(el.find('.ffe-chart-donut__type').at(0).text()).to.be('Foo');
        expect(el.find('.ffe-chart-donut__amount').at(0).text()).to.contain('58');

        expect(el.find('.ffe-chart-donut__type').at(1).text()).to.be('Bar');
        expect(el.find('.ffe-chart-donut__amount').at(1).text()).to.contain('42');
    });
});
