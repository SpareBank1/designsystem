# @sb1/ffe-dropdown-react

## Beskrivelse

Enkel nedtrekksliste-komponent (`Dropdown`) for valg fra en liste. Brukes for korte, flate lister der brukeren skal velge ett alternativ.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Dropdown`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-dropdown-react @sb1/ffe-form @sb1/ffe-buttons @sb1/ffe-core
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-form`
- `@sb1/ffe-buttons`
- `@sb1/ffe-core`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-form/css/form.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### Dropdown Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `inline` | `boolean` | Nei | - |

## Eksempler (fra README)

```tsx
import React from 'react';
import { Dropdown } from '@sb1/ffe-dropdown-react';

export function DropdownDemo() {
    const [value, setValue] = React.useState('');
    return (
        <Dropdown
            value={value}
            onChange={e => setValue(e.target.value)}
            aria-label="Velg alternativ"
        >
            <option value="">Velg …</option>
            <option value="a">Alternativ A</option>
            <option value="b">Alternativ B</option>
            <option value="c">Alternativ C</option>
        </Dropdown>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
