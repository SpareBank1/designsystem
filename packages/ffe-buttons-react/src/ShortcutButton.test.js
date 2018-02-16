import React from 'react';
import { shallow, mount } from 'enzyme';

import { ShortcutButton } from './index';

describe('ShortcutButton', () => {
    describe('renders', () => {
        it('a shortcut button', () => {
            const button = shallow(<ShortcutButton />);
            expect(button.props()).toHaveProperty('buttonType', 'shortcut');
        });

        it('a Chevron icon inside the button', () => {
            const button = mount(<ShortcutButton />);
            expect(button
                    .find('svg.ffe-shortcut-button__icon-chevron')
                    .exists()).toBe(true);
        });
    });

    it('passes any prop on to Button', () => {
        const button = shallow(<ShortcutButton disableButton={true} />);
        expect(button.dive().props()).toHaveProperty('disabled', true);
    });
});
