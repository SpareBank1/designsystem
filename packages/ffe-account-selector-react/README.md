# @sb1/ffe-account-selector-react

## Beskrivelse

En kombinasjonsboks med autofullføring spesielt tilpasset for bankkontoer. Pakken inneholder to komponenter:

- `AccountSelector` - For valg av en enkelt konto
- `AccountSelectorMulti` - For valg av flere kontoer

## Installasjon

```bash
npm install --save @sb1/ffe-account-selector-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/kontovelger/.

Denne pakken er avhengig av `@sb1/ffe-searchable-dropdown-react`.
Husk å importere less-filene.

For styling av kontovelgeren, bruk:

```css
@import 'path/to/node_modules/@sb1/ffe-account-selector-react/less/ffe-account-selector';
```

## Eksempler

### Account-grensesnitt

Begge komponentene forventer kontoer som følger `Account`-grensesnittet:

```typescript
interface Account {
    accountNumber: string; // Kontonummer (obligatorisk), f.eks. "12345678901"
    name: string; // Kontonavn (obligatorisk), f.eks. "Brukskonto"
    balance?: number | string; // Saldo (valgfri)
    currencyCode?: string; // Valutakode (valgfri), f.eks. "NOK", "EUR"
}
```

### AccountSelector (velg en konto)

```tsx
import { useState } from 'react';
import { AccountSelector } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';

interface Account {
    accountNumber: string;
    name: string;
    balance?: number;
    currencyCode?: string;
}

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
            />
        </InputGroup>
    );
}
```

### AccountSelector med forhåndsvalgt konto

```tsx
const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[0]);

<AccountSelector
    id="account-selector"
    accounts={accounts}
    selectedAccount={selectedAccount}
    onAccountSelected={setSelectedAccount}
    onReset={() => setSelectedAccount(undefined)}
    locale="nb"
/>;
```

### AccountSelector med visning av saldo

```tsx
<AccountSelector
    id="account-selector"
    accounts={accounts}
    selectedAccount={selectedAccount}
    onAccountSelected={setSelectedAccount}
    onReset={() => setSelectedAccount(undefined)}
    locale="nb"
    showBalance={true}
/>
```

### AccountSelector som tillater egendefinerte kontonummer

Bruk `allowCustomAccount` for å la brukeren skrive inn et kontonummer som ikke er i listen:

```tsx
<AccountSelector
    id="account-selector"
    accounts={accounts}
    selectedAccount={selectedAccount}
    onAccountSelected={setSelectedAccount}
    onReset={() => setSelectedAccount(undefined)}
    locale="nb"
    allowCustomAccount={true}
/>
```

### AccountSelectorMulti (velg flere kontoer)

```tsx
import { useState } from 'react';
import { AccountSelectorMulti } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';

