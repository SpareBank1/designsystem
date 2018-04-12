import React from 'react';
import { shallow } from 'enzyme';
import ErrorFieldMessage from './ErrorFieldMessage';

const getWrapper = () =>
    shallow(<ErrorFieldMessage>Field message</ErrorFieldMessage>);

describe('<ErrorFieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.hasClass('ffe-field-error-message'));
    });
});
