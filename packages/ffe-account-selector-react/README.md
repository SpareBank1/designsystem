# @sb1/ffe-account-selector-react

## Beskrivelse

Kombinasjonsboks med autofullføring for bankkontoer:

- `AccountSelector` - Velg en enkelt konto
- `AccountSelectorMulti` - Velg flere kontoer

## Installasjon

```bash
npm install --save @sb1/ffe-account-selector-react
```

## Bruk

Dokumentasjon: https://sparebank1.github.io/designsystem/komponenter/kontovelger/

Importer styling:

```css
@import '@sb1/ffe-account-selector-react/less/ffe-account-selector';
/* eller kompilert CSS: */
@import '@sb1/ffe-account-selector-react/css/ffe-account-selector.css';
```

## Eksempler

### AccountSelector (velg en konto)

```tsx
import { useState } from 'react';
import { AccountSelector } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';

function MyComponent() {
    const [selectedAccount, setSelectedAccount] = useState<
        Account | undefined
    >();

    const accounts: Account[] = [
        {
            accountNumber: '12345678901',
            name: 'Brukskonto',
            balance: 1234.56,
            currencyCode: 'NOK',
        },
        {
            accountNumber: '98765432109',
            name: 'Sparekonto',
            balance: 50000.0,
            currencyCode: 'NOK',
        },
    ];

    return (
        <InputGroup label="Velg konto">
            <AccountSelector
                id="account-selector"
                accounts={accounts}
                selectedAccount={selectedAccount}
                onAccountSelected={account => setSelectedAccount(account)}
                onReset={() => setSelectedAccount(undefined)}
                locale="nb"
                showBalance={true}
                allowCustomAccount={false}
            />
        </InputGroup>
    );
}
```

### AccountSelectorMulti (velg flere kontoer)

```tsx
import { useState } from 'react';
import { AccountSelectorMulti } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';

function MyComponent() {
    const [selectedAccounts, setSelectedAccounts] = useState<Account[]>([]);

    return (
        <InputGroup label="Velg kontoer">
            <AccountSelectorMulti
                id="account-selector-multi"
                accounts={accounts}
                selectedAccounts={selectedAccounts}
                onChange={(account, actionType) => {
                    if (actionType === 'selected') {
                        setSelectedAccounts(prev => [...prev, account]);
                    } else {
                        setSelectedAccounts(prev =>
                            prev.filter(
                                a => a.accountNumber !== account.accountNumber,
                            ),
                        );
                    }
                }}
                onReset={() => setSelectedAccounts([])}
                locale="nb"
            />
        </InputGroup>
    );
}
```

### Egendefinert optionBody

```tsx
const CustomOptionBody = ({
    item,
    isHighlighted,
}: {
    item: Account;
    isHighlighted: boolean;
}) => (
    <div
        style={{
            padding: '8px',
            background: isHighlighted ? '#f0f0f0' : 'white',
        }}
    >
        <div>{item.name}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{item.accountNumber}</span>
            <span>{item.balance} kr</span>
        </div>
    </div>
);

<AccountSelector
    id="account-selector"
    accounts={accounts}
    selectedAccount={selectedAccount}
    onAccountSelected={setSelectedAccount}
    onReset={() => setSelectedAccount(undefined)}
    optionBody={CustomOptionBody}
/>;
```

### Egendefinert displayAttribute med generics

```tsx
interface PrettyAccount extends Account {
    prettyName: string;
}

<AccountSelector<PrettyAccount>
    accounts={prettyAccounts}
    displayAttribute="prettyName"
    // ... andre obligatoriske props
/>;
```

## Utvikling

```bash
npm install && npm run build && npm start
```
