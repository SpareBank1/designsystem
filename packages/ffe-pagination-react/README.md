# @sb1/ffe-pagination-react

## Beskrivelse

Pagineringskomponent for å navigere gjennom sider med innhold.

## Installasjon

```bash
npm install --save @sb1/ffe-pagination-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/paginering/.

Denne pakken er avhengig av `@sb1/ffe-buttons-react`, `@sb1/ffe-dropdown-react` og `@sb1/ffe-icons-react`.
Husk å importere less-filene.

## Eksempler

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

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
