# @sb1/ffe-searchable-dropdown-react

## Beskrivelse

Søkbar nedtrekksliste for store eller dynamiske lister. Tilgjengelig som enkeltvalg (`SearchableDropdown`) og flervalg (`SearchableDropdownMultiSelect`). Støtter tastaturnavigasjon, lastestatus, tom-liste og egendefinert render av elementer.

## Installasjon

```bash
npm install --save @sb1/ffe-searchable-dropdown-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/dropdown/#searchabledropdown.

Denne pakken er avhengig av `@sb1/ffe-form-react`, `@sb1/ffe-icons-react`, `@sb1/ffe-chips-react` og `@sb1/ffe-spinner-react`.
Husk å importere less-filene.

### Importere kompilert CSS

```css
@import '@sb1/ffe-searchable-dropdown-react/css/searchable-dropdown.css';
```

## Eksempler

### Enkeltvalg

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

### Flervalg

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

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
