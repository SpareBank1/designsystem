import React from 'react';
import { RadioSwitch, RadioSwitchProps } from './RadioSwitch';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    leftLabel: 'Ja',
    leftValue: 'ja',
    name: 'choice',
    rightLabel: 'Nei',
    rightValue: 'nei',
};

const renderRadioSwitch = (props?: Partial<RadioSwitchProps>) =>
    render(<RadioSwitch {...defaultProps} {...props} />);

describe('<RadioSwitch />', () => {
    it('sets aria-invalid correctly', () => {
        renderRadioSwitch({
            'aria-invalid': 'true',
            selectedValue: 'ja',
        });

        const [radioLeft, radioRight] = screen.getAllByRole('radio');
        expect(radioLeft.getAttribute('aria-invalid')).toBe('true');
        expect(radioRight.getAttribute('aria-invalid')).toBe('false');
    });

    it('sets aria-invalid on button with selected value, type of selected value is bool', () => {
        renderRadioSwitch({
            'aria-invalid': 'true',
            selectedValue: defaultProps.leftValue,
        });

        const [radioLeft, radioRight] = screen.getAllByRole('radio');
        expect(radioLeft.getAttribute('aria-invalid')).toBe('true');
        expect(radioRight.getAttribute('aria-invalid')).toBe('false');
    });

    it('sets aria-invalid on button with selected value, type of selected value is string', () => {
        renderRadioSwitch({
            'aria-invalid': 'true',
            selectedValue: defaultProps.rightValue,
        });
        const [radioLeft, radioRight] = screen.getAllByRole('radio');
        expect(radioLeft.getAttribute('aria-invalid')).toBe('false');
        expect(radioRight.getAttribute('aria-invalid')).toBe('true');
    });

    it('sets aria-invalid on both buttons for undefined selected value ', () => {
        renderRadioSwitch({ 'aria-invalid': 'true' });

        const [radioLeft, radioRight] = screen.getAllByRole('radio');
        expect(radioLeft.getAttribute('aria-invalid')).toBe('true');
        expect(radioRight.getAttribute('aria-invalid')).toBe('true');
    });

    it('sets aria-invalid on both buttons for undefined selected value ', () => {
        renderRadioSwitch({ 'aria-invalid': 'false' });

        const [radioLeft, radioRight] = screen.getAllByRole('radio');
        expect(radioLeft.getAttribute('aria-invalid')).toBe('false');
        expect(radioRight.getAttribute('aria-invalid')).toBe('false');
    });

    it('passes the correct props to each radio button', () => {
        renderRadioSwitch();
        const radioLeft = screen.getByRole('radio', {
            name: defaultProps.leftLabel,
        });
        const radioRight = screen.getByRole('radio', {
            name: defaultProps.rightLabel,
        });

        expect(radioLeft.getAttribute('value')).toBe(
            `${defaultProps.leftValue}`,
        );
        expect(radioRight.getAttribute('value')).toBe(defaultProps.rightValue);

        expect(radioLeft.getAttribute('name')).toBe(`${defaultProps.name}`);
        expect(radioRight.getAttribute('name')).toBe(defaultProps.name);
    });

    test.each([
        [undefined],
        [null],
        [''],
        [defaultProps.leftValue],
        [defaultProps.rightValue],
    ])(
        'returns the correct value of selectedValue when input selected value is %s',
        selectedValue => {
            renderRadioSwitch({
                selectedValue: selectedValue,
            });

            const radioLeft = screen.getByRole('radio', {
                name: defaultProps.leftLabel,
            });
            const radioRight = screen.getByRole('radio', {
                name: defaultProps.rightLabel,
            });

            expect(radioLeft.getAttribute('value')).toBe(
                `${defaultProps.leftValue}`,
            );
            expect(radioRight.getAttribute('value')).toBe(
                defaultProps.rightValue,
            );

            expect(radioLeft.getAttribute('name')).toBe(`${defaultProps.name}`);
            expect(radioRight.getAttribute('name')).toBe(defaultProps.name);
        },
    );
});
