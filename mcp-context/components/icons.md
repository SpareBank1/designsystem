# @sb1/ffe-icons-react

## Beskrivelse

Ikonkomponenter for å vise vektorikoner konsistent i FFE. `Icon` støtter valg av ikonnavn, størrelse og dekorasjon, og integreres med ikonsettet i `@sb1/ffe-icons`.

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-icons-react @sb1/ffe-icons
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-icons`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## Eksempler (fra README)

```tsx
import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';

export function IconsDemo() {
    return (
        <div>
            {/* Standard ikon */}
            <Icon name="check" aria-label="Fullført" />

            {/* Dekorativt ikon (skjult fra skjermleser) */}
            <Icon name="arrow-right" aria-hidden />

            {/* Størrelse og farge styres via CSS-klasser */}
            <Icon
                name="info"
                className="ffe-icon--large ffe-text-color--vann"
                aria-label="Info"
            />
        </div>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
