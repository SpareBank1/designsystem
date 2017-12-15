/*eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { BackButton } from './index';

describe('BackButton', () => {
    it('renders a back button', () => {
        const button = shallow(<BackButton />);

        expect(button).to.have.prop('buttonType', 'back');
        expect(button).to.have.descendants('.ffe-back-button__label');
    });

    it('passes any prop on to Button', () => {
        const button = shallow(<BackButton disableButton={true} />);

        expect(button).to.have.attr('disabled');
    });
});
