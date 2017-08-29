import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Input from './Input';

chai.use(chaiEnzyme());

describe('<Input>', () => {
    let component;

    it('should render a input element and use the props passed', () => {
        component = shallow(
            <Input
                className="testClass"
                autoComplete="name"
            />
        );
        expect(component).to.have.tagName('input');
        expect(component).to.have.className('ffe-input-field testClass');
        expect(component).to.have.prop('autoComplete','name');
    });

    it('should set correct className if inline prop is passed', () => {
        component = shallow(
            <Input
                inline={ true }
            />
        );
        expect(component).to.have.className('ffe-input-field--inline');
    });

    it('should set correct className if textLike prop is passed', () => {
        component = shallow(
            <Input
                textLike={ true }
            />
        );
        expect(component).to.have.className('ffe-input-field--text-like');
    });
});
