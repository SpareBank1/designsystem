import React from 'react';
import { shallow } from 'enzyme';
import StylizedNumberedList from './StylizedNumberedList';
import StylizedNumberedListItem from './StylizedNumberedListItem';

const getWrapper = props =>
    shallow(
        <StylizedNumberedList {...props}>
            <StylizedNumberedListItem>Firstly</StylizedNumberedListItem>
            <StylizedNumberedListItem>Secondly</StylizedNumberedListItem>
        </StylizedNumberedList>,
    );

describe('<StylizedNumberedList>', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('ol')).toBe(true);
    });
    it('has the correct class', () => {
        const wrapper = getWrapper({ className: 'test-class' });
        expect(wrapper.hasClass('ffe-stylized-numbered-list')).toBe(true);
        expect(wrapper.hasClass('test-class')).toBe(true);
    });
    it('passes props', () => {
        const wrapper = getWrapper({ id: 'that-id' });
        expect(wrapper.prop('id')).toBe('that-id');
        expect(wrapper.html()).toContain('Firstly');
    });
});
