import { CardGroup } from '@sb1/ffe-cards-react/src/CardGroup/CardGroup';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

() => {
    return (
        <CardGroup shadow={true}>
            <div>Egen heading</div>
            <Accordion headingLevel={2}>
                <AccordionItem heading="Tittel 1">Skjult innhold</AccordionItem>
                <AccordionItem heading="Tittel 2">Skjult innhold</AccordionItem>
                <AccordionItem heading="Tittel 3">Skjult innhold</AccordionItem>
            </Accordion>
        </CardGroup>
    );
};
