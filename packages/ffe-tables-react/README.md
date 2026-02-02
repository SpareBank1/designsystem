# @sb1/ffe-tables-react

En fleksibel komponent for å håndtere store mengder tabelldata.

## Installasjon

```bash
npm install --save @sb1/ffe-tables-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/tabeller/.

Denne pakken er avhengig av `@sb1/ffe-collapse-react` og `@sb1/ffe-icons-react`.
Husk å importere less-filene.

## Beskrivelse

Komponenter for tabeller med semantiske deler (`Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableDataCell`, `TableFoot`, `TableCaption`) og utvidbare rader (`TableRowExpandable`). Brukes for strukturert visning av data i rader og kolonner.

## Eksempler

### Grunnleggende tabell

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
} from '@sb1/ffe-tables-react';

export function BasicTableExample() {
    const data = [
        { name: 'Anders', age: 32 },
        { name: 'Erik', age: 25 },
        { name: 'Gunn', age: 29 },
    ];

    // Definer kolonne-overskrifter som variabler for gjenbruk
    const navnHeader = 'Navn';
    const alderHeader = 'Alder';

    return (
        <Table>
            <TableCaption>Utviklere</TableCaption>
            <TableHead>
                <TableRow>
                    <TableHeaderCell scope="col">{navnHeader}</TableHeaderCell>
                    <TableHeaderCell scope="col">{alderHeader}</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(person => (
                    <TableRow key={person.name}>
                        {/* columnHeader er påkrevd - vises på småskjermer */}
                        <TableDataCell columnHeader={navnHeader}>
                            {person.name}
                        </TableDataCell>
                        <TableDataCell columnHeader={alderHeader}>
                            {person.age}
                        </TableDataCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFoot>
                <TableRow>
                    <TableHeaderCell scope="row">Gjennomsnitt</TableHeaderCell>
                    <TableDataCell columnHeader="Gjennomsnitt">
                        {(
                            data.reduce((sum, p) => sum + p.age, 0) /
                            data.length
                        ).toFixed(1)}
                    </TableDataCell>
                </TableRow>
            </TableFoot>
        </Table>
    );
}
```

### Tabell med utvidbare rader

```tsx
import React from 'react';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeaderCell,
    TableDataCell,
    TableCaption,
    TableRowExpandable,
} from '@sb1/ffe-tables-react';

export function ExpandableTableExample() {
    const data = [
        {
            name: 'Ola Normann',
            email: 'ola@normann.no',
            details: 'Flere detaljer om Ola',
        },
        {
            name: 'Kari Nordmann',
            email: 'kari@nordmann.no',
            details: 'Flere detaljer om Kari',
        },
    ];

    const navnHeader = 'Navn';
    const epostHeader = 'E-post';

    return (
        <Table>
            <TableCaption>Kontakter</TableCaption>
            <TableHead>
                <TableRow>
                    <TableHeaderCell scope="col">{navnHeader}</TableHeaderCell>
                    <TableHeaderCell scope="col">{epostHeader}</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((person, index) => (
                    <TableRowExpandable
                        key={person.email}
                        expandContent={person.details}
                        isDefaultOpen={index === 0}
                        locale="nb"
                    >
                        <TableDataCell columnHeader={navnHeader}>
                            {person.name}
                        </TableDataCell>
                        <TableDataCell columnHeader={epostHeader}>
                            {person.email}
                        </TableDataCell>
                    </TableRowExpandable>
                ))}
            </TableBody>
        </Table>
    );
}
```

### Tabell med utvidbart innhold som kan lukkes programmatisk

