# @sb1/ffe-symbols-react

## Description

React component library for SpareBank 1 Design System.

## Components

This package exports the following components:

- `Symbol`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-symbols-react @sb1/ffe-symbols
```

### Dependencies

This package depends on:

- `@sb1/ffe-symbols`

## Basic Usage

```typescript
import { Symbol } from '@sb1/ffe-symbols-react';

function MyComponent() {
  return (
    <Symbol>
      {/* Component content */}
    </Symbol>
  );
}
```

## API Reference

### Symbol Props

| Prop        | Type                                        | Required | Description |
| ----------- | ------------------------------------------- | -------- | ----------- | ----- | --- | --- |
| `fill`      | `boolean`                                   | No       | -           |
| `icon`      | `SymbolName`                                | Yes      | -           |
| `size`      | `'sm'                                       | 'md'     | 'lg'        | 'xl'` | No  | -   |
| `weight`    | `300                                        | 500`     | No          | -     |
| `ariaLabel` | `React.ComponentProps<'span'>['aria-label'] | null`    | No          | -     |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
