/*eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { TertiaryButton } from './index';

describe('TertiaryButton', () => {
    describe('renders', () => {
        it('a tertiary button', () => {
            const button = shallow(<TertiaryButton />);

            expect(button).to.have.prop('buttonType', 'tertiary');
        });

        it('only simple content', () => {
            const button = shallow(<TertiaryButton />);

            expect(button).to.not.have.descendants('span');
        });
    });

    it('passes any prop on to Button', () => {
        const button = shallow(<TertiaryButton disableButton={true} />);

        expect(button).to.have.attr('disabled');
    });
});
