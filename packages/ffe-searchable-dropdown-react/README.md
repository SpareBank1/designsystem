# @sb1/ffe-searchable-dropdown-react

React-nedtrekkskomponent med søk.

## Installasjon

```bash
npm install --save @sb1/ffe-searchable-dropdown-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/dropdown/#searchabledropdown.

Denne pakken er avhengig av `@sb1/ffe-form-react`, `@sb1/ffe-icons-react`, `@sb1/ffe-chips-react` og `@sb1/ffe-spinner-react`.
Husk å importere less-filene.

```javascript
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
```

Styling:

```less
@import 'npm://ffe-searchable-dropdown-react/less/searchable-dropdown';
```

### Importere kompilert CSS

Hvis prosjektet ditt ikke bruker Less, kan du importere den kompilerte stylingen:

```css
@import '~@sb1/ffe-searchable-dropdown-react/css/searchable-dropdown.css';
```

## FFE Less-avhengigheter

```less
@import '~ffe-core/less/colors';
```

## Beskrivelse

Søkbar nedtrekksliste for store eller dynamiske lister. Tilgjengelig som enkeltvalg (`SearchableDropdown`) og flervalg (`SearchableDropdownMultiSelect`). Støtter tastaturnavigasjon, lastestatus, tom-liste og egendefinert render av elementer.

## Eksempler

```tsx
import React from 'react';
import {
    SearchableDropdown,
    SearchableDropdownMultiSelect,
} from '@sb1/ffe-searchable-dropdown-react';

export function SearchableDropdownDemo() {
    const [value, setValue] = React.useState<string | null>(null);
    const [values, setValues] = React.useState<string[]>([]);
    const items = [
        { value: '1', label: 'Alternativ 1' },
        { value: '2', label: 'Alternativ 2' },
        { value: '3', label: 'Alternativ 3' },
    ];

    return (
        <div>
            <SearchableDropdown
                items={items}
                value={value}
                onChange={setValue}
                placeholder="Søk og velg"
                noMatchText="Ingen treff"
            />

            <SearchableDropdownMultiSelect
                items={items}
                values={values}
                onChange={setValues}
                placeholder="Velg flere"
                noMatchText="Ingen treff"
            />
        </div>
    );
}
```

## Tilgjengelige props

Se propTypes i [SearchableDropdown.js](src/SearchableDropdown.js)

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
