import React from 'react';
import { shallow } from 'enzyme';
import BaseButton from './BaseButton';

const defaultProps = {
    children: 'Click me',
};
const getWrapper = props =>
    shallow(<BaseButton {...defaultProps} {...props} />);

describe('<BaseButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the correct classes', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-button')).toBe(true);

        wrapper.setProps({ className: 'custom-class', buttonType: 'action' });

        expect(wrapper.hasClass('ffe-button--action')).toBe(true);
        expect(wrapper.hasClass('custom-class')).toBe(true);
    });
    it('renders the correct label', () => {
        const wrapper = getWrapper();
        expect(wrapper.text()).toBe('Click me');

        wrapper.setProps({ children: 'Press me' });
        expect(wrapper.text()).toBe('Press me');
    });
    it('renders left icon if set', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.ffe-button__icon--left').exists()).toBe(false);

        wrapper.setProps({ leftIcon: <svg /> });
        expect(wrapper.find('.ffe-button__icon--left').exists()).toBe(true);
    });
    it('renders right icon if set', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.ffe-button__icon--right').exists()).toBe(false);

        wrapper.setProps({ rightIcon: <svg /> });
        expect(wrapper.find('.ffe-button__icon--right').exists()).toBe(true);
    });
    it('renders the specified dom node', () => {
        const wrapper = getWrapper({ element: 'a' });
        expect(wrapper.is('a')).toBe(true);
    });

    describe('when loading', () => {
        it('sets the correct class', () => {
            const wrapper = getWrapper({ isLoading: true });
            expect(wrapper.hasClass('ffe-button--loading')).toBe(true);
        });
        it('sets the correct aria tags', () => {
            const wrapper = getWrapper({ isLoading: true });
            expect(wrapper.prop('aria-busy')).toBe(true);
        });
        it('disables the button', () => {
            const wrapper = getWrapper({ isLoading: true });
            expect(wrapper.prop('aria-disabled')).toBe(true);
            expect(wrapper.prop('disabled')).toBe(true);
        });
    });
});
