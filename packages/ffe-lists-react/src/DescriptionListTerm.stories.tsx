import React from 'react';
import { DescriptionListTerm } from './DescriptionListTerm';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof DescriptionListTerm> = {
    title: 'Komponenter/Lists/DescriptionListTerm',
    component: DescriptionListTerm,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DescriptionListTerm>;

export const Standard: Story = {
    args: {},
    render: args => <DescriptionListTerm {...args}>Navn</DescriptionListTerm>,
};
