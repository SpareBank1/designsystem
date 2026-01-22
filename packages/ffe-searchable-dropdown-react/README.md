# ffe-searchable-dropdown-react

React dropdown component with search.

## Install

```bash
npm install --save ffe-searchable-dropdown-react
```

## Usage

Full documentation on searchable dropdown usage is available at https://design.sparebank1.no/komponenter/dropdown/#searchabledropdown.

This package depends on `@sb1/ffe-form-react`, `@sb1/ffe-icons-react`, `@sb1/ffe-chips-react` and `@sb1/ffe-spinner-react`.
Make sure you import the less-files.

```javascript
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
```

styling:

```
@import "npm://ffe-searchable-dropdown-react/less/searchable-dropdown";
```

### Importing compiled CSS

If your project does not use Less, you can import the compiled styling:

```css
@import '~@sb1/ffe-searchable-dropdown-react/css/searchable-dropdown.css';
```

## FFE less Dependencies

```
@import "~ffe-core/less/colors";
```

## Description

Søkbar nedtrekksliste for store eller dynamiske lister. Tilgjengelig som enkeltvalg (`SearchableDropdown`) og flervalg (`SearchableDropdownMultiSelect`). Støtter tastaturnavigasjon, lastestatus, tom-liste og egendefinert render av elementer.

## Examples

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

## Available props

See propTypes in [SearchableDropdown.js](src/SearchableDropdown.js)

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
