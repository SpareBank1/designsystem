import React from 'react';
import { Accordion } from './Accordion.tsx';
import { AccordionItem } from './AccordionItem.tsx';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
    title: 'components/accordion/Accordion',
    component: Accordion,
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Standard: Story = {
    args: {
        headingLevel: 2,
    },
    render: args => (
        <Accordion {...args}>
            <AccordionItem heading="Tittel">Skjult innhold</AccordionItem>
            <AccordionItem heading={<span>Enda en tittel</span>}>
                Mer skjult innhold
            </AccordionItem>
            <AccordionItem heading="En siste tittel">
                Enda mer innhold
            </AccordionItem>
        </Accordion>
    ),
};
