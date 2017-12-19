/*eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';

import { ShortcutButton } from './index';

describe('ShortcutButton', () => {
    describe('renders', () => {
        it('a shortcut button', () => {
            const button = shallow(<ShortcutButton />);

            expect(button).to.have.prop('buttonType', 'shortcut');
        });

        it('a Chevron icon inside the button', () => {
            const button = render(<ShortcutButton />);

            expect(button).to.have.descendants('svg.ffe-shortcut-button__icon-chevron');
        });
    });

    it('passes any prop on to Button', () => {
        const button = shallow(<ShortcutButton disableButton={true} />);

        expect(button).to.have.attr('disabled');
    });
});
