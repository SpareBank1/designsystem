import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { PrimaryButton } from './PrimaryButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof PrimaryButton> = {
    title: 'components/buttons/PrimaryButton',
    component: PrimaryButton,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Standard: Story = {
    args: {
        ariaLabel: 'Primærknapp',
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
    },
    render: args => (
        <ButtonGroup>
            <PrimaryButton {...args}>Primærknapp</PrimaryButton>
        </ButtonGroup>
    ),
};
