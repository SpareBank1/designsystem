import simpleDate from './simpledate';
import ErrorTypes from './error-types';

describe('simpleDate fromString', () => {
    describe('triggers', () => {
        it('onSuccess callback', () => {
            const onSuccess = jest.fn();
            const date = simpleDate.fromString('01.01.2016', onSuccess);

            expect(onSuccess).toHaveBeenCalledTimes(1);
            expect(onSuccess.mock.calls[0][0]).toBe(date);
        });

        it('onError callback with INVALID_DATE_FORMAT', () => {
            const onError = jest.fn();
            simpleDate.fromString('---', () => {}, onError);
            expect(onError).toHaveBeenCalledTimes(1);
            expect(onError.mock.calls[0][0]).toBe(
                ErrorTypes.INVALID_DATE_FORMAT,
            );
        });

        it('onError callback with INVALID_DATE', () => {
            const onError = jest.fn();
            simpleDate.fromString('29.02.2015', () => {}, onError);

            expect(onError).toHaveBeenCalledTimes(1);
            expect(onError.mock.calls[0][0]).toBe(ErrorTypes.INVALID_DATE);
        });
    });

    describe('formats', () => {
        it('single digit dates as double digit values', () => {
            expect(simpleDate.fromString('01.01.2016').format()).toBe(
                '01.01.2016',
            );
        });

        it('double digit dates as double digit values', () => {
            expect(simpleDate.fromString('10.10.2016').format()).toBe(
                '10.10.2016',
            );
        });
    });

    describe('does not accept', () => {
        it('date format prepended anything other than digits', () =>
            expect(simpleDate.fromString('----10102016')).toBeNull());

        it('date format appended anything after valid date', () =>
            expect(simpleDate.fromString('10102016----')).toBeNull());

        it('date without year', () =>
            expect(simpleDate.fromString('10.10.')).toBeNull());

        it('date without day', () =>
            expect(simpleDate.fromString('.10.2016')).toBeNull());

        it('date without month', () =>
            expect(simpleDate.fromString('10..2016')).toBeNull());

        it('date with 1 digit as year', () =>
            expect(simpleDate.fromString('10.10.6')).toBeNull());

        it('date with 3 digits as year', () =>
            expect(simpleDate.fromString('10.10.206')).toBeNull());

        it('date with more than 4 digits as year', () =>
            expect(simpleDate.fromString('10.10.201673829')).toBeNull());

        it('date higher than 31', () =>
            expect(simpleDate.fromString('32.03.2015')).toBeNull());

        it('february 29 in none-leap years', () =>
            expect(simpleDate.fromString('29.02.2015')).toBeNull());

        it('month higher than 12', () =>
            expect(simpleDate.fromString('25.13.2015')).toBeNull());
    });

    describe('accepts', () => {
        it('single digit day', () => {
            expect(simpleDate.fromString('5.04.2015').format()).toBe(
                '05.04.2015',
            );
        });

        it('single digit month', () => {
            expect(simpleDate.fromString('25.1.2015').format()).toBe(
                '25.01.2015',
            );
        });

        it('double digit year', () => {
            expect(simpleDate.fromString('10.10.17').format()).toBe(
                '10.10.2017',
            );
        });

        it('no separators for 4 digit years', () => {
            expect(simpleDate.fromString('10102016').format()).toBe(
                '10.10.2016',
            );
        });

        it('no separators for 2 digit years', () => {
            expect(simpleDate.fromString('101016').format()).toBe('10.10.2016');
        });

        it('given separators for 4 digit years', () => {
            '. -/'.split('').forEach(separator => {
                const date = simpleDate.fromString(
                    `10${separator}10${separator}2016`,
                );
                expect(date.format()).toBe(`10.10.2016`);
            });
        });

        it('given separators for 2 digit years', () => {
            '. -/'.split('').forEach(separator => {
                const date = simpleDate.fromString(
                    `10${separator}10${separator}16`,
                );
                expect(date.format()).toBe('10.10.2016');
            });
        });
    });

    describe('during last day of month', () => {
        describe('given date from month with 30 days', () => {
            it('parses', () => {
                expect(simpleDate.fromString('01.09.2017')).not.toBeNull();
            });

            it('formats', () => {
                expect(simpleDate.fromString('01.09.2017').format()).toEqual(
                    '01.09.2017',
                );
            });
        });

        describe('given date from month with 28 days', () => {
            it('parses', () => {
                expect(simpleDate.fromString('05.02.2015')).not.toBeNull();
            });

            it('formats', () => {
                expect(simpleDate.fromString('05.02.2015').format()).toEqual(
                    '05.02.2015',
                );
            });
        });
    });
});
