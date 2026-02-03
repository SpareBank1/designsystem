# @sb1/ffe-account-selector-react

## Beskrivelse

Kombinasjonsboks med autofullføring for bankkontoer:

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `AccountSelector`
- `AccountSelectorMulti`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-account-selector-react
```

## API-referanse

### AccountSelector Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `accounts` | `T[]` | Ja | Array of objects: { accountNumber: string.isRequired, name: string.isRequired, balance: number, currencyCode: string, } |
| `className` | `string` | Nei | - |
| `id` | `string` | Ja | Id blir satt automatisk hvis AccountSelector brukes i en InputGroup. Brukes for å koble label og input |
| `locale` | `Locale` | Nei | - |
| `noMatches` | `object` | Nei | Overrides default string for all locales. |
| `inputProps` | `React.ComponentPropsWithoutRef<'input'>` | Nei | Props passed to the input field |
| `onAccountSelected` | `(account: T) => void` | Ja | Returns the selected account object |
| `hideAccountDetails` | `boolean` | Nei | Determines if account details should be shown (balance and account number under the input field) |
| `showBalance` | `boolean` | Nei | Default false. |
| `formatAccountNumber` | `boolean` | Nei | Default true. |
| `labelledById` | `string` | Nei | id of element that labels input field |
| `displayAttribute` | `keyof T` | Nei | Attribute used in the input when an item is selected. * |
| `allowCustomAccount` | `boolean` | Nei | Allows selecting the text the user writes even if it does not match anything in the accounts array. Useful e.g. if you want to pay to account that is not in yur recipients list. |
| `optionBody` | `React.ComponentType` | Nei | Custom element to use for each item in the dropdown list |
| `postListElement` | `React.ReactNode` | Nei | Element to be shown below dropDownList |
| `aria-invalid` | `AriaAttributes['aria-invalid']` | Nei | Sets aria-invalid on input field |
| `ariaInvalid` | `AriaAttributes['aria-invalid']` | Nei | - |
| `onOpen` | `() => void` | Nei | Prop passed to the dropdown list |
| `onClose` | `() => void` | Nei | - |
| `selectedAccount` | `T` | Nei | - |
| `onReset` | `() => void` | Ja | Called when emptying the input field and moving focus away from the account selector |

### AccountSelectorMulti Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `accounts` | `T[]` | Ja | Array of objects: { accountNumber: string.isRequired, name: string.isRequired, balance: number, currencyCode: string, } |
| `className` | `string` | Nei | - |
| `id` | `string` | Ja | Id blir satt automatisk hvis AccountSelector brukes i en InputGroup. Brukes for å koble label og input |
| `locale` | `Locale` | Nei | - |
| `noMatches` | `object` | Nei | Overrides default string for all locales. |
| `inputProps` | `React.ComponentPropsWithoutRef<'input'>` | Nei | Props passed to the input field |
| `onChange` | `(account: T, actionType: 'selected' | 'removed') => void` | Ja | Called when a value is selected |
| `showBalance` | `boolean` | Nei | Default false. |
| `formatAccountNumber` | `boolean` | Nei | Default true. |
| `labelledById` | `string` | Nei | id of element that labels input field |
| `optionBody` | `React.ComponentType` | Nei | Custom element to use for each item in the dropdown list |
| `postListElement` | `React.ReactNode` | Nei | Element to be shown below dropDownList |
| `aria-invalid` | `AriaAttributes['aria-invalid']` | Nei | Sets aria-invalid on input field |
| `ariaInvalid` | `AriaAttributes['aria-invalid']` | Nei | - |
| `onOpen` | `() => void` | Nei | Prop passed to the dropdown list |
| `onClose` | `() => void` | Nei | - |
| `selectedAccounts` | `T[]` | Nei | - |
| `onReset` | `() => void` | Ja | Called when emptying the input field and moving focus away from the account selector |
| `maxRenderedDropdownElements` | `number` | Nei | Limits number of rendered dropdown elements |
| `showNumberSelectedAfter` | `number` | Nei | Using this will give a text "X selected" instead of chips, after a certain number of selected items. If you always want "X selected" showing, pass in 0 |

## Eksempler (fra README)

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
