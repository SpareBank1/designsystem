import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Dropdown from './Dropdown';

const getWrapper = props =>
    shallow(
        <Dropdown {...props}>
            <option>Option 1</option>
            <option>Option 2</option>
        </Dropdown>,
    );

describe('<Dropdown />', () => {
    it('renders a select', () => {
        const wrapper = getWrapper();
        expect(wrapper.is('select')).toBe(true);
        expect(wrapper.hasClass('ffe-dropdown')).toBe(true);
    });

    it('renders children inside the select', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('option')).toHaveLength(2);
    });

    it('sets the inline modifier class', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-dropdown--inline')).toBe(false);
        wrapper.setProps({ inline: true });
        expect(wrapper.hasClass('ffe-dropdown--inline')).toBe(true);
    });

    it('adds additional classes', () => {
        const wrapper = getWrapper({ className: 'custom-test-class' });
        expect(wrapper.hasClass('custom-test-class')).toBe(true);
        expect(wrapper.hasClass('ffe-dropdown')).toBe(true);
    });

    it('passes on any props to the <select />', () => {
        const wrapper = getWrapper({
            'aria-invalid': 'true',
            disabled: 'true',
        });
        expect(wrapper.find('select').prop('aria-invalid')).toBe('true');
        expect(wrapper.find('select').prop('disabled')).toBe('true');
    });
});
