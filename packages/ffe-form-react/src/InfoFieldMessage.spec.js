import React from 'react';
import InfoFieldMessage from './InfoFieldMessage';

const getWrapper = () =>
    mount(<InfoFieldMessage>Field message</InfoFieldMessage>);

describe('<InfoFieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('div').hasClass('ffe-field-message--info')).toBe(
            true,
        );
    });
});
