import React from 'react';
import { mount } from 'enzyme';

import { Tooltip, ErrorFieldMessage } from '@sb1/ffe-form-react';
import RadioButtonInputGroup from './RadioButtonInputGroup';

const defaultProps = {
    children: f => <span />,
    label: 'Label',
    name: 'choice',
    value: 'value',
};

const getWrapper = props =>
    mount(<RadioButtonInputGroup {...defaultProps} {...props} />);

describe('<RadioButtonGroup />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });
    describe('children', () => {
        it('is called with correct parameters', () => {
            const childrenSpy = jest.fn();
            const onChangeSpy = jest.fn();
            getWrapper({
                children: childrenSpy,
                inline: true,
                name: 'test_name',
                onChange: onChangeSpy,
                selectedValue: 'selected_value',
            });

            expect(childrenSpy).toHaveBeenCalled();
            expect(childrenSpy).toHaveBeenCalledWith(
                expect.objectContaining({
                    inline: true,
                    name: 'test_name',
                    onChange: onChangeSpy,
                    selectedValue: 'selected_value',
                }),
            );
        });
        it('passes down aria-invalid as true if fieldMessage is set', () => {
            const childrenSpy = jest.fn();
            const wrapper = getWrapper({
                children: childrenSpy,
                fieldMessage: undefined,
            });

            expect(childrenSpy).toHaveBeenCalledWith(
                expect.objectContaining({
                    'aria-invalid': 'false',
                }),
            );

            wrapper.setProps({ fieldMessage: 'such error' });
            expect(childrenSpy).toHaveBeenCalledWith(
                expect.objectContaining({
                    'aria-invalid': 'true',
                }),
            );
        });
        it('passes down aria-invalid if aria-invalid is set', () => {
            const childrenSpy = jest.fn();
            const wrapper = getWrapper({
                'aria-invalid': 'false',
                children: childrenSpy,
            });

            expect(childrenSpy).toHaveBeenCalledWith(
                expect.objectContaining({
                    'aria-invalid': 'false',
                }),
            );

            wrapper.setProps({ 'aria-invalid': 'true' });
            expect(childrenSpy).toHaveBeenCalledWith(
                expect.objectContaining({
                    'aria-invalid': 'true',
                }),
            );
        });
    });
    describe('label', () => {
        it('renders a legend if set', () => {
            const wrapper = getWrapper({ label: 'Test label' });

            expect(wrapper.find('legend')).toHaveLength(1);
            expect(wrapper.find('legend').text()).toContain('Test label');
        });
        it('does not render a legend if not set', () => {
            const wrapper = getWrapper({ label: undefined });
            expect(wrapper.find('legend').exists()).toBe(false);
        });
    });
    describe('tooltip', () => {
        it('renders if set and label is set', () => {
            const wrapper = getWrapper({ label: 'yes', tooltip: 'Tip big!' });
            expect(wrapper.find('Tooltip').exists()).toBe(true);
        });
        it('does not render if set and label is not set', () => {
            const wrapper = getWrapper({
                label: undefined,
                tooltip: 'Tip big!',
            });
            expect(wrapper.find('Tooltip').exists()).toBe(false);
        });
        it('does not render if not set', () => {
            const wrapper = getWrapper({
                label: 'yes',
                tooltip: undefined,
            });
            expect(wrapper.find('Tooltip').exists()).toBe(false);
        });
        it('renders as a Tooltip if string', () => {
            const wrapper = getWrapper({ tooltip: 'such tooltip' });
            expect(wrapper.find('Tooltip').prop('children')).toBe(
                'such tooltip',
            );
        });
        it('renders as a Tooltip if Tooltip', () => {
            const wrapper = getWrapper({
                tooltip: <Tooltip>such tooltip</Tooltip>,
            });
            expect(wrapper.find('Tooltip').prop('children')).toBe(
                'such tooltip',
            );
        });
    });
    describe('fieldMessage', () => {
        it('does not render if not set', () => {
            const wrapper = getWrapper({ fieldMessage: undefined });
            expect(wrapper.find('ErrorFieldMessage').exists()).toBe(false);
        });
        it('renders as a ErrorFieldMessage if string', () => {
            const wrapper = getWrapper({ fieldMessage: 'such error' });
            expect(wrapper.find('ErrorFieldMessage').exists()).toBe(true);
            expect(wrapper.find('ErrorFieldMessage').prop('children')).toBe(
                'such error',
            );
        });
        it('renders as a ErrorFieldMessage if ErrorFieldMessage', () => {
            const wrapper = getWrapper({
                fieldMessage: <ErrorFieldMessage>such error</ErrorFieldMessage>,
            });
            expect(wrapper.find('ErrorFieldMessage').prop('children')).toBe(
                'such error',
            );
        });
    });
});
