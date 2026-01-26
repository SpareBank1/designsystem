# @sb1/ffe-tables-react

## Description

Komponenter for tabeller med semantiske deler (`Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableDataCell`, `TableFoot`, `TableCaption`) og utvidbare rader (`TableRowExpandable`). Brukes for strukturert visning av data i rader og kolonner.

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

## API Reference

### Table Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `initialSort` | `InitialSort` | No | - |

### TableBody Props

No component-specific props beyond native HTML attributes.

### TableDataCell Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `columnHeader` | `React.ReactNode` | Yes | - |

### TableFoot Props

No component-specific props beyond native HTML attributes.

### TableHead Props

No component-specific props beyond native HTML attributes.

### TableHeaderCell Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `sortKey` | `string` | No | - |

### TableRow Props

No component-specific props beyond native HTML attributes.

### TableCaption Props

No component-specific props beyond native HTML attributes.

### TableRowExpandable Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `expandContent` | `React.ReactNode | ((setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactNode)` | Yes | - |
| `locale` | `'nb' | 'nn' | 'en'` | No | - |
| `isDefaultOpen` | `boolean` | No | - |
| `onClick` | `React.MouseEventHandler<HTMLButtonElement>` | No | - |

## Manual Examples (from README)

```tsx
import React from 'react';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeaderCell,
    TableDataCell,
    TableFoot,
    TableCaption,
    TableRowExpandable,
} from '@sb1/ffe-tables-react';

export function TableDemo() {
    return (
        <Table>
            <TableCaption>Transaksjoner</TableCaption>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Dato</TableHeaderCell>
                    <TableHeaderCell>Beskrivelse</TableHeaderCell>
                    <TableHeaderCell align="right">Beløp</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableDataCell>01.12.2025</TableDataCell>
                    <TableDataCell>Kortkjøp</TableDataCell>
                    <TableDataCell align="right">-199,00</TableDataCell>
                </TableRow>
                <TableRowExpandable>
                    <TableDataCell colSpan={3}>Flere detaljer …</TableDataCell>
                </TableRowExpandable>
            </TableBody>
            <TableFoot>
                <TableRow>
                    <TableDataCell colSpan={2}>Sum</TableDataCell>
                    <TableDataCell align="right">-199,00</TableDataCell>
                </TableRow>
            </TableFoot>
        </Table>
    );
}
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
