import { useState } from 'react';
import { AccountSelector } from '@sb1/ffe-account-selector-react';
import { Label } from '@sb1/ffe-form-react';

() => {
    const [value, setValue] = useState('');
    const [selectedAccount, setSelectedAccount] = useState();

    return (
        <>
            <Label htmlFor="account-selector-single">Velg konto</Label>
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
                onAccountSelected={account => {
                    setSelectedAccount(account);
                    setValue(account.name);
                }}
                onChange={newValue => setValue(newValue)}
                onReset={() => {
                    setSelectedAccount(null);
                    setValue('');
                }}
                value={value}
                selectedAccount={selectedAccount}
            />
        </>
    );
};
