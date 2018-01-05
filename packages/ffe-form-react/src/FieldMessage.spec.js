import React from 'react';
import { shallow } from 'enzyme';
import FieldMessage from './FieldMessage';

const getWrapper = props =>
    shallow(<FieldMessage {...props}>Field message</FieldMessage>);

describe('<FieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        const wrapper = getWrapper({ type: 'info' });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.hasClass('ffe-field-info-message'));
    });
});
