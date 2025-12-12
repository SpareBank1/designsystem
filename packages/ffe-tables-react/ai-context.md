# @sb1/ffe-tables-react

## Description

Tabeller brukes når vi vil vise strukturert informasjon under en felles overskrift.

## Components

This package exports the following components:

- `Table`
- `TableBody`
- `TableDataCell`
- `TableFoot`
- `TableHead`
- `TableHeaderCell`
- `TableRow`
- `TableCaption`
- `TableRowExpandable`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-tables-react @sb1/ffe-collapse-react @sb1/ffe-core-react @sb1/ffe-icons-react @sb1/ffe-tables @sb1/ffe-core @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-collapse-react`
- `@sb1/ffe-core-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-tables`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-tables/css/tables.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { Table, TableBody, TableDataCell, ... } from '@sb1/ffe-tables-react';

function MyComponent() {
  return (
    <Table>
      {/* Component content */}
    </Table>
  );
}
```

## API Reference

### Table Props

| Prop          | Type          | Required | Description |
| ------------- | ------------- | -------- | ----------- |
| `initialSort` | `InitialSort` | No       | -           |

### TableDataCell Props

| Prop           | Type              | Required | Description |
| -------------- | ----------------- | -------- | ----------- |
| `columnHeader` | `React.ReactNode` | Yes      | -           |

### TableHeaderCell Props

| Prop      | Type     | Required | Description |
| --------- | -------- | -------- | ----------- |
| `sortKey` | `string` | No       | -           |

### TableRowExpandable Props

| Prop            | Type                                         | Required                                                                         | Description |
| --------------- | -------------------------------------------- | -------------------------------------------------------------------------------- | ----------- | --- | --- |
| `expandContent` | `React.ReactNode                             | ((setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactNode)` | Yes         | -   |
| `locale`        | `'nb'                                        | 'nn'                                                                             | 'en'`       | No  | -   |
| `isDefaultOpen` | `boolean`                                    | No                                                                               | -           |
| `onClick`       | `React.MouseEventHandler<HTMLButtonElement>` | No                                                                               | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
