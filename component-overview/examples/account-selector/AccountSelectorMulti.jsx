import { useState, useId } from 'react';
import { AccountSelectorMulti } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';

() => {
    const [selectedAccounts, setSelectedAccounts] = useState([]);
    const inputId = useId();
    const labelId = useId();

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

    return (
        <InputGroup label="Velg konto" inputId={inputId} labelId={labelId}>
            <AccountSelectorMulti
                accounts={accounts}
                id={inputId}
                formatAccountNumber={true}
                selectedAccounts={selectedAccounts}
                onChange={(account, actionType) => {
                    if (actionType === 'selected') {
                        setSelectedAccounts(prevAccounts =>
                            prevAccounts.concat(account),
                        );
                    } else {
                        setSelectedAccounts(prevAccounts =>
                            prevAccounts.filter(
                                it =>
                                    it.accountNumber !== account.accountNumber,
                            ),
                        );
                    }
                }}
            />
        </InputGroup>
    );
};
