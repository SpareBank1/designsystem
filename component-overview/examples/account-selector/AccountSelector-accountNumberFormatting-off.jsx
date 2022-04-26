import { useState } from 'react';
import { AccountSelector } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';

() => {
    const label3 = 'label3';
    const [selectedAccount, setSelectedAccount] = useState(null);

    return (
    <InputGroup label="Velg konto" extraMargin={false} labelId={label3}>
        <AccountSelector
            accounts={[
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
                    currencyCode: 'NOK',
                    balance: 109236,
                },
                {
                    accountNumber: '1253 47 789102',
                    name: 'Sparekonto2',
                    currencyCode: 'NOK',
                    balance: 0,
                },
            ]}
            id="account-selector-single"
            locale="nb"
            onAccountSelected={value => setSelectedAccount(value)}
            onReset={() => setSelectedAccount(null)}
            selectedAccount={selectedAccount}
            formatAccountNumber={false}
            labelId={label3}
            ariaInvalid={false}
        />
    </InputGroup>);
}
