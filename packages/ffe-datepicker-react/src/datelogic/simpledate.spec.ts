import { getSimpleDateFromString } from './simpledate';

const today = new Date();

describe('simpleDate fromString', () => {
    describe('triggers', () => {
        it('onSuccess callback', () => {
            const onSuccess = jest.fn();
            const date = getSimpleDateFromString('01.01.2016', onSuccess);

            expect(onSuccess).toHaveBeenCalledTimes(1);
            expect(onSuccess.mock.calls[0][0]).toBe(date);
        });
    });

    describe('formats', () => {
        it('single digit dates as double digit values', () => {
            expect(getSimpleDateFromString('01.01.2016')?.format()).toBe(
                '01.01.2016',
            );
        });

        it('double digit dates as double digit values', () => {
            expect(getSimpleDateFromString('10.10.2016')?.format()).toBe(
                '10.10.2016',
            );
        });
    });

    describe('does not accept', () => {
        it('date format prepended anything other than digits', () =>
            expect(getSimpleDateFromString('----10102016')).toBeNull());

        it('date format appended anything after valid date', () =>
            expect(getSimpleDateFromString('10102016----')).toBeNull());

        it('date without day', () =>
            expect(getSimpleDateFromString('.10.2016')).toBeNull());

        it('date with more than 4 digits as year', () =>
            expect(getSimpleDateFromString('10.10.201673829')).toBeNull());

        it('date higher than 31', () =>
            expect(getSimpleDateFromString('32.03.2015')).toBeNull());

        it('february 29 in none-leap years', () =>
            expect(getSimpleDateFromString('29.02.2015')).toBeNull());

        it('month higher than 12', () =>
            expect(getSimpleDateFromString('25.13.2015')).toBeNull());
    });

    describe('accepts', () => {
        /*
         1 Digit input returns input as day together with current month and year
          */
        it('1 digit input', () => {
            const expectedMonth =
                today.getMonth() + 1 < 10
                    ? `0${today.getMonth() + 1}`
                    : today.getMonth() + 1;
            return expect(getSimpleDateFromString('2')?.format()).toBe(
                `02.${expectedMonth}.${today.getFullYear()}`,
            );
        });

        it('1 digit input, followed by separator', () => {
            const expectedMonth =
                today.getMonth() + 1 < 10
                    ? `0${today.getMonth() + 1}`
                    : today.getMonth() + 1;
            return expect(getSimpleDateFromString('1.')?.format()).toBe(
                `01.${expectedMonth}.${today.getFullYear()}`,
            );
        });

        /*
         2 Digit input returns input as day together with current month and year
          */
        it('2 digit input', () => {
            const expectedMonth =
                today.getMonth() + 1 < 10
                    ? `0${today.getMonth() + 1}`
                    : today.getMonth() + 1;
            return expect(getSimpleDateFromString('12')?.format()).toBe(
                `12.${expectedMonth}.${today.getFullYear()}`,
            );
        });

        it('2 digit input, followed by separator', () => {
            const expectedMonth =
                today.getMonth() + 1 < 10
                    ? `0${today.getMonth() + 1}`
                    : today.getMonth() + 1;
            return expect(getSimpleDateFromString('13.')?.format()).toBe(
                `13.${expectedMonth}.${today.getFullYear()}`,
            );
        });

        /*
         3 Digit input returns input as day and month together with current year
          */
        it('3 digit input', () =>
            expect(getSimpleDateFromString('109')?.format()).toBe(
                `10.09.${today.getFullYear()}`,
            ));

        it('3 digit input, with separator', () =>
            expect(getSimpleDateFromString('10.9')?.format()).toBe(
                `10.09.${today.getFullYear()}`,
            ));

        /*
         4 Digit input returns input as day and month together with current year
          */
        it('4 digit input', () =>
            expect(getSimpleDateFromString('1010')?.format()).toBe(
                `10.10.${today.getFullYear()}`,
            ));

        it('4 digit input, with separator', () =>
            expect(getSimpleDateFromString('10.07')?.format()).toBe(
                `10.07.${today.getFullYear()}`,
            ));

        /*
         5 Digit input returns first two digits as day, next two as month, and last as year
          */
        it('5 digit input', () =>
            expect(getSimpleDateFromString('10106')?.format()).toBe(
                '10.10.2006',
            ));

        it('5 digit input, with separator', () =>
            expect(getSimpleDateFromString('05.04.6')?.format()).toBe(
                '05.04.2006',
            ));

        /*
         6 Digit input returns first two digits as day, next two as month, and last two as year
          */
        it('6 digit input', () => {
            expect(getSimpleDateFromString('101016')?.format()).toBe(
                '10.10.2016',
            );
        });

        it('6 digit input, all valid separators', () => {
            '. -/'.split('').forEach(separator => {
                const date = getSimpleDateFromString(
                    `10${separator}10${separator}16`,
                );
                expect(date?.format()).toBe('10.10.2016');
            });
        });

        /*
         7 Digit input returns first two digits as day, next two as month, and last three as year
          */
        it('7 digit input', () =>
            expect(getSimpleDateFromString('0312015')?.format()).toBe(
                '03.12.2015',
            ));

        it('7 digit input, with separator', () =>
            expect(getSimpleDateFromString('05.05.123')?.format()).toBe(
                '05.05.2123',
            ));

        it('7 digit input, with separator and 1 digit day', () => {
            expect(getSimpleDateFromString('5.04.2015')?.format()).toBe(
                '05.04.2015',
            );
        });

        it('7 digit input, with separator and 1 digit month', () => {
            expect(getSimpleDateFromString('25.1.2015')?.format()).toBe(
                '25.01.2015',
            );
        });

        /*
         8 Digit input returns first two digits as day, next two as month, and last four as year
          */
        it('8 digit input', () => {
            expect(getSimpleDateFromString('10102016')?.format()).toBe(
                '10.10.2016',
            );
        });

        it('8 digit input, all valid separators', () => {
            '. -/'.split('').forEach(separator => {
                const date = getSimpleDateFromString(
                    `10${separator}10${separator}2016`,
                );
                expect(date?.format()).toBe(`10.10.2016`);
            });
        });
    });

    describe('during last day of month', () => {
        describe('given date from month with 30 days', () => {
            it('parses', () => {
                expect(getSimpleDateFromString('01.09.2017')).not.toBeNull();
            });

            it('formats', () => {
                expect(getSimpleDateFromString('01.09.2017')?.format()).toEqual(
                    '01.09.2017',
                );
            });
        });

        describe('given date from month with 28 days', () => {
            it('parses', () => {
                expect(getSimpleDateFromString('05.02.2015')).not.toBeNull();
            });

            it('formats', () => {
                expect(getSimpleDateFromString('05.02.2015')?.format()).toEqual(
                    '05.02.2015',
                );
            });
        });
    });
});
