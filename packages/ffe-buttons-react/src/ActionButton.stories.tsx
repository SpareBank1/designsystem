import React from 'react';
import { ActionButton } from './ActionButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ActionButton<any>> = {
    title: 'Komponenter/Buttons/ActionButton',
    component: ActionButton,
    parameters: {
        docs: {
            description: {
                component:
                    'ActionButton er en knapp som brukes for å trigge en handling.',
            },
        },
    },
    argTypes: {
        as: {
            description: 'HTML-elementet som skal brukes',
            options: ['button'],
            mapping: {
                '': 'button',
                button: 'button',
            },
        },
        isLoading: {
            description: 'Viser en spinner når knappen laster',
            control: 'boolean',
        },
        ariaLoadingMessage: {
            description:
                'Tekst som leses opp av skjermleser når knappen laster',
        },
    },
};
export default meta;

type Story = StoryObj<typeof ActionButton<any>>;

const buttonArgs = {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
};

export const Standard: Story = {
    args: {
        ...buttonArgs,
        as: 'button',
    },
    render: args => <ActionButton {...args}>Actionknapp</ActionButton>,
};

export const Loading: Story = {
    args: {
        ...buttonArgs,
        as: 'button',
        isLoading: true,
    },
    render: args => <ActionButton {...args}>Laster inn...</ActionButton>,
};
