import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof PrimaryButton<any>> = {
    title: 'Komponenter/Buttons/PrimaryButton',
    component: PrimaryButton,
    parameters: {
        docs: {
            description: {
                component:
                    'PrimaryButton er hovedknappen i designsystemet. Den brukes for å fremheve den viktigste handlingen på siden.',
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

type Story = StoryObj<typeof PrimaryButton<any>>;

const buttonArgs = {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
};

export const Standard: Story = {
    args: {
        ...buttonArgs,
        as: 'button',
    },
    render: args => <PrimaryButton {...args}>Primærknapp</PrimaryButton>,
};

export const Loading: Story = {
    args: {
        ...buttonArgs,
        as: 'button',
        isLoading: true,
    },
    render: args => <PrimaryButton {...args}>Laster inn...</PrimaryButton>,
};

export const WithIcon: Story = {
    args: {
        ...buttonArgs,
        as: 'button',
    },
    render: args => (
        <PrimaryButton {...args}>
            <span role="img" aria-label="checkmark">
                ✓
            </span>{' '}
            Fullført
        </PrimaryButton>
    ),
};