```tsx
import React from 'react';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeaderCell,
    TableDataCell,
    TableCaption,
    TableRowExpandable,
} from '@sb1/ffe-tables-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';

export function ExpandableWithCloseButtonExample() {
    const data = [{ name: 'Ola Normann', email: 'ola@normann.no' }];

    const navnHeader = 'Navn';
    const epostHeader = 'E-post';

    return (
        <Table>
            <TableCaption>Kontakter</TableCaption>
            <TableHead>
                <TableRow>
                    <TableHeaderCell scope="col">{navnHeader}</TableHeaderCell>
                    <TableHeaderCell scope="col">{epostHeader}</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(person => (
                    <TableRowExpandable
                        key={person.email}
                        expandContent={setIsOpen => (
                            <div>
                                <p>Utvidet innhold for {person.name}</p>
                                <SecondaryButton
                                    onClick={() => setIsOpen(false)}
                                >
                                    Lukk
                                </SecondaryButton>
                            </div>
                        )}
                    >
                        <TableDataCell columnHeader={navnHeader}>
                            {person.name}
                        </TableDataCell>
                        <TableDataCell columnHeader={epostHeader}>
                            {person.email}
                        </TableDataCell>
                    </TableRowExpandable>
                ))}
            </TableBody>
        </Table>
    );
}
```

### Sorterbar tabell

```tsx
import React from 'react';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeaderCell,
    TableDataCell,
    TableCaption,
} from '@sb1/ffe-tables-react';

export function SortableTableExample() {
    const data = [
        { name: 'Ola', age: 23 },
        { name: 'Kari', age: 45 },
        { name: 'Per', age: 39 },
    ];

    const navnHeader = 'Navn';
    const alderHeader = 'Alder';

    return (
        <Table initialSort={{ sortKey: 'name', sortOrder: 'ascending' }}>
            {({ activeSortKey, activeSortOrder }) => {
                // Sorter data basert på aktiv sortering
                const sortedData = [...data].sort((a, b) => {
                    if (!activeSortKey || activeSortOrder === 'none') return 0;

                    const aVal = a[activeSortKey as keyof typeof a];
                    const bVal = b[activeSortKey as keyof typeof b];

                    if (typeof aVal === 'string' && typeof bVal === 'string') {
                        return activeSortOrder === 'ascending'
                            ? aVal.localeCompare(bVal)
                            : bVal.localeCompare(aVal);
                    }
                    if (typeof aVal === 'number' && typeof bVal === 'number') {
                        return activeSortOrder === 'ascending'
                            ? aVal - bVal
                            : bVal - aVal;
                    }
                    return 0;
                });

                return (
                    <>
                        <TableCaption>Sorterbar tabell</TableCaption>
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell sortKey="name" scope="col">
                                    {navnHeader}
                                </TableHeaderCell>
                                <TableHeaderCell sortKey="age" scope="col">
                                    {alderHeader}
                                </TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedData.map(person => (
                                <TableRow key={person.name}>
                                    <TableDataCell columnHeader={navnHeader}>
                                        {person.name}
                                    </TableDataCell>
                                    <TableDataCell columnHeader={alderHeader}>
                                        {person.age}
                                    </TableDataCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </>
                );
            }}
        </Table>
    );
}
```

## Komponent-API

### Table

Hovedkomponenten som wrapper hele tabellen.

| Prop          | Type                                                                    | Påkrevd | Standard | Beskrivelse                                                                                                                                                          |
| ------------- | ----------------------------------------------------------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `breakPoint`  | `'none' \| 'sm' \| 'md'`                                                | Nei     | `'sm'`   | Breakpoint for responsiv visning. Ved `'sm'` blir tabellen responsiv på små skjermer, ved `'md'` på mellomstore skjermer, og `'none'` deaktiverer responsiv visning. |
| `initialSort` | `{ sortKey: string, sortOrder: 'none' \| 'ascending' \| 'descending' }` | Nei     | -        | Setter initial sortering. Brukes sammen med sorterbare kolonner.                                                                                                     |
| `children`    | `ReactNode \| ((context) => ReactNode)`                                 | Ja      | -        | Kan være JSX eller en render-funksjon som mottar `{ activeSortKey, activeSortOrder }` for sorterbare tabeller.                                                       |
| `className`   | `string`                                                                | Nei     | -        | Ekstra CSS-klasser.                                                                                                                                                  |
| `ref`         | `Ref<HTMLTableElement>`                                                 | Nei     | -        | Ref til table-elementet.                                                                                                                                             |

