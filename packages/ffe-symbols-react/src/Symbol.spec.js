import React from 'react';
import Symbol from '.';

const getWrapper = props => shallow(<Symbol icon="home" {...props} />);

describe('<Symbol />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('span')).toBe(true);
    });
    it('renders filled symbol correctly', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-symbol--400')).toBe(true);
        const filled = getWrapper({ fill: true });
        expect(filled.hasClass('ffe-symbol--filled-400')).toBe(true);
    });
    it('set correct symbol weight', () => {
        const wrapper = getWrapper({ weight: 500 });
        expect(wrapper.hasClass('ffe-symbol--500')).toBe(true);
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
    it('set aria-hidden to true when aria-label is undefined', () => {
        const wrapper = getWrapper();
        expect(wrapper.prop('aria-hidden')).toBe(true);
    });
    it('set aria-hidden to false when aria-label is set', () => {
        const wrapper = getWrapper({ ariaLabel: 'hus icon' });
        expect(wrapper.prop('aria-hidden')).toBe(false);
    });
});
