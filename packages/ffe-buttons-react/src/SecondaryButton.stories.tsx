import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { SecondaryButton } from './SecondaryButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SecondaryButton> = {
    title: 'components/buttons/SecondaryButton',
    component: SecondaryButton,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SecondaryButton>;

export const Standard: Story = {
    args: {
        ariaLabel: 'Sekundærknapp',
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
    },
    render: args => (
        <ButtonGroup>
            <SecondaryButton {...args}>Sekundærknapp</SecondaryButton>
        </ButtonGroup>
    ),
};
