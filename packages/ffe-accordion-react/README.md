# @sb1/ffe-accordion-react

## Beskrivelse

Kollapsbare seksjoner for å organisere innhold som kan åpnes og lukkes. `Accordion` er wrapper-komponenten som definerer overskriftsnivå, `AccordionItem` representerer hver seksjon.

Bruk accordion når innholdet er sekundært eller detaljert, og når brukeren trenger å fokusere på én del om gangen.

## Installasjon

```bash
npm install --save @sb1/ffe-accordion-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/accordion/.

Denne pakken er avhengig av `@sb1/ffe-collapse-react` og `@sb1/ffe-icons-react`.
Husk å importere less-filene.

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

### Med callback ved åpning/lukking

```tsx
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

function MyComponent() {
    return (
        <Accordion headingLevel={3}>
            <AccordionItem
                heading="Vilkår og betingelser"
                onToggleOpen={isOpen =>
                    console.log('Seksjon er nå:', isOpen ? 'åpen' : 'lukket')
                }
            >
                Her er vilkårene...
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

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
