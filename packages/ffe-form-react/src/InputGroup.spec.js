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

    it('renders an ErrorFieldMessage and sets aria-invalid if a string is passed as fieldMessage', () => {
        const wrapper = getWrapper({ fieldMessage: 'such error' });

        expect(wrapper.find('ErrorFieldMessage').prop('children')).toBe(
            'such error',
        );
        expect(wrapper.find(Input).prop('aria-invalid')).toBe('true');
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

        expect(wrapper.find('ErrorFieldMessage').exists()).toBe(true);
        expect(wrapper.find('ErrorFieldMessage').prop('children')).toBe(
            'Some error',
        );
        expect(wrapper.find(Input).prop('aria-invalid')).toBe('true');
    });

    it('renders a SuccessFieldMessage if passed as fieldMessage prop', () => {
        const wrapper = getWrapper({
            fieldMessage: (
                <SuccessFieldMessage>Some success</SuccessFieldMessage>
            ),
        });

        expect(wrapper.find('SuccessFieldMessage').exists()).toBe(true);
        expect(wrapper.find('SuccessFieldMessage').prop('children')).toBe(
            'Some success',
        );
        expect(wrapper.find(Input).prop('aria-invalid')).toBe('false');
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

    it('renders a static tooltip if description is set', () => {
        const wrapper = getWrapper({
            description: 'description',
        });
        expect(wrapper.find('.ffe-small-text').text()).toBe('description');
    });

    it('throws if both tooltip and description is set', () => {
        expect(() =>
            getWrapper({ description: 'asda', tooltip: 'asdsad' }),
        ).toThrow(
            'Don\'t use both "tooltip" and "description" on an <InputGroup />, pick one of them',
        );
    });
});
