# @sb1/ffe-skeleton-react

## Beskrivelse

Skjelett-komponenter for å vise plassholdere mens innhold laster. `Skeleton` brukes for tekst og rektangulære områder, `SkeletonCircle` for sirkulære elementer som profilbilder.

Begge komponentene setter `aria-hidden={true}` automatisk, slik at skjermlesere ignorerer dem. Bruk `aria-busy={true}` på foreldreelementet for å indikere at innhold laster.

## Installasjon

```bash
npm install --save @sb1/ffe-skeleton-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/skeleton/.

### Tilgjengelige komponenter

```tsx
import { Skeleton, SkeletonCircle } from '@sb1/ffe-skeleton-react';
```

### Props

#### Skeleton

| Prop        | Type     | Påkrevd | Default     | Beskrivelse                                           |
| ----------- | -------- | ------- | ----------- | ----------------------------------------------------- |
| `width`     | `string` | Nei     | `undefined` | CSS-verdi for bredde, f.eks. `"100%"` eller `"200px"` |
| `height`    | `string` | Nei     | `undefined` | CSS-verdi for høyde, f.eks. `"1em"` eller `"24px"`    |
| `className` | `string` | Nei     | `undefined` | Ekstra CSS-klasser                                    |

`Skeleton` utvider `React.HTMLAttributes<HTMLDivElement>`, så alle standard HTML div-attributter støttes (f.eks. `id`, `style`, `data-*`).

#### SkeletonCircle

| Prop        | Type                           | Påkrevd | Default     | Beskrivelse                       |
| ----------- | ------------------------------ | ------- | ----------- | --------------------------------- |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'xl'` | Nei     | `'lg'`      | Predefinert størrelse på sirkelen |
| `className` | `string`                       | Nei     | `undefined` | Ekstra CSS-klasser                |

`SkeletonCircle` utvider `React.HTMLAttributes<HTMLDivElement>`, så alle standard HTML div-attributter støttes.

## Eksempler

### Tekst-plassholder

```tsx
import { Skeleton } from '@sb1/ffe-skeleton-react';

function LoadingCard() {
    return (
        <div aria-busy={true}>
            <Skeleton width="60%" height="24px" />
            <Skeleton width="100%" height="16px" />
            <Skeleton width="80%" height="16px" />
        </div>
    );
}
```

### Sirkulær plassholder

```tsx
import { Skeleton, SkeletonCircle } from '@sb1/ffe-skeleton-react';

function LoadingProfile() {
    return (
        <div
            style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
            aria-busy={true}
        >
            <SkeletonCircle size="lg" />
            <Skeleton width="150px" height="20px" />
        </div>
    );
}
```

### Komplett lasting-tilstand

```tsx
import { Skeleton, SkeletonCircle } from '@sb1/ffe-skeleton-react';
import React from 'react';

interface LoadingContentProps {
    isLoading: boolean;
    children: React.ReactNode;
}

function LoadingContent({ isLoading, children }: LoadingContentProps) {
    if (isLoading) {
        return (
            <div aria-busy={true}>
                <SkeletonCircle size="xl" />
                <Skeleton width="200px" height="24px" />
                <Skeleton width="100%" height="16px" />
                <Skeleton width="100%" height="16px" />
                <Skeleton width="75%" height="16px" />
            </div>
        );
    }

    return <>{children}</>;
}
```

### Bruk med IconCard

```tsx
import { Skeleton, SkeletonCircle } from '@sb1/ffe-skeleton-react';
import { IconCard, CardRenderProps } from '@sb1/ffe-cards-react';

function LoadingIconCard() {
    return (
        <IconCard icon={<SkeletonCircle size="xl" />} aria-busy={true}>
            {({ Title, Subtext, Text }: CardRenderProps) => (
                <>
                    <Title>
                        <Skeleton width="40%" />
                    </Title>
                    <Subtext>
                        <Skeleton width="25%" height="0.75em" />
                    </Subtext>
                    <Text>
                        <Skeleton width="10%" />
                    </Text>
                </>
            )}
        </IconCard>
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
