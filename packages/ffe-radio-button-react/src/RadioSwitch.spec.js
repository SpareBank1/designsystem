import React from 'react';
import { shallow } from 'enzyme';

import RadioSwitch from './RadioSwitch';

const defaultProps = {
    leftLabel: 'Ja',
    leftValue: 'ja',
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
});
