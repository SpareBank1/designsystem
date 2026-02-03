# @sb1/ffe-pagination-react

## Beskrivelse

Pagineringskomponent for navigering gjennom sider med innhold.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Pagination`
- `usePagination`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-pagination-react
```

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

```css
@import '@sb1/ffe-pagination/css/pagination.css';
```

```tsx
import { Pagination, usePagination } from '@sb1/ffe-pagination-react';
import type { PaginationProps } from '@sb1/ffe-pagination-react';
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
