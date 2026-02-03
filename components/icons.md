# @sb1/ffe-icons-react

## Beskrivelse

Ikonkomponenter som bruker CSS mask-image for SVG-ikoner som kan farges med CSS. Sett `ariaLabel` for meningsbærende ikoner, utelat den for dekorative ikoner (skjules automatisk).

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-icons-react
```

## Eksempler (fra README)

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

```tsx
./icons/{variant}/{weight}/{size}/{icon-name}.svg
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
