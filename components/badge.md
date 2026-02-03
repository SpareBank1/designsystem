# @sb1/ffe-badge-react

## Beskrivelse

Badge viser små merkelapper eller tellere for notifikasjoner. Rendrer et `<span>`-element med CSS-klassen `ffe-badge`.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Badge`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-badge-react
```

## API-referanse

### Badge Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `className` | `string` | Nei | - |
| `children` | `React.ReactNode` | Ja | - |

## Eksempler (fra README)

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function NotificationCount() {
    return <Badge>9</Badge>;
}
```

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function IconWithIndicator() {
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <MyIcon />
            <Badge />
        </div>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
