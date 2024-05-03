import React from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { shallow } from 'enzyme';

const defaultProps = {
    children: 'Click me',
    buttonType: 'action' as const,
};
const getWrapper = (props?: BaseButtonProps<'button'>) =>
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
        const wrapper = shallow(<BaseButton {...defaultProps} as="a" />);
        expect(wrapper.is('a')).toBe(true);
    });

    describe('when loading', () => {
        it('sets the correct class', () => {
            const wrapper = getWrapper({
                buttonType: 'primary',
                isLoading: true,
            });
            expect(wrapper.hasClass('ffe-button--loading')).toBe(true);
        });
        it('sets the correct aria tags', () => {
            const wrapper = getWrapper({
                buttonType: 'primary',
                isLoading: true,
            });
            expect(wrapper.prop('aria-busy')).toBe(true);
        });
        it('disables the button', () => {
            const wrapper = getWrapper({
                buttonType: 'primary',
                isLoading: true,
            });
            expect(wrapper.prop('aria-disabled')).toBe(true);
        });
        it('does nothing for unsupported button type', () => {
            const wrapper = getWrapper({
                buttonType: 'shortcut',
                isLoading: true,
            });
            expect(wrapper.hasClass('ffe-button--loading')).toBe(false);
            expect(wrapper.prop('aria-busy')).toBe(false);
            expect(wrapper.prop('aria-disabled')).toBe(false);
        });
    });
});
