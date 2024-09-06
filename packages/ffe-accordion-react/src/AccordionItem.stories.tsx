import React from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof AccordionItem> = {
    title: 'components/accordion/AccordionItem',
    component: AccordionItem,
    tags: ['autodocs'],
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
