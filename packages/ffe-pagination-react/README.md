# @sb1/ffe-pagination-react

## Beskrivelse

Pagineringskomponent for å navigere gjennom sider med innhold. Komponenten viser sidetall-knapper, forrige/neste-navigasjon, og valgfri informasjon om antall rader per side.

## Installasjon

```bash
npm install --save @sb1/ffe-pagination-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/paginering/.

Denne pakken er avhengig av `@sb1/ffe-buttons-react`, `@sb1/ffe-dropdown-react` og `@sb1/ffe-icons-react`.
Husk å importere less-filene.

### Eksporterte komponenter og hooks

```tsx
import { Pagination, usePagination } from '@sb1/ffe-pagination-react';
import type { PaginationProps } from '@sb1/ffe-pagination-react';
```

## Eksempler

### Grunnleggende bruk med usePagination hook

Den enkleste måten å bruke komponenten på er med den medfølgende `usePagination` hooken:

```tsx
import { Pagination, usePagination } from '@sb1/ffe-pagination-react';

function MyComponent() {
    const totalElements = 134;
    const defaultPageSize = 10;

    const paginationControls = usePagination(totalElements, defaultPageSize);

    return (
        <Pagination
            ariaLabel="Paginering av innhold"
            paginationControls={paginationControls}
            rowsPerPageOptions={[10, 20, 50, 100]}
        />
    );
}
```

### Bruk med tabell og datafiltrering

```tsx
import { Pagination, usePagination } from '@sb1/ffe-pagination-react';

function TableWithPagination() {
    const data = [
        { id: 1, name: 'Anders' },
        { id: 2, name: 'Erik' },
        // ... flere elementer
    ];

    const paginationControls = usePagination(data.length, 10);

    // Hent ut elementer for gjeldende side
    const currentPageData = data.slice(
        paginationControls.pageStart,
        paginationControls.pageStart + paginationControls.currentPageSize,
    );

    return (
        <>
            <ul>
                {currentPageData.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <Pagination
                ariaLabel="Paginering av tabell"
                paginationControls={paginationControls}
                rowsPerPageOptions={[10, 20, 50]}
            />
        </>
    );
}
```

### Pagination Props

| Prop                   | Type                     | Påkrevd | Standard | Beskrivelse                                                       |
| ---------------------- | ------------------------ | ------- | -------- | ----------------------------------------------------------------- |
| `ariaLabel`            | `string`                 | Ja      | -        | Tilgjengelighetsetikett for pagineringskomponenten                |
| `paginationControls`   | `PaginationControls`     | Ja      | -        | Objekt med pagineringstilstand og funksjoner (se under)           |
| `className`            | `string`                 | Nei     | -        | Ekstra CSS-klasse for komponenten                                 |
| `locale`               | `'nb' \| 'nn' \| 'en'`   | Nei     | `'nb'`   | Språk for tekster i komponenten                                   |
| `showRowsPerPageText`  | `boolean`                | Nei     | `true`   | Vis tekst som "Viser 1-10 av 134 rader"                           |
| `rowsPerPageOptions`   | `number[]`               | Nei     | -        | Alternativer for antall rader per side (viser dropdown hvis satt) |
| `navigationButtonText` | `boolean`                | Nei     | `true`   | Vis "Forrige"/"Neste" tekst på navigasjonsknappene                |
| `onClickPrev`          | `() => void`             | Nei     | -        | Callback ved klikk på forrige-knappen                             |
| `onClickNext`          | `() => void`             | Nei     | -        | Callback ved klikk på neste-knappen                               |
| `onClickPage`          | `(page: number) => void` | Nei     | -        | Callback ved klikk på en sideknapp                                |

### PaginationControls type

`PaginationControls` er et objekt som inneholder all tilstand og funksjoner for paginering:

```tsx
type PaginationControls = {
    pageStart: number; // Indeks for første element på siden (0-basert)
    currentPage: number; // Gjeldende sidenummer (1-basert)
    pageEnd: number; // Indeks for siste element på siden
    currentPageSize: number; // Antall elementer per side
    hasNextPage: boolean; // Om det finnes en neste side
    hasPreviousPage: boolean; // Om det finnes en forrige side
    setPageSize: (pageSize: number) => void; // Endre antall per side
    setCurrentPage: (page: number) => void; // Gå til en bestemt side
    totalElements: number; // Totalt antall elementer
    numberOfPages: number; // Totalt antall sider
};
```

### usePagination hook

Hooken `usePagination` er en hjelpefunksjon som oppretter og håndterer all pagineringstilstand:

```tsx
function usePagination(
    totalElements: number, // Totalt antall elementer
    defaultPageSize?: number, // Standard antall per side (default: 100)
): PaginationControls;
```

Hooken resetter automatisk til side 1 når `totalElements` endres (f.eks. ved filtrering).

### Varianter

#### Uten navigasjonstekst

```tsx
<Pagination
    ariaLabel="Paginering"
    paginationControls={paginationControls}
    navigationButtonText={false}
/>
```

#### Uten raderinformasjon

```tsx
<Pagination
    ariaLabel="Paginering"
    paginationControls={paginationControls}
    showRowsPerPageText={false}
/>
```

#### Med engelsk språk

```tsx
<Pagination
    ariaLabel="Pagination"
    paginationControls={paginationControls}
    locale="en"
    rowsPerPageOptions={[10, 20, 50]}
/>
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
