```js
const { Accordion, AccordionItem } = require('.');

<Accordion headingLevel={2}>
    <AccordionItem heading="Tittel">Skjult innhold</AccordionItem>
    <AccordionItem heading={<span>Enda en tittel</span>}>
        Mer skjult innhold
    </AccordionItem>
    <AccordionItem heading="En siste tittel">Enda mer innhold</AccordionItem>
</Accordion>;
```

Alle `<AccordionItem />`-komponenter er lukket by default. Du kan også velge at et AccordionItem er åpent til å begynne med (man kan fortsatt lukke det):

```js
const { Accordion, AccordionItem } = require('.');

<Accordion headingLevel={3}>
    <AccordionItem defaultOpen={true} heading="Åpen!">
        Her er info du kan se med EN gang!
    </AccordionItem>
    <AccordionItem heading="Lukket">Skjult innhold</AccordionItem>
    <AccordionItem heading="Denne er også lukket">
        Enda mer innhold
    </AccordionItem>
</Accordion>;
```
