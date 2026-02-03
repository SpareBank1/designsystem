# @sb1/ffe-collapse-react

## Beskrivelse

React-komponent for å vise og skjule innhold med animasjon. Bruker CSS grid-animasjon for jevn overgang mellom åpent og lukket tilstand.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Collapse`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-collapse-react
```

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-collapse-react/css/collapse.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### Collapse Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `isOpen` | `boolean` | Ja | - |
| `onRest` | `() => void` | Nei | - |

## Eksempler (fra README)

```tsx
import { Collapse } from '@sb1/ffe-collapse-react';
import { useState } from 'react';

function BasicExample() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Skjul' : 'Vis'} innhold
            </button>
            <Collapse isOpen={isOpen}>
                <p>Dette innholdet kan vises og skjules</p>
            </Collapse>
        </div>
    );
}
```

```tsx
import { Collapse } from '@sb1/ffe-collapse-react';
import { ExpandButton } from '@sb1/ffe-buttons-react';
import { useState } from 'react';

function ExpandButtonExample() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <ExpandButton
                isExpanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Skjul' : 'Vis'} detaljer
            </ExpandButton>
            <Collapse isOpen={isOpen}>
                <p>Detaljert informasjon her</p>
            </Collapse>
        </div>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
