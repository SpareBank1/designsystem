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
        maxDate: '31.12.2026',
        minDate: '01.01.2023',
        onDatePicked: mockDatePicked,
        selectedDate: '15.05.2025',
        focusOnMount: false,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

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
        
        // Check for SearchableDropdown elements
        const monthDropdown = selects.find(input => 
            input.closest('.ffe-calendar__month-select')
        );
        const yearDropdown = selects.find(input => 
            input.closest('.ffe-calendar__year-select')
        );
        
        expect(monthDropdown).toBeInTheDocument();
        expect(yearDropdown).toBeInTheDocument();
        
        // Verify the month dropdown shows current month
        expect(monthDropdown?.getAttribute('value')).toBe('Mai');
        
        // Verify the year dropdown shows current year
        expect(yearDropdown?.getAttribute('value')).toBe('2025');
    });
    
    it('navigates to a specific month and year when using dropdowns', async () => {
        const user = userEvent.setup();
        render(<Calendar {...defaultProps} dropdownCaption={true} />);
        
        // Get the month dropdown by finding input in month-select container
        const monthDropdown = screen.getAllByRole('combobox').find(input => 
            input.closest('.ffe-calendar__month-select')
        );
        expect(monthDropdown).toBeInTheDocument();
        
        // Click to open the dropdown
        await user.click(monthDropdown!);
        
        // Wait for and click on December option
        const decemberOption = await screen.findByText('Desember');
        await user.click(decemberOption);
        
        // Verify days have updated to December
        const decemberDays = await screen.findAllByRole('button', { name: /\d+\. desember 2025/ });
        expect(decemberDays.length).toBeGreaterThan(0);
    });
    
    it('allows selecting a date after navigation', async () => {
        const user = userEvent.setup();
        render(<Calendar {...defaultProps} dropdownCaption={true} />);
        
        // Get the month dropdown
        const monthDropdown = screen.getAllByRole('combobox').find(input => 
            input.closest('.ffe-calendar__month-select')
        );
        expect(monthDropdown).toBeInTheDocument();
        
        // Click to open the dropdown
        await user.click(monthDropdown!);
        
        // Wait for and click on June option
        const juniOption = await screen.findByText('Juni');
        await user.click(juniOption);
        
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
        
        // Get the month dropdown
        const monthDropdown = screen.getAllByRole('combobox').find(input => 
            input.closest('.ffe-calendar__month-select')
        );
        expect(monthDropdown).toBeInTheDocument();
        
        // Click to open the dropdown
        await user.click(monthDropdown!);
        
        // Wait for and click on June option
        const juniOption = await screen.findByText('Juni');
        await user.click(juniOption);
        
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
