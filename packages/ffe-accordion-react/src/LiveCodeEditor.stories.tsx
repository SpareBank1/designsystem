import type { StoryObj, Meta } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Accordion> = {
    title: 'Komponenter/Accordion/Live Code Editor',
    component: Accordion,
    parameters: {
        docs: {
            description: {
                component: 'Live code editor for Accordion komponenten med syntax highlighting og real-time preview.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Define simplified templates for accordion
const accordionTemplates = {
    enkelt: {
        name: 'Enkelt',
        icon: '📝',
        code: `<Accordion headingLevel={2}>
    <AccordionItem heading="Enkelt eksempel">
        Dette er et enkelt accordion-eksempel som fungerer!
    </AccordionItem>
</Accordion>`
    },
    multiple: {
        name: 'Flere elementer',
        icon: '📚',
        code: `<Accordion headingLevel={2}>
    <AccordionItem heading="Første seksjon">
        Innhold i første seksjon.
    </AccordionItem>
    <AccordionItem heading="Andre seksjon" isOpen={true}>
        Denne er åpen som standard.
    </AccordionItem>
    <AccordionItem heading="Tredje seksjon">
        Mer innhold her.
    </AccordionItem>
</Accordion>`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveExample() {
    const [count, setCount] = useState(0);
    return (
        <Accordion headingLevel={2}>
            <AccordionItem heading="Interaktiv eksempel">
                <div>
                    <p>Du har klikket {count} ganger</p>
                    <p>Accordion kan inneholde interaktivt innhold.</p>
                </div>
            </AccordionItem>
        </Accordion>
    );
}

<InteractiveExample />`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Accordion, {
    templates: accordionTemplates,
    additionalComponents: {
        AccordionItem
    },
    defaultTemplate: 'enkelt',
    title: 'Accordion Live Code Editor',
    description: 'Live code editor for Accordion komponenten med alle templates og funksjonalitet.'
});
