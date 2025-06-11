import { getYearOptions } from './dateRangeUtils';

describe('dateRangeUtils', () => {
    describe('getYearOptions', () => {
        const currentYear = new Date().getFullYear();

        it('should return default range (6 back, 2 forward) when no dates provided', () => {
            const yearOptions = getYearOptions();
            
            // Get min and max years from options
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            
            expect(minYear).toBe(currentYear - 6);
            expect(maxYear).toBe(currentYear + 2);
        });

        it('should return default range when null dates provided', () => {
            const yearOptions = getYearOptions(null, null);
            
            // Get min and max years from options
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            
            expect(minYear).toBe(currentYear - 6);
            expect(maxYear).toBe(currentYear + 2);
        });

        it('should use minDate year when provided', () => {
            const minDate = `01.01.${currentYear - 10}`;
            const yearOptions = getYearOptions(minDate, null);
            
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            
            expect(minYear).toBe(currentYear - 10);
            expect(maxYear).toBe(currentYear + 2); // Default max
        });

        it('should use maxDate year when provided', () => {
            const maxDate = `01.01.${currentYear + 5}`;
            const yearOptions = getYearOptions(null, maxDate);
            
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            
            expect(minYear).toBe(currentYear - 6); // Default min
            expect(maxYear).toBe(currentYear + 5);
        });

        it('should use both minDate and maxDate years when provided', () => {
            const minDate = `01.01.${currentYear - 3}`;
            const maxDate = `01.01.${currentYear + 4}`;
            const yearOptions = getYearOptions(minDate, maxDate);
            
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            
            expect(minYear).toBe(currentYear - 3);
            expect(maxYear).toBe(currentYear + 4);
        });

        it('should return options with correct structure', () => {
            const yearOptions = getYearOptions();
            
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

        it('should handle invalid date strings gracefully', () => {
            const yearOptions = getYearOptions('invalid-date', 'also-invalid');
            
            // Should fall back to default range
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            
            expect(minYear).toBe(currentYear - 6);
            expect(maxYear).toBe(currentYear + 2);
        });
    });
});
