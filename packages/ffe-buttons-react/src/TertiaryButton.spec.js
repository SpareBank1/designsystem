import React from 'react';
import { shallow } from 'enzyme';

import TertiaryButton from './TertiaryButton';

const defaultProps = { children: 'Click me' };
const getWrapper = props =>
    shallow(<TertiaryButton {...defaultProps} {...props} />);

describe('TertiaryButton', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.props()).toHaveProperty('buttonType', 'tertiary');
    });
    it('passes on any prop', () => {
        const wrapper = getWrapper({ 'aria-label': 'some label' });
        expect(wrapper.props()).toHaveProperty('aria-label', 'some label');
    });
});
