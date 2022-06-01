import { useState } from 'react';
import { AccountSelector } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';
import { SmallText } from '@sb1/ffe-core-react';

() => {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const label5 = 'label5';
    const CustomListElementBody = ({ item, isHighlighted }) => {
    return (
        <div
            style={{
                padding: '8px',
                background: isHighlighted ? '#ff9100' : 'white',
            }}
        >
            <div>{item.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <SmallText>{item.accountNumber}</SmallText>
                <SmallText>{item.amount}</SmallText>
            </div>
        </div>
    );
    };

    return(
        <InputGroup label="Velg konto" extraMargin={false} labelId={label5}>
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
                labelledById={label5}
                listElementBody={CustomListElementBody}
                ariaInvalid={false}
            />
        </InputGroup>
    )
}
