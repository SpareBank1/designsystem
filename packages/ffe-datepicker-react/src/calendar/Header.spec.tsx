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

    beforeEach(() => {
        jest.clearAllMocks();
    });

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

    it('renders searchable dropdowns when dropdownCaption is true', () => {
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
        
        // Check for SearchableDropdown elements with correct IDs
        const monthDropdown = document.getElementById('test-calendar__month-select');
        const yearDropdown = document.getElementById('test-calendar__year-select');
        
        expect(monthDropdown).toBeInTheDocument();
        expect(yearDropdown).toBeInTheDocument();
        
        // Verify they have the correct CSS classes
        expect(monthDropdown?.closest('.ffe-calendar__month-select')).toBeInTheDocument();
        expect(yearDropdown?.closest('.ffe-calendar__year-select')).toBeInTheDocument();
    });

    it('calls onMonthYearChange when month dropdown option is clicked', async () => {
        const user = userEvent.setup();
        render(
            <Header 
                {...defaultProps} 
                dropdownCaption={true}
                onMonthYearChange={mockMonthYearChange}
            />
        );
        
        // Find the month dropdown by ID
        const monthDropdown = document.getElementById('test-calendar__month-select');
        expect(monthDropdown).toBeInTheDocument();
        
        // Click to open the dropdown
        await user.click(monthDropdown!);
        
        // Wait for and click on June option
        const juniOption = await screen.findByText('Juni');
        await user.click(juniOption);
        
        expect(mockMonthYearChange).toHaveBeenCalledWith(6, 2025);
    });
    
    it('calls onMonthYearChange when year dropdown option is clicked', async () => {
        const user = userEvent.setup();
        render(
            <Header 
                {...defaultProps} 
                dropdownCaption={true}
                onMonthYearChange={mockMonthYearChange}
            />
        );
        
        // Find the year dropdown by ID
        const yearDropdown = document.getElementById('test-calendar__year-select');
        expect(yearDropdown).toBeInTheDocument();
        
        // Click to open the dropdown
        await user.click(yearDropdown!);
        
        // Wait for and click on 2026 option
        const year2026Option = await screen.findByText('2026');
        await user.click(year2026Option);
        
        expect(mockMonthYearChange).toHaveBeenCalledWith(5, 2026);
    });
});
