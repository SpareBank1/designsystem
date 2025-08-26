import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Calendar } from './Calendar';

describe('Calendar', () => {
    const mockDatePicked = jest.fn();
    const defaultProps = {
        calendarClassName: 'ffe-calendar--test',
        escKeyHandler: jest.fn(),
        locale: 'nb' as const,
        onDatePicked: mockDatePicked,
        selectedDate: '15.05.2025',
        focusOnMount: false,
        minDate: '01.01.2020' as string | null,
        maxDate: '31.12.2030' as string | null,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders standard calendar with correct header and days', () => {
        render(<Calendar {...defaultProps} />);

        // Verify calendar structure
        expect(screen.getByRole('dialog')).toBeInTheDocument();

        // Verify navigation buttons
        expect(
            screen.getByRole('button', { name: /forrige måned/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /neste måned/i }),
        ).toBeInTheDocument();

        // Verify some days are present (15th is the selected date)
        const dayButtons = screen.getAllByRole('button', {
            name: /\d+\. mai 2025/,
        });
        expect(dayButtons.length).toBeGreaterThan(0);
    });

    it('renders calendar with dropdown caption when dropdownCaption is true', () => {
        render(<Calendar {...defaultProps} dropdownCaption={true} />);

        // There should be dropdown selects for month and year
        const selects = screen.getAllByRole('combobox');
        expect(selects.length).toBe(2);

        // Check for Dropdown elements
        const monthDropdown = selects.find(select =>
            select.closest('.ffe-calendar__month-select'),
        ) as HTMLSelectElement;
        const yearDropdown = selects.find(select =>
            select.closest('.ffe-calendar__year-select'),
        ) as HTMLSelectElement;

        expect(monthDropdown).toBeInTheDocument();
        expect(yearDropdown).toBeInTheDocument();

        // Verify the month dropdown shows current month (May = 5)
        expect(monthDropdown.value).toBe('5');

        // Verify the year dropdown shows current year
        expect(yearDropdown.value).toBe('2025');
    });

    it('navigates to a specific month and year when using dropdowns', async () => {
        const user = userEvent.setup();
        render(<Calendar {...defaultProps} dropdownCaption={true} />);

        // Get the month dropdown by finding select in month-select container
        const monthDropdown = screen
            .getAllByRole('combobox')
            .find(select => select.closest('.ffe-calendar__month-select'));
        expect(monthDropdown).toBeInTheDocument();

        // Change to December (month 12)
        await user.selectOptions(monthDropdown!, '12');

        // Verify days have updated to December
        const decemberDays = await screen.findAllByRole('button', {
            name: /\d+\. desember 2025/,
        });
        expect(decemberDays.length).toBeGreaterThan(0);
    });

    it('allows selecting a date after navigation', async () => {
        const user = userEvent.setup();
        render(<Calendar {...defaultProps} dropdownCaption={true} />);

        // Get the month dropdown
        const monthDropdown = screen
            .getAllByRole('combobox')
            .find(select => select.closest('.ffe-calendar__month-select'));
        expect(monthDropdown).toBeInTheDocument();

        // Change to June (month 6)
        await user.selectOptions(monthDropdown!, '6');

        // Wait for the June days to appear
        const juneDays = await screen.findAllByRole('button', {
            name: /\d+\. juni 2025/,
        });
        expect(juneDays.length).toBeGreaterThan(0);

        // Find the day 10 button
        const day10 = juneDays.find(button =>
            button.textContent?.includes('10'),
        );
        expect(day10).toBeInTheDocument();

        // Click on day 10
        await user.click(day10!);

        // Verify the date picker was called with the correct date
        expect(mockDatePicked).toHaveBeenCalledWith('10.06.2025');
    });

    it('disables dates before minDate', () => {
        render(
            <Calendar
                {...defaultProps}
                minDate="03.01.2025"
                selectedDate="10.01.2025"
            />,
        );

        const beforeMin = screen.getByRole('button', {
            name: '2. januar 2025',
        });
        expect(beforeMin).toHaveAttribute('aria-disabled', 'true');

        const inRange = screen.getByRole('button', { name: '10. januar 2025' });
        expect(inRange).toHaveAttribute('aria-disabled', 'false');
    });

    it('disables dates after maxDate', () => {
        render(
            <Calendar
                {...defaultProps}
                maxDate="03.01.2025"
                selectedDate="02.01.2025"
            />,
        );

        const afterMax = screen.getByRole('button', {
            name: '4. januar 2025',
        });
        expect(afterMax).toHaveAttribute('aria-disabled', 'true');

        const inRange = screen.getByRole('button', { name: '2. januar 2025' });
        expect(inRange).toHaveAttribute('aria-disabled', 'false');
    });

    it('disables dates outside of minDate and MaxDate', () => {
        render(
            <Calendar
                {...defaultProps}
                minDate="10.01.2025"
                maxDate="15.01.2025"
                selectedDate="12.01.2025"
            />,
        );

        const beforeMin = screen.getByRole('button', {
            name: '9. januar 2025',
        });
        expect(beforeMin).toHaveAttribute('aria-disabled', 'true');

        const afterMax = screen.getByRole('button', {
            name: '16. januar 2025',
        });
        expect(afterMax).toHaveAttribute('aria-disabled', 'true');

        const inRange = screen.getByRole('button', { name: '12. januar 2025' });
        expect(inRange).toHaveAttribute('aria-disabled', 'false');
    });
});