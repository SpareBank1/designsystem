import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { ActionButton } from './ActionButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ActionButton> = {
    title: 'components/buttons/ActionButton',
    component: ActionButton,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ActionButton>;

export const Standard: Story = {
    args: {
        ariaLabel: 'Actionknapp',
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
    },
    render: args => (
        <ButtonGroup>
            <ActionButton {...args}>Actionknapp</ActionButton>
        </ButtonGroup>
    ),
};
