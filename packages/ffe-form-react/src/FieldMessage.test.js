import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import FieldMessage from './FieldMessage';

chai.use(chaiEnzyme());

describe('<FieldMessage>', () => {
    let component;

    it('should render a div.ffe-field-error-message and given children ', () => {
        component = shallow(<FieldMessage type="error">test</FieldMessage>);
        expect(component).to.have.tagName('div');
        expect(component).to.have.className('ffe-field-error-message');
        expect(component).to.have.text('test');
    });
});
