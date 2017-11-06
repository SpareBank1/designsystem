import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import InputGroup from './InputGroup';
import Input from './Input';
import Label from './Label';
import Tooltip from './Tooltip';
import ErrorFieldMessage from './ErrorFieldMessage';
import SuccessFieldMessage from './SuccessFieldMessage';


chai.use(chaiEnzyme());

describe('<InputGroup>', () => {
    it('renders a div.ffe-input-group', () => {
        const component = shallow(
            <InputGroup
                label="label"
                className="testClass"
            >
                <Input/>
            </InputGroup>
        );
        expect(component).to.have.tagName('div');
        expect(component).to.have.className('ffe-input-group');
    });

    it('renders the given child', () => {
        const component = shallow(
            <InputGroup label="label">
                <Input />
            </InputGroup>
        );
        expect(component.find('Input')).to.have.length(1);
    });

    it('renders a Label if a string passed from the label prop', () => {
        const component = shallow(
            <InputGroup label="label">
                <Input />
            </InputGroup>
        );
        expect(component.find('Label')).to.have.prop('children', 'label');
    });

    it('renders a Label with htmlFor set to the same value of the children id', () => {
        const component = shallow(
            <InputGroup label="label">
                <Input />
            </InputGroup>
        );
        const inputId = component.find('Input').prop('id');
        expect(component.find('Label').prop('htmlFor')).to.equal(inputId);
    });

    it('generates a id for children and set it as htmlFor on Label', () => {
        const component = shallow(
            <InputGroup label="label">
                <Input />
            </InputGroup>
        );
        expect(component.find('Label')).to.have.prop('htmlFor');
        expect(component.find('Input')).to.have.prop('id');
        expect(component.find('Input').prop('id')).to.equal(component.find('Label').prop('htmlFor'));
    });

    it('renders a Tooltip if a string is passed as tooltip prop', () => {
        const component = shallow(
            <InputGroup
                label="label"
                tooltip="tooltip"
            >
                <Input />
            </InputGroup>
        );
        expect(component.find('Tooltip')).to.have.prop('children', 'tooltip');
    });

    it('renders an ErrorFieldMessage and sets aria-invalid if a string is passed as fieldMessage', () => {
        const component = shallow(
            <InputGroup
                label="InputLabel"
                fieldMessage="InputFieldMessage"
            >
                <Input />
            </InputGroup>
        );
        expect(component.find('ErrorFieldMessage')).to.have.prop('children', 'InputFieldMessage');
        expect(component.find('Input')).to.have.prop('aria-invalid', 'true');
    });

    it('renders a Label component if passed a label prop', () => {
        const component = shallow(
            <InputGroup
                label={<Label htmlFor="inputId">LabelComponent</Label>}
            >
                <Input/>
            </InputGroup>
        );
        expect(component.find('Label')).to.have.prop('children', 'LabelComponent');
    });

    it('renders a Tooltip if passed as tooltip prop', () => {
        const component = shallow(
            <InputGroup
                label="label"
                tooltip={<Tooltip>Tooltip</Tooltip>}
            >
                <Input/>
            </InputGroup>
        );
        expect(component.find('Tooltip')).to.have.prop('children', 'Tooltip');
    });

    it('renders a ErrorFieldMessage and sets aria-invalid if passed as fieldMessage prop', () => {
        const component = shallow(
            <InputGroup
                label="label"
                fieldMessage={<ErrorFieldMessage>ErrorFieldMessage</ErrorFieldMessage>}
            >
                <Input/>
            </InputGroup>
        );
        expect(component.find('ErrorFieldMessage')).to.have.prop('children', 'ErrorFieldMessage');
        expect(component.find('Input')).to.have.prop('aria-invalid', 'true');
    });

    it('renders a SuccessFieldMessage if passed as fieldMessage prop', () => {
        const component = shallow(
            <InputGroup
                label="label"
                fieldMessage={<SuccessFieldMessage>SuccessFieldMessage</SuccessFieldMessage>}
            >
                <Input/>
            </InputGroup>
        );
        expect(component.find('SuccessFieldMessage')).to.have.prop('children', 'SuccessFieldMessage');
    });

    it('throws error when receiving multiple children', () => {
        const component = () => shallow(
            <InputGroup label="How much money do you make?">
                <span>About...</span>
                <Input />
                <span> moneys</span>
            </InputGroup>
        );

        expect(component).to.throw(Error);
    });

    it('supplies id and aria-invalid to function when child is a function', () => {
        const component = shallow(
            <InputGroup label="Fancy pattern">
                {(props => (
                    <div>
                        <span>so cool</span>
                        <Input {...props} />
                        <span> easy stuff</span>
                    </div>
                ))}
            </InputGroup>
        );

        expect(component.find('Input').prop('id')).to.have.lengthOf(36);
        expect(component.find('Input').prop('aria-invalid')).to.equal('false');
    });
});
