# @sb1/ffe-pagination-react

## Beskrivelse

Pagineringskomponent for navigering gjennom sider med innhold.

## Installasjon

```bash
npm install --save @sb1/ffe-pagination-react
```

## Bruk

Avhengig av `@sb1/ffe-buttons-react`, `@sb1/ffe-dropdown-react` og `@sb1/ffe-icons-react`. Husk å importere less-filene.

### Eksporterte komponenter og hooks

```tsx
import { Pagination, usePagination } from '@sb1/ffe-pagination-react';
import type { PaginationProps } from '@sb1/ffe-pagination-react';
```

## Eksempler

### Grunnleggende bruk med usePagination hook

```tsx
import { Pagination, usePagination } from '@sb1/ffe-pagination-react';

function MyComponent() {
    const paginationControls = usePagination(134, 10);

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
    ];
    const paginationControls = usePagination(data.length, 10);

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
