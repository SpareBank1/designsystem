import React from 'react';
import { shallow } from 'enzyme';

import { SecondaryButton } from './index';

describe('SecondaryButton', () => {
    it('renders a secondary button', () => {
        const button = shallow(<SecondaryButton />);

        expect(button.props()).toHaveProperty('buttonType', 'secondary');
    });

    it('passes any prop on to Button', () => {
        const button = shallow(<SecondaryButton disableButton={true} />);
        expect(button.dive().props()).toHaveProperty('disabled', true);
    });
});
