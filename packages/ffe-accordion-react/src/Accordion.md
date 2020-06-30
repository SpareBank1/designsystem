```js
const { WhiteAccordion, AccordionItem } = require('.');

<WhiteAccordion>
    <AccordionItem accordionTitle="Tittel">Skjult innhold</AccordionItem>
    <AccordionItem accordionTitle="Enda en tittel">
        Mer skjult innhold
    </AccordionItem>
    <AccordionItem accordionTitle="En siste tittel">
        Enda mer innhold
    </AccordionItem>
</WhiteAccordion>;
```

Alle `<AccordionItem />`-komponenter er lukket by default. Du kan også velge at et AccordionItem er åpent til å begynne med (man kan fortsatt lukke det):

```js
const { WhiteAccordion, AccordionItem } = require('.');

<WhiteAccordion>
    <AccordionItem defaultOpen={true} title="Åpen!">
        Her er info du kan se med EN gang!
    </AccordionItem>
    <AccordionItem accordionTitle="Lukket">Skjult innhold</AccordionItem>
    <AccordionItem accordionTitle="Denne er også lukket">
        Enda mer innhold
    </AccordionItem>
</WhiteAccordion>;
```
