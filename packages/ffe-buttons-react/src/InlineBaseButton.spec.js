import React from 'react';
import { shallow } from 'enzyme';
import InlineBaseButton from './InlineBaseButton';

const defaultProps = {
    children: 'Click me',
};
const getWrapper = props =>
    shallow(<InlineBaseButton {...defaultProps} {...props} />);

describe('<InlineBaseButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the correct classes', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-inline-button')).toBe(true);

        wrapper.setProps({ className: 'custom-class', buttonType: 'tertiary' });

        expect(wrapper.hasClass('ffe-inline-button--tertiary')).toBe(true);
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
        expect(wrapper.find('.ffe-inline-button__icon--left').exists()).toBe(
            false,
        );

        wrapper.setProps({ leftIcon: <svg /> });
        expect(wrapper.find('.ffe-inline-button__icon--left').exists()).toBe(
            true,
        );
    });
    it('renders right icon if set', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.ffe-inline-button__icon--right').exists()).toBe(
            false,
        );

        wrapper.setProps({ rightIcon: <svg /> });
        expect(wrapper.find('.ffe-inline-button__icon--right').exists()).toBe(
            true,
        );
    });
    it('renders the specified dom node', () => {
        const wrapper = getWrapper({ element: 'a' });
        expect(wrapper.is('a')).toBe(true);
    });
});
