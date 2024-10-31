import { Account } from '../types';

export const getAccountsWithCustomAccounts = <T extends Account>({
    accounts,
    selectedAccount,
    inputValue,
}: {
    accounts: T[];
    selectedAccount: T | undefined;
    inputValue: string;
}) => {
    const shouldAddSelectedAccountNotFoundInList =
        selectedAccount &&
        selectedAccount.name === inputValue &&
        !accounts.find(
            account => account.accountNumber === selectedAccount.accountNumber,
        );

    return shouldAddSelectedAccountNotFoundInList
        ? [...accounts, selectedAccount]
        : accounts;
};
