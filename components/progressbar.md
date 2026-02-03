# @sb1/ffe-progressbar-react

## Beskrivelse

Fremdriftsindikator som wrapper det native HTML `<progress>`-elementet med SpareBank 1-styling.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Progressbar`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-progressbar-react
```

## API-referanse

### Progressbar Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `success` | `boolean` | Nei | - |

## Eksempler (fra README)

```tsx
import { Progressbar } from '@sb1/ffe-progressbar-react';

function MyComponent() {
    return <Progressbar value={40} max={100} />;
}
```

```tsx
import { Progressbar } from '@sb1/ffe-progressbar-react';

function LoanProgress() {
    return (
        <Progressbar
            value={5000}
            max={5000}
            aria-label="Nedbetaling av lån"
            success={true}
        />
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
