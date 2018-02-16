import React from 'react';
import { shallow } from 'enzyme';

import { BackButton } from './index';

describe('BackButton', () => {
    it('renders a back button', () => {
        const button = shallow(<BackButton />);
        expect(button.props()).toHaveProperty('buttonType', 'back');
        expect(button.find('.ffe-back-button__label').exists()).toBe(true);
    });

    it('passes any prop on to Button', () => {
        const button = shallow(<BackButton disableButton={true} />);
        expect(button.dive().props()).toHaveProperty('disabled', true);
    });
});
