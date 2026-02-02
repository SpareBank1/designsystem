# @sb1/ffe-searchable-dropdown-react

## Beskrivelse

Søkbar nedtrekksliste for store eller dynamiske lister. Tilgjengelig som enkeltvalg (`SearchableDropdown`) og flervalg (`SearchableDropdownMultiSelect`). Støtter tastaturnavigasjon, lastestatus, tom-liste og egendefinert render av elementer.

## Installasjon

```bash
npm install --save @sb1/ffe-searchable-dropdown-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/dropdown/#searchabledropdown.

Denne pakken er avhengig av `@sb1/ffe-form-react`, `@sb1/ffe-icons-react`, `@sb1/ffe-chips-react` og `@sb1/ffe-spinner-react`.
Husk å importere less-filene.

### Importere kompilert CSS

```css
@import '@sb1/ffe-searchable-dropdown-react/css/searchable-dropdown.css';
```

## Eksempler

### Enkeltvalg

`SearchableDropdown` brukes for å velge ett enkelt element fra en liste. Komponenten tar inn objekter av vilkårlig type og bruker `dropdownAttributes` for å vise relevante felt i nedtrekkslisten.

```tsx
import { useState } from 'react';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
import { InputGroup } from '@sb1/ffe-form-react';

// Definer typen for dine elementer
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
        {
            organizationName: 'Selskapet AS',
            organizationNumber: '712602373',
            balance: '99 999,00 kr',
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

**Obligatoriske props for SearchableDropdown:**

- `id: string` - Unik ID for input-feltet
- `dropdownList: Item[]` - Liste over objekter som skal vises i nedtrekkslisten
- `dropdownAttributes: (keyof Item)[]` - Hvilke egenskaper som skal vises i nedtrekkslisten (første er tittel)
- `searchAttributes: (keyof Item)[]` - Hvilke egenskaper det skal søkes i

**Valgfrie props for SearchableDropdown:**

- `labelledById?: string` - ID til label-elementet (for tilgjengelighet)
- `selectedItem?: Item` - Kontrollert valgt element
- `displayAttribute?: keyof Item` - Egenskap som vises i input etter valg (default: første i searchAttributes)
- `onChange?: (item: Item | null) => void` - Callback ved valg/fjerning
- `inputProps?: React.ComponentProps<'input'>` - Props til input-feltet (f.eks. placeholder)
- `maxRenderedDropdownElements?: number` - Maks antall elementer i listen
- `noMatch?: { text?: string; dropdownList?: Item[] }` - Tekst og/eller alternative elementer ved ingen treff
- `locale?: 'nb' | 'nn' | 'en'` - Språk (default: 'nb')
- `isLoading?: boolean` - Viser lastestatus
- `optionBody?: React.ComponentType` - Egendefinert rendering av hvert element
- `postListElement?: React.ReactNode` - Element som vises under listen
- `formatter?: (value: string) => string` - Formaterer input-verdien
- `searchMatcher?: SearchMatcher<Item>` - Egendefinert søkefunksjon
- `onOpen?: () => void` - Callback når dropdown åpnes
- `onClose?: () => void` - Callback når dropdown lukkes
- `aria-invalid?: boolean` - Markerer ugyldig input
- `isEqual?: (itemA: Item, itemB: Item) => boolean` - Egendefinert sammenligningsfunksjon

### Flervalg

`SearchableDropdownMultiSelect` brukes når brukeren skal kunne velge flere elementer. Valgte elementer vises som chips i input-feltet. `onChange` kalles med det valgte/fjernede elementet og en `actionType` som angir om elementet ble lagt til eller fjernet.

```tsx
import { useState } from 'react';
import { SearchableDropdownMultiSelect } from '@sb1/ffe-searchable-dropdown-react';
import { InputGroup } from '@sb1/ffe-form-react';

interface Fruit {
    displayName: string;
    color: string;
    amount: number;
}

function MyComponent() {
    const [selectedFruits, setSelectedFruits] = useState<Fruit[]>([]);

    const fruits: Fruit[] = [
        { displayName: 'Banan', color: 'Gul', amount: 5 },
        { displayName: 'Eple', color: 'Rød', amount: 3 },
        { displayName: 'Pære', color: 'Grønn', amount: 2 },
    ];

    const handleChange = (item: Fruit, actionType: 'selected' | 'removed') => {
        if (actionType === 'selected') {
            setSelectedFruits(prev => [...prev, item]);
        } else {
            setSelectedFruits(prev =>
                prev.filter(fruit => fruit.displayName !== item.displayName),
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
                inputProps={{ placeholder: 'Søk etter frukt' }}
                locale="nb"
            />
        </InputGroup>
    );
}
```

**Obligatoriske props for SearchableDropdownMultiSelect:**

- `id: string` - Unik ID for input-feltet
- `dropdownList: Item[]` - Liste over objekter som skal vises i nedtrekkslisten
- `dropdownAttributes: (keyof Item)[]` - Hvilke egenskaper som skal vises (første brukes til chip-tekst)
- `searchAttributes: (keyof Item)[]` - Hvilke egenskaper det skal søkes i
- `onChange: (item: Item, actionType: 'selected' | 'removed') => void` - **Obligatorisk** callback ved valg/fjerning

**Valgfrie props for SearchableDropdownMultiSelect:**

- `labelledById?: string` - ID til label-elementet
- `selectedItems?: Item[] | null` - Kontrollert liste over valgte elementer
- `inputProps?: React.ComponentProps<'input'>` - Props til input-feltet
- `maxRenderedDropdownElements?: number` - Maks antall elementer
- `noMatch?: { text?: string; dropdownList?: Item[] }` - Melding ved ingen treff
- `locale?: 'nb' | 'nn' | 'en'` - Språk (default: 'nb')
- `isLoading?: boolean` - Viser lastestatus
- `optionBody?: React.ComponentType` - Egendefinert rendering
- `postListElement?: React.ReactNode` - Element under listen
- `formatter?: (value: string) => string` - Formaterer input
- `searchMatcher?: SearchMatcher<Item>` - Egendefinert søkefunksjon
- `showNumberSelectedAfter?: number` - Vis "X valgt" istedenfor chips etter N valgte elementer
- `onOpen?: () => void` - Callback når dropdown åpnes
- `onClose?: () => void` - Callback når dropdown lukkes
- `aria-invalid?: boolean` - Markerer ugyldig input
- `isEqual?: (itemA: Item, itemB: Item) => boolean` - Egendefinert sammenligningsfunksjon

### Egendefinert optionBody

Du kan tilpasse hvordan hvert element rendres i nedtrekkslisten ved å bruke `optionBody`-prop.

```tsx
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
import type { Locale } from '@sb1/ffe-searchable-dropdown-react';

interface Company {
    organizationName: string;
    organizationNumber: string;
    balance: string;
}

// For SearchableDropdown (enkeltvalg)
const CustomOptionBody = ({
    item,
    isHighlighted,
    dropdownAttributes,
    locale,
}: {
    item: Company;
    isHighlighted: boolean;
    dropdownAttributes: (keyof Company)[];
    locale: Locale;
}) => (
    <div
        style={{
            padding: '8px',
            background: isHighlighted ? '#e0e0e0' : 'white',
        }}
    >
        <strong>{item.organizationName}</strong>
        <div style={{ fontSize: '12px', color: '#666' }}>
            {item.organizationNumber} - {item.balance}
        </div>
    </div>
);

// For SearchableDropdownMultiSelect (flervalg) - merk ekstra `isSelected`-prop
const CustomMultiSelectOptionBody = ({
    item,
    isHighlighted,
    isSelected,
    dropdownAttributes,
    locale,
}: {
    item: Company;
    isHighlighted: boolean;
    isSelected: boolean;
    dropdownAttributes: (keyof Company)[];
    locale: Locale;
}) => (
    <div
        style={{
            padding: '8px',
            background: isHighlighted ? '#e0e0e0' : 'white',
            borderLeft: isSelected ? '3px solid blue' : 'none',
        }}
    >
        <strong>{item.organizationName}</strong>
        <div>{item.organizationNumber}</div>
    </div>
);

// Bruk:
<SearchableDropdown<Company>
    // ... andre props
    optionBody={CustomOptionBody}
/>;
```

### Egendefinert søkefunksjon

Bruk `searchMatcher` for å tilpasse hvordan søk fungerer.

```tsx
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';

// searchMatcher tar inputValue og searchAttributes, og returnerer en filterfunksjon
const customSearchMatcher = (
    inputValue: string,
    searchAttributes: string[],
) => {
    const cleanedInput = inputValue.toLowerCase().replace(/\s/g, '');

    return (item: Record<string, any>) => {
        return searchAttributes.some(attr => {
            const value = String(item[attr]).toLowerCase().replace(/\s/g, '');
            return value.includes(cleanedInput);
        });
    };
};

<SearchableDropdown
    // ... andre props
    searchMatcher={customSearchMatcher}
/>;
```

### Vis alternativt innhold ved ingen treff

`noMatch`-prop kan inneholde både en tekst og en liste med alternative elementer.

```tsx
<SearchableDropdown
    // ... andre props
    noMatch={{
        text: 'Fant ingen treff på søket ditt',
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

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
