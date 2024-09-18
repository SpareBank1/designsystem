import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { TertiaryButton } from './TertiaryButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof TertiaryButton> = {
    title: 'components/buttons/TertiaryButton',
    component: TertiaryButton,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TertiaryButton>;

export const Standard: Story = {
    args: {
        ariaLabel: 'Tertiærknapp',
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
    },
    render: args => (
        <ButtonGroup>
            <TertiaryButton {...args}>Tertiærknapp</TertiaryButton>
        </ButtonGroup>
    ),
};
