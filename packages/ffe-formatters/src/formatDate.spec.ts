import { formatDate } from './formatDate';

describe('format date ', () => {
    it('in milliseconds', () => {
        expect(formatDate(1514808000000)).toBe('01.01.2018');
    });

    it('in javascript date format', () => {
        expect(formatDate(new Date(2016, 6, 6))).toBe('06.07.2016');
    });
});
