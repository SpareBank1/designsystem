import React from 'react';
import { shallow } from 'enzyme';

import KryssIkon from '@sb1/ffe-icons-react/lib/kryss-ikon';
import ExpandButton from './ExpandButton';

const defaultProps = {
    children: 'Click me',
    isExpanded: false,
    onClick: f => f,
};
const getWrapper = props =>
    shallow(<ExpandButton {...defaultProps} {...props} />);

describe('<ExpandButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-button')).toBe(true);
        expect(wrapper.hasClass('ffe-button--expand')).toBe(true);
    });
    it('passes on any prop', () => {
        const wrapper = getWrapper({ 'aria-label': 'some label' });
        expect(wrapper.props()).toHaveProperty('aria-label', 'some label');
    });
    describe('when expanded', () => {
        it('does not render children', () => {
            const wrapper = getWrapper({ isExpanded: true });
            expect(wrapper.text()).not.toContain('Click me');
        });;
        it('sets correct class', () => {
            const wrapper = getWrapper({ isExpanded: true });
            expect(wrapper.hasClass('ffe-button--expanded')).toBe(true);
        });
        it('sets aria-expanded prop', () => {
            const wrapper = getWrapper({ isExpanded: true });
            expect(wrapper.props()).toHaveProperty('aria-expanded', true);
        });
        it('renders a KryssIkon', () => {
            const wrapper = getWrapper({ isExpanded: true });
            expect(wrapper.find(KryssIkon).exists()).toBe(true);
            expect(wrapper.find(KryssIkon).hasClass('ffe-button__icon')).toBe(true);
        });
    });
});
