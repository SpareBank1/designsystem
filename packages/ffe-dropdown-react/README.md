# @sb1/ffe-dropdown-react

React implementation of the dropdown found in FFE.

## Install

```
npm install --save @sb1/ffe-dropdown-react
```

## Usage

Full documentation on dropdown usage is available at https://design.sparebank1.no/komponenter/dropdown/.

This package depends on `@sb1/ffe-form-react`.
Make sure you import the less-files from these packages.

## Description

Enkel nedtrekksliste-komponent (`Dropdown`) for valg fra en liste. Brukes for korte, flate lister der brukeren skal velge ett alternativ.

## Examples

```tsx
import React from 'react';
import { Dropdown } from '@sb1/ffe-dropdown-react';

export function DropdownDemo() {
    const [value, setValue] = React.useState('');
    return (
        <Dropdown
            value={value}
            onChange={e => setValue(e.target.value)}
            aria-label="Velg alternativ"
        >
            <option value="">Velg …</option>
            <option value="a">Alternativ A</option>
            <option value="b">Alternativ B</option>
            <option value="c">Alternativ C</option>
        </Dropdown>
    );
}
```

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
