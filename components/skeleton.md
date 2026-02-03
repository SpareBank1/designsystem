# @sb1/ffe-skeleton-react

## Beskrivelse

Skjelett-komponenter for plassholdere mens innhold laster. Setter `aria-hidden={true}` automatisk. Bruk `aria-busy={true}` på foreldreelementet.

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
<div aria-busy={true}>
    <Skeleton width="60%" height="24px" />
    <Skeleton width="100%" height="16px" />
    <Skeleton width="80%" height="16px" />
</div>
```

```tsx
<div
    style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
    aria-busy={true}
>
    <SkeletonCircle size="lg" />
    <Skeleton width="150px" height="20px" />
</div>
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
