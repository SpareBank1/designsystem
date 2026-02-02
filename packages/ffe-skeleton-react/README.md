# @sb1/ffe-skeleton-react

## Beskrivelse

Skjelett-komponenter for plassholdere mens innhold laster. Setter `aria-hidden={true}` automatisk. Bruk `aria-busy={true}` på foreldreelementet.

## Installasjon

```bash
npm install --save @sb1/ffe-skeleton-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/

### Tilgjengelige komponenter

```tsx
import { Skeleton, SkeletonCircle } from '@sb1/ffe-skeleton-react';
```

## Eksempler

### Tekst-plassholder

```tsx
<div aria-busy={true}>
    <Skeleton width="60%" height="24px" />
    <Skeleton width="100%" height="16px" />
    <Skeleton width="80%" height="16px" />
</div>
```

### Sirkulær plassholder

```tsx
<div
    style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
    aria-busy={true}
>
    <SkeletonCircle size="lg" />
    <Skeleton width="150px" height="20px" />
</div>
```

## Utvikling

```bash
npm install && npm run build && npm start
```

Storybook kjører på http://localhost:6006/.
