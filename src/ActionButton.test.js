/*eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { ActionButton } from './index';

describe('ActionButton', () => {
    it('renders an action button', () => {
        const button = shallow(<ActionButton />);

        expect(button).to.have.prop('buttonType', 'action');
    });

    it('passes any prop on to Button', () => {
        const button = shallow(<ActionButton data-analytics-track="logMe" />);

        expect(button).to.have.attr('data-analytics-track', 'logMe');
    });
});
