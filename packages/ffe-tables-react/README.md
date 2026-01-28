# @sb1/ffe-tables-react

En fleksibel komponent for å håndtere store mengder tabelldata.

## Installasjon

```bash
npm install --save @sb1/ffe-tables-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/tabeller/.

Denne pakken er avhengig av `@sb1/ffe-collapse-react` og `@sb1/ffe-icons-react`.
Husk å importere less-filene.

## Beskrivelse

Komponenter for tabeller med semantiske deler (`Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableDataCell`, `TableFoot`, `TableCaption`) og utvidbare rader (`TableRowExpandable`). Brukes for strukturert visning av data i rader og kolonner.

## Eksempler

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

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
