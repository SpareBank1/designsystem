import React from 'react';
import BaseFieldMessage from './BaseFieldMessage';

const getWrapper = props =>
    shallow(<BaseFieldMessage {...props}>Field message</BaseFieldMessage>);

describe('<BaseFieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        const wrapper = getWrapper({ type: 'error' });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.hasClass('ffe-field-message--error')).toBe(true);
    });
    it('renders the correct class name based on type prop', () => {
        const wrapper = getWrapper({ type: 'info' });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.hasClass('ffe-field-message--info')).toBe(true);
    });
    it('renders the correct class name based on type prop', () => {
        const wrapper = getWrapper({ type: 'success' });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.hasClass('ffe-field-message--success')).toBe(true);
    });
});
