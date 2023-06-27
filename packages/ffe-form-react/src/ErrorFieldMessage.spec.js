import React from 'react';
import ErrorFieldMessage from './ErrorFieldMessage';

const getWrapper = () =>
    mount(<ErrorFieldMessage>Field message</ErrorFieldMessage>);

describe('<ErrorFieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('div').hasClass('ffe-field-message--error')).toBe(
            true,
        );
    });
});
