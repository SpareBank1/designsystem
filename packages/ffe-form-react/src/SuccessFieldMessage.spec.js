import React from 'react';
import { shallow } from 'enzyme';
import SuccessFieldMessage from './SuccessFieldMessage';

const getWrapper = () =>
    shallow(<SuccessFieldMessage>Field message</SuccessFieldMessage>);

describe('<SuccessFieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.hasClass('ffe-field-success-message'));
    });
});
