import React from 'react';
import { shallow } from 'enzyme';

import { TertiaryButton } from './index';

describe('TertiaryButton', () => {
    describe('renders', () => {
        it('a tertiary button', () => {
            const button = shallow(<TertiaryButton />);
            expect(button.props()).toHaveProperty('buttonType', 'tertiary');
        });

        it('only simple content', () => {
            const button = shallow(<TertiaryButton />);
            expect(button.find('span').exists()).toBe(false);
        });
    });

    it('passes any prop on to Button', () => {
        const button = shallow(<TertiaryButton disableButton={true} />);
        expect(button.dive().props()).toHaveProperty('disabled', true);
    });
});
