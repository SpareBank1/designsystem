import React from 'react';
import NumberedList from './NumberedList';
import NumberedListItem from './NumberedListItem';

const getWrapper = props =>
    shallow(
        <NumberedList {...props}>
            <NumberedListItem>Firstly</NumberedListItem>
            <NumberedListItem>Secondly</NumberedListItem>
        </NumberedList>,
    );

describe('<NumberedList>', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('ol')).toBe(true);
    });
    it('has the correct class', () => {
        const wrapper = getWrapper({ className: 'test-class' });
        expect(wrapper.hasClass('ffe-numbered-list')).toBe(true);
        expect(wrapper.hasClass('test-class')).toBe(true);
    });
    it('passes props', () => {
        const wrapper = getWrapper({ id: 'that-id' });
        expect(wrapper.prop('id')).toBe('that-id');
        expect(wrapper.html()).toContain('Firstly');
    });
    it('renders condensed modifier', () => {
        const modifierClass = 'ffe-numbered-list--condensed';
        expect(getWrapper().hasClass(modifierClass)).toBe(false);
        expect(getWrapper({ condensed: true }).hasClass(modifierClass)).toBe(
            true,
        );
    });
});
