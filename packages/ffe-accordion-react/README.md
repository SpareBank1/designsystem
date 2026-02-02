# @sb1/ffe-accordion-react

## Beskrivelse

Kollapsbare seksjoner for å organisere innhold. `Accordion` er wrapper-komponenten, `AccordionItem` representerer hver seksjon.

## Installasjon

```bash
npm install --save @sb1/ffe-accordion-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/

Avhengig av `@sb1/ffe-collapse-react` og `@sb1/ffe-icons-react`. Importer styling:

```css
@import '@sb1/ffe-accordion/css/accordion.css';
```

## Eksempler

### Enkel bruk

```tsx
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

function MyComponent() {
    return (
        <Accordion headingLevel={2}>
            <AccordionItem heading="Første seksjon">
                Innhold for første seksjon
            </AccordionItem>
            <AccordionItem heading="Andre seksjon" defaultOpen>
                Denne seksjonen er åpen som standard
            </AccordionItem>
        </Accordion>
    );
}
```

### Kontrollert modus

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

## Utvikling

```bash
npm install && npm run build && npm start
```

Storybook kjører på http://localhost:6006/.
