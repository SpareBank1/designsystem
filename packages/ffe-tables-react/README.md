# @sb1/ffe-tables-react

Komponent for tabelldata med responsiv visning, sortering og utvidbare rader.

## Installasjon

```bash
npm install --save @sb1/ffe-tables-react
```

## Bruk

Avhengig av `@sb1/ffe-collapse-react` og `@sb1/ffe-icons-react`. Husk a importere less-filene.

## Beskrivelse

Komponenter for tabeller med semantiske deler (`Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableDataCell`, `TableFoot`, `TableCaption`) og utvidbare rader (`TableRowExpandable`).

## Eksempler

### Grunnleggende tabell

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

### Tabell med utvidbare rader

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

### Sorterbar tabell

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

## Responsiv oppforsel

- `breakPoint="sm"` (standard): Card-visning under 480px
- `breakPoint="md"`: Card-visning under 768px
- `breakPoint="none"`: Deaktiverer responsiv visning

## Tilgjengelighet

- Bruk `TableCaption` for tabellbeskrivelse
- Bruk `scope="col"` pa kolonneoverskrifter, `scope="row"` pa radoverskrifter
- Sorterbare kolonner har automatisk `aria-sort`
- Utvidbare rader har automatisk `aria-expanded` og `aria-controls`
