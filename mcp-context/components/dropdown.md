# @sb1/ffe-dropdown-react

## Description

Enkel nedtrekksliste-komponent (`Dropdown`) for valg fra en liste. Brukes for korte, flate lister der brukeren skal velge ett alternativ.

## Components

This package exports the following components:

- `Dropdown`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-dropdown-react @sb1/ffe-form @sb1/ffe-buttons @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-form`
- `@sb1/ffe-buttons`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-form/css/form.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Dropdown Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `inline` | `boolean` | No | - |

## Manual Examples (from README)

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

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
