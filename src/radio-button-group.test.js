import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import jsdom from 'jsdom';
import RadioButtonGroup from './radio-button-group';
import RadioButton from './radio-button';

chai.use(chaiEnzyme());


describe('<RadioButtonGroup />', () => {

    describe('basic rendering', () => {
        const wrapper = shallow(<RadioButtonGroup />);

        it('should render an input group', () => {
            expect(wrapper.find('.ffe-input-group')).to.have.lengthOf(1);
        });

        it('should render a fieldset', () => {
            expect(wrapper.find('fieldset')).to.have.lengthOf(1);
        });

        it('should not render a label by default', () => {
            expect(wrapper.find('label')).to.be.empty;
        });
    });

    describe('label rendering', () => {
        const wrapper = shallow(<RadioButtonGroup label="Wazzup" />);

        it('should render a label when specified', () => {
            expect(wrapper.find('label')).to.have.lengthOf(1);
        });

        it('should apply the same id to <label> and <fieldset>', () => {
            const htmlFor = wrapper.find('label').prop('htmlFor');
            const id = wrapper.find('fieldset').prop('id');
            expect(htmlFor).to.be.equal(id);
        });
    });

    describe('rendering of children', () => {

        it('should render its children', () => {
            const wrapper = shallow(
                <RadioButtonGroup>
                    <RadioButton value="banana" label="Gulebøj" />
                </RadioButtonGroup>
            );
            expect(wrapper.find('RadioButton')).to.have.lengthOf(1);
        });

        it('should default the name and inline properties of its children', () => {
            const wrapper = shallow(
                <RadioButtonGroup name="fruit" inline={ true }>
                    <RadioButton value="banana" label="Gulebøj" />
                </RadioButtonGroup>
            );
            const child = wrapper.find('RadioButton');
            expect(child.prop('name')).to.be.equal('fruit');
            expect(child.prop('inline')).to.be.equal(true);
        });

        it('should not override the name and inline properties of its children', () => {
            const wrapper = shallow(
                <RadioButtonGroup name="fruit" inline={ true }>
                    <RadioButton name="frukt" inline={ false } value="Banana" label="Gulebøj" />
                </RadioButtonGroup>
            );
            const child = wrapper.find('RadioButton');
            expect(child.prop('name')).to.be.equal('frukt');
            expect(child.prop('inline')).to.be.equal(false);
        });

        it('should disable its children if the group is set to disabled', () => {
            const wrapper = shallow(
                <RadioButtonGroup disabled={ true }>
                    <RadioButton value="banana" label="Gulebøj" />
                </RadioButtonGroup>
            );
            const child = wrapper.find('RadioButton');
            expect(child.prop('disabled')).to.be.true;
        });
    });

    describe('rendering of button configs', () => {

        it('should render radio buttons from config', () => {
            const buttons = [ { value: 'banana', label: 'Gulebøj' } ];
            const wrapper = shallow(<RadioButtonGroup buttons={ buttons } />);
            const child = wrapper.find('RadioButton');
            expect(child).to.have.lengthOf(1);
            expect(child.prop('value')).to.be.equal('banana');
            expect(child.prop('label')).to.be.equal('Gulebøj');
        });

        it('should default the name and inline properties of the buttons', () => {
            const buttons = [ { value: 'banana', label: 'Gulebøj' } ];
            const wrapper = shallow(<RadioButtonGroup buttons={ buttons } name="fruit" inline={ true } />);
            const child = wrapper.find('RadioButton');
            expect(child.prop('name')).to.be.equal('fruit');
            expect(child.prop('inline')).to.be.equal(true);
        });

        it('should not override the name and inline properties of the buttons', () => {
            const buttons = [ { value: 'banana', label: 'Gulebøj', name: 'frukt', inline: false } ];
            const wrapper = shallow(<RadioButtonGroup buttons={ buttons } name="frukt" inline={ true } />);
            const child = wrapper.find('RadioButton');
            expect(child.prop('name')).to.be.equal('frukt');
            expect(child.prop('inline')).to.be.equal(false);
        });

        it('should replace any children with the specified buttons', () => {
            const buttons = [ { value: 'banana', label: 'Gulebøj' } ];
            const wrapper = shallow(
                <RadioButtonGroup buttons={ buttons }>
                    <RadioButton value="banan" label="Banan" />
                </RadioButtonGroup>
            );
            const child = wrapper.find('RadioButton');
            expect(child).to.have.lengthOf(1);
            expect(child.prop('value')).to.be.equal('banana');
            expect(child.prop('label')).to.be.equal('Gulebøj');
        });

        it('should disable the buttons if the group is set to disabled', () => {
            const buttons = [ { value: 'banana', label: 'Gulebøj' } ];
            const wrapper = shallow(<RadioButtonGroup buttons={ buttons } disabled={ true } />);
            const child = wrapper.find('RadioButton');
            expect(child.prop('disabled')).to.be.true;
        });
    });

    describe('interactivity', () => {

        before('init the fake DOM', () => {
            global.document = jsdom.jsdom();
            global.window = global.document.defaultView;
        });

        it('should call onChange when changed', () => {
            const spy = sinon.spy();
            const wrapper = shallow( <RadioButtonGroup name="fruit" onChange={ spy } /> );
            wrapper.find('fieldset').simulate('change');
            expect(spy.calledOnce).to.be.true;
        });

        it('should call onChange with the correct values', () => {
            const spy = sinon.spy();
            const wrapper = mount(
                <RadioButtonGroup name="fruit" onChange={ spy }>
                    <RadioButton value="apple" label="Apple" />
                    <RadioButton value="orange" label="Orange" />
                </RadioButtonGroup>
            );
            const apple = wrapper.find('input[value="apple"]');
            const orange = wrapper.find('input[value="orange"]');

            apple.simulate('change');
            orange.simulate('change');
            apple.simulate('change');

            expect(spy.callCount).to.be.equal(3);
            expect(spy.getCall(0).args[0].target.value).to.equal('apple');
            expect(spy.getCall(1).args[0].target.value).to.equal('orange');
            expect(spy.getCall(2).args[0].target.value).to.equal('apple');
            // Remember kids - don't mix 'em!!!
        });

        it('passed values should be propagated to the children', () => {
            const wrapper = mount(
                <RadioButtonGroup name="fruit" value="apple">
                    <RadioButton value="apple" label="Apple" />
                    <RadioButton value="orange" label="Orange" />
                </RadioButtonGroup>
            );
            expect(wrapper.find('input[value="apple"]')).to.be.checked;
            expect(wrapper.find('input[value="orange"]')).to.not.be.checked;
        });

        it('passed values should be override any checked values in the children', () => {
            const wrapper = mount(
                <RadioButtonGroup name="fruit" value="orange">
                    <RadioButton value="apple" label="Apple" checked={ true } />
                    <RadioButton value="orange" label="Orange" />
                </RadioButtonGroup>
            );
            expect(wrapper.find('input[value="apple"]')).to.not.be.checked;
            expect(wrapper.find('input[value="orange"]')).to.be.checked;
        });
    });
});
