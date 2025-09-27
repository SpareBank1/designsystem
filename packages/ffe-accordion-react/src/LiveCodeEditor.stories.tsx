import type { Meta, StoryObj } from '@storybook/react';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';

const meta: Meta<typeof Accordion> = {
    title: 'Komponenter/Accordion/Live Code Editor',
    component: Accordion,
    parameters: {
        docs: {
            description: {
                component:
                    'Live code editor for Accordion komponenten med syntax highlighting og real-time preview.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Define simplified templates for accordion
const accordionTemplates = {
    basic: {
        name: 'Grunnleggende',
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
</Accordion>`,
    },
};

export const LiveCodeEditor: Story = createLiveCodeStory(Accordion, {
    templates: accordionTemplates,
    additionalComponents: {
        AccordionItem,
    },
    defaultTemplate: 'basic',
    title: 'Accordion Live Code Editor',
    description: 'Her kan du endre på et eksempel med bruk av Accordion.',
});
