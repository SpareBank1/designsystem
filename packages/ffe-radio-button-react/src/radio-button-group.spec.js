import React from 'react';
import { shallow, mount } from 'enzyme';
import RadioButtonGroup from './radio-button-group';
import RadioButton from './radio-button';

describe('<RadioButtonGroup />', () => {
    console.error = jest.fn(); // To suppress missing onChange warnings
    describe('basic rendering', () => {
        const wrapper = shallow(<RadioButtonGroup />);

        it('should render an input group', () => {
            expect(wrapper.find('.ffe-input-group')).toHaveLength(1);
        });

        it('should render a fieldset', () => {
            expect(wrapper.find('fieldset')).toHaveLength(1);
        });

        it('should not render a legend by default', () => {
            expect(wrapper.find('legend')).toHaveLength(0);
        });

        it('should render a legend when specified', () => {
            const wrapperWithLabel = shallow(
                <RadioButtonGroup label="Wazzup" />,
            );
            const legend = wrapperWithLabel.find('legend');
            expect(legend).toHaveLength(1);
            expect(legend.text()).toBe('Wazzup');
        });
    });

    describe('rendering of children', () => {
        it('should render its children', () => {
            const wrapper = shallow(
                <RadioButtonGroup>
                    <RadioButton value="banana" label="Gulebøj" />
                </RadioButtonGroup>,
            );
            expect(wrapper.find('RadioButton')).toHaveLength(1);
        });

        it('should default the name and inline properties of its children', () => {
            const wrapper = shallow(
                <RadioButtonGroup name="fruit" inline={true}>
                    <RadioButton value="banana" label="Gulebøj" />
                </RadioButtonGroup>,
            );
            const child = wrapper.find('RadioButton');
            expect(child.prop('name')).toBe('fruit');
            expect(child.prop('inline')).toBe(true);
        });

        it('should not override the name and inline properties of its children', () => {
            const wrapper = shallow(
                <RadioButtonGroup name="fruit" inline={true}>
                    <RadioButton
                        name="frukt"
                        inline={false}
                        value="Banana"
                        label="Gulebøj"
                    />
                </RadioButtonGroup>,
            );
            const child = wrapper.find('RadioButton');
            expect(child.prop('name')).toBe('frukt');
            expect(child.prop('inline')).toBe(false);
        });

        it('should disable its children if the group is set to disabled', () => {
            const wrapper = shallow(
                <RadioButtonGroup disabled={true}>
                    <RadioButton value="banana" label="Gulebøj" />
                </RadioButtonGroup>,
            );
            const child = wrapper.find('RadioButton');
            expect(child.prop('disabled')).toBe(true);
        });
    });

    describe('rendering of button configs', () => {
        it('should render radio buttons from config', () => {
            const buttons = [{ value: 'banana', label: 'Gulebøj' }];
            const wrapper = shallow(<RadioButtonGroup buttons={buttons} />);
            const child = wrapper.find('RadioButton');
            expect(child).toHaveLength(1);
            expect(child.prop('value')).toBe('banana');
            expect(child.prop('label')).toBe('Gulebøj');
        });

        it('should default the name and inline properties of the buttons', () => {
            const buttons = [{ value: 'banana', label: 'Gulebøj' }];
            const wrapper = shallow(
                <RadioButtonGroup
                    buttons={buttons}
                    name="fruit"
                    inline={true}
                />,
            );
            const child = wrapper.find('RadioButton');
            expect(child.prop('name')).toBe('fruit');
            expect(child.prop('inline')).toBe(true);
        });

        it('should not override the name and inline properties of the buttons', () => {
            const buttons = [
                {
                    value: 'banana',
                    label: 'Gulebøj',
                    name: 'frukt',
                    inline: false,
                },
            ];
            const wrapper = shallow(
                <RadioButtonGroup
                    buttons={buttons}
                    name="frukt"
                    inline={true}
                />,
            );
            const child = wrapper.find('RadioButton');
            expect(child.prop('name')).toBe('frukt');
            expect(child.prop('inline')).toBe(false);
        });

        it('should replace any children with the specified buttons', () => {
            const buttons = [{ value: 'banana', label: 'Gulebøj' }];
            const wrapper = shallow(
                <RadioButtonGroup buttons={buttons}>
                    <RadioButton value="banan" label="Banan" />
                </RadioButtonGroup>,
            );
            const child = wrapper.find('RadioButton');
            expect(child).toHaveLength(1);
            expect(child.prop('value')).toBe('banana');
            expect(child.prop('label')).toBe('Gulebøj');
        });

        it('should disable the buttons if the group is set to disabled', () => {
            const buttons = [{ value: 'banana', label: 'Gulebøj' }];
            const wrapper = shallow(
                <RadioButtonGroup buttons={buttons} disabled={true} />,
            );
            const child = wrapper.find('RadioButton');
            expect(child.prop('disabled')).toBe(true);
        });
    });

    describe('interactivity', () => {
        it('should call onChange when changed', () => {
            const spy = jest.fn();
            const wrapper = shallow(
                <RadioButtonGroup name="fruit" onChange={spy} />,
            );
            wrapper.find('fieldset').simulate('change');
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should call onChange with the correct values', () => {
            const spy = jest.fn();
            const wrapper = mount(
                <RadioButtonGroup name="fruit" onChange={spy}>
                    <RadioButton value="apple" label="Apple" />
                    <RadioButton value="orange" label="Orange" />
                </RadioButtonGroup>,
            );
            const apple = wrapper.find('input[value="apple"]');
            const orange = wrapper.find('input[value="orange"]');

            apple.simulate('change');
            orange.simulate('change');
            apple.simulate('change');

            expect(spy).toHaveBeenCalledTimes(3);
            expect(spy.mock.calls[0][0].target.value).toBe('apple');
            expect(spy.mock.calls[1][0].target.value).toBe('orange');
            expect(spy.mock.calls[2][0].target.value).toBe('apple');
        });

        it('passed values should be propagated to the children', () => {
            const wrapper = mount(
                <RadioButtonGroup name="fruit" value="apple">
                    <RadioButton value="apple" label="Apple" />
                    <RadioButton value="orange" label="Orange" />
                </RadioButtonGroup>,
            );
            expect(wrapper.find('input[value="apple"]').prop('checked')).toBe(
                true,
            );
            expect(wrapper.find('input[value="orange"]').prop('checked')).toBe(
                false,
            );
        });

        it('passed values should be override any checked values in the children', () => {
            const wrapper = mount(
                <RadioButtonGroup name="fruit" value="orange">
                    <RadioButton value="apple" label="Apple" checked={true} />
                    <RadioButton value="orange" label="Orange" />
                </RadioButtonGroup>,
            );
            expect(wrapper.find('input[value="apple"]').prop('checked')).toBe(
                false,
            );
            expect(wrapper.find('input[value="orange"]').prop('checked')).toBe(
                true,
            );
        });
    });

    describe('pass-through of additional props values', () => {
        it('should allow pass-through of additional props values', () => {
            const labelledBy = 'someId';
            const describedBy = 'anotherId';
            const wrapper = shallow(
                <RadioButtonGroup
                    aria-labelledby={labelledBy}
                    aria-describedby={describedBy}
                />,
            );

            expect(wrapper.find('fieldset').prop('aria-labelledby')).toBe(
                labelledBy,
            );
            expect(wrapper.find('fieldset').prop('aria-describedby')).toBe(
                describedBy,
            );
        });
    });
});
