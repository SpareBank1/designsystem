import React from 'react';
import Spinner from '.';

const getWrapper = props => shallow(<Spinner {...props} />);

describe('<Spinner />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.find('span').exists()).toBe(true);
    });
    it('renders classes correctly', () => {
        const wrapper = getWrapper({ className: 'test-class' });
        expect(wrapper.find('span').hasClass('ffe-loading-spinner')).toBe(true);
        expect(wrapper.hasClass('test-class')).toBe(true);
    });
    it('renders a large spinner', () => {
        const wrapper = getWrapper({ large: true });
        expect(
            wrapper.find('span').hasClass('ffe-loading-spinner--large'),
        ).toBe(true);
    });
    it('passes props correctly', () => {
        const wrapper = getWrapper({ id: 'test-id' });
        expect(wrapper.prop('id')).toBe('test-id');
    });
    it('aria-hidden is set to false by default', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('span').prop('aria-hidden')).toBe(false);
    });
    it('aria-hidden set to true when loadingText set', () => {
        const wrapper = getWrapper({ loadingText: 'test' });
        expect(wrapper.find('span').prop('aria-hidden')).toBe(true);
    });
    it('set loadingText correctly', () => {
        const wrapper = getWrapper({ loadingText: <p>Text</p> });
        expect(wrapper.find('p').exists()).toBe(true);
    });
});
