import { accountFilter, createAccountFilter } from './filters';

describe('accountFilter', () => {
    const accounts = [
        {
            name: 'Skattetrekkskonto',
            accountNumber: '654684',
            balance: 66546.99,
        },
        {
            name: 'Matvererkonto',
            accountNumber: '1286 73 18345',
            balance: 24566546.21,
        },
        {
            name: 'Something else konto',
            accountNumber: '87654321',
            balance: 12566546.34,
        },
        {
            name: 'Et virkelig langt kontonavn',
            accountNumber: '1187 63 547961',
            balance: 13466546.15,
        },
        {
            name: 'Lønnskonto',
            accountNumber: '9713 60 98334',
            balance: 4566546,
        },
        {
            name: 'Utland lønnskonto',
            accountNumber: '9713 60 98334',
            balance: 4566546,
        },
    ];

    it('should not filter with empty query', () => {
        expect(accounts.filter(accountFilter(''))).toEqual(accounts);
    });

    it('should not filter with undefined query', () => {
        expect(accounts.filter(accountFilter(undefined))).toEqual(accounts);
    });

    it('should filter by name', () => {
        expect(accounts.filter(accountFilter('Matvererkonto'))).toEqual([
            accounts[1],
        ]);
    });

    it('should filter by account number without separators', () => {
        expect(accounts.filter(accountFilter('12867318345'))).toEqual([
            accounts[1],
        ]);
    });

    it('should filter account number with dots seperators', () => {
        expect(accounts.filter(accountFilter('1286.7318.345'))).toEqual([
            accounts[1],
        ]);
    });

    it('should filter account number with space seperators', () => {
        expect(accounts.filter(accountFilter('1286 7318 345'))).toEqual([
            accounts[1],
        ]);
        const NON_BREAKING_SPACE = '\u00A0';
        expect(
            accounts.filter(
                accountFilter(
                    `1286${NON_BREAKING_SPACE}7318${NON_BREAKING_SPACE}345`,
                ),
            ),
        ).toEqual([accounts[1]]);
    });

    it('should filter by partial account number', () => {
        expect(accounts.filter(accountFilter('876'))).toEqual([
            accounts[2],
            accounts[3],
        ]);
    });

    it('should filter by partial name', () => {
        expect(accounts.filter(accountFilter('lønnskonto'))).toEqual([
            accounts[4],
            accounts[5],
        ]);
    });

    it('should return empty array when no match', () => {
        expect(accounts.filter(accountFilter('xxx'))).toEqual([]);
    });

    it('should enable account filter', () => {
        expect(createAccountFilter(true).name).toBe('accountFilter');
    });

    it('should disable account filter', () => {
        expect(createAccountFilter(false).name).toEqual('noFilter');
    });
});
