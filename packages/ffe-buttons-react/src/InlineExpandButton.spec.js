import React from 'react';

import InlineExpandButton from './InlineExpandButton';

const defaultProps = {
    children: 'Click me',
    isExpanded: false,
    onClick: f => f,
};
const getWrapper = props =>
    shallow(<InlineExpandButton {...defaultProps} {...props} />);

describe('<InlineExpandButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.props()).toHaveProperty('buttonType', 'expand');
    });
    it('passes on any prop', () => {
        const wrapper = getWrapper({ 'aria-label': 'some label' });
        expect(wrapper.props()).toHaveProperty('aria-label', 'some label');
    });
    it('add ffe-inline-button--expanded class when expanded', () => {
        const wrapper = getWrapper({
            isExpanded: true,
            className: 'extra-class',
        });
        expect(wrapper.hasClass('ffe-inline-button--expanded')).toBe(true);
        expect(wrapper.hasClass('extra-class')).toBe(true);
    });
});
