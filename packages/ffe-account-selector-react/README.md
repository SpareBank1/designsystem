# @sb1/ffe-account-selector-react

## Beskrivelse

En kombinasjonsboks med autofullføring spesielt tilpasset for bankkontoer.

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

```tsx
import { useState } from 'react';
import { AccountSelector } from '@sb1/ffe-account-selector-react';

function MyComponent() {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const accounts = [
        { accountNumber: '12345678901', name: 'Brukskonto', balance: 1234.56 },
        { accountNumber: '98765432109', name: 'Sparekonto', balance: 50000.0 },
    ];

    return (
        <AccountSelector
            id="account-selector"
            accounts={accounts}
            selectedAccount={selectedAccount}
            onAccountSelected={account => setSelectedAccount(account)}
            onReset={() => setSelectedAccount(null)}
            locale="nb"
        />
    );
}
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
