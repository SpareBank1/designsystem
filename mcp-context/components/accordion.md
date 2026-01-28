# @sb1/ffe-accordion-react

## Beskrivelse

Kollapsbare seksjoner for å organisere innhold som kan åpnes og lukkes. `Accordion` håndterer gruppeatferd, mens `AccordionItem` representerer hver seksjon.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Accordion`
- `AccordionItem`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-accordion-react @sb1/ffe-accordion @sb1/ffe-collapse-react @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-accordion`
- `@sb1/ffe-collapse-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-accordion/css/ffe-accordion.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### Accordion Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `headingLevel` | `1 | 2 | 3 | 4 | 5 | 6` | Ja | - |

### AccordionItem Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `heading` | `NonNullable<React.ReactNode>` | Ja | The heading |
| `children` | `NonNullable<React.ReactNode>` | Ja | The content to appear when expanded |
| `defaultOpen` | `boolean` | Nei | Should it be open by default |
| `isOpen` | `boolean` | Nei | Is the item open or collapsed? Used for overriding default behaviour |
| `onToggleOpen` | `(isOpen: boolean) => void` | Nei | Callback when the item is open/closed |
| `ariaLabel` | `string` | Nei | aria-label for the button |
| `noPadding` | `boolean` | Nei | Ingen padding i body-elementet hvis man ønsker egen styling |

## Eksempler (fra README)

```tsx
import React from 'react';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

export function AccordionDemo() {
    const [open, setOpen] = React.useState<number | null>(0);
    return (
        <Accordion openItem={open} onChange={setOpen}>
            <AccordionItem title="Seksjon 1" id="acc-1">
                Innhold for seksjon 1
            </AccordionItem>
            <AccordionItem title="Seksjon 2" id="acc-2">
                Innhold for seksjon 2
            </AccordionItem>
            <AccordionItem title="Seksjon 3" id="acc-3">
                Innhold for seksjon 3
            </AccordionItem>
        </Accordion>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
