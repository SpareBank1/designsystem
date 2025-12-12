# @sb1/ffe-collapse-react

## Description

Komponent for å enkelt lage ekspanderbart område. Hvorvidt området er ekspandert eller ikke styres av konsumenten via property `isOpen`.

## Components

This package exports the following components:

- `Collapse`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-collapse-react @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { Collapse } from '@sb1/ffe-collapse-react';

function MyComponent() {
  return (
    <Collapse>
      {/* Component content */}
    </Collapse>
  );
}
```

## API Reference

### Collapse Props

| Prop     | Type         | Required | Description |
| -------- | ------------ | -------- | ----------- |
| `isOpen` | `boolean`    | Yes      | -           |
| `onRest` | `() => void` | No       | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
