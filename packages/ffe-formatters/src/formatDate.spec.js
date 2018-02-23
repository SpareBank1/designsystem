import formatDate from './formatDate';
import moment from 'moment';

describe('format date ', () => {
    it('in milliseconds', () => {
        expect(formatDate(1514808000000)).toBe('01.01.2018');
    });

    it('in javascript date format', () => {
        expect(formatDate(new Date(2016, 6, 6))).toBe('06.07.2016');
    });

    it('in moment objects', () => {
        expect(formatDate(moment(1514808000000))).toBe('01.01.2018');
    });

    it('returns null when input is string', () => {
        expect(formatDate('06.07.2016')).toBe(null);
    });
});
