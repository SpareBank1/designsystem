import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe('Header', () => {
    const mockMonthYearChange = jest.fn();
    const mockPreviousMonthHandler = jest.fn();
    const mockNextMonthHandler = jest.fn();
    const defaultProps = {
        datepickerId: 'test-calendar',
        month: 'Mai',
        nextMonthHandler: mockNextMonthHandler,
        nextMonthLabel: 'Neste måned',
        previousMonthHandler: mockPreviousMonthHandler,
        previousMonthLabel: 'Forrige måned',
        year: 2025,
        prevMonthButtonElement: { current: null },
        nextMonthButtonElement: { current: null },
        monthNumber: 5,
        locale: 'nb' as const,
    };

    it('renders standard header with navigation buttons', () => {
        render(<Header {...defaultProps} />);
        
        // Verify month and year are displayed in the header
        const monthElement = screen.getByText('Mai');
        const yearElement = screen.getByText('2025');
        expect(monthElement).toBeInTheDocument();
        expect(yearElement).toBeInTheDocument();
        
        // Verify navigation buttons
        const prevButton = screen.getByLabelText('Forrige måned');
        const nextButton = screen.getByLabelText('Neste måned');
        expect(prevButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
        
        // Test button clicks
        prevButton.click();
        expect(mockPreviousMonthHandler).toHaveBeenCalledTimes(1);
        
        nextButton.click();
        expect(mockNextMonthHandler).toHaveBeenCalledTimes(1);
    });

    it('renders dropdown selects when dropdownCaption is true', () => {
        render(
            <Header 
                {...defaultProps} 
                dropdownCaption={true}
                onMonthYearChange={mockMonthYearChange}
            />
        );
        
        // Verify standard month-year display is not shown
        const headerTitle = screen.queryByTestId('test-calendar__month-label');
        expect(headerTitle).not.toBeInTheDocument();
        
        // Check for select elements with correct classes
        const selects = screen.getAllByRole('combobox');
        const monthSelect = selects.find(select => 
            select.classList.contains('ffe-calendar__month-select')
        );
        const yearSelect = selects.find(select => 
            select.classList.contains('ffe-calendar__year-select')
        );
        
        expect(monthSelect).toBeInTheDocument();
        expect(yearSelect).toBeInTheDocument();
    });

    it('calls onMonthYearChange when month select is changed', async () => {
        const user = userEvent.setup();
        render(
            <Header 
                {...defaultProps} 
                dropdownCaption={true}
                onMonthYearChange={mockMonthYearChange}
            />
        );
        
        // Find all comboboxes and get the month select by class
        const selects = screen.getAllByRole('combobox');
        const monthSelect = selects.find(select => 
            select.classList.contains('ffe-calendar__month-select')
        );
        expect(monthSelect).toBeInTheDocument();
        
        // Change to June (value 6)
        await user.selectOptions(monthSelect!, '6');
        
        expect(mockMonthYearChange).toHaveBeenCalledWith(6, 2025);
    });
    
    it('calls onMonthYearChange when year select is changed', async () => {
        const user = userEvent.setup();
        render(
            <Header 
                {...defaultProps} 
                dropdownCaption={true}
                onMonthYearChange={mockMonthYearChange}
            />
        );
        
        // Find all comboboxes and get the year select by class
        const selects = screen.getAllByRole('combobox');
        const yearSelect = selects.find(select => 
            select.classList.contains('ffe-calendar__year-select')
        );
        expect(yearSelect).toBeInTheDocument();
        
        // Change to 2026
        await user.selectOptions(yearSelect!, '2026');
        
        expect(mockMonthYearChange).toHaveBeenCalledWith(5, 2026);
    });
});
