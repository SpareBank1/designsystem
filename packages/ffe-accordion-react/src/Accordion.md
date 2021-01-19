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

Alle `<AccordionItem />`-komponenter har innebygget funksjonalitet for å styre åpning og lukking. Men om ønskelig kan du også overstyre dette. Et
bruksområde kan være å lage en komponent som kun kan ha 1. element åpent om gangen.

Bruker man `isOpen`-propen vil intern-logikk som styrer åpning og lukking være skrudd av.

```js
const { useState } = require('react');
const { Accordion, AccordionItem } = require('.');

const ManagedAccordion = () => {
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
};

<ManagedAccordion />;
```
