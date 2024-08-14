import { useId, useState } from 'react';
import { AccountSelector } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';

() => {
    const labelId = useId();
    const inputId = useId();
    const [selectedAccount, setSelectedAccount] = useState(null);

    return (
        <InputGroup
            label="Velg konto"
            extraMargin={false}
            labelId={labelId}
            inputId={inputId}
        >
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
                id={inputId}
                labelledById={labelId}
                locale="nb"
                onAccountSelected={value => setSelectedAccount(value)}
                onReset={() => setSelectedAccount(null)}
                selectedAccount={selectedAccount}
                formatAccountNumber={false}
            />
        </InputGroup>
    );
};
