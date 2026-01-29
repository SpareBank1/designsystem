# @sb1/ffe-skeleton-react

## Beskrivelse

Skjelett-komponenter for å vise plassholdere mens innhold laster. `Skeleton` brukes for tekst og rektangulære områder, `SkeletonCircle` for sirkulære elementer som profilbilder.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Skeleton`
- `SkeletonCircle`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-skeleton-react
```

## API-referanse

### Skeleton Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `width` | `string` | Nei | - |
| `height` | `string` | Nei | - |
| `className` | `string` | Nei | - |

### SkeletonCircle Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `size` | `'sm' | 'md' | 'lg' | 'xl'` | Nei | - |

## Eksempler (fra README)

```tsx
import { Skeleton } from '@sb1/ffe-skeleton-react';

function LoadingCard() {
    return (
        <div>
            <Skeleton width="60%" height="24px" />
            <Skeleton width="100%" height="16px" />
            <Skeleton width="80%" height="16px" />
        </div>
    );
}
```

```tsx
import { SkeletonCircle } from '@sb1/ffe-skeleton-react';

function LoadingProfile() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <SkeletonCircle size="48px" />
            <Skeleton width="150px" height="20px" />
        </div>
    );
}
```

```tsx
import { Skeleton, SkeletonCircle } from '@sb1/ffe-skeleton-react';

function LoadingContent({ isLoading, children }) {
    if (isLoading) {
        return (
            <div>
                <SkeletonCircle size="64px" />
                <Skeleton width="200px" height="24px" />
                <Skeleton width="100%" height="16px" />
                <Skeleton width="100%" height="16px" />
                <Skeleton width="75%" height="16px" />
            </div>
        );
    }

    return children;
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
