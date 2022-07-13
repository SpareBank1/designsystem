import { useState } from 'react';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

() => {
    const [openElementId, setOpenElementId] = useState(0);

    const createOnToggleOpenHandler = id => isOpen => {
        if (isOpen) {
            setOpenElementId(id);
        }
    };

    return (
        <Accordion headingLevel={3}>
            <AccordionItem
                isOpen={openElementId === 0}
                onToggleOpen={createOnToggleOpenHandler(0)}
                heading="Starter åpen"
            >
                Element med ID=0
            </AccordionItem>
            <AccordionItem
                isOpen={openElementId === 1}
                onToggleOpen={createOnToggleOpenHandler(1)}
                heading="Starter lukket"
            >
                Element med ID=1
            </AccordionItem>
            <AccordionItem
                isOpen={openElementId === 2}
                onToggleOpen={createOnToggleOpenHandler(2)}
                heading="Starter også lukket"
            >
                Element med ID=2
            </AccordionItem>
        </Accordion>
    );
}
