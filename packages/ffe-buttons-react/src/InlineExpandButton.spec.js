import React from 'react';
import { ChevronIkon } from '@sb1/ffe-icons-react';

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
    it('sends a <ChevronIcon /> as a default rightIcon prop', () => {
        const wrapper = getWrapper();
        expect(wrapper.props()).toHaveProperty(
            'rightIcon',
            <ChevronIkon
                aria-hidden="true"
                style={{ marginLeft: '8px', transform: 'none' }}
            />,
        );
    });
    it('sends an upside down <ChevronIcon /> as rightIcon if isExpanded prop is true', () => {
        const wrapper = getWrapper({ isExpanded: true });
        expect(wrapper.props()).toHaveProperty(
            'rightIcon',
            <ChevronIkon
                aria-hidden="true"
                style={{ marginLeft: '8px', transform: 'rotateZ(180deg)' }}
            />,
        );
    });
});
