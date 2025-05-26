import { getYearOptions } from './dateRangeUtils';

describe('dateRangeUtils', () => {
    describe('getYearOptions', () => {
        const currentYear = new Date().getFullYear();

        it('should return default range (6 back, 2 forward)', () => {
            const yearOptions = getYearOptions();
            
            // Get min and max years from options
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            
            expect(minYear).toBe(currentYear - 6);
            expect(maxYear).toBe(currentYear + 2);
        });

        it('should return options with correct structure', () => {
            const yearOptions = getYearOptions();
            
            // Verify structure
            expect(yearOptions.length).toBe(9); // 6 + 2 + 1 (current year)
            
            // Each option should have value and label
            yearOptions.forEach(option => {
                expect(option).toHaveProperty('value');
                expect(option).toHaveProperty('label');
                expect(typeof option.value).toBe('number');
                expect(typeof option.label).toBe('string');
                expect(option.label).toBe(String(option.value));
            });
        });

        it('should return years in ascending order', () => {
            const yearOptions = getYearOptions();
            
            const years = yearOptions.map(opt => opt.value);
            const sortedYears = [...years].sort((a, b) => a - b);
            
            expect(years).toEqual(sortedYears);
        });
    });
});
