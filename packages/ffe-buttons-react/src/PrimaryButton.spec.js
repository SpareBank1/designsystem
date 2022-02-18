import React from 'react';

import PrimaryButton from './PrimaryButton';

const defaultProps = { children: 'Click me' };
const getWrapper = props =>
    shallow(<PrimaryButton {...defaultProps} {...props} />);

describe('<PrimaryButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.props()).toHaveProperty('buttonType', 'primary');
    });
    it('passes on any prop', () => {
        const wrapper = getWrapper({ 'aria-label': 'some label' });
        expect(wrapper.props()).toHaveProperty('aria-label', 'some label');
    });
});
