import React, { useState } from 'react';
import { Datepicker, DatepickerProps } from './Datepicker';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultProps = {
    value: '',
    onChange: () => {},
    locale: 'nb' as const,
    labelId: 'datepicker-label',
};

const DatepickerWithChangeButton: React.FC<DatepickerProps> = ({
    value,
    ...props
}: DatepickerProps) => {
    const [date, setDate] = useState(value);
    return (
        <>
            <button
                data-testid="change-date-input"
                onClick={() => {
                    setDate('02.02.2022');
                }}
            />
            <Datepicker value={date} {...props} />
        </>
    );
};

const renderDatePicker = (props?: Partial<DatepickerProps>) =>
    render(<Datepicker {...defaultProps} {...props} />);

const renderDatePickerWithChangeButton = (props?: Partial<DatepickerProps>) => {
    return render(<DatepickerWithChangeButton {...defaultProps} {...props} />);
};

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
            expect(screen.getByRole('group')).toBeInTheDocument();
        });

        it('does not contain a Calendar component', () => {
            renderDatePicker();
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        });

        it('responds to arrow up and down', async () => {
            renderDatePicker();
            const [dayInput] = screen.getAllByRole('spinbutton');
            await userEvent.type(dayInput, '{arrowup}');
            expect(dayInput).toHaveValue(1);
            await userEvent.type(dayInput, '{arrowdown}');
            expect(dayInput).toHaveValue(31);
        });

        it.skip('triggers onchange when arrows are used', async () => {
            const onChange = jest.fn();
            renderDatePicker({ onChange });
            const [dayInput] = screen.getAllByRole('spinbutton');
            await userEvent.type(dayInput, '{arrowup}');
            await waitFor(() => expect(onChange).toHaveBeenCalledWith(''));
        });

        it('reponds to arrow left and right', async () => {
            renderDatePicker();
            const [dayInput, monthInput] = screen.getAllByRole('spinbutton');
            await userEvent.type(dayInput, '{arrowright}');
            expect(monthInput).toHaveFocus();
            await userEvent.type(monthInput, '{arrowleft}');
            expect(dayInput).toHaveFocus();
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
            it.skip('calls onChange method', async () => {
                const onChange = jest.fn();
                renderDatePicker({ onChange });
                const [dayInput] = screen.getAllByRole('spinbutton');
                await user.type(dayInput, '4');
                await waitFor(() => expect(onChange).toHaveBeenCalledWith(''));
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
                    const [date, month, year] =
                        screen.getAllByRole('spinbutton');
                    expect(date.getAttribute('aria-invalid')).toBe('true');
                    expect(month.getAttribute('aria-invalid')).toBe('true');
                    expect(year.getAttribute('aria-invalid')).toBe('true');
                });

                it('has correct aria-describedby if aria-describedby given as input prop', () => {
                    renderDatePicker({
                        ariaInvalid: true,
                        ariaDescribedby: 'test',
                    });

                    const [date, month, year] =
                        screen.getAllByRole('spinbutton');
                    expect(date.getAttribute('aria-describedby')).toBe('test');
                    expect(month.getAttribute('aria-describedby')).toBe('test');
                    expect(year.getAttribute('aria-describedby')).toBe('test');
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

    describe('with value', () => {
        it('has correct value in input field', async () => {
            const onChange = jest.fn();
            renderDatePicker({ value: '01.01.2021', onChange });

            const [date, month, year] = screen.getAllByRole('spinbutton');

            expect(date).toHaveValue(1);
            expect(month).toHaveValue(1);
            expect(year).toHaveValue(2021);

            await waitFor(() =>
                expect(onChange).toHaveBeenCalledWith('01.01.2021'),
            );
        });

        it('input field changes when value changes', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();
            renderDatePickerWithChangeButton({ value: '01.01.2021', onChange });

            await user.click(screen.getByTestId('change-date-input'));

            const [date, month, year] = screen.getAllByRole('spinbutton');
            expect(date).toHaveValue(2);
            expect(month).toHaveValue(2);
            expect(year).toHaveValue(2022);
            await waitFor(() =>
                expect(onChange).toHaveBeenCalledWith('02.02.2022'),
            );
        });
    });
});
