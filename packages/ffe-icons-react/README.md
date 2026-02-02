# @sb1/ffe-icons-react

## Beskrivelse

Ikonkomponenter som bruker CSS mask-image for SVG-ikoner som kan farges med CSS. Sett `ariaLabel` for meningsbærende ikoner, utelat den for dekorative ikoner (skjules automatisk).

## Installasjon

```bash
npm install --save @sb1/ffe-icons-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/

Importer CSS:

```css
@import url('@sb1/ffe-icons/css/ffe-icons.css');
```

## Eksempler

```tsx
import { Icon } from '@sb1/ffe-icons-react';

// Med tilgjengelighetstekst
<Icon fileUrl="./icons/open/300/md/house.svg" ariaLabel="Hjem" />

// Dekorativt ikon (skjules fra skjermleser)
<Icon fileUrl="./icons/open/300/md/arrow-right.svg" />

// Med størrelse og fargeklasse
<Icon
    fileUrl="./icons/open/300/sm/star.svg"
    size="sm"
    className="ffe-text-color--vann"
    ariaLabel="Favoritt"
/>
```

### Ikonsti-format

```
./icons/{variant}/{weight}/{size}/{icon-name}.svg
```

- **variant**: `open` eller `filled`
- **weight**: `300`, `400`, eller `500`
- **size**: `sm`, `md`, `lg`, eller `xl`

### Tilgjengelighet

- Sett `ariaLabel` for meningsbærende ikoner
- Utelat `ariaLabel` for dekorative ikoner (setter automatisk `aria-hidden="true"`)

## Utvikling

```bash
npm install && npm run build && npm start
```

Lokal Storybook kjører på http://localhost:6006/.
