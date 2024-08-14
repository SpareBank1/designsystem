import { useId, useState } from 'react';
import { AccountSelector } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';

() => {
    const labelId = useId();
    const inputId = useId();
    const accounts = [
        {
            accountNumber: '1234 56 789101',
            name: 'Brukskonto',
            currencyCode: 'NOK',
            balance: 1337,
        },
        {
            accountNumber: '1234 56 789102',
            name: 'Brukskonto2',
            currencyCode: 'NOK',
            balance: 13337,
        },
        {
            accountNumber: '2234 56 789102',
            name: 'Sparekonto1',
            currencyCode: 'EUR',
            balance: 109236,
        },
        {
            accountNumber: '1253 47 789102',
            name: 'Sparekonto2',
            currencyCode: 'NOK',
            balance: 0,
        },
    ];

    const [selectedAccount, setSelectedAccount] = useState(accounts[0]);

    return (
        <InputGroup
            inputId={inputId}
            label="Velg konto"
            extraMargin={false}
            labelId={labelId}
        >
            <AccountSelector
                accounts={accounts}
                id={inputId}
                locale="nb"
                onAccountSelected={value => setSelectedAccount(value)}
                onReset={() => setSelectedAccount(null)}
                selectedAccount={selectedAccount}
                hideAccountDetails={true}
                labelledById={labelId}
            />
        </InputGroup>
    );
};
