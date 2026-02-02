# @sb1/ffe-shapes-react

## Beskrivelse

Dekorative form-komponenter for visuell interesse. Inneholder `Wave`-komponenten for bølgeformer som bakgrunnselementer. Bølgen bruker CSS-masker for å skape en visuell overgang mellom seksjoner på en side.

## Installasjon

```bash
npm install --save @sb1/ffe-shapes-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/shapes/.

### Wave-komponent

`Wave` er en dekorativ komponent som rendrer en bølgeformet seksjon. Den kan brukes som visuell separator mellom innholdsseksjoner.

#### Props

| Prop        | Type                    | Standard    | Beskrivelse                                                                                          |
| ----------- | ----------------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| `position`  | `string`                | `undefined` | Setter mask-position. Bruk px/rem-verdier for å flytte startposisjonen til bølgen (f.eks. `"100px"`) |
| `flip`      | `boolean`               | `false`     | Roterer bølgen 180 grader. Brukes når bølgen skal peke oppover i stedet for nedover                  |
| `bgColor`   | `'default' \| 'subtle'` | `'default'` | Setter bakgrunnsfargen på bølgebeholderen                                                            |
| `className` | `string`                | `undefined` | Legger til ekstra CSS-klasser                                                                        |
| `children`  | `React.ReactNode`       | `undefined` | Innhold som vises inne i bølgeseksjonen                                                              |

#### TypeScript

```tsx
import type { WaveProps } from '@sb1/ffe-shapes-react';
```

## Eksempler

### Standard bølge

```tsx
import { Wave } from '@sb1/ffe-shapes-react';

function MyComponent() {
    return <Wave />;
}
```

### Bølge med innhold

Bølgen kan inneholde barn-elementer som vises inne i bølgeseksjonen:

```tsx
import { Wave } from '@sb1/ffe-shapes-react';

function SectionWithWave() {
    return (
        <Wave>
            <p>Innhold inne i bølgeseksjonen</p>
        </Wave>
    );
}
```

### Rotert bølge (flip)

Bruk `flip` for å rotere bølgen 180 grader. Dette er nyttig når bølgen skal fungere som en visuell overgang der kurven peker oppover:

```tsx
import { Wave } from '@sb1/ffe-shapes-react';

function FlippedWaveExample() {
    return <Wave flip={true} />;
}
```

### Subtil bakgrunnsfarge

```tsx
import { Wave } from '@sb1/ffe-shapes-react';

function SubtleWaveExample() {
    return <Wave bgColor="subtle" />;
}
```

### Justert posisjon

Bruk `position` for å flytte startposisjonen til bølgemønsteret:

```tsx
import { Wave } from '@sb1/ffe-shapes-react';

function PositionedWaveExample() {
    return <Wave position="100px" />;
}
```

### Komplett seksjonslayout

Eksempel på hvordan Wave kan brukes for å skape visuell overgang mellom seksjoner:

```tsx
import { Wave } from '@sb1/ffe-shapes-react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Heading1, Paragraph } from '@sb1/ffe-core-react';

function PageWithWaves() {
    return (
        <>
            {/* Første seksjon med rotert bølge under */}
            <Grid>
                <GridRow padding="sm">
                    <GridCol sm={12} md={{ cols: 8, offset: 2 }}>
                        <Heading1>Velkommen</Heading1>
                        <Paragraph lead={true}>
                            Introduksjonstekst her
                        </Paragraph>
                    </GridCol>
                </GridRow>
                <Wave flip={true} />
            </Grid>

            {/* Seksjon med bølge som wrapper innhold */}
            <Wave>
                <Grid>
                    <GridRow>
                        <GridCol sm={{ cols: 5, offset: 2 }}>
                            Innhold i venstre kolonne
                        </GridCol>
                        <GridCol sm={{ cols: 5, offset: 0 }}>
                            Innhold i høyre kolonne
                        </GridCol>
                    </GridRow>
                </Grid>
            </Wave>
        </>
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
