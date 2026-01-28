# @sb1/ffe-chart-donut-react

## Beskrivelse

Ringdiagram-komponenten brukes for å visualisere data med sirkeldiagrammer.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `ChartDonut`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-chart-donut-react @sb1/ffe-core
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-core`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-chart-donut-react/css/ffe-chart-donut.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### ChartDonut Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `firstLabel` | `string` | Nei | Short text labeling left value, like "empty", "said yes" etc |
| `lastLabel` | `string` | Nei | Short text labeling right value, like "full", "said` no" etc |
| `label` | `React.ReactNode` | Nei | React node to be inserted directly under the chart's name, alternative to first/last label |
| `name` | `string` | Ja | Short text labeling the graph in total, like "percentage", "voted this year" etc |
| `percentage` | `number` | Ja | The percentage for the right-most value |

## Eksempler (fra README)

```tsx
import { ChartDonut } from '@sb1/ffe-chart-donut-react';

function MyComponent() {
    const data = [
        { label: 'Kategori A', value: 30, color: '#007272' },
        { label: 'Kategori B', value: 50, color: '#00C9C9' },
        { label: 'Kategori C', value: 20, color: '#CCFDEC' },
    ];

    return <ChartDonut data={data} />;
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
