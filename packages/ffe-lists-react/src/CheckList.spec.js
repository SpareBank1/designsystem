import React from 'react';
import CheckList from './CheckList';
import CheckListItem from './CheckListItem';

const getWrapper = props =>
    shallow(
        <CheckList {...props}>
            <CheckListItem>Firstly</CheckListItem>
            <CheckListItem>Secondly</CheckListItem>
        </CheckList>,
    );

describe('<CheckList>', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('ul')).toBe(true);
    });
    it('has the correct class', () => {
        const wrapper = getWrapper({ className: 'test-class' });
        expect(wrapper.hasClass('ffe-check-list')).toBe(true);
        expect(wrapper.hasClass('test-class')).toBe(true);
    });
    it('passes props', () => {
        const wrapper = getWrapper({ id: 'that-id' });
        expect(wrapper.prop('id')).toBe('that-id');
        expect(wrapper.html()).toContain('Firstly');
    });
    it('sets the correct class when columns prop is 2', () => {
        const wrapper = getWrapper({ columns: 2 });
        expect(wrapper.hasClass('ffe-check-list--two-columns')).toBe(true);
        wrapper.setProps({ columns: '2' });
        expect(wrapper.hasClass('ffe-check-list--two-columns')).toBe(true);
    });
    it('only supports 1 and 2 columns', () => {
        const wrapper = getWrapper({ columns: 3 });
        expect(wrapper.hasClass('ffe-check-list--two-columns')).toBe(false);
        wrapper.setProps({ columns: 1 });
        expect(wrapper.hasClass('ffe-check-list--two-columns')).toBe(false);
    });
});

describe('<CheckListItem />', () => {
    it('sets correct class for isCross flag', () => {
        const wrapper = shallow(<CheckListItem>An item</CheckListItem>);

        expect(wrapper.hasClass('ffe-check-list__item--cross')).toBe(false);

        wrapper.setProps({ isCross: true });

        expect(wrapper.hasClass('ffe-check-list__item--cross')).toBe(true);
    });
    it('sets correct aria-label based on isCross value', () => {
        const wrapper = shallow(<CheckListItem>An item</CheckListItem>);
        expect(wrapper.prop('aria-label')).toBe('hake');
        wrapper.setProps({ isCross: true });
        expect(wrapper.prop('aria-label')).toBe('kryss');
    });
});
