# @sb1/ffe-accordion-react

## Install

```bash
npm install --save @sb1/ffe-accordion-react
```

## Usage

Full documentation on accordion usage is available at https://design.sparebank1.no/komponenter/accordion/.

This package depends on `@sb1/ffe-collapse-react` and `@sb1/ffe-icons-react`.
Make sure you import the less-files.

## Description

Kollapsbare seksjoner for å organisere innhold som kan åpnes og lukkes. `Accordion` håndterer gruppeatferd, mens `AccordionItem` representerer hver seksjon.

Bruk accordeon når innholdet er sekundært eller detaljert, og når brukeren trenger å fokusere på én del om gangen.

## Examples

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

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
