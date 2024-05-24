import { Account } from '../types';

const COMMON_SEPARATORS = new RegExp(/[\s.]/g);

export function accountFilter(query = '') {
    const nameQuery = query.toLowerCase();
    const accountNumberQuery = query.replace(COMMON_SEPARATORS, '');

    return (account: Account) => {
        if (account.name.toLowerCase().includes(nameQuery)) {
            return true;
        } else if (
            String(account.accountNumber)
                .replace(COMMON_SEPARATORS, '')
                .includes(accountNumberQuery)
        ) {
            return true;
        }
        return false;
    };
}

function noFilter() {
    return () => () => true;
}

export function createAccountFilter(enableFilter: boolean) {
    return enableFilter ? accountFilter : noFilter;
}
