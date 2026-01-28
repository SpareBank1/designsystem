# @sb1/ffe-skeleton-react

## Beskrivelse

Skjelett-komponenter for å vise plassholdere mens innhold laster. `Skeleton` brukes for tekst og rektangulære områder, `SkeletonCircle` for sirkulære elementer som profilbilder.

## Installasjon

```bash
npm install --save @sb1/ffe-skeleton-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/skeleton/.

## Eksempler

### Tekst-plassholder

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

### Sirkulær plassholder

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

### Komplett lasting-tilstand

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

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
