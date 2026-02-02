# @sb1/ffe-searchable-dropdown-react

## Beskrivelse

Søkbar nedtrekksliste for store eller dynamiske lister. Tilgjengelig som enkeltvalg (`SearchableDropdown`) og flervalg (`SearchableDropdownMultiSelect`).

## Installasjon

```bash
npm install --save @sb1/ffe-searchable-dropdown-react
```

## Bruk

Avhengigheter: `@sb1/ffe-form-react`, `@sb1/ffe-icons-react`, `@sb1/ffe-chips-react`, `@sb1/ffe-spinner-react`.

### Importere kompilert CSS

```css
@import '@sb1/ffe-searchable-dropdown-react/css/searchable-dropdown.css';
```

## Eksempler

### Enkeltvalg

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

### Flervalg

Valgte elementer vises som chips. `onChange` kalles med elementet og `actionType` ('selected' | 'removed').

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

### Egendefinert optionBody

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

### Egendefinert søkefunksjon

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

### Vis alternativt innhold ved ingen treff

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

## Utvikling

```bash
npm install && npm run build && npm start
```

Lokal Storybook kjører på http://localhost:6006/.
