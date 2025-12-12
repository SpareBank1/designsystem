# @sb1/ffe-dropdown-react

## Description

Dropdown er en vanlig nedtrekksliste som kan brukes man når man har 5-10 valg å velge mellom. Har du mindre enn 5 valg, bruk `RadioButtons` istedenfor.

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

## Basic Usage

```typescript
import { Dropdown } from '@sb1/ffe-dropdown-react';

function MyComponent() {
  return (
    <Dropdown>
      {/* Component content */}
    </Dropdown>
  );
}
```

## API Reference

### Dropdown Props

| Prop     | Type      | Required | Description |
| -------- | --------- | -------- | ----------- |
| `inline` | `boolean` | No       | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
