import React from 'react';
import Symbol from '.';

const getWrapper = props =>
    shallow(
        <Symbol ariaLabel="hus icon" {...props}>
            home
        </Symbol>,
    );

describe('<Symbol />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('span')).toBe(true);
    });
    it('renders filled symbol correctly', () => {
        const wrapper = getWrapper();
        expect(wrapper.get(0).props.style).toHaveProperty(
            'fontVariationSettings',
            "'FILL' 0, 'GRAD' 0, 'wght' 400",
        );
        const filled = getWrapper({ fill: true });
        expect(filled.get(0).props.style).toHaveProperty(
            'fontVariationSettings',
            "'FILL' 1, 'GRAD' 0, 'wght' 400",
        );
    });
    it('set correct symbol weight', () => {
        const wrapper = getWrapper();
        expect(wrapper.get(0).props.style).toHaveProperty(
            'fontVariationSettings',
            "'FILL' 0, 'GRAD' 0, 'wght' 400",
        );
        const filled = getWrapper({ weight: 600 });
        expect(filled.get(0).props.style).toHaveProperty(
            'fontVariationSettings',
            "'FILL' 0, 'GRAD' 0, 'wght' 600",
        );
    });
    it('renders classes correctly', () => {
        const wrapper = getWrapper({ className: 'test-class' });
        expect(wrapper.hasClass('ffe-symbol')).toBe(true);
        expect(wrapper.hasClass('test-class')).toBe(true);
    });
    it('renders correct sized symbol of prop', () => {
        const wrapper = getWrapper({ size: 'xl' });
        expect(wrapper.hasClass('ffe-symbol--xl')).toBe(true);
    });
    it('passes props correctly', () => {
        const wrapper = getWrapper({ id: 'test-id' });
        expect(wrapper.prop('id')).toBe('test-id');
    });
    it('set aria-hidden to false when aria-label is set', () => {
        const wrapper = getWrapper();
        expect(wrapper.prop('aria-hidden')).toBe(false);
    });
    it('set aria-hidden to true when aria-label is empty string', () => {
        const wrapper = getWrapper({ ariaLabel: '' });
        expect(wrapper.prop('aria-hidden')).toBe(true);
    });
});
