# @sb1/ffe-account-selector-react

## Beskrivelse

En kombinasjonsboks med autofullføring spesielt tilpasset for bankkontoer.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `AccountSelector`
- `AccountSelectorMulti`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-account-selector-react @sb1/ffe-formatters @sb1/ffe-icons-react @sb1/ffe-searchable-dropdown-react @sb1/ffe-icons @sb1/ffe-chips-react @sb1/ffe-core-react @sb1/ffe-form @sb1/ffe-spinner-react @sb1/ffe-chips @sb1/ffe-core @sb1/ffe-buttons @sb1/ffe-spinner
```

### Avhengigheter

Denne pakken er avhengig av:

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

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-chips/css/chip.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-searchable-dropdown-react/css/searchable-dropdown.css';
@import '@sb1/ffe-spinner/css/spinner.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
