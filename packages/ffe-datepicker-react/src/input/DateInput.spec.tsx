import React from 'react';
import { DateInput, DateInputProps } from './DateInput';
import { render, screen } from '@testing-library/react';

const noop = () => {};

const defaultProps = {
    className: 'given-class-name',
    placeholder: 'Given placeholder',
    onChange: noop,
    onFocus: noop,
    onKeyDown: noop,
    value: '2016-03-07',
    ariaInvalid: 'false',
    locale: 'nb' as const,
};

const renderInput = (props?: Partial<DateInputProps>) =>
    render(<DateInput {...defaultProps} {...props} />);

describe('<Input />', () => {
    describe('nested input field', () => {
        it('should be a single input field', () => {
            renderInput();
            expect(screen.getByRole('textbox')).toBeInTheDocument();
        });

        it('should have BEM element class name', () => {
            renderInput();
            expect(
                screen
                    .getByRole('textbox')
                    .classList.contains('ffe-dateinput__field'),
            ).toBeTruthy();
        });

        it('should have given value', () => {
            renderInput();
            expect(screen.getByRole('textbox').getAttribute('value')).toBe(
                '2016-03-07',
            );
        });

        it('should have property from input props', () => {
            renderInput();
            expect(
                screen.getByRole('textbox').getAttribute('placeholder'),
            ).toBe('Given placeholder');
        });

        it('should have given aria-invalid', () => {
            renderInput();
            expect(
                screen.getByRole('textbox').getAttribute('aria-invalid'),
            ).toBe('false');
        });

        it('should have class name from input props', () => {
            renderInput();
            expect(
                screen
                    .getByRole('textbox')
                    .classList.contains('given-class-name'),
            ).toBeTruthy();
        });
    });
});
