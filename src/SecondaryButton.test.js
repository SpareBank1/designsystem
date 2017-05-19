/*eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { SecondaryButton } from './index';

describe('SecondaryButton', () => {
    it('renders a secondary button', () => {
        const button = shallow(<SecondaryButton />);

        expect(button).to.have.prop('buttonType', 'secondary');
    });

    it('passes any prop on to Button', () => {
        const button = shallow(<SecondaryButton disableButton={true} />);

        expect(button).to.have.attr('disabled');
    });
});
