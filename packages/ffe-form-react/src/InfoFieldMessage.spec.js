import React from 'react';
import { shallow } from 'enzyme';
import InfoFieldMessage from './InfoFieldMessage';

const getWrapper = () =>
    shallow(<InfoFieldMessage>Field message</InfoFieldMessage>);

describe('<InfoFieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.hasClass('ffe-field-info-message'));
    });
});
