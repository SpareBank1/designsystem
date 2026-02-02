# @sb1/ffe-shapes-react

## Beskrivelse

Dekorative form-komponenter. Inneholder `Wave` for bølgeformer som visuell overgang mellom seksjoner.

## Installasjon

```bash
npm install --save @sb1/ffe-shapes-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/komponenter/shapes/

## Eksempler

### Standard bølge med innhold

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

### Rotert bølge (flip)

```tsx
import { Wave } from '@sb1/ffe-shapes-react';

function FlippedWaveExample() {
    return <Wave flip={true} position="100px" />;
}
```

## Utvikling

```bash
npm install
npm run build
npm start
```

Lokal Storybook kjører på http://localhost:6006/.
