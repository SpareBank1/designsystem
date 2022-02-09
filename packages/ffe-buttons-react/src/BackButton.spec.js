import React from 'react';

import BackButton from './BackButton';

const defaultProps = { children: 'Click me' };
const getWrapper = props =>
    shallow(<BackButton {...defaultProps} {...props} />);

describe('<BackButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.props()).toHaveProperty('buttonType', 'back');
    });
    it('passes on any prop', () => {
        const wrapper = getWrapper({ 'aria-label': 'some label' });
        expect(wrapper.props()).toHaveProperty('aria-label', 'some label');
    });
});
