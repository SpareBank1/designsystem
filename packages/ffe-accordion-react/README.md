# @sb1/ffe-accordion-react

## Installasjon

```bash
npm install --save @sb1/ffe-accordion-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/accordion/.

Denne pakken er avhengig av `@sb1/ffe-collapse-react` og `@sb1/ffe-icons-react`.
Husk å importere less-filene.

## Beskrivelse

Kollapsbare seksjoner for å organisere innhold som kan åpnes og lukkes. `Accordion` håndterer gruppeatferd, mens `AccordionItem` representerer hver seksjon.

Bruk accordeon når innholdet er sekundært eller detaljert, og når brukeren trenger å fokusere på én del om gangen.

## Eksempler

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

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