I tillegg støtter komponenten alle standard HTML-attributter for `<table>`.

### TableHead

Wrapper for tabellhodet (`<thead>`).

| Prop        | Type        | Påkrevd | Standard | Beskrivelse                                          |
| ----------- | ----------- | ------- | -------- | ---------------------------------------------------- |
| `children`  | `ReactNode` | Ja      | -        | Innholdet (typisk `TableRow` med `TableHeaderCell`). |
| `className` | `string`    | Nei     | -        | Ekstra CSS-klasser.                                  |

I tillegg støtter komponenten alle standard HTML-attributter for `<thead>`.

### TableBody

Wrapper for tabellkroppen (`<tbody>`).

| Prop        | Type        | Påkrevd | Standard | Beskrivelse                                               |
| ----------- | ----------- | ------- | -------- | --------------------------------------------------------- |
| `children`  | `ReactNode` | Ja      | -        | Innholdet (typisk `TableRow` eller `TableRowExpandable`). |
| `className` | `string`    | Nei     | -        | Ekstra CSS-klasser.                                       |

I tillegg støtter komponenten alle standard HTML-attributter for `<tbody>`.

### TableFoot

Wrapper for tabellfoten (`<tfoot>`).

| Prop        | Type        | Påkrevd | Standard | Beskrivelse                    |
| ----------- | ----------- | ------- | -------- | ------------------------------ |
| `children`  | `ReactNode` | Ja      | -        | Innholdet (typisk `TableRow`). |
| `className` | `string`    | Nei     | -        | Ekstra CSS-klasser.            |

I tillegg støtter komponenten alle standard HTML-attributter for `<tfoot>`.

### TableRow

En vanlig tabellrad (`<tr>`).

| Prop        | Type                       | Påkrevd | Standard | Beskrivelse                                                 |
| ----------- | -------------------------- | ------- | -------- | ----------------------------------------------------------- |
| `children`  | `ReactNode`                | Ja      | -        | Innholdet (typisk `TableHeaderCell` eller `TableDataCell`). |
| `className` | `string`                   | Nei     | -        | Ekstra CSS-klasser.                                         |
| `ref`       | `Ref<HTMLTableRowElement>` | Nei     | -        | Ref til tr-elementet.                                       |

I tillegg støtter komponenten alle standard HTML-attributter for `<tr>`.

### TableRowExpandable

En utvidbar tabellrad som viser ekstra innhold når den klikkes.

| Prop            | Type                                                                         | Påkrevd | Standard | Beskrivelse                                                                                                             |
| --------------- | ---------------------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `expandContent` | `ReactNode \| ((setIsOpen: Dispatch<SetStateAction<boolean>>) => ReactNode)` | Ja      | -        | Innholdet som vises når raden er utvidet. Kan være en render-funksjon som mottar `setIsOpen` for programmatisk lukking. |
| `isDefaultOpen` | `boolean`                                                                    | Nei     | `false`  | Om raden skal være utvidet ved første rendering.                                                                        |
| `locale`        | `'nb' \| 'nn' \| 'en'`                                                       | Nei     | `'nb'`   | Språk for aria-labels (f.eks. "Vis mer"/"Vis mindre").                                                                  |
| `onClick`       | `MouseEventHandler<HTMLButtonElement>`                                       | Nei     | -        | Callback når utvid/lukk-knappen klikkes.                                                                                |
| `children`      | `ReactNode`                                                                  | Ja      | -        | Cellene i raden (typisk `TableDataCell`). Utvid-knappen legges til automatisk.                                          |
| `className`     | `string`                                                                     | Nei     | -        | Ekstra CSS-klasser.                                                                                                     |
| `ref`           | `Ref<HTMLTableRowElement>`                                                   | Nei     | -        | Ref til tr-elementet.                                                                                                   |

I tillegg støtter komponenten alle standard HTML-attributter for `<tr>` (unntatt `onClick` som er ommappet til knappen).

