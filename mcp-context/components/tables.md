# @sb1/ffe-tables-react

## Beskrivelse

Komponenter for tabeller med semantiske deler (`Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableDataCell`, `TableFoot`, `TableCaption`) og utvidbare rader (`TableRowExpandable`). Brukes for strukturert visning av data i rader og kolonner.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Table`
- `TableBody`
- `TableDataCell`
- `TableFoot`
- `TableHead`
- `TableHeaderCell`
- `TableRow`
- `TableCaption`
- `TableRowExpandable`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-tables-react @sb1/ffe-collapse-react @sb1/ffe-core-react @sb1/ffe-icons-react @sb1/ffe-tables @sb1/ffe-core @sb1/ffe-icons
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-collapse-react`
- `@sb1/ffe-core-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-tables`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-tables/css/tables.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### Table Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `initialSort` | `InitialSort` | Nei | - |
| `children` | `function` | Ja | - |
| `breakPoint` | `'none' | 'sm' | 'md'` | Nei | - |

### TableBody Props

Ingen komponentspesifikke props utover native HTML-attributter.

### TableDataCell Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `columnHeader` | `React.ReactNode` | Ja | - |

### TableFoot Props

Ingen komponentspesifikke props utover native HTML-attributter.

### TableHead Props

Ingen komponentspesifikke props utover native HTML-attributter.

### TableHeaderCell Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `sortKey` | `string` | Nei | - |

### TableRow Props

Ingen komponentspesifikke props utover native HTML-attributter.

### TableCaption Props

Ingen komponentspesifikke props utover native HTML-attributter.

### TableRowExpandable Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `expandContent` | `function` | Ja | - |
| `locale` | `'nb' | 'nn' | 'en'` | Nei | - |
| `isDefaultOpen` | `boolean` | Nei | - |
| `onClick` | `React.MouseEventHandler<HTMLButtonElement>` | Nei | - |

## Eksempler (fra README)

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
