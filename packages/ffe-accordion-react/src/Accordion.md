Brukt til prisliste, arkiv (nyheter, presse- og børsmeldinger). Hele raden med overskrifter er klikkbar.

Det finnes to forskjellige versjoner av `Accordion` - hvit og blå:

```js
const { WhiteAccordion, AccordionItem } = require('.');

<WhiteAccordion>
    <AccordionItem expandedContent="Skjult innhold">Tittel</AccordionItem>
    <AccordionItem expandedContent="Mer skjult innhold">Enda en tittel</AccordionItem>
    <AccordionItem expandedContent="Enda mer innhold">En siste tittel</AccordionItem>
</WhiteAccordion>
```

```js
const { BlueAccordion, AccordionItem } = require('.');

<BlueAccordion>
    <AccordionItem expandedContent="Skjult innhold">Tittel</AccordionItem>
    <AccordionItem expandedContent="Mer skjult innhold">Enda en tittel</AccordionItem>
    <AccordionItem expandedContent="Enda mer innhold">En siste tittel</AccordionItem>
</BlueAccordion>
```

Alle `<AccordionItem />`-komponenter er lukket by default. Du kan også velge at et AccordionItem er åpent
til å begynne med (man kan fortsatt lukke det):

```js
const { WhiteAccordion, AccordionItem } = require('.');

<WhiteAccordion>
    <AccordionItem isOpen={true} expandedContent="Her er info du kan se med EN gang!">Åpen!</AccordionItem>
    <AccordionItem expandedContent="Skjult innhold">Lukket</AccordionItem>
    <AccordionItem expandedContent="Enda mer innhold">Denne er også lukket</AccordionItem>
</WhiteAccordion>
```

