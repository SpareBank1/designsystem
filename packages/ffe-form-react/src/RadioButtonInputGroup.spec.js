import React from 'react';

import Tooltip from './Tooltip';
import ErrorFieldMessage from './ErrorFieldMessage';
import RadioButtonInputGroup from './RadioButtonInputGroup';

const defaultProps = {
    children: f => <span />,
    label: 'Label',
    name: 'choice',
    value: 'value',
};

const getWrapper = props =>
    mount(<RadioButtonInputGroup {...defaultProps} {...props} />);

describe('<RadioButtonInputGroup />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });
    describe('children', () => {
        it('is called with correct parameters', () => {
            const childrenSpy = jest.fn();
            getWrapper({
                children: childrenSpy,
                inline: true,
                name: 'test_name',
                selectedValue: 'selected_value',
            });

            expect(childrenSpy).toHaveBeenCalled();
            expect(childrenSpy).toHaveBeenCalledWith(
                expect.objectContaining({
                    inline: true,
                    name: 'test_name',
                    selectedValue: 'selected_value',
                }),
            );
        });
        it(`passes down a default noop function to silence intermittent propType
            warnings about the radio buttons being controlled components without
            an onChange listener (which is a lie - the onChange is in RadioButtonInputGroup)`, () => {
            const childrenSpy = jest.fn();
            getWrapper({
                'aria-invalid': 'false',
                children: childrenSpy,
            });
            expect(childrenSpy).toHaveBeenCalledWith(
                expect.objectContaining({
                    onChange: expect.any(Function),
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
            expect(
                wrapper.find('button[aria-label="Vis hjelpetekst"]').length,
            ).toEqual(1);
            expect(
                wrapper
                    .find('.ffe-collapse__inner')
                    .at(0)
                    .text(),
            ).toEqual('Tip big!');
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
            expect(
                wrapper.find('button[aria-label="Vis hjelpetekst"]').length,
            ).toEqual(1);
            expect(
                wrapper
                    .find('.ffe-collapse__inner')
                    .at(0)
                    .text(),
            ).toEqual('such tooltip');
        });
        it('renders as a Tooltip if Tooltip', () => {
            const wrapper = getWrapper({
                tooltip: <Tooltip>such tooltip</Tooltip>,
            });
            expect(
                wrapper.find('button[aria-label="Vis hjelpetekst"]').length,
            ).toEqual(1);
            expect(
                wrapper
                    .find('.ffe-collapse__inner')
                    .at(0)
                    .text(),
            ).toEqual('such tooltip');
        });
    });
    describe('description', () => {
        it('renders if string', () => {
            const wrapper = getWrapper({ description: 'description text' });
            expect(wrapper.text().includes('description text')).toBe(true);
        });
        it('renders if ReactNode', () => {
            const wrapper = getWrapper({
                description: (
                    <Tooltip>Description text as Tooltip component</Tooltip>
                ),
            });
            expect(
                wrapper.find('button[aria-label="Vis hjelpetekst"]').length,
            ).toEqual(1);
            expect(
                wrapper
                    .find('.ffe-collapse__inner')
                    .at(0)
                    .text(),
            ).toEqual('Description text as Tooltip component');
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
