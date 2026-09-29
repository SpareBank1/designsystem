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

Id of drop down */
    id: string;
    /** Id of element that labels input field */
    labelledById?: string;
    /** Extra class */
    className?: string;
    /** List of objects to be displayed in dropdown */
    dropdownList: Item[];
    /** The selected items to be displayed in the input field. If not specified, uses internal state to decide. */
    selectedItems?: Item[] | null;
    /** Array of attributes to be displayed in list. The first will be the title and the chip value */
    dropdownAttributes: (keyof Item)[];
    /** Array of attributes used when filtering search */
    searchAttributes: (keyof Item)[];
    /** Props used on input field */
    inputProps?: React.ComponentProps<'input'>;
    /** Limits number of rendered dropdown elements */
    maxRenderedDropdownElements?: number;
    /**
Called when the selection changes. `items` contains only the items that
changed (the delta), never the full selection.
/
    onChange: (items: Item[], actionType: 'selected' | 'removed') => void;
    /** Custom element to use for each item in dropDownList */
    optionBody?: React.ComponentType<{
        item: Item;
        dropdownAttributes: (keyof Item)[];
        isHighlighted: boolean;
        locale: Locale;
        isSelected: boolean;
    }>;
    /** Element to be shown below dropDownList */
    postListElement?: React.ReactNode;
    /** Message and a dropdownList to use when no match */
    noMatch?: {
        text?: string;
        dropdownList?: Item[];
    };
    /** Locale to use for translations */
    locale?: Locale;
    /** aria-invalid attribute  */
    'aria-invalid'?: AriaAttributes['aria-invalid'];
    ariaInvalid?: AriaAttributes['aria-invalid'];
    /** Function used to format the input field value */
    formatter?: (value: string) => string; //Hvordan brukes denne? må testes
    /**
Function used to decide if an item matches the input field value
(inputValue: string, searchAttributes: string[]) => (item) => boolean
/
    searchMatcher?: SearchMatcher<Item>;
    /**
For situations where the dropdownList prop will be updated at a later point in time.
That is, if the consumer first sends down an initial value before sending down data
that has loaded.
/
    isLoading?: boolean;
    /** Function used when dropdown opens */
    onOpen?: () => void;
    /**  Function used when dropdown closes */
    onClose?: () => void;
    /**
Using this will give a text "X selected" instead of chips,
after a certain number of selected items.
If you always want "X selected" showing, pass in 0
/
    showNumberSelectedAfter?: number;
    /** Custom compare between objects. Default is deep equals*/
    isEqual?: (itemA: Item, itemB: Item) => boolean;
    /**
Shows a row at the top of the dropdown for selecting or removing all
visible items. When a search is active it only applies to the matches.
/
    showSelectAll?: boolean;
    /** Overrides the default label on the select all row, for all locales */
    selectAllText?: string;
}

function SearchableDropdownMultiSelectWithForwardRef<
    Item extends Record<string, any>,
>(
    {
        id,
        labelledById,
        className,
        dropdownList,
        dropdownAttributes,
        searchAttributes,
        maxRenderedDropdownElements = Number.MAX_SAFE_INTEGER,
        onChange,
        inputProps,
        optionBody: CustomOptionBody,
        postListElement,
        noMatch,
        locale = 'nb',
        ariaInvalid,
        formatter = value => value,
        searchMatcher,
        selectedItems,
        isLoading = false,
        onOpen,
        onClose,
        showNumberSelectedAfter,
        isEqual = isDeepEqual,
        showSelectAll = false,
        selectAllText,
        ...rest
    }: SearchableDropdownMultiSelectProps<Item>,
    ref: ForwardedRef<HTMLInputElement>,
) {
    const [state, dispatch] = useReducer(
        createReducer({
            dropdownList,
            searchAttributes,
            maxRenderedDropdownElements,
            noMatchDropdownList: noMatch?.dropdownList,
            searchMatcher,
            isEqual,
            showSelectAll,
        }),
        {
            isExpanded: false,
            selectedItems: [],
            highlightedIndex: -1,
            inputValue: '',
        },
        initialState => {
            return {
                ...initialState,
                ...getListToRender({
                    inputValue: initialState.inputValue,
                    searchAttributes,
                    maxRenderedDropdownElements,
                    dropdownList,
                    noMatchDropdownList: noMatch?.dropdownList,
                    searchMatcher,
                    showAllItemsInDropdown: !!selectedItems?.length,
                }),
            };
        },
    );
    const refs = useRefs({ listToRender: state.listToRender });
    const [hasFocus, setHasFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const OptionBody = CustomOptionBody || MultiselectOptionBody;
    const listBoxRef = useRef<HTMLDivElement>(null);
    const selectAllRef = useRef<HTMLDivElement>(null);
    const noMatchMessageId = useId();
    const shouldFocusInput = useRef(false);

    /**
Over terskelen byttes de enkelte chippene ut med én chip som oppsummerer
utvalget. Utledet, ikke state: lå den i en effekt ville den vært ett
render bak, så backspace i renderen der terskelen krysses hadde fjernet
siste element selv om det er oppsummeringschippen brukeren ser.

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
| `onChange` | `(items: Item[], actionType: 'selected' | 'removed') => void` | Ja | Called when the selection changes. `items` contains only the items that changed (the delta), never the full selection. |
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
| `showSelectAll` | `boolean` | Nei | Shows a row at the top of the dropdown for selecting or removing all visible items. When a search is active it only applies to the matches. |
| `selectAllText` | `string` | Nei | Overrides the default label on the select all row, for all locales |

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

    const handleChange = (
        items: Fruit[],
        actionType: 'selected' | 'removed',
    ) => {
        if (actionType === 'selected') {
            setSelectedFruits(prev => [...prev, ...items]);
        } else {
            setSelectedFruits(prev =>
                prev.filter(
                    f => !items.some(it => it.displayName === f.displayName),
                ),
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
<span
    aria-hidden="true"
    className={`ffe-checkbox ffe-checkbox--no-margin${
        isSelected ? ' ffe-checkbox--checked' : ''
    }`}
/>
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
