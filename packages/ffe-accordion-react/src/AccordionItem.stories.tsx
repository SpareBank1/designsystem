import React from 'react';
import { Accordion } from './Accordion.tsx';
import { AccordionItem } from './AccordionItem.tsx';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof AccordionItem> = {
    title: 'Komponenter/Accordion/AccordionItem',
    component: AccordionItem,
    argTypes: {
        ariaLabel: {
            type: 'string',
        },
    },
};
export default meta;

type Story = StoryObj<typeof AccordionItem>;

export const Standard: Story = {
    args: {
        heading: 'Tittel',
        children: 'Skjult innhold',
        isOpen: false,
    },
    render: args => (
        <Accordion headingLevel={2}>
            <AccordionItem {...args} />
        </Accordion>
    ),
};
