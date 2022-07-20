import React from 'react';

import { BamseIkon, BestikkIkon, KryssIkon } from '@sb1/ffe-icons-react';

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
    it('renders leftIcon and rightIcon', () => {
        const wrapper = getWrapper({
            leftIcon: <BestikkIkon />,
            rightIcon: <BamseIkon />,
        });
        expect(wrapper.find(BestikkIkon).exists()).toBe(true);
        expect(wrapper.find(BamseIkon).exists()).toBe(true);
    });
    it('renders leftIcon and rightIcon with aria-hidden true', () => {
        const wrapper = getWrapper({
            leftIcon: <BestikkIkon />,
            rightIcon: <BamseIkon />,
        });
        expect(wrapper.find(BestikkIkon).props()).toHaveProperty(
            'aria-hidden',
            true,
        );
        expect(wrapper.find(BamseIkon).props()).toHaveProperty(
            'aria-hidden',
            true,
        );
    });
    it('does not use an aria-label since the button itself has a children acting as label', () => {
        const wrapper = getWrapper();
        expect(wrapper.prop('aria-label')).toBe(undefined);
    });
    describe('when expanded', () => {
        it('does not render children', () => {
            const wrapper = getWrapper({ isExpanded: true });
            expect(wrapper.text()).not.toContain('Click me');
        });
        it('does not render leftIcon and rightIcon', () => {
            const wrapper = getWrapper({
                leftIcon: <BestikkIkon />,
                isExpanded: true,
                rightIcon: <BamseIkon />,
            });
            expect(wrapper.find(BestikkIkon).exists()).toBe(false);
            expect(wrapper.find(BamseIkon).exists()).toBe(false);
        });
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
            expect(wrapper.find(KryssIkon).hasClass('ffe-button__icon')).toBe(
                true,
            );
        });
        it('uses the default aria-label property on the button', () => {
            const wrapper = getWrapper({ isExpanded: true });
            expect(wrapper.prop('aria-label')).toBe(
                ExpandButton.defaultProps.closeLabel,
            );
        });
    });
});
