import React from 'react';
import { Tooltip } from './Tooltip';
import { ErrorFieldMessage } from './message';
import {
    RadioButtonInputGroup,
    RadioButtonInputGroupProps,
} from './RadioButtonInputGroup';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    children: () => <span />,
    label: 'Label',
    name: 'choice',
    value: 'value',
};

const renderRadioButtonInputGroup = (
    props?: Partial<RadioButtonInputGroupProps>,
) => render(<RadioButtonInputGroup {...defaultProps} {...props} />);

describe('<RadioButtonInputGroup />', () => {
    describe('children', () => {
        it('is called with correct parameters', () => {
            const childrenSpy = jest.fn();
            renderRadioButtonInputGroup({
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
            renderRadioButtonInputGroup({
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
            const { container } = renderRadioButtonInputGroup({
                label: 'Test label',
            });
            const legend = container.querySelector('.ffe-form-label');
            expect(legend?.textContent).toBe('Test label');
        });
        it('does not render a legend if not set', () => {
            const { container } = renderRadioButtonInputGroup({
                label: undefined,
            });
            expect(container.querySelector('legend')).toBeFalsy();
        });
    });
    describe('tooltip', () => {
        it('renders if set and label is set', () => {
            renderRadioButtonInputGroup({ label: 'yes', tooltip: 'Tip big!' });
            expect(
                screen.getByRole('button', { name: 'Vis hjelpetekst' }),
            ).toBeInTheDocument();
        });
        it('does not render if set and label is not set', () => {
            renderRadioButtonInputGroup({
                label: undefined,
                tooltip: 'Tip big!',
            });
            expect(screen.queryByRole('button')).not.toBeInTheDocument();
        });
        it('does not render if not set', () => {
            renderRadioButtonInputGroup({
                label: 'yes',
                tooltip: undefined,
            });
            expect(screen.queryByRole('button')).not.toBeInTheDocument();
        });
        it('renders as a Tooltip if string', () => {
            renderRadioButtonInputGroup({ tooltip: 'such tooltip' });
            expect(
                screen.getByRole('button', { name: 'Vis hjelpetekst' }),
            ).toBeInTheDocument();
        });
        it('renders as a Tooltip if Tooltip', () => {
            renderRadioButtonInputGroup({
                tooltip: <Tooltip>such tooltip</Tooltip>,
            });
            expect(
                screen.getByRole('button', { name: 'Vis hjelpetekst' }),
            ).toBeInTheDocument();
        });
    });
    describe('description', () => {
        it('renders if string', () => {
            const { container } = renderRadioButtonInputGroup({
                description: 'description text',
            });
            expect(
                container.querySelector('.ffe-small-text')?.textContent,
            ).toBe('description text');
        });
        it('renders if ReactNode', () => {
            renderRadioButtonInputGroup({
                description: (
                    <Tooltip>Description text as Tooltip component</Tooltip>
                ),
            });
            expect(
                screen.getByRole('button', { name: 'Vis hjelpetekst' }),
            ).toBeInTheDocument();
        });
    });
    describe('fieldMessage', () => {
        it('does not render if not set', () => {
            renderRadioButtonInputGroup({ fieldMessage: undefined });
            expect(screen.queryByRole('alert')).not.toBeInTheDocument();
        });
        it('renders as a ErrorFieldMessage if string', () => {
            renderRadioButtonInputGroup({ fieldMessage: 'such error' });
            const errorFieldMessage = screen.getByRole('alert');
            expect(errorFieldMessage.textContent).toBe('such error');
        });
        it('renders as a ErrorFieldMessage if ErrorFieldMessage', () => {
            renderRadioButtonInputGroup({
                fieldMessage: <ErrorFieldMessage>such error</ErrorFieldMessage>,
            });
            const errorFieldMessage = screen.getByRole('alert');
            expect(errorFieldMessage.textContent).toBe('such error');
        });
    });
});
