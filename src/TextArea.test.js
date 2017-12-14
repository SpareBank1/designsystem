import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import TextArea from './TextArea';

chai.use(chaiEnzyme());

describe('<TextArea>', () => {
    const component = shallow(<TextArea className="testClass" cols="3"/>);

    it('should render a textarea', () => {
        expect(component).to.have.tagName('textarea');
    });

    it('should set .ffe-textarea', () => {
        expect(component).to.have.className('ffe-textarea');
    });

    it('should set className', () => {
        expect(component).to.have.className('testClass');
    });

    it('should spread all other props', () => {
        expect(component).to.have.prop('cols', '3');
    });
});
