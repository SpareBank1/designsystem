# @sb1/ffe-progressbar-react

## Description

Progressbar brukes for å vise fremgangen i en prosess.

## Components

This package exports the following components:

- `Progressbar`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-progressbar-react @sb1/ffe-core @sb1/ffe-progressbar
```

### Dependencies

This package depends on:

- `@sb1/ffe-core`
- `@sb1/ffe-progressbar`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-progressbar/css/progressbar.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { Progressbar } from '@sb1/ffe-progressbar-react';

function MyComponent() {
  return (
    <Progressbar>
      {/* Component content */}
    </Progressbar>
  );
}
```

## API Reference

### Progressbar Props

| Prop      | Type      | Required | Description |
| --------- | --------- | -------- | ----------- |
| `success` | `boolean` | No       | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
