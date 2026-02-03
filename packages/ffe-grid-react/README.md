# @sb1/ffe-grid-react

## Beskrivelse

Grid-system for responsive layouts (foreldet - bruk CSS Grid eller Flexbox i stedet).

- `Grid` - Ytterste container som definerer grid-gapet
- `GridRow` - Rad-container med støtte for bakgrunnsfarge, margin og padding
- `GridCol` - Kolonne-container med responsiv bredde (12-kolonners system)

## Installasjon

```bash
npm install --save @sb1/ffe-grid-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/

Importer CSS:

```css
@import url('@sb1/ffe-grid/css/ffe-grid.css');
```

## Eksempler

### Import

```tsx
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
```

### Grunnleggende eksempel

```tsx
<Grid>
    <GridRow>
        <GridCol sm={6}>Venstre kolonne</GridCol>
        <GridCol sm={6}>Høyre kolonne</GridCol>
    </GridRow>
</Grid>
```

### Responsiv layout med breakpoints

```tsx
<Grid>
    <GridRow>
        <GridCol sm={12} md={6} lg={4}>
            Responsiv kolonne
        </GridCol>
    </GridRow>
</Grid>
```

### Offset (forskyvning av kolonner)

```tsx
<GridCol
    sm={{ cols: 10, offset: 1 }}
    md={{ cols: 8, offset: 2 }}
    lg={{ cols: 6, offset: 3 }}
>
    Sentert innhold
</GridCol>
```

### Grid med spacing

```tsx
<Grid gap="lg">
    <GridRow margin="md" padding="sm" bgColor="secondary">
        <GridCol sm={6}>Kolonne 1</GridCol>
        <GridCol sm={6}>Kolonne 2</GridCol>
    </GridRow>
</Grid>
```

### Responsiv spacing på GridRow

```tsx
<GridRow
    sm={{ margin: 'sm', padding: 'xs' }}
    md={{ margin: 'md', padding: 'sm' }}
    lg={{ margin: 'lg', padding: 'md' }}
>
    <GridCol sm={12}>Rad med responsiv spacing</GridCol>
</GridRow>
```

## DevTool: Grid overlay

```javascript
import showGrid from '@sb1/ffe-grid-react/lib/show-grid';
window.showGrid = showGrid; // Toggle funksjon for grid overlay
```

## Utvikling

```bash
npm install && npm run build && npm start
```

Lokal Storybook på http://localhost:6006/
