import React from 'react';
import { DescriptionListDescription } from './DescriptionListDescription';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof DescriptionListDescription> = {
    title: 'Komponenter/Lists/DescriptionListDescription',
    component: DescriptionListDescription,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DescriptionListDescription>;

export const Standard: Story = {
    args: {},
    render: args => (
        <DescriptionListDescription {...args}>
            Navn Navnesen
        </DescriptionListDescription>
    ),
};
