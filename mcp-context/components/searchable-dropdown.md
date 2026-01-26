# @sb1/ffe-searchable-dropdown-react

## Description

Søkbar nedtrekksliste for store eller dynamiske lister. Tilgjengelig som enkeltvalg (`SearchableDropdown`) og flervalg (`SearchableDropdownMultiSelect`). Støtter tastaturnavigasjon, lastestatus, tom-liste og egendefinert render av elementer.

## Components

This package exports the following components:

- `SearchableDropdown`
- `SearchableDropdownMultiSelect`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-searchable-dropdown-react @sb1/ffe-chips-react @sb1/ffe-core-react @sb1/ffe-form @sb1/ffe-icons-react @sb1/ffe-spinner-react @sb1/ffe-chips @sb1/ffe-core @sb1/ffe-icons @sb1/ffe-buttons @sb1/ffe-spinner
```

### Dependencies

This package depends on:

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

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-chips/css/chip.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-searchable-dropdown-react/css/searchable-dropdown.css';
@import '@sb1/ffe-spinner/css/spinner.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### SearchableDropdown Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `id` | `string` | Yes | - |
| `labelledById` | `string` | No | - |
| `className` | `string` | No | - |
| `dropdownList` | `Item[]` | Yes | - |
| `selectedItem` | `Item` | No | - |
| `dropdownAttributes` | `(keyof Item)[]` | Yes | - |
| `searchAttributes` | `(keyof Item)[]` | Yes | - |
| `displayAttribute` | `keyof Item` | No | - |
| `inputProps` | `React.ComponentProps<'input'>` | No | - |
| `maxRenderedDropdownElements` | `number` | No | - |
| `onChange` | `(item: Item | null) => void` | No | - |
| `optionBody` | `React.ComponentType<{` | No | - |
| `item` | `Item` | Yes | - |
| `isHighlighted` | `boolean` | Yes | - |
| `dropdownAttributes` | `(keyof Item)[]` | Yes | - |
| `locale` | `Locale` | Yes | - |

### SearchableDropdownMultiSelect Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `id` | `string` | Yes | - |
| `labelledById` | `string` | No | - |
| `className` | `string` | No | - |
| `dropdownList` | `Item[]` | Yes | - |
| `selectedItems` | `Item[] | null` | No | - |
| `dropdownAttributes` | `(keyof Item)[]` | Yes | - |
| `searchAttributes` | `(keyof Item)[]` | Yes | - |
| `inputProps` | `React.ComponentProps<'input'>` | No | - |
| `maxRenderedDropdownElements` | `number` | No | - |
| `onChange` | `(item: Item, actionType: 'selected' | 'removed') => void` | Yes | - |
| `optionBody` | `React.ComponentType<{` | No | - |
| `item` | `Item` | Yes | - |
| `dropdownAttributes` | `(keyof Item)[]` | Yes | - |
| `isHighlighted` | `boolean` | Yes | - |
| `locale` | `Locale` | Yes | - |
| `isSelected` | `boolean` | Yes | - |

## Manual Examples (from README)

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

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
