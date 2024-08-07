import React from 'react';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';
import './commonStyles';
import '@sb1/ffe-accordion/less/ffe-accordion.less';
import '@sb1/ffe-collapse-react/less/collapse.less';
import '@sb1/ffe-icons/less/ffe-icons.less';

import type { StoryObj } from '@storybook/react';

const meta = {
    title: 'components/Accordion',
    component: Accordion,
    subcomponents: { AccordionItem },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    /*    args: { onClick: fn() },*/
};
export default meta;

type Story = StoryObj<typeof meta>;

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
