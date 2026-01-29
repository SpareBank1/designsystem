# @sb1/ffe-searchable-dropdown-react

## Beskrivelse

Søkbar nedtrekksliste for store eller dynamiske lister. Tilgjengelig som enkeltvalg (`SearchableDropdown`) og flervalg (`SearchableDropdownMultiSelect`). Støtter tastaturnavigasjon, lastestatus, tom-liste og egendefinert render av elementer.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `SearchableDropdown`
- `SearchableDropdownMultiSelect`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-searchable-dropdown-react @sb1/ffe-chips-react @sb1/ffe-core-react @sb1/ffe-form @sb1/ffe-icons-react @sb1/ffe-spinner-react @sb1/ffe-chips @sb1/ffe-core @sb1/ffe-icons @sb1/ffe-buttons @sb1/ffe-spinner
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-chips-react`
- `@sb1/ffe-core-react`
- `@sb1/ffe-form`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-spinner-react`
- `@sb1/ffe-chips`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`
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

### SearchableDropdown Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `id` | `string` | Ja | Id of drop down |
| `labelledById` | `string` | Nei | Id of element that labels input field |
| `className` | `string` | Nei | Extra class |
| `dropdownList` | `Item[]` | Ja | List of objects to be displayed in dropdown |
| `selectedItem` | `Item` | Nei | The selected item to be displayed in the input field. If not specified, uses internal state to decide. |
| `dropdownAttributes` | `(keyof Item)[]` | Ja | Array of attributes to be displayed in list |
| `searchAttributes` | `(keyof Item)[]` | Ja | Array of attributes used when filtering search |
| `displayAttribute` | `keyof Item` | Nei | Attribute used in the input when an item is selected. Defaults to first in searchAttributes * |
| `inputProps` | `React.ComponentProps<'input'>` | Nei | Props used on input field |
| `maxRenderedDropdownElements` | `number` | Nei | Limits number of rendered dropdown elements |
| `onChange` | `(item: Item | null) => void` | Nei | Called when a value is selected |
| `optionBody` | `React.ComponentType` | Nei | Custom element to use for each item in dropDownList |
| `postListElement` | `React.ReactNode` | Nei | Element to be shown below dropDownList |
| `noMatch` | `object` | Nei | Message and a dropdownList to use when no match |
| `locale` | `Locale` | Nei | Locale to use for translations |
| `aria-invalid` | `AriaAttributes['aria-invalid']` | Nei | aria-invalid attribute |
| `ariaInvalid` | `AriaAttributes['aria-invalid']` | Nei | - |
| `formatter` | `(value: string) => string` | Nei | Function used to format the input field value |
| `searchMatcher` | `SearchMatcher<Item>` | Nei | Function used to decide if an item matches the input field value (inputValue: string, searchAttributes: string[]) => (item) => boolean |
| `isLoading` | `boolean` | Nei | For situations where the dropdownList prop will be updated at a later point in time. That is, if the consumer first sends down an initial value before sending down data that has loaded. |
| `onOpen` | `() => void` | Nei | Function used when dropdown opens |
| `onClose` | `() => void` | Nei | Function used when dropdown closes |
| `isEqual` | `(itemA: Item, itemB: Item) => boolean` | Nei | Custom compare between objects. Default is deep equals |

### SearchableDropdownMultiSelect Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `id` | `string` | Ja | Id of drop down |
| `labelledById` | `string` | Nei | Id of element that labels input field |
| `className` | `string` | Nei | Extra class |
| `dropdownList` | `Item[]` | Ja | List of objects to be displayed in dropdown |
| `selectedItems` | `Item[] | null` | Nei | The selected items to be displayed in the input field. If not specified, uses internal state to decide. |
| `dropdownAttributes` | `(keyof Item)[]` | Ja | Array of attributes to be displayed in list. The first will be the title and the chip value |
| `searchAttributes` | `(keyof Item)[]` | Ja | Array of attributes used when filtering search |
| `inputProps` | `React.ComponentProps<'input'>` | Nei | Props used on input field |
| `maxRenderedDropdownElements` | `number` | Nei | Limits number of rendered dropdown elements |
| `onChange` | `(item: Item, actionType: 'selected' | 'removed') => void` | Ja | Called when a value is selected |
| `optionBody` | `React.ComponentType` | Nei | Custom element to use for each item in dropDownList |
| `postListElement` | `React.ReactNode` | Nei | Element to be shown below dropDownList |
| `noMatch` | `object` | Nei | Message and a dropdownList to use when no match |
| `locale` | `Locale` | Nei | Locale to use for translations |
| `aria-invalid` | `AriaAttributes['aria-invalid']` | Nei | aria-invalid attribute |
| `ariaInvalid` | `AriaAttributes['aria-invalid']` | Nei | - |
| `formatter` | `(value: string) => string` | Nei | Function used to format the input field value |
| `isLoading` | `boolean` | Nei | For situations where the dropdownList prop will be updated at a later point in time. That is, if the consumer first sends down an initial value before sending down data that has loaded. |
| `onOpen` | `() => void` | Nei | Function used when dropdown opens |
| `onClose` | `() => void` | Nei | Function used when dropdown closes |
| `showNumberSelectedAfter` | `number` | Nei | Using this will give a text "X selected" instead of chips, after a certain number of selected items. If you always want "X selected" showing, pass in 0 |
| `isEqual` | `(itemA: Item, itemB: Item) => boolean` | Nei | Custom compare between objects. Default is deep equals |

## Eksempler (fra README)

```tsx
import { useState } from 'react';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';

function MyComponent() {
    const [selected, setSelected] = useState(null);
    const items = [
        { value: '1', label: 'Alternativ 1' },
        { value: '2', label: 'Alternativ 2' },
        { value: '3', label: 'Alternativ 3' },
    ];

    return (
        <SearchableDropdown
            id="my-dropdown"
            labelledById="dropdown-label"
            dropdownList={items}
            selectedItem={selected}
            onChange={setSelected}
            searchAttributes={['label']}
            noMatch={{ text: 'Ingen treff' }}
            locale="nb"
        />
    );
}
```

```tsx
import { useState } from 'react';
import { SearchableDropdownMultiSelect } from '@sb1/ffe-searchable-dropdown-react';

function MyComponent() {
    const [selected, setSelected] = useState([]);
    const items = [
        { value: '1', label: 'Filter 1' },
        { value: '2', label: 'Filter 2' },
        { value: '3', label: 'Filter 3' },
    ];

    return (
        <SearchableDropdownMultiSelect
            id="my-multiselect"
            labelledById="multiselect-label"
            dropdownList={items}
            selectedItems={selected}
            onChange={setSelected}
            searchAttributes={['label']}
            noMatch={{ text: 'Ingen treff' }}
            locale="nb"
        />
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
