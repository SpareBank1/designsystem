import React from 'react';
import { shallow } from 'enzyme';

import { PrimaryButton } from './index';

describe('PrimaryButton', () => {
    it('renders a primary button', () => {
        const button = shallow(<PrimaryButton />);
        expect(button.props()).toHaveProperty('buttonType', 'primary');
    });

    it('passes any prop on to Button', () => {
        const button = shallow(<PrimaryButton disableButton={true} />);
        expect(button.dive().props()).toHaveProperty('disabled', true);
    });
});
