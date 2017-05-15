/*eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { PrimaryButton } from './index';

describe('PrimaryButton', () => {
    it('renders a primary button', () => {
        const button = shallow(<PrimaryButton />);

        expect(button).to.have.prop('buttonType', 'primary');
    });

    it('passes any prop on to Button', () => {
        const button = shallow(<PrimaryButton disableButton={true} />);

        expect(button).to.have.attr('disabled');
    });
});
