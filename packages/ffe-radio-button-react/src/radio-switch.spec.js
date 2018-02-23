import React from 'react';
import { shallow } from 'enzyme';

import RadioSwitch from './radio-switch';

describe('<RadioSwitch />', () => {
    describe('basic rendering', () => {
        const checkedValue = 2;
        const wrapper = shallow(
            <RadioSwitch
                firstOption={{ label: 'one', value: 1 }}
                lastOption={{ label: 'two', value: 2 }}
                value={checkedValue}
            />,
        );

        it('should set RadioButtonGroup prop inline to true', () => {
            expect(wrapper.find('RadioButtonGroup').prop('inline')).toBe(true);
        });

        it('should render two RadioBase children', () => {
            expect(wrapper.find('RadioBase')).toHaveLength(2);
        });

        it('should pass the correct labels and values', () => {
            expect(wrapper.find('RadioBase[label="one"]').prop('value')).toBe(
                1,
            );
            expect(wrapper.find('RadioBase[label="two"]').prop('value')).toBe(
                2,
            );
        });

        it('should mark the correct switch as checked based on value param', () => {
            expect(wrapper.find('RadioBase[label="two"]').prop('value')).toBe(
                checkedValue,
            );
            expect(wrapper.find('RadioBase[label="two"]').prop('checked')).toBe(
                true,
            );

            expect(
                wrapper.find('RadioBase[label="one"]').prop('value'),
            ).not.toBe(checkedValue);
            expect(wrapper.find('RadioBase[label="one"]').prop('checked')).toBe(
                false,
            );
        });
    });

    describe('pass-through of additional props values', () => {
        it('should allow pass-through of additional props values', () => {
            const labelledBy = 'someId';
            const describedBy = 'anotherId';
            const wrapper = shallow(
                <RadioSwitch
                    firstOption={{ label: 'one', value: 1 }}
                    lastOption={{ label: 'two', value: 2 }}
                    aria-labelledby={labelledBy}
                    aria-describedby={describedBy}
                />,
            );

            expect(
                wrapper.find('RadioButtonGroup').prop('aria-labelledby'),
            ).toBe(labelledBy);
            expect(
                wrapper.find('RadioButtonGroup').prop('aria-describedby'),
            ).toBe(describedBy);
        });
    });
});
