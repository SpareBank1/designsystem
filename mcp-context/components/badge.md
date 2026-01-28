# @sb1/ffe-badge-react

## Beskrivelse

Badge-komponenten brukes for å vise små merkelapper eller teller for notifikasjoner.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Badge`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-badge-react @sb1/ffe-badge @sb1/ffe-core
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-badge`
- `@sb1/ffe-core`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-badge/css/badge.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### Badge Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `className` | `string` | Nei | - |
| `children` | `React.ReactNode` | Ja | - |

## Eksempler (fra README)

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function MyComponent() {
    return (
        <div>
            <Badge>5</Badge>
            <Badge>Ny</Badge>
        </div>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
