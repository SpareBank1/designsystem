# @sb1/ffe-progressbar-react

## Beskrivelse

Fremdriftsindikator for å vise fremdrift i en oppgave.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Progressbar`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-progressbar-react @sb1/ffe-core @sb1/ffe-progressbar
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-core`
- `@sb1/ffe-progressbar`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-progressbar/css/progressbar.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### Progressbar Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `success` | `boolean` | Nei | - |

## Eksempler (fra README)

```tsx
import { Progressbar } from '@sb1/ffe-progressbar-react';

function MyComponent() {
    return (
        <div>
            <Progressbar value={50} max={100} />
            <Progressbar value={75} max={100} ariaLabel="75% fullført" />
        </div>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
