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
    ];

    const onAccountSelected = (acc) => {
        const filteredAccounts = selectedAccounts
            .filter(a => a.accountNumber !== acc.accountNumber);

        const accountAlreadySelectedAndShouldBeRemoved =
            filteredAccounts.length !== selectedAccounts.length;

        if (accountAlreadySelectedAndShouldBeRemoved) {
            setSelectedAccounts(filteredAccounts);
        } else {
            setSelectedAccounts([...selectedAccounts, acc]);
        }
    };

    return (<>
        <Label htmlFor="account-selector-multi">Velg konto</Label>
        <AccountSelectorMulti
            id="account-selector-multi"
            locale="nb"
            accounts={accounts}
            onAccountSelected={onAccountSelected}
            onBlur={f => f}
            selectedAccounts={selectedAccounts}
            value={value}
        />
    </>);
}

