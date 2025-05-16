import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Calendar } from './Calendar';

describe('Calendar', () => {
    const mockDatePicked = jest.fn();
    const defaultProps = {
        calendarClassName: 'ffe-calendar--test',
        escKeyHandler: jest.fn(),
        locale: 'nb' as const,
        maxDate: '31.12.2026',
        minDate: '01.01.2023',
        onDatePicked: mockDatePicked,
        selectedDate: '15.05.2025',
        focusOnMount: false,
    };

    it('renders standard calendar with correct header and days', () => {
        render(<Calendar {...defaultProps} />);
        
        // Verify calendar structure
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        
        // Verify navigation buttons
        expect(screen.getByRole('button', { name: /forrige måned/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /neste måned/i })).toBeInTheDocument();
        
        // Verify some days are present (15th is the selected date)
        const dayButtons = screen.getAllByRole('button', { name: /\d+\. mai 2025/ });
        expect(dayButtons.length).toBeGreaterThan(0);
    });

    it('renders calendar with dropdown caption when dropdownCaption is true', () => {
        render(<Calendar {...defaultProps} dropdownCaption={true} />);
        
        // There should be dropdown selects for month and year
        const selects = screen.getAllByRole('combobox');
        expect(selects.length).toBe(2);
        
        // One select should be for months
        const monthSelect = selects.find(select => 
            select.classList.contains('ffe-calendar__month-select')
        );
        expect(monthSelect).toBeInTheDocument();
        
        // One select should be for years
        const yearSelect = selects.find(select => 
            select.classList.contains('ffe-calendar__year-select')
        );
        expect(yearSelect).toBeInTheDocument();
        
        // Verify month options
        const monthOptions = within(monthSelect!).getAllByRole('option');
        expect(monthOptions.length).toBe(12); // 12 months
        
        // Verify some year options are present (depends on min/max dates)
        const yearOptions = within(yearSelect!).getAllByRole('option');
        expect(yearOptions.length).toBeGreaterThanOrEqual(4); // At least 2023-2026
    });
    
    it('navigates to a specific month and year when using dropdowns', async () => {
        const user = userEvent.setup();
        render(<Calendar {...defaultProps} dropdownCaption={true} />);
        
        // Get the month select
        const monthSelect = screen.getByRole('combobox', { 
            name: (name) => name.toLowerCase().includes('mai')
        });
        
        // Change to December
        await user.selectOptions(monthSelect, '12');
        
        // Check if December is selected in the dropdown
        expect(monthSelect).toHaveValue('12');
        
        // Verify days have updated to December
        // Wait a bit for the state to update and re-render
        const decemberDays = await screen.findAllByRole('button', { name: /\d+\. desember 2025/ });
        expect(decemberDays.length).toBeGreaterThan(0);
    });
    
    it('allows selecting a date after navigation', async () => {
        const user = userEvent.setup();
        render(<Calendar {...defaultProps} dropdownCaption={true} />);
        
        // Change to June (month 6)
        const monthSelect = screen.getByRole('combobox', { 
            name: (name) => name.toLowerCase().includes('mai')
        });
        await user.selectOptions(monthSelect, '6');
        
        // Wait for the June days to appear
        const juneDays = await screen.findAllByRole('button', { name: /\d+\. juni 2025/ });
        expect(juneDays.length).toBeGreaterThan(0);
        
        // Find the day 10 button
        const day10 = juneDays.find(button => button.textContent?.includes('10'));
        expect(day10).toBeInTheDocument();
        
        // Click on day 10
        await user.click(day10!);
        
        // Verify the date picker was called with the correct date
        expect(mockDatePicked).toHaveBeenCalledWith('10.06.2025');
    });
    
    it('respects minDate and maxDate constraints in dropdowns', async () => {
        const user = userEvent.setup();
        const limitedProps = {
            ...defaultProps,
            minDate: '01.05.2025',  // May 1, 2025
            maxDate: '30.06.2025',  // June 30, 2025
            dropdownCaption: true
        };
        
        render(<Calendar {...limitedProps} />);
        
        // Get the month select
        const selects = screen.getAllByRole('combobox');
        const monthSelect = selects.find(select => 
            select.classList.contains('ffe-calendar__month-select')
        );
        expect(monthSelect).toBeInTheDocument();
        
        // We should be able to select June (month 6)
        await user.selectOptions(monthSelect!, '6');
        
        // Verify June days are displayed
        const juneDays = await screen.findAllByRole('button', { name: /\d+\. juni 2025/ });
        expect(juneDays.length).toBeGreaterThan(0);
        
        // Find day 30 (last allowed date)
        const day30 = juneDays.find(day => day.textContent?.includes('30'));
        expect(day30).toBeInTheDocument();
        
        // Select the last allowed date
        await user.click(day30!);
        expect(mockDatePicked).toHaveBeenCalledWith('30.06.2025');
    });
});
