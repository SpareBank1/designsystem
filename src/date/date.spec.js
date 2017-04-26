import formatDate from '.';
import moment from 'moment';

describe('format date ', () => {
    it('in milliseconds', () => {
        expect(formatDate(1467756000000)).toBe('06.07.2016');
    });

    it('in javascript date format', () => {
        expect(formatDate(new Date(2016, 6, 6))).toBe('06.07.2016');
    });

    it('in moment objects', () => {
        expect(formatDate(moment(1467756000000))).toBe('06.07.2016');
    });

    it('returns null when input is string', () => {
        expect(formatDate('06.07.2016')).toBe(null);
    });
});
