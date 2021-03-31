import React from 'react';
import { shallow } from 'enzyme';
import InputGroup from './InputGroup';
import Input from './Input';
import Label from './Label';
import Tooltip from './Tooltip';
import ErrorFieldMessage from './ErrorFieldMessage';
import SuccessFieldMessage from './SuccessFieldMessage';

const defaultProps = { label: 'label', children: <Input /> };
const getWrapper = props =>
    shallow(<InputGroup {...defaultProps} {...props} />);

describe('<InputGroup>', () => {
    it('renders a div.ffe-input-group', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.hasClass('ffe-input-group')).toBe(true);
        expect(wrapper.hasClass('ffe-input-group--message')).toBe(false);
    });

    it('renders the given child', () => {
        const wrapper = getWrapper();
        expect(wrapper.find(Input)).toHaveLength(1);
    });

    it('renders a Label if a string passed from the label prop', () => {
        const wrapper = getWrapper({ label: 'custom label' });
        expect(
            wrapper
                .find('Label')
                .dive()
                .text(),
        ).toMatch(/custom label/);
    });

    it('renders a Label with htmlFor set to the same generated value of the children input id', () => {
        const wrapper = getWrapper();
        const inputId = wrapper.find(Input).prop('id');

        expect(inputId).toMatch(/input-*/);
        expect(wrapper.find('Label').prop('htmlFor')).toBe(inputId);
    });

    it('renders a Label with htmlFor set to the same value of the inputId', () => {
        const wrapper = getWrapper({ inputId: 'my_id' });
        const inputId = wrapper.find(Input).prop('id');

        expect(inputId).toBe('my_id');
        expect(wrapper.find('Label').prop('htmlFor')).toBe(inputId);
    });

    it('renders a Tooltip if a string is passed as tooltip prop', () => {
        const wrapper = getWrapper({ tooltip: 'custom tooltip' });

        expect(wrapper.find('Tooltip').prop('children')).toBe('custom tooltip');
    });

    it('renders an ErrorFieldMessage and sets aria-invalid', () => {
        const wrapper = getWrapper({ fieldMessage: 'such error' });

        const errorFieldMessage = wrapper.find('ErrorFieldMessage');
        expect(errorFieldMessage.prop('children')).toBe('such error');

        const input = wrapper.find(Input);
        expect(wrapper.hasClass('ffe-input-group--message')).toBe(true);
        expect(input.prop('aria-invalid')).toBe('true');
    });

    it('renders a Label component if passed a label prop', () => {
        const wrapper = getWrapper({ label: <Label>Label text</Label> });

        expect(wrapper.find('Label').prop('children')).toBe('Label text');
    });

    it('renders a Tooltip if passed as tooltip prop', () => {
        const wrapper = getWrapper({
            tooltip: <Tooltip>Tooltip text</Tooltip>,
        });

        expect(wrapper.find('Tooltip').exists()).toBe(true);
        expect(wrapper.find('Tooltip').prop('children')).toBe('Tooltip text');
    });

    it('renders a ErrorFieldMessage and sets aria-invalid if passed as fieldMessage prop', () => {
        const wrapper = getWrapper({
            fieldMessage: <ErrorFieldMessage>Some error</ErrorFieldMessage>,
        });

        const errorFieldMessage = wrapper.find('ErrorFieldMessage');

        expect(errorFieldMessage.exists()).toBe(true);
        expect(errorFieldMessage.prop('children')).toBe('Some error');

        const input = wrapper.find(Input);
        expect(wrapper.hasClass('ffe-input-group--message')).toBe(true);
        expect(input.prop('aria-invalid')).toBe('true');
    });

    it('connects an ErrorFieldMessage that specifies its own id to the correct input field', () => {
        const wrapper = getWrapper({
            fieldMessage: (
                <ErrorFieldMessage id="best-id">Some error</ErrorFieldMessage>
            ),
        });

        const errorFieldMessage = wrapper.find('ErrorFieldMessage');
        expect(errorFieldMessage.exists()).toBe(true);

        const errorFieldMessageId = errorFieldMessage.prop('id');
        expect(errorFieldMessageId).toBe('best-id');
    });

    it('renders a SuccessFieldMessage and not aria-invalid if passed as fieldMessage prop', () => {
        const wrapper = getWrapper({
            fieldMessage: (
                <SuccessFieldMessage>Some success</SuccessFieldMessage>
            ),
        });

        const successFieldMessage = wrapper.find('SuccessFieldMessage');
        expect(successFieldMessage.exists()).toBe(true);
        expect(successFieldMessage.prop('children')).toBe('Some success');
        expect(wrapper.hasClass('ffe-input-group--message')).toBe(true);
        const input = wrapper.find(Input);
        expect(input.prop('aria-invalid')).toBe('false');
    });

    it('throws error when receiving multiple children', () => {
        const wrapper = () =>
            getWrapper({
                children: [
                    <span key="1">About...</span>,
                    <Input key="2" />,
                    <span key="3"> moneys</span>,
                ],
            });

        expect(wrapper).toThrowError(
            /This element does not support more than one child/,
        );
    });

    it('throws error when receiving a <Tooltip /> and onTooltipToggle is used', () => {
        const wrapper = () =>
            getWrapper({
                tooltip: <Tooltip>Message</Tooltip>,
                onTooltipToggle: f => f,
            });

        expect(wrapper).toThrowError(
            /Only use the "onTooltipToggle" prop if you're not sending a component/,
        );
    });

    it('renders a <Tooltip /> with onTooltipToggle as an onClick if tooltip is true', () => {
        const onTooltipToggle = jest.fn();
        const wrapper = getWrapper({
            tooltip: true,
            onTooltipToggle,
        });
        const tooltip = wrapper.find(Tooltip);
        expect(tooltip.exists()).toBe(true);
        tooltip.simulate('click');
        expect(onTooltipToggle).toHaveBeenCalled();
    });

    it('supplies id and aria-invalid to function when child is a function', () => {
        const wrapper = getWrapper({
            children: props => (
                <div>
                    <span>so cool</span>
                    <Input {...props} />
                    <span> easy stuff</span>
                </div>
            ),
        });

        expect(wrapper.find(Input).prop('id')).toHaveLength(42);
        expect(wrapper.find(Input).prop('aria-invalid')).toBe('false');
    });

    it('renders a static tooltip and adds aria-describedby if description is set', () => {
        const wrapper = getWrapper({
            description: 'description',
        });
        const description = wrapper.find('.ffe-small-text');
        expect(description.text()).toBe('description');
        expect(description.prop('id')).toBe(
            wrapper.find(Input).prop('aria-describedby'),
        );
    });

    it('throws if both tooltip and description is set', () => {
        expect(() =>
            getWrapper({ description: 'asda', tooltip: 'asdsad' }),
        ).toThrow(
            'Don\'t use both "tooltip" and "description" on an <InputGroup />, pick one of them',
        );
    });

    it('sets aria-describedby when description is defined', () => {
        const wrapper = getWrapper({
            description: 'description',
        });
        const descriptionId = wrapper.find('.ffe-small-text').prop('id');
        expect(wrapper.find(Input).prop('aria-describedby')).toBe(
            descriptionId,
        );
    });

    it('does not set aria-describedby when description is not defined', () => {
        const wrapper = getWrapper();
        expect(wrapper.find(Input).prop('aria-describedby')).toBeNull();
    });

    it('adds aria-describedby when adding description on second render', () => {
        const wrapper = getWrapper();
        expect(wrapper.find(Input).prop('aria-describedby')).toBeNull();
        wrapper.setProps({ description: 'description' });
        expect(wrapper.find(Input).prop('aria-describedby')).not.toBe(null);
        expect(wrapper.find(Input).prop('aria-describedby')).toBe(
            wrapper.find('.ffe-small-text').prop('id'),
        );
    });
});
