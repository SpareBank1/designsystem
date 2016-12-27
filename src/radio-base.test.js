/*eslint-env mocha*/
/*eslint no-unused-expressions:0*/
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import jsdom from 'jsdom';
import RadioBase from './radio-base';

chai.use(chaiEnzyme());

describe('<RadioBase />', () => {

    describe('rendering', () => {

        describe('default', () => {
          const wrapper = shallow(<RadioBase labelClasses="" value="shark" label="Kjempetorsk" />);

          it('should render an input with type radio', () => {
              expect(wrapper).to.have.exactly(1).descendants('input');
              expect(wrapper.find('input').prop('type')).to.equal('radio');
          });

          it('should render a label', () => {
              expect(wrapper).to.have.exactly(1).descendants('label');
          });

          it('should apply the same id to <label> and <input>', () => {
              const htmlFor = wrapper.find('label').prop('htmlFor');
              const id = wrapper.find('input').prop('id');
              expect(htmlFor).to.be.equal(id);
          });
        });

        it('should render a default value if passed', () => {
            let wrapper = shallow(<RadioBase labelClasses="" value="" />);
            expect(wrapper.find('input')).to.not.be.checked();

            wrapper = shallow(<RadioBase checked={ true } labelClasses="" />);
            expect(wrapper.find('input')).to.be.checked();
        });

        it('should render the field disabled if specified', () => {
            let wrapper = shallow(<RadioBase labelClasses="" />);
            expect(wrapper.find('input').prop('disabled')).to.be.undefined;

            wrapper = shallow(<RadioBase labelClasses="" disabled={ true } />);
            expect(wrapper.find('input').prop('disabled')).to.be.true;
        });

        it('should apply labelClasses to the label', () => {
            const wrapper = shallow(<RadioBase labelClasses="test-class" value="" />);
            expect(wrapper.find('label').hasClass('test-class')).to.be.true;
        });
    });

    describe('interactivity', () => {

        before('init the fake DOM', () => {
            global.document = jsdom.jsdom();
            global.window = global.document.defaultView;
        });

        it('should call onChange when clicked', () => {
            const spy = sinon.spy();
            const wrapper = shallow(<RadioBase onChange={ spy } labelClasses="" />);
            wrapper.find('input').simulate('change');
            expect(spy.calledOnce).to.be.true;
        });

        it('should call onChange with correct parameters', () => {
            const spy = sinon.spy();
            const wrapper = mount(
                <fieldset>
                    <RadioBase name="fish" value="hai" onChange={ spy } labelClasses="" />
                    <RadioBase name="fish" value="kjempetorsk" onChange={ spy } labelClasses="" />
                </fieldset>
            );
            const shark = wrapper.find('input[value="hai"]');
            const giantCod = wrapper.find('input[value="kjempetorsk"]');

            shark.simulate('change');
            giantCod.simulate('change');
            shark.simulate('change');

            expect(spy.callCount).to.be.equal(3);
            expect(spy.getCall(0).args[0].target.value).to.equal('hai');
            expect(spy.getCall(1).args[0].target.value).to.equal('kjempetorsk');
            expect(spy.getCall(2).args[0].target.value).to.equal('hai');
            // Yes, I'm sad to say, but there actually are swedes who believe that the norwegian word for shark is kjempetorsk...
        });
    });

});