### TableHeaderCell

En header-celle (`<th>`). Brukes i `TableHead` for kolonneoverskrifter eller i rader for rad-overskrifter.

| Prop        | Type                                         | Påkrevd | Standard | Beskrivelse                                                                                                             |
| ----------- | -------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `sortKey`   | `string`                                     | Nei     | -        | Aktiverer sortering for denne kolonnen. Verdien brukes som nøkkelen i sorteringslogikken.                               |
| `scope`     | `'col' \| 'row' \| 'colgroup' \| 'rowgroup'` | Nei     | -        | Standard HTML scope-attributt for tilgjengelighet. Bruk `'col'` for kolonneoverskrifter og `'row'` for radoverskrifter. |
| `children`  | `ReactNode`                                  | Ja      | -        | Innholdet i cellen.                                                                                                     |
| `className` | `string`                                     | Nei     | -        | Ekstra CSS-klasser.                                                                                                     |
| `ref`       | `Ref<HTMLTableCellElement>`                  | Nei     | -        | Ref til th-elementet.                                                                                                   |

I tillegg støtter komponenten alle standard HTML-attributter for `<th>`.

### TableDataCell

En data-celle (`<td>`).

| Prop           | Type                        | Påkrevd | Standard | Beskrivelse                                                                                                                        |
| -------------- | --------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `columnHeader` | `ReactNode`                 | Ja      | -        | Kolonneoverskriften som vises foran verdien i responsiv visning (små skjermer). Bør matche teksten i tilhørende `TableHeaderCell`. |
| `children`     | `ReactNode`                 | Ja      | -        | Innholdet i cellen.                                                                                                                |
| `className`    | `string`                    | Nei     | -        | Ekstra CSS-klasser.                                                                                                                |
| `colSpan`      | `number`                    | Nei     | -        | Standard HTML colspan-attributt.                                                                                                   |
| `ref`          | `Ref<HTMLTableCellElement>` | Nei     | -        | Ref til td-elementet.                                                                                                              |

I tillegg støtter komponenten alle standard HTML-attributter for `<td>`.

### TableCaption

Tabelltittel (`<caption>`). Bør alltid brukes for tilgjengelighet.

| Prop        | Type                           | Påkrevd | Standard | Beskrivelse                |
| ----------- | ------------------------------ | ------- | -------- | -------------------------- |
| `children`  | `ReactNode`                    | Ja      | -        | Tittelteksten.             |
| `className` | `string`                       | Nei     | -        | Ekstra CSS-klasser.        |
| `ref`       | `Ref<HTMLTableCaptionElement>` | Nei     | -        | Ref til caption-elementet. |

I tillegg støtter komponenten alle standard HTML-attributter for `<caption>`.

## TypeScript-typer

Alle props-typer eksporteres og kan importeres direkte:

```tsx
import type {
    TableProps,
    TableHeadProps,
    TableBodyProps,
    TableFootProps,
    TableRowProps,
    TableRowExpandableProps,
    TableHeaderCellProps,
    TableDataCellProps,
    TableCaptionProps,
} from '@sb1/ffe-tables-react';
```

## Responsiv oppførsel

Tabellen har innebygd responsiv oppførsel kontrollert av `breakPoint`-propen:

- `breakPoint="sm"` (standard): Tabellen endres til en card-lignende visning på små skjermer (under 480px)
- `breakPoint="md"`: Tabellen endres på mellomstore skjermer (under 768px)
- `breakPoint="none"`: Deaktiverer responsiv visning

I responsiv visning vises `columnHeader` fra hver `TableDataCell` som en label foran verdien.

## Tilgjengelighet

- Bruk alltid `TableCaption` for å beskrive tabellens formål
- Bruk `scope="col"` på kolonneoverskrifter i `TableHeaderCell`
- Bruk `scope="row"` på radoverskrifter (f.eks. i `TableFoot`)
- Sorterbare kolonner har automatisk `aria-sort`-attributt
- Utvidbare rader har automatisk `aria-expanded` og `aria-controls`

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
