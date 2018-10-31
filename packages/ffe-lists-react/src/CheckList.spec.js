import React from 'react';
import { shallow } from 'enzyme';
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
});

describe('<CheckListItem />', () => {
    it('sets correct class for isCross flag', () => {
        const wrapper = shallow(<CheckListItem>An item</CheckListItem>);

        expect(wrapper.hasClass('ffe-check-list__item--cross')).toBe(false);

        wrapper.setProps({ isCross: true });

        expect(wrapper.hasClass('ffe-check-list__item--cross')).toBe(true);
    });
});
