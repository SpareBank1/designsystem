const COMMON_SEPARATORS = new RegExp(/[\s.]/g);

export function accountFilter(query = '') {
    const nameQuery = query.toLowerCase();
    const accountNumberQuery = query.replace(COMMON_SEPARATORS, '');

    return account => {
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

export function createAccountFilter(enableFilter) {
    return enableFilter ? accountFilter : noFilter;
}
