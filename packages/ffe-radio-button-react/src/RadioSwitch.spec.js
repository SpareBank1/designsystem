import React from 'react';
import { shallow } from 'enzyme';
import each from 'jest-each';

import RadioSwitch from './RadioSwitch';

const defaultProps = {
    leftLabel: 'Ja',
    leftValue: true,
    name: 'choice',
    rightLabel: 'Nei',
    rightValue: 'nei',
};

const getWrapper = props =>
    shallow(<RadioSwitch {...defaultProps} {...props} />);

describe('<RadioSwitch />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });

    it('sets aria-invalid correctly', () => {
        const wrapper = getWrapper({
            'aria-invalid': 'true',
            selectedValue: true,
        });
        expect(wrapper.find('BaseRadioButton')).toHaveLength(2);

        const leftOne = wrapper.find('BaseRadioButton').first();
        const rightOne = wrapper.find('BaseRadioButton').last();

        expect(leftOne.prop('aria-invalid')).toBe('true');
        expect(rightOne.prop('aria-invalid')).toBe('false');
    });

    it('sets aria-invalid on button with selected value, type of selected value is bool', () => {
        const wrapper = getWrapper({
            'aria-invalid': 'true',
            selectedValue: defaultProps.leftValue,
        });
        expect(wrapper.find('BaseRadioButton')).toHaveLength(2);

        const leftOne = wrapper.find('BaseRadioButton').first();
        const rightOne = wrapper.find('BaseRadioButton').last();

        expect(leftOne.prop('aria-invalid')).toBe('true');
        expect(rightOne.prop('aria-invalid')).toBe('false');
    });

    it('sets aria-invalid on button with selected value, type of selected value is string', () => {
        const wrapper = getWrapper({
            'aria-invalid': 'true',
            selectedValue: defaultProps.rightValue,
        });
        expect(wrapper.find('BaseRadioButton')).toHaveLength(2);

        const leftOne = wrapper.find('BaseRadioButton').first();
        const rightOne = wrapper.find('BaseRadioButton').last();

        expect(leftOne.prop('aria-invalid')).toBe('false');
        expect(rightOne.prop('aria-invalid')).toBe('true');
    });

    it('sets aria-invalid on both buttons for undefined selected value ', () => {
        const wrapper = getWrapper({ 'aria-invalid': 'true' });
        expect(wrapper.find('BaseRadioButton')).toHaveLength(2);

        const leftOne = wrapper.find('BaseRadioButton').first();
        const rightOne = wrapper.find('BaseRadioButton').last();

        expect(leftOne.prop('aria-invalid')).toBe('true');
        expect(rightOne.prop('aria-invalid')).toBe('true');
    });

    it('sets aria-invalid on both buttons for undefined selected value ', () => {
        const wrapper = getWrapper({ 'aria-invalid': 'false' });
        expect(wrapper.find('BaseRadioButton')).toHaveLength(2);

        const leftOne = wrapper.find('BaseRadioButton').first();
        const rightOne = wrapper.find('BaseRadioButton').last();

        expect(leftOne.prop('aria-invalid')).toBe('false');
        expect(rightOne.prop('aria-invalid')).toBe('false');
    });

    it('passes the correct props to each radio button', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('BaseRadioButton')).toHaveLength(2);

        const leftOne = wrapper.find('BaseRadioButton').first();
        const rightOne = wrapper.find('BaseRadioButton').last();

        expect(leftOne.prop('children')).toBe(defaultProps.leftLabel);
        expect(leftOne.prop('value')).toBe(defaultProps.leftValue);
        expect(leftOne.prop('name')).toBe(defaultProps.name);

        expect(rightOne.prop('children')).toBe(defaultProps.rightLabel);
        expect(rightOne.prop('value')).toBe(defaultProps.rightValue);
        expect(rightOne.prop('name')).toBe(defaultProps.name);
    });

    each([
        [undefined, undefined],
        [null, null],
        ['', ''],
        [defaultProps.leftValue, defaultProps.leftValue],
        [defaultProps.rightValue, defaultProps.rightValue],
    ]).test(
        'returns the correct value of selectedValue when input selected value is %s',
        (selectedValue, expectedSelectedValue) => {
            const wrapper = getWrapper({
                selectedValue: selectedValue,
            });
            expect(wrapper.find('BaseRadioButton')).toHaveLength(2);

            const leftOne = wrapper.find('BaseRadioButton').first();
            const rightOne = wrapper.find('BaseRadioButton').last();

            expect(leftOne.prop('children')).toBe(defaultProps.leftLabel);
            expect(leftOne.prop('value')).toBe(defaultProps.leftValue);
            expect(leftOne.prop('name')).toBe(defaultProps.name);
            expect(leftOne.prop('selectedValue')).toBe(expectedSelectedValue);

            expect(rightOne.prop('children')).toBe(defaultProps.rightLabel);
            expect(rightOne.prop('value')).toBe(defaultProps.rightValue);
            expect(rightOne.prop('name')).toBe(defaultProps.name);
            expect(rightOne.prop('selectedValue')).toBe(expectedSelectedValue);
        },
    );
});
