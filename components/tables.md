# @sb1/ffe-tables-react

## Beskrivelse

Tabellkomponenter med responsiv visning, sortering og utvidbare rader. Inkluderer `Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableDataCell`, `TableFoot`, `TableCaption` og `TableRowExpandable`.

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
npm install @sb1/ffe-tables-react
```

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

const data = [
    { name: 'Anders', age: 32 },
    { name: 'Erik', age: 25 },
];

<Table>
    <TableCaption>Utviklere</TableCaption>
    <TableHead>
        <TableRow>
            <TableHeaderCell scope="col">Navn</TableHeaderCell>
            <TableHeaderCell scope="col">Alder</TableHeaderCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {data.map(person => (
            <TableRow key={person.name}>
                <TableDataCell columnHeader="Navn">{person.name}</TableDataCell>
                <TableDataCell columnHeader="Alder">{person.age}</TableDataCell>
            </TableRow>
        ))}
    </TableBody>
    <TableFoot>
        <TableRow>
            <TableHeaderCell scope="row">Gjennomsnitt</TableHeaderCell>
            <TableDataCell columnHeader="Gjennomsnitt">28.5</TableDataCell>
        </TableRow>
    </TableFoot>
</Table>;
```

```tsx
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

<Table>
    <TableCaption>Kontakter</TableCaption>
    <TableHead>
        <TableRow>
            <TableHeaderCell scope="col">Navn</TableHeaderCell>
            <TableHeaderCell scope="col">E-post</TableHeaderCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRowExpandable
            expandContent="Detaljer om personen"
            isDefaultOpen={false}
            locale="nb"
        >
            <TableDataCell columnHeader="Navn">Ola Normann</TableDataCell>
            <TableDataCell columnHeader="E-post">ola@normann.no</TableDataCell>
        </TableRowExpandable>
        {/* expandContent kan ogsa vaere en funksjon: expandContent={setIsOpen => <Button onClick={() => setIsOpen(false)}>Lukk</Button>} */}
    </TableBody>
</Table>;
```

```tsx
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeaderCell,
    TableDataCell,
    TableCaption,
} from '@sb1/ffe-tables-react';

const data = [
    { name: 'Ola', age: 23 },
    { name: 'Kari', age: 45 },
];

<Table initialSort={{ sortKey: 'name', sortOrder: 'ascending' }}>
    {({ activeSortKey, activeSortOrder }) => {
        const sortedData = [...data].sort((a, b) => {
            if (!activeSortKey || activeSortOrder === 'none') return 0;
            const aVal = a[activeSortKey as keyof typeof a];
            const bVal = b[activeSortKey as keyof typeof b];
            return activeSortOrder === 'ascending'
                ? String(aVal).localeCompare(String(bVal))
                : String(bVal).localeCompare(String(aVal));
        });

        return (
            <>
                <TableCaption>Sorterbar tabell</TableCaption>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell sortKey="name" scope="col">
                            Navn
                        </TableHeaderCell>
                        <TableHeaderCell sortKey="age" scope="col">
                            Alder
                        </TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData.map(person => (
                        <TableRow key={person.name}>
                            <TableDataCell columnHeader="Navn">
                                {person.name}
                            </TableDataCell>
                            <TableDataCell columnHeader="Alder">
                                {person.age}
                            </TableDataCell>
                        </TableRow>
                    ))}
                </TableBody>
            </>
        );
    }}
</Table>;
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