function MyComponent() {
    const [selectedAccounts, setSelectedAccounts] = useState<Account[]>([]);

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

### Props for AccountSelector

| Prop                  | Type                                         | Standard         | Beskrivelse                                                     |
| --------------------- | -------------------------------------------- | ---------------- | --------------------------------------------------------------- |
| `id`                  | `string`                                     | **Obligatorisk** | Unik ID for komponenten. Brukes for a11y.                       |
| `accounts`            | `Account[]`                                  | **Obligatorisk** | Liste over kontoer som kan velges.                              |
| `selectedAccount`     | `Account \| undefined`                       | `undefined`      | Den valgte kontoen.                                             |
| `onAccountSelected`   | `(account: Account) => void`                 | **Obligatorisk** | Kalles når en konto velges.                                     |
| `onReset`             | `() => void`                                 | **Obligatorisk** | Kalles når feltet tømmes og mister fokus.                       |
| `locale`              | `'nb' \| 'nn' \| 'en'`                       | `'nb'`           | Språk for tekster i komponenten.                                |
| `showBalance`         | `boolean`                                    | `false`          | Vis saldo i dropdown og under inputfeltet.                      |
| `hideAccountDetails`  | `boolean`                                    | `false`          | Skjul kontodetaljene (kontonummer og saldo) under inputfeltet.  |
| `formatAccountNumber` | `boolean`                                    | `true`           | Formater kontonummer med mellomrom (1234 56 78901).             |
| `allowCustomAccount`  | `boolean`                                    | `false`          | Tillat at brukeren skriver et kontonummer som ikke er i listen. |
| `labelledById`        | `string`                                     | -                | ID til elementet som gir label til inputfeltet.                 |
| `displayAttribute`    | `keyof Account`                              | `'name'`         | Attributt som vises i inputfeltet ved valgt konto.              |
| `inputProps`          | `React.ComponentPropsWithoutRef<'input'>`    | -                | Props som sendes videre til input-elementet.                    |
| `noMatches`           | `{ text: string; dropdownList?: Account[] }` | -                | Overstyrer standardtekst ved ingen treff.                       |
| `optionBody`          | `React.ComponentType`                        | -                | Egendefinert komponent for hvert element i dropdown.            |
| `postListElement`     | `React.ReactNode`                            | -                | Element som vises under dropdown-listen.                        |
| `ariaInvalid`         | `boolean`                                    | -                | Setter aria-invalid på inputfeltet.                             |
| `onOpen`              | `() => void`                                 | -                | Kalles når dropdown åpnes.                                      |
| `onClose`             | `() => void`                                 | -                | Kalles når dropdown lukkes.                                     |
| `className`           | `string`                                     | -                | Ekstra CSS-klasser.                                             |

### Props for AccountSelectorMulti

| Prop                          | Type                                                              | Standard         | Beskrivelse                                                                                   |
| ----------------------------- | ----------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------- |
| `id`                          | `string`                                                          | **Obligatorisk** | Unik ID for komponenten.                                                                      |
| `accounts`                    | `Account[]`                                                       | **Obligatorisk** | Liste over kontoer som kan velges.                                                            |
| `selectedAccounts`            | `Account[]`                                                       | `[]`             | De valgte kontoene.                                                                           |
| `onChange`                    | `(account: Account, actionType: 'selected' \| 'removed') => void` | **Obligatorisk** | Kalles ved valg/fjerning av konto.                                                            |
| `onReset`                     | `() => void`                                                      | **Obligatorisk** | Kalles når feltet tømmes og mister fokus.                                                     |
| `locale`                      | `'nb' \| 'nn' \| 'en'`                                            | `'nb'`           | Språk for tekster i komponenten.                                                              |
| `showBalance`                 | `boolean`                                                         | `false`          | Vis saldo i dropdown.                                                                         |
| `formatAccountNumber`         | `boolean`                                                         | `true`           | Formater kontonummer med mellomrom.                                                           |
| `maxRenderedDropdownElements` | `number`                                                          | -                | Begrenser antall elementer som rendres i dropdown.                                            |
| `showNumberSelectedAfter`     | `number`                                                          | -                | Vis "X valgt" i stedet for chips etter et visst antall valgte kontoer. Sett til 0 for alltid. |
| `labelledById`                | `string`                                                          | -                | ID til elementet som gir label til inputfeltet.                                               |
| `inputProps`                  | `React.ComponentPropsWithoutRef<'input'>`                         | -                | Props som sendes videre til input-elementet.                                                  |
| `noMatches`                   | `{ text: string; dropdownList?: Account[] }`                      | -                | Overstyrer standardtekst ved ingen treff.                                                     |
| `optionBody`                  | `React.ComponentType`                                             | -                | Egendefinert komponent for hvert element i dropdown.                                          |
| `postListElement`             | `React.ReactNode`                                                 | -                | Element som vises under dropdown-listen.                                                      |
| `ariaInvalid`                 | `boolean`                                                         | -                | Setter aria-invalid på inputfeltet.                                                           |
| `onOpen`                      | `() => void`                                                      | -                | Kalles når dropdown åpnes.                                                                    |
| `onClose`                     | `() => void`                                                      | -                | Kalles når dropdown lukkes.                                                                   |
| `className`                   | `string`                                                          | -                | Ekstra CSS-klasser.                                                                           |

### Egendefinert optionBody

Du kan tilpasse utseendet til hvert element i dropdown-listen med `optionBody`:

```tsx
import { SmallText } from '@sb1/ffe-core-react';

const CustomOptionBody = ({
    item,
    isHighlighted,
}: {
    item: Account;
    isHighlighted: boolean;
}) => {
    return (
        <div
            style={{
                padding: '8px',
                background: isHighlighted ? '#f0f0f0' : 'white',
            }}
        >
            <div>{item.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <SmallText>{item.accountNumber}</SmallText>
                <SmallText>{item.balance} kr</SmallText>
            </div>
        </div>
    );
};

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

Du kan utvide Account-typen og bruke `displayAttribute` for å vise en annen egenskap i inputfeltet:

```tsx
interface PrettyAccount extends Account {
    prettyName: string;
}

const prettyAccounts: PrettyAccount[] = accounts.map(account => ({
    ...account,
    prettyName: `${account.name} - ${account.accountNumber}`,
}));

<AccountSelector<PrettyAccount>
    id="account-selector"
    accounts={prettyAccounts}
    selectedAccount={selectedAccount}
    onAccountSelected={setSelectedAccount}
    onReset={() => setSelectedAccount(undefined)}
    displayAttribute="prettyName"
/>;
```

### Importere kompilert CSS

Hvis prosjektet ditt ikke bruker Less, kan du importere den kompilerte stylingen:

```css
@import '@sb1/ffe-account-selector-react/css/ffe-account-selector.css';
```

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
