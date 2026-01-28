# @sb1/ffe-chart-donut-react

## Beskrivelse

Ringdiagram-komponenten brukes for å visualisere data med sirkeldiagrammer.

## Installasjon

```bash
npm install --save @sb1/ffe-chart-donut-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/diagram/.

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
