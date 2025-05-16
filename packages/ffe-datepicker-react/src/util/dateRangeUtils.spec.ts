import { getYearOptions, isMonthInRange } from './dateRangeUtils';

describe('dateRangeUtils', () => {
    describe('getYearOptions', () => {
        const currentYear = new Date().getFullYear();

        it('should return default range (6 back, 2 forward) when no min/max dates provided', () => {
            const yearOptions = getYearOptions(null, null);
            
            // Get min and max years from options
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            
            expect(minYear).toBe(currentYear - 6);
            expect(maxYear).toBe(currentYear + 2);
        });
        
        it('should respect minimum date when within 10 years', () => {
            const minDate = `01.01.${currentYear - 8}`;
            const yearOptions = getYearOptions(minDate, null);
            
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            expect(minYear).toBe(currentYear - 8);
        });
        
        it('should limit to 10 years back when min date is earlier', () => {
            const minDate = `01.01.${currentYear - 15}`; // 15 years back
            const yearOptions = getYearOptions(minDate, null);
            
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            expect(minYear).toBe(currentYear - 10); // Should be limited to 10 years back
        });
        
        it('should respect maximum date when within 10 years', () => {
            const maxDate = `01.01.${currentYear + 5}`;
            const yearOptions = getYearOptions(null, maxDate);
            
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            expect(maxYear).toBe(currentYear + 5);
        });
        
        it('should limit to 10 years forward when max date is later', () => {
            const maxDate = `01.01.${currentYear + 15}`; // 15 years forward
            const yearOptions = getYearOptions(null, maxDate);
            
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            expect(maxYear).toBe(currentYear + 10); // Should be limited to 10 years forward
        });
        
        it('should handle both min and max dates within limits', () => {
            const minDate = `01.01.${currentYear - 4}`;
            const maxDate = `01.01.${currentYear + 3}`;
            const yearOptions = getYearOptions(minDate, maxDate);
            
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            
            expect(minYear).toBe(currentYear - 4);
            expect(maxYear).toBe(currentYear + 3);
        });
        
        it('should handle both min and max dates beyond limits', () => {
            const minDate = `01.01.${currentYear - 20}`;
            const maxDate = `01.01.${currentYear + 20}`;
            const yearOptions = getYearOptions(minDate, maxDate);
            
            const minYear = Math.min(...yearOptions.map(opt => opt.value));
            const maxYear = Math.max(...yearOptions.map(opt => opt.value));
            
            expect(minYear).toBe(currentYear - 10);
            expect(maxYear).toBe(currentYear + 10);
        });
    });

    describe('isMonthInRange', () => {
        it('should return true when month is within range', () => {
            const year = 2025;
            const month = 6; // June
            const minDate = '01.01.2024';
            const maxDate = '31.12.2026';
            
            expect(isMonthInRange(year, month, minDate, maxDate)).toBe(true);
        });
        
        it('should return false when month is before min date', () => {
            const year = 2023;
            const month = 6; // June
            const minDate = '01.01.2024';
            const maxDate = '31.12.2026';
            
            expect(isMonthInRange(year, month, minDate, maxDate)).toBe(false);
        });
        
        it('should return false when month is after max date', () => {
            const year = 2027;
            const month = 1; // January
            const minDate = '01.01.2024';
            const maxDate = '31.12.2026';
            
            expect(isMonthInRange(year, month, minDate, maxDate)).toBe(false);
        });
    });
});
