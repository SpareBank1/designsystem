import React from 'react';

import SecondaryButton from './SecondaryButton';

const defaultProps = { children: 'Click me' };
const getWrapper = props =>
    shallow(<SecondaryButton {...defaultProps} {...props} />);

describe('<SecondaryButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.props()).toHaveProperty('buttonType', 'secondary');
    });
    it('passes on any prop', () => {
        const wrapper = getWrapper({ 'aria-label': 'some label' });
        expect(wrapper.props()).toHaveProperty('aria-label', 'some label');
    });
});
