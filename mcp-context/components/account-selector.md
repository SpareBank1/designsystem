# @sb1/ffe-account-selector-react

## Description

A combobox with autocomplete tailored for bank accounts.

## Components

This package exports the following components:

- `AccountSelector`
- `AccountSelectorMulti`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-account-selector-react @sb1/ffe-formatters @sb1/ffe-icons-react @sb1/ffe-searchable-dropdown-react @sb1/ffe-icons @sb1/ffe-chips-react @sb1/ffe-core-react @sb1/ffe-form @sb1/ffe-spinner-react @sb1/ffe-chips @sb1/ffe-core @sb1/ffe-buttons @sb1/ffe-spinner
```

### Dependencies

This package depends on:

- `@sb1/ffe-formatters`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-searchable-dropdown-react`
- `@sb1/ffe-icons`
- `@sb1/ffe-chips-react`
- `@sb1/ffe-core-react`
- `@sb1/ffe-form`
- `@sb1/ffe-spinner-react`
- `@sb1/ffe-chips`
- `@sb1/ffe-core`
- `@sb1/ffe-buttons`
- `@sb1/ffe-spinner`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-chips/css/chip.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-searchable-dropdown-react/css/searchable-dropdown.css';
@import '@sb1/ffe-spinner/css/spinner.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### AccountSelector Props

No component-specific props beyond native HTML attributes.

### AccountSelectorMulti Props

No component-specific props beyond native HTML attributes.

## Manual Examples (from README)

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

```css
@import '~@sb1/ffe-account-selector-react/css/ffe-account-selector.css';
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
