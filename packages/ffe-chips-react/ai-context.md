# @sb1/ffe-chips-react

## Description

Bruk Chips for elementer der brukeren trenger å filtrere eller organisere innhold.

## Components

This package exports the following components:

- `Chip`
- `ChipRemovable`
- `ChipSelectable`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-chips-react @sb1/ffe-chips @sb1/ffe-core @sb1/ffe-icons-react @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-chips`
- `@sb1/ffe-core`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-chips/css/chip.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { Chip, ChipRemovable, ChipSelectable } from '@sb1/ffe-chips-react';

function MyComponent() {
  return (
    <Chip>
      {/* Component content */}
    </Chip>
  );
}
```

## API Reference

### Chip Props

| Prop          | Type                                                                                                                  | Required | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------- | --- | --- |
| `size`        | `'sm'                                                                                                                 | 'md'     | 'lg'`       | Yes | -   |
| `https`       | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes      | -           |
| `onColoredBg` | `never`                                                                                                               | No       | -           |

### ChipSelectable Props

| Prop         | Type      | Required | Description |
| ------------ | --------- | -------- | ----------- |
| `isSelected` | `boolean` | No       | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
