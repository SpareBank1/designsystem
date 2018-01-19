/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import NumberedList from './NumberedList';

const getWrapper = props =>
    shallow(
        <NumberedList {...props}>
            <li>Firstly</li>
            <li>Secondly</li>
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
        expect(wrapper.text()).toContain('Firstly');
    });
});
