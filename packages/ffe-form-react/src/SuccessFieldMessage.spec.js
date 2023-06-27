import React from 'react';
import SuccessFieldMessage from './SuccessFieldMessage';

const getWrapper = () =>
    mount(<SuccessFieldMessage>Field message</SuccessFieldMessage>);

describe('<SuccessFieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('div').hasClass('ffe-field-message--success')).toBe(
            true,
        );
    });
});
