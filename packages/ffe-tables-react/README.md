# @sb1/ffe-tables-react

A flexible component for dealing with large amounts of tabular data.

## Install

```bash
npm install --save @sb1/ffe-tables-react
```

## Usage

Full documentation on table usage is available at https://design.sparebank1.no/komponenter/tabeller/.

This package depends on `@sb1/ffe-collapse-react` and `@sb1/ffe-icons-react`.
Make sure you import the less-files.

## Description

Komponenter for tabeller med semantiske deler (`Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableDataCell`, `TableFoot`, `TableCaption`) og utvidbare rader (`TableRowExpandable`). Brukes for strukturert visning av data i rader og kolonner.

## Examples

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

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
