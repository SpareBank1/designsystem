import React from 'react';
import { Datepicker, DatepickerProps } from './Datepicker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultProps = {
    value: '',
    onChange: () => {},
};

const renderDatePicker = (props?: Partial<DatepickerProps>) =>
    render(<Datepicker {...defaultProps} {...props} />);

describe('<Datepicker />', () => {
    describe('with empty value', () => {
        it('renders a wrapper for the datepicker components', () => {
            renderDatePicker();
            const datepicker = screen.getByTestId('date-picker');
            expect(
                datepicker.classList.contains('ffe-datepicker'),
            ).toBeTruthy();
        });

        it('contains a single DateInput component', () => {
            renderDatePicker();
            expect(screen.getByRole('textbox')).toBeInTheDocument();
        });

        it('does not contain a Calendar component', () => {
            renderDatePicker();
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        });

        describe('with click on button', () => {
            const user = userEvent.setup();
            it('contains a Calendar', async () => {
                renderDatePicker();
                const button = screen.getByRole('button');
                await user.click(button);
                expect(screen.queryByRole('dialog')).toBeInTheDocument();
            });

            it('does not contain Calendar on two clicks', async () => {
                renderDatePicker();
                const button = screen.getByRole('button');
                await user.click(button);
                await user.click(button);
                expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
            });
        });

        describe('when input field changes', () => {
            const user = userEvent.setup();
            it('calls onChange method', async () => {
                const onChange = jest.fn();
                renderDatePicker({ onChange });
                const input = screen.getByRole('textbox');
                await user.type(input, '1');
                expect(onChange).toHaveBeenCalledTimes(1);
            });
        });

        describe('given prop', () => {
            const user = userEvent.setup();

            describe('calendarAbove', () => {
                it('has correct calendar above class', async () => {
                    renderDatePicker({ calendarAbove: true });
                    const button = screen.getByRole('button');
                    await user.click(button);
                    const datepicker = screen.getByTestId('date-picker');

                    expect(
                        datepicker.querySelector(
                            '.ffe-calendar--datepicker.ffe-calendar--datepicker--above',
                        ),
                    ).toBeTruthy();
                });
            });

            describe('ariaInvalid', () => {
                it('has correct aria-invalid value if given prop', () => {
                    renderDatePicker({ ariaInvalid: true });
                    const input = screen.getByRole('textbox');
                    expect(input.getAttribute('aria-invalid')).toBe('true');
                });

                it('has correct aria-describedby if aria-describedby given as input prop', () => {
                    const inputProps = {
                        'aria-describedby': 'test',
                    };
                    renderDatePicker({
                        ariaInvalid: true,
                        inputProps,
                    });
                    const input = screen.getByRole('textbox');
                    expect(input.getAttribute('aria-describedby')).toBe('test');
                });
            });

            describe('inputProps', () => {
                it('is passed on to input field', () => {
                    const inputProps = {
                        className: 'customClass',
                        id: 'custom-input-id',
                    };
                    renderDatePicker({ inputProps });
                    const input = screen.getByRole('textbox');
                    expect(input.classList.contains('customClass')).toBe(true);
                    expect(input.getAttribute('id')).toBe('custom-input-id');
                });
            });

            describe('fullWidth', () => {
                it('has correct full width class', () => {
                    renderDatePicker({ fullWidth: true });
                    const datepicker = screen.getByTestId('date-picker');

                    expect(
                        datepicker.classList.contains(
                            'ffe-datepicker--full-width',
                        ),
                    ).toBe(true);
                });
            });
        });
    });

    describe('try to be smart in which century to place an input of two digit years', () => {
        const user = userEvent.setup();
        it('defaults to the 20th century', async () => {
            const onChange = jest.fn();
            renderDatePicker({ onChange, value: '101099' });

            const input = screen.getByRole('textbox');
            await user.type(input, '{Tab}');
            expect(onChange).toHaveBeenCalledWith('10.10.2099');
        });

        it('assumes last century if maxDate is today-ish', async () => {
            const onChange = jest.fn();
            renderDatePicker({
                maxDate: '02.02.2022',
                onChange,
                value: '111199',
            });

            const input = screen.getByRole('textbox');
            await user.type(input, '{Tab}');

            expect(onChange).toHaveBeenCalledWith('11.11.1999');
        });

        it('assumes this century if maxDate is today-ish but input is rather close to it', async () => {
            const onChange = jest.fn();
            renderDatePicker({
                maxDate: '02.02.2022',
                onChange,
                value: '121220',
            });

            const input = screen.getByRole('textbox');
            await user.type(input, '{Tab}');

            expect(onChange).toHaveBeenCalledWith('12.12.2020');
        });
    });
});
