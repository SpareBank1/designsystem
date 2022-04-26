import { useState } from 'react';
import { AccountSelectorMulti } from '@sb1/ffe-account-selector-react';
import { Label } from '@sb1/ffe-form-react';

() => {
    const [value, setValue] = useState();
    const [selectedAccounts, setSelectedAccounts] = useState([]);

    const accounts = [
        {
            accountNumber: '123456789101',
            name: 'Brukskonto',
            currencyCode: 'NOK',
            balance: 1337,
        },
        {
            accountNumber: '123456789102',
            name: 'Sparekonto',
            currencyCode: 'NOK',
            balance: 13337,
        },
        {
            accountNumber: '123456789103',
            name: 'Min ekstrakonto',
            currencyCode: 'NOK',
            balance: 12345,
        },
        {
            accountNumber: '123456789104',
            name: 'Min siste konto',
            currencyCode: 'NOK',
            balance: 54321,
        },
    ];

    const onAccountSelected = acc => {
        const filteredAccounts = selectedAccounts.filter(
            a => a.accountNumber !== acc.accountNumber,
        );

        const accountAlreadySelectedAndShouldBeRemoved =
            filteredAccounts.length !== selectedAccounts.length;

        if (accountAlreadySelectedAndShouldBeRemoved) {
            setSelectedAccounts(filteredAccounts);
        } else {
            setSelectedAccounts([...selectedAccounts, acc]);
        }
    };

    const onBlur = () => {
        setValue(selectedAccounts.map(acc => acc.name).join(', '));
    };

    const onFocus = () => {
        setValue('');
    };

    const onSelectAll = () => {
        selectedAccounts.length === accounts.length
            ? setSelectedAccounts([])
            : setSelectedAccounts(accounts);
    };

    return (
        <>
            <Label htmlFor="account-selector-multi">Velg konto</Label>
            <AccountSelectorMulti
                id="account-selector-multi"
                locale="nb"
                accounts={accounts}
                onAccountSelected={onAccountSelected}
                selectedAccounts={selectedAccounts}
                value={value}
                onChange={val => setValue(val)}
                showSelectAllOption={true}
                onSelectAll={onSelectAll}
                onBlur={onBlur}
                onFocus={onFocus}
            />
        </>
    );
}
