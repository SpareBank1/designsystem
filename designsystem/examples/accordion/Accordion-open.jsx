import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

<Accordion headingLevel={3}>
    <AccordionItem defaultOpen={true} heading="Åpen!">
        Her er info du kan se med EN gang!
    </AccordionItem>
    <AccordionItem heading="Lukket">Skjult innhold</AccordionItem>
    <AccordionItem heading="Denne er også lukket">
        Enda mer innhold
    </AccordionItem>
</Accordion>
