# @sb1/ffe-chart-donut-react

## Beskrivelse

Ringdiagram-komponenten viser en prosentvis fordeling mellom to verdier i et sirkeldiagram. Diagrammet viser alltid to segmenter: ett som representerer `percentage` (høyre verdi) og ett som representerer `100 - percentage` (venstre verdi).

Typiske bruksområder:

- Vise fullføringsgrad (f.eks. "42% fullført")
- Vise fordeling mellom to kategorier (f.eks. "ja/nei", "brukt/ledig")
- Visualisere prosentandeler av en helhet

## Installasjon

```bash
npm install --save @sb1/ffe-chart-donut-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/diagram/.

### Importere styling

```css
@import 'path/to/node_modules/@sb1/ffe-chart-donut-react/less/ffe-chart-donut';
```

### Importere kompilert CSS

Hvis prosjektet ditt ikke bruker Less, kan du importere den kompilerte stylingen:

```css
@import '@sb1/ffe-chart-donut-react/css/ffe-chart-donut.css';
```

## Eksempler

### Props

| Prop         | Type              | Påkrevd | Beskrivelse                                                                                     |
| ------------ | ----------------- | ------- | ----------------------------------------------------------------------------------------------- |
| `name`       | `string`          | Ja      | Hovedtekst som beskriver diagrammet, f.eks. "Stemmefordeling" eller "Fremdrift"                 |
| `percentage` | `number`          | Ja      | Prosentverdi (0-100) for høyre segment i diagrammet                                             |
| `firstLabel` | `string`          | Nei     | Beskrivende tekst for venstre verdi (vises under `100 - percentage`)                            |
| `lastLabel`  | `string`          | Nei     | Beskrivende tekst for høyre verdi (vises under `percentage`)                                    |
| `label`      | `React.ReactNode` | Nei     | Egendefinert innhold som vises under `name`. Brukes som alternativ til `firstLabel`/`lastLabel` |

**Viktig:** Bruk enten `firstLabel` + `lastLabel` sammen, eller `label` alene. Hvis `firstLabel` og `lastLabel` er satt, ignoreres `label`.

### Grunnleggende bruk med to etiketter

```tsx
import { ChartDonut } from '@sb1/ffe-chart-donut-react';

function VoteChart() {
    return (
        <ChartDonut
            name="Avstemning"
            percentage={42}
            firstLabel="Sa nei"
            lastLabel="Sa ja"
        />
    );
}
```

Dette viser et ringdiagram med:

- Tittel: "Avstemning"
- Venstre segment: 58% med etiketten "Sa nei"
- Høyre segment: 42% med etiketten "Sa ja"

### Bruk med egendefinert label

```tsx
import { ChartDonut } from '@sb1/ffe-chart-donut-react';

function ProgressChart() {
    return (
        <ChartDonut
            name="Prosjektstatus"
            percentage={75}
            label={
                <div style={{ textAlign: 'center', marginTop: 10 }}>
                    <strong>75% fullført</strong>
                    <br />
                    Forventet ferdig: Mars 2024
                </div>
            }
        />
    );
}
```

### TypeScript interface

```typescript
interface ChartDonutProps {
    /** Hovedtekst som beskriver diagrammet */
    name: string;
    /** Prosentverdi (0-100) for høyre segment */
    percentage: number;
    /** Beskrivende tekst for venstre verdi (100 - percentage) */
    firstLabel?: string;
    /** Beskrivende tekst for høyre verdi (percentage) */
    lastLabel?: string;
    /** Egendefinert innhold under name, alternativ til firstLabel/lastLabel */
    label?: React.ReactNode;
}
```

## Theming med CSS custom properties

For å støtte theming av komponenter, inneholder denne pakken styling som er avhengig av et sett med custom properties, definert i `less/theme.less`. Disse egenskapene er igjen avhengige av et base-tema definert i `ffe-core`.

Hvis prosjektet ditt bruker `ffe-core`, er du sannsynligvis klar. Hvis ikke, sørg for å importere core-egenskapene i `theme.less`:

```css
@import '@sb1/ffe-core/less/theme';
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
