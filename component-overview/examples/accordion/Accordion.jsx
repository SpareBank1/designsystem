import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

<Accordion headingLevel={2}>
    <AccordionItem heading="Tittel">Skjult innhold</AccordionItem>
    <AccordionItem heading={<span>Enda en tittel</span>}>
        Mer skjult innhold
    </AccordionItem>
    <AccordionItem heading="En siste tittel">Enda mer innhold</AccordionItem>
</Accordion>
