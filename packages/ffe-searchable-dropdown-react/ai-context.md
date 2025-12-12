# @sb1/ffe-searchable-dropdown-react

## Description

@sb1/ffe-searchable-dropdown-react

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

## Basic Usage

```typescript
import { SearchableDropdown, SearchableDropdownMultiSelect } from '@sb1/ffe-searchable-dropdown-react';

function MyComponent() {
  return (
    <SearchableDropdown>
      {/* Component content */}
    </SearchableDropdown>
  );
}
```

## API Reference

### NoMatch Props

| Prop           | Type     | Required | Description |
| -------------- | -------- | -------- | ----------- |
| `noMatch`      | `{`      | Yes      | -           |
| `text`         | `string` | No       | -           |
| `dropdownList` | `Item[]` | No       | -           |

### Option Props

| Prop            | Type      | Required | Description |
| --------------- | --------- | -------- | ----------- |
| `item`          | `Item`    | Yes      | -           |
| `isHighlighted` | `boolean` | Yes      | -           |
| `isSelected`    | `boolean` | Yes      | -           |
| `children`      | `({`      | Yes      | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
