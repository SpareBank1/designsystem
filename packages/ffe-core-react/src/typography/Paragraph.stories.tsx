import React from 'react';
import { Paragraph } from './Paragraph';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Paragraph> = {
    title: 'Komponenter/Core/Paragraph',
    component: Paragraph,
};
export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Standard: Story = {
    args: {
        lead: false,
        subLead: false,
        textCenter: false,
        textLeft: false,
        noMargin: false,
        children: 'Some text',
    },
    render: args => <Paragraph {...args} />,
};
