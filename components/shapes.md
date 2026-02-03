# @sb1/ffe-shapes-react

## Beskrivelse

Dekorative form-komponenter. Inneholder `Wave` for bølgeformer som visuell overgang mellom seksjoner.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Wave`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-shapes-react
```

## API-referanse

### Wave Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `position` | `string` | Nei | Sets the mask-position property, setting a px/rem value will move the starting position of the wave |
| `flip` | `boolean` | Nei | Rotate the wave 180 degrees : |
| `bgColor` | `Color` | Nei | Set the background color of the wave container. |
| `className` | `string` | Nei | Adds additional class |
| `children` | `React.ReactNode` | Nei | - |

## Eksempler (fra README)

```tsx
import { Wave } from '@sb1/ffe-shapes-react';

function SectionWithWave() {
    return (
        <Wave bgColor="subtle">
            <p>Innhold inne i bølgeseksjonen</p>
        </Wave>
    );
}
```

```tsx
import { Wave } from '@sb1/ffe-shapes-react';

function FlippedWaveExample() {
    return <Wave flip={true} position="100px" />;
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
