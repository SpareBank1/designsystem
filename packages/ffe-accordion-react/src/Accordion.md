Brukt til prisliste, arkiv (nyheter, presse- og børsmeldinger). Hele raden med overskrifter er klikkbar.

Det finnes to forskjellige versjoner av `Accordion` - hvit og blå:

```js
import { WhiteAccordion, AccordionItem } from 'ffe-accordion-react';

<WhiteAccordion>
    <AccordionItem title="Tittel">Skjult innhold</AccordionItem>
    <AccordionItem title="Enda en tittel">Mer skjult innhold</AccordionItem>
    <AccordionItem title="En siste tittel">Enda mer innhold</AccordionItem>
</WhiteAccordion>
```

```js
import { BlueAccordion, AccordionItem } from 'ffe-accordion-react';

<BlueAccordion>
    <AccordionItem title="Tittel">Skjult innhold</AccordionItem>
    <AccordionItem title="Enda en tittel">Mer skjult innhold</AccordionItem>
    <AccordionItem title="En siste tittel">Enda mer innhold</AccordionItem>
</BlueAccordion>
```

Alle `<AccordionItem />`-komponenter er lukket by default. Du kan også velge at et AccordionItem er åpent
til å begynne med (man kan fortsatt lukke det):

```js
import { WhiteAccordion, AccordionItem } from 'ffe-accordion-react';

<WhiteAccordion>
    <AccordionItem isOpen={true} title="Åpen!">Her er info du kan se med EN gang!</AccordionItem>
    <AccordionItem title="Lukket">Skjult innhold</AccordionItem>
    <AccordionItem title="Denne er også lukket">Enda mer innhold</AccordionItem>
</WhiteAccordion>
```
