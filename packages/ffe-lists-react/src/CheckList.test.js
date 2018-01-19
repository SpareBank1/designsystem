/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import CheckList from './CheckList';

const getWrapper = props =>
    shallow(
        <CheckList {...props}>
            <li>Firstly</li>
            <li>Secondly</li>
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
        expect(wrapper.text()).toContain('Firstly');
    });
});
