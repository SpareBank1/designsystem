import React from 'react';
import { shallow } from 'enzyme';

import ChartDonut from '../src';

const defaultProps = {
    children: <p>I'm in a test!</p>,
};

const renderShallow = (props = {}) => shallow(<ChartDonut {...defaultProps} {...props} />);

describe('ChartDonut', () => {
    it('renders children', () => {
        const el = renderShallow();

        expect(el.find('p').text()).to.contain('in a test');
    });
});
