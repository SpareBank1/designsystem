# Forståelse av FFE Tables (`ffe-tables` og `ffe-tables-react`)

Denne filen oppsummerer hvordan man bygger tabeller ved hjelp av FFE-tabellkomponenter, basert på en gjennomgang av kildekoden og dokumentasjonen.

## Oversikt

FFEs tabellfunksjonalitet er levert gjennom two hovedpakker:

1.  **`@sb1/ffe-tables`**: Denne pakken inneholder Less-filen (`tables.less`) som definerer den grunnleggende CSS-stylingen for tabeller. Dette sikrer et konsistent FFE-utseende for tabellene.
2.  **`@sb1/ffe-tables-react`**: Denne pakken inneholder React-komponentene som brukes for å bygge selve tabellstrukturen. Disse komponentene er bygget oppå stylingen fra `ffe-tables`.

## Sentrale React-komponenter og bruk

React-komponentene i `ffe-tables-react` mapper i stor grad direkte til standard HTML-tabellelementer:

*   **`<Table>`**: Hovedcontaineren for tabellen, tilsvarer `<table>`.
    *   Kan ta props som `condensed`, `left первой`, `columnLayoutMobile` for ulike visningsmoduser.
    *   Støtter en `caption` prop for en enkel tekst-caption, eller man kan bruke `<TableCaption>` som et child-element for mer avansert innhold i caption.
*   **`<TableCaption>`**: For å gi en tittel eller beskrivelse til tabellen, tilsvarer `<caption>`.
*   **`<TableHead>`**: Wrapper for tabellens header-rader, tilsvarer `<thead>`.
*   **`<TableBody>`**: Wrapper for tabellens data-rader, tilsvarer `<tbody>`.
*   **`<TableFoot>`**: Wrapper for tabellens footer-rader, tilsvarer `<tfoot>` (hvis nødvendig).
*   **`<TableRow>`**: Definerer en rad i tabellen, tilsvarer `<tr>`. Brukes innenfor `TableHead`, `TableBody`, eller `TableFoot`.
*   **`<TableHeaderCell>`**: Definerer en header-celle, tilsvarer `<th>`. Brukes innenfor en `<TableRow>` i `<TableHead>`.
    *   Viktig for tilgjengelighet: Bruk `scope="col"` (eller `scope="row"` hvis det er en rad-header).
    *   For sorterbare tabeller, bruk `sortKey` prop for å identifisere kolonnen, og `aria-sort` kan settes til `ascending` eller `descending`.
*   **`<TableDataCell>`**: Definerer en standard data-celle, tilsvarer `<td>`. Brukes innenfor en `<TableRow>` i `<TableBody>` eller `<TableFoot>`.

**Eksempel på en enkel tabellstruktur:**

```tsx
import {
    Table,
    TableCaption,
    TableHead,
    TableBody,
    TableRow,
    TableHeaderCell,
    TableDataCell,
} from '@sb1/ffe-tables-react';

// Inne i en komponent...
<Table caption="Min tabelltittel">
    <TableHead>
        <TableRow>
            <TableHeaderCell scope="col">Navn</TableHeaderCell>
            <TableHeaderCell scope="col">Alder</TableHeaderCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableDataCell>Ola Nordmann</TableDataCell>
            <TableDataCell>30</TableDataCell>
        </TableRow>
        <TableRow>
            <TableDataCell>Kari Hansen</TableDataCell>
            <TableDataCell>25</TableDataCell>
        </TableRow>
    </TableBody>
</Table>
```

## Avansert funksjonalitet

### Sortering

*   Tabeller kan gjøres sorterbare.
*   Man gir en funksjon som `children` til `<Table>`-komponenten.
*   Denne funksjonen mottar sorteringsnøkkel (`sortKey`) og sorteringsrekkefølge (`sortOrder` - `none`, `ascending`, `descending`) som argumenter.
*   `TableHeaderCell` får en `sortKey` prop.
*   Komponenten håndterer klikk på headere for å oppdatere sorteringsrekkefølge og kaller `children`-funksjonen på nytt med oppdatert sorteringsinfo, slik at man kan re-sortere dataene.
*   En `initialSort` prop kan gis til `<Table>`.

### Ekspanderbare rader

*   **`<TableRowExpandable>`**: En spesiell type rad som kan ha ekstra, skjult innhold som vises når raden ekspanderes.
*   Krever ofte `ffe-collapse-react` og `ffe-icons-react` som avhengigheter.

## Styling og Modifikatorer

Stylingen kommer fra `ffe-tables/less/tables.less`. React-komponentene kan ha props som oversettes til CSS-klasser for ulike stiler:

*   **`condensed` (på `<Table>`):** Gjør tabellen mer kompakt.
*   **`leftAligned` (på `<Table>`):** Justér tekst til venstre i celler (standard er ofte til høyre for tall).
*   **`columnLayoutMobile` (på `<Table>`):** Kan endre tabellen til en kolonnelayout på små skjermer for bedre responsivitet.
*   **`hideOnMobile`, `hideOnSmallTablet`, `hideOnLargeTablet` (på `<TableHeaderCell>` og `<TableDataCell>`):** For å skjule kolonner på spesifikke skjermstørrelser.

## Viktige hensyn

*   **Tilgjengelighet**: Husk `scope` på `<TableHeaderCell>` og bruk `<TableCaption>` eller `caption` prop på `<Table>`.
*   **Responsivitet**: Vurder `columnLayoutMobile` på `<Table>` eller bruk av `hideOn...` props på celler for å sikre god visning på mindre skjermer.

Ved å bruke disse komponentene kan man bygge FFE-stylede, strukturerte og potensielt interaktive tabeller. 