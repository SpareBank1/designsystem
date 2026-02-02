# @sb1/ffe-icons-react

## Installasjon

```bash
npm install --save @sb1/ffe-icons-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/ikoner/.

## Beskrivelse

Ikonkomponenter for å vise vektorikoner konsistent i FFE. `Icon`-komponenten bruker CSS mask-image for å vise SVG-ikoner som kan farges med CSS.

Bruk ikoner for å understøtte mening, ikke erstatte tekst. Sett passende `ariaLabel` for skjermlesere, eller utelat den for dekorative ikoner som automatisk skjules.

### Props

| Prop        | Type                           | Påkrevd | Standard    | Beskrivelse                                                                 |
| ----------- | ------------------------------ | ------- | ----------- | --------------------------------------------------------------------------- |
| `fileUrl`   | `string`                       | Ja      | -           | Sti til SVG-fil eller base64-streng                                         |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'xl'` | Nei     | `'md'`      | Størrelse på ikonet                                                         |
| `ariaLabel` | `string`                       | Nei     | `undefined` | Tilgjengelighetstekst. Hvis utelatt, settes `aria-hidden="true"` automatisk |
| `className` | `string`                       | Nei     | -           | Ekstra CSS-klasser                                                          |
| `style`     | `React.CSSProperties`          | Nei     | -           | Inline CSS-stiler                                                           |

Komponenten utvider `React.ComponentPropsWithoutRef<'span'>`, så alle standard span-attributter er også tilgjengelige.

## Eksempler

```tsx
import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';

export function IconsDemo() {
    return (
        <div>
            {/* Standard ikon med tilgjengelighetstekst */}
            <Icon fileUrl="./icons/open/300/md/house.svg" ariaLabel="Hjem" />

            {/* Dekorativt ikon - skjules automatisk fra skjermleser når ariaLabel utelates */}
            <Icon fileUrl="./icons/open/300/md/arrow-right.svg" />

            {/* Ikon med spesifikk størrelse */}
            <Icon
                fileUrl="./icons/open/300/sm/star.svg"
                size="sm"
                ariaLabel="Favoritt"
            />

            {/* Alle tilgjengelige størrelser */}
            <Icon
                fileUrl="./icons/open/300/sm/check.svg"
                size="sm"
                ariaLabel="Liten"
            />
            <Icon
                fileUrl="./icons/open/300/md/check.svg"
                size="md"
                ariaLabel="Medium"
            />
            <Icon
                fileUrl="./icons/open/300/lg/check.svg"
                size="lg"
                ariaLabel="Stor"
            />
            <Icon
                fileUrl="./icons/open/300/xl/check.svg"
                size="xl"
                ariaLabel="Ekstra stor"
            />

            {/* Ikon med ekstra CSS-klasse for farge */}
            <Icon
                fileUrl="./icons/open/300/md/info.svg"
                className="ffe-text-color--vann"
                ariaLabel="Informasjon"
            />

            {/* Ulike linjevekter (300, 400, 500) */}
            <Icon fileUrl="./icons/open/300/md/house.svg" ariaLabel="Tynn" />
            <Icon fileUrl="./icons/open/400/md/house.svg" ariaLabel="Medium" />
            <Icon fileUrl="./icons/open/500/md/house.svg" ariaLabel="Tykk" />
        </div>
    );
}
```

### Ikonsti-format

Ikonene følger dette sti-formatet:

```
./icons/{variant}/{weight}/{size}/{icon-name}.svg
```

- **variant**: `open` eller `filled`
- **weight**: `300`, `400`, eller `500` (linjetykkelse)
- **size**: `sm`, `md`, `lg`, eller `xl`
- **icon-name**: Navnet på ikonet (f.eks. `house`, `star`, `check`)

### Tilgjengelighet

- Sett `ariaLabel` for ikoner som formidler mening
- Utelat `ariaLabel` for dekorative ikoner - komponenten setter da automatisk `aria-hidden="true"`
- Komponenten bruker alltid `role="img"` for riktig semantikk

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
