# @sb1/ffe-pagination-react

## Beskrivelse

Pagineringskomponent for å navigere gjennom sider med innhold.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Pagination`
- `usePagination`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-pagination-react @sb1/ffe-buttons-react @sb1/ffe-core @sb1/ffe-core-react @sb1/ffe-dropdown-react @sb1/ffe-icons-react @sb1/ffe-pagination @sb1/ffe-buttons @sb1/ffe-icons @sb1/ffe-form
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-buttons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-core-react`
- `@sb1/ffe-dropdown-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-pagination`
- `@sb1/ffe-buttons`
- `@sb1/ffe-icons`
- `@sb1/ffe-form`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-pagination/css/pagination.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### Pagination Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `className` | `string` | Nei | - |
| `locale` | `Locale` | Nei | - |
| `showRowsPerPageText` | `boolean` | Nei | - |
| `paginationControls` | `PaginationControls` | Ja | - |
| `rowsPerPageOptions` | `number[]` | Nei | - |
| `navigationButtonText` | `boolean` | Nei | - |
| `ariaLabel` | `string` | Ja | - |
| `onClickPrev` | `() => void` | Nei | - |
| `onClickNext` | `() => void` | Nei | - |
| `onClickPage` | `(page: number) => void` | Nei | - |

### usePagination Props

Ingen komponentspesifikke props utover native HTML-attributter.

## Eksempler (fra README)

```tsx
import { Pagination } from '@sb1/ffe-pagination-react';
import { useState } from 'react';

function MyComponent() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    return (
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={page => setCurrentPage(page)}
        />
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
