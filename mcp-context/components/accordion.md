# @sb1/ffe-accordion-react

## Beskrivelse

Kollapsbare seksjoner for å organisere innhold som kan åpnes og lukkes. `Accordion` er wrapper-komponenten som definerer overskriftsnivå, `AccordionItem` representerer hver seksjon.

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
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

function MyComponent() {
    return (
        <Accordion headingLevel={2}>
            <AccordionItem heading="Første seksjon">
                Innhold for første seksjon
            </AccordionItem>
            <AccordionItem heading="Andre seksjon">
                Innhold for andre seksjon
            </AccordionItem>
            <AccordionItem heading="Tredje seksjon" defaultOpen>
                Denne seksjonen er åpen som standard
            </AccordionItem>
        </Accordion>
    );
}
```

```tsx
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

function MyComponent() {
    return (
        <Accordion headingLevel={3}>
            <AccordionItem
                heading="Vilkår og betingelser"
                onToggleOpen={isOpen => console.log('Seksjon er nå:', isOpen ? 'åpen' : 'lukket')}
            >
                Her er vilkårene...
            </AccordionItem>
        </Accordion>
    );
}
```

```tsx
import { useState } from 'react';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

function MyComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Accordion headingLevel={2}>
            <AccordionItem
                heading="Kontrollert seksjon"
                isOpen={isOpen}
                onToggleOpen={setIsOpen}
            >
                Denne seksjonen styres av ekstern state
            </AccordionItem>
        </Accordion>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
