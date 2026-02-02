# @sb1/ffe-chart-donut-react

## Beskrivelse

Ringdiagram som viser prosentvis fordeling mellom to verdier. Viser alltid to segmenter: `percentage` (hoyre) og `100 - percentage` (venstre).

## Installasjon

```bash
npm install --save @sb1/ffe-chart-donut-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/

### Importere styling

```css
@import '@sb1/ffe-chart-donut-react/less/ffe-chart-donut';
```

Eller kompilert CSS:

```css
@import '@sb1/ffe-chart-donut-react/css/ffe-chart-donut.css';
```

## Eksempler

### Grunnleggende bruk med to etiketter

```tsx
import { ChartDonut } from '@sb1/ffe-chart-donut-react';

<ChartDonut
    name="Avstemning"
    percentage={42}
    firstLabel="Sa nei"
    lastLabel="Sa ja"
/>;
```

### Bruk med egendefinert label

```tsx
import { ChartDonut } from '@sb1/ffe-chart-donut-react';

<ChartDonut
    name="Prosjektstatus"
    percentage={75}
    label={<span>75% fullfort</span>}
/>;
```

## Theming med CSS custom properties

Krever base-tema fra `ffe-core`:

```css
@import '@sb1/ffe-core/less/theme';
```

## Utvikling

```bash
npm install && npm run build && npm start
```

Storybook kjorer pa http://localhost:6006/.
