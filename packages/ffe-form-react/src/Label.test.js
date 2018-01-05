import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Label from './Label';

chai.use(chaiEnzyme());

describe('<Label>', () => {
    let component;

    it('should render a label ', () => {
        component = shallow(<Label htmlFor="test">test</Label>);
        expect(component).to.have.tagName('label');
    });

    it('should set text', () => {
        component = shallow(<Label htmlFor="test">test</Label>);
        expect(component).to.have.text('test');
    });

    it('should set text', () => {
        component = shallow(<Label htmlFor="test">test</Label>);
        expect(component).to.have.className('ffe-form-label');
    });

    it('should set for', () => {
        component = shallow(<Label htmlFor="test">test</Label>);
        expect(component).to.have.attr('for', 'test');
    });

    it('should set className', () => {
        component = shallow(<Label htmlFor="test" className="testClass">test</Label>);
        expect(component).to.have.className('testClass');
    });

    it('should set correct className when block is passed', () => {
        component = shallow(<Label htmlFor="test" block={ true }>test</Label>);
        expect(component).to.have.className('ffe-form-label--block');
    });

    it('should spread all other props', () => {
        component = shallow(<Label htmlFor="test" data-test="test">test</Label>);
        expect(component).to.have.prop('data-test', 'test');
    });
});
