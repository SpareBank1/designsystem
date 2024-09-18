import React from 'react';
import { BackButton } from './BackButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof BackButton> = {
    title: 'components/buttons/BackButton',
    component: BackButton,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof BackButton>;

export const Standard: Story = {
    render: args => <BackButton {...args}>Tilbake</BackButton>,
};
