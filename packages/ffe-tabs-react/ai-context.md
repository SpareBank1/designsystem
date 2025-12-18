# @sb1/ffe-tabs-react

## Description

Faner kan være nyttige for å dele opp innholdet på siden i logiske «blokker» og forenkle navigasjonen for brukerne.

## Components

This package exports the following components:

- `Tab`
- `TabGroup`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-tabs-react @sb1/ffe-tabs @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-tabs`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-tabs/css/tabs.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { Tab, TabGroup } from '@sb1/ffe-tabs-react';

function MyComponent() {
  return (
    <Tab>
      {/* Component content */}
    </Tab>
  );
}
```

## API Reference

### Tab Props

| Prop       | Type      | Required | Description |
| ---------- | --------- | -------- | ----------- |
| `selected` | `boolean` | No       | -           |

### TabGroup Props

| Prop       | Type                             | Required | Description |
| ---------- | -------------------------------- | -------- | ----------- |
| `noBreak`  | `boolean`                        | No       | -           |
| `children` | `React.ReactElement<TabProps>[]` | Yes      | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
