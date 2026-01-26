# @sb1/ffe-account-selector-react

## Description

A combobox with autocomplete tailored for bank accounts.

En kombinasjonsboks med autofullføring spesielt tilpasset for bankkontoer.

## Install

```
npm install --save @sb1/ffe-account-selector-react
```

## Usage

Full documentation on account selector usage is available at https://design.sparebank1.no/komponenter/kontovelger/.

This package depends on `@sb1/ffe-searchable-dropdown-react`.
Make sure you import the less-files.

For styling the account-selector use:

```css
@import 'path/to/node_modules/@sb1/ffe-account-selector-react/less/ffe-account-selector';
```

## Examples

```tsx
import { AccountSelector } from '@sb1/ffe-account-selector-react';

function MyComponent() {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const accounts = [
        { accountNumber: '12345678901', name: 'Brukskonto', balance: 1234.56 },
        { accountNumber: '98765432109', name: 'Sparekonto', balance: 50000.0 },
    ];

    return (
        <AccountSelector
            accounts={accounts}
            selectedAccount={selectedAccount}
            onChange={account => setSelectedAccount(account)}
            locale="nb"
        />
    );
}
```

### Importing compiled CSS

If your project does not use Less, you can import the compiled styling:

```css
@import '~@sb1/ffe-account-selector-react/css/ffe-account-selector.css';
```

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
