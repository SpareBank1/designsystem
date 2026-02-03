# @sb1/ffe-searchable-dropdown-react

## Beskrivelse

Søkbar nedtrekksliste for store eller dynamiske lister. Tilgjengelig som enkeltvalg (`SearchableDropdown`) og flervalg (`SearchableDropdownMultiSelect`).

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `SearchableDropdown`
- `SearchableDropdownMultiSelect`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-searchable-dropdown-react
```

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-searchable-dropdown-react/css/searchable-dropdown.css';
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
import { InputGroup } from '@sb1/ffe-form-react';

interface Company {
    organizationName: string;
    organizationNumber: string;
    balance: string;
}

function MyComponent() {
    const [selected, setSelected] = useState<Company | null>(null);

    const companies: Company[] = [
        {
            organizationName: 'Bedriften AS',
            organizationNumber: '912602370',
            balance: '12 345,00 kr',
        },
        {
            organizationName: 'Firma AS',
            organizationNumber: '812602372',
            balance: '45 678,00 kr',
        },
    ];

    return (
        <InputGroup
            label="Velg bedrift"
            labelId="company-label"
            inputId="company-dropdown"
        >
            <SearchableDropdown<Company>
                id="company-dropdown"
                labelledById="company-label"
                dropdownList={companies}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                searchAttributes={['organizationName', 'organizationNumber']}
                selectedItem={selected}
                onChange={item => setSelected(item)}
                noMatch={{ text: 'Ingen treff' }}
                inputProps={{ placeholder: 'Søk etter bedrift' }}
                locale="nb"
            />
        </InputGroup>
    );
}
```

```tsx
import { useState } from 'react';
import { SearchableDropdownMultiSelect } from '@sb1/ffe-searchable-dropdown-react';
import { InputGroup } from '@sb1/ffe-form-react';

interface Fruit {
    displayName: string;
    color: string;
}

function MyComponent() {
    const [selectedFruits, setSelectedFruits] = useState<Fruit[]>([]);

    const fruits: Fruit[] = [
        { displayName: 'Banan', color: 'Gul' },
        { displayName: 'Eple', color: 'Rød' },
    ];

    const handleChange = (item: Fruit, actionType: 'selected' | 'removed') => {
        if (actionType === 'selected') {
            setSelectedFruits(prev => [...prev, item]);
        } else {
            setSelectedFruits(prev =>
                prev.filter(f => f.displayName !== item.displayName),
            );
        }
    };

    return (
        <InputGroup
            label="Velg frukt"
            labelId="fruit-label"
            inputId="fruit-multiselect"
        >
            <SearchableDropdownMultiSelect<Fruit>
                id="fruit-multiselect"
                labelledById="fruit-label"
                dropdownList={fruits}
                dropdownAttributes={['displayName', 'color']}
                searchAttributes={['displayName', 'color']}
                selectedItems={selectedFruits}
                onChange={handleChange}
                noMatch={{ text: 'Ingen frukt funnet' }}
                locale="nb"
            />
        </InputGroup>
    );
}
```

```tsx
import type { Locale } from '@sb1/ffe-searchable-dropdown-react';

// For SearchableDropdown
const CustomOptionBody = ({
    item,
    isHighlighted,
}: {
    item: Company;
    isHighlighted: boolean;
    dropdownAttributes: (keyof Company)[];
    locale: Locale;
}) => (
    <div style={{ background: isHighlighted ? '#e0e0e0' : 'white' }}>
        <strong>{item.organizationName}</strong>
        <div>{item.organizationNumber}</div>
    </div>
);

// For SearchableDropdownMultiSelect - har ekstra `isSelected`-prop
```

```tsx
const customSearchMatcher = (
    inputValue: string,
    searchAttributes: string[],
) => {
    const cleanedInput = inputValue.toLowerCase().replace(/\s/g, '');
    return (item: Record<string, any>) =>
        searchAttributes.some(attr =>
            String(item[attr])
                .toLowerCase()
                .replace(/\s/g, '')
                .includes(cleanedInput),
        );
};

<SearchableDropdown searchMatcher={customSearchMatcher} /* ... */ />;
```

```tsx
<SearchableDropdown
    noMatch={{
        text: 'Fant ingen treff',
        dropdownList: [
            {
                organizationName: 'Foreslått bedrift',
                organizationNumber: '123456789',
                balance: '0 kr',
            },
        ],
    }}
/>
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
