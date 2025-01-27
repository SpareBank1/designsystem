import React from 'react';
import { SecondaryButton } from './SecondaryButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SecondaryButton<any>> = {
    title: 'Komponenter/Buttons/SecondaryButton',
    component: SecondaryButton,
    parameters: {
        docs: {
            description: {
                component:
                    'SecondaryButton brukes for mindre viktige handlinger på siden, eller som et alternativ til primærknappen når det er flere likeverdige valg.',
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
        dark: {
            description: 'Mørk variant av knappen for bruk på lys bakgrunn',
            control: 'boolean',
        },
    },
};
export default meta;

type Story = StoryObj<typeof SecondaryButton<any>>;

const buttonArgs = {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
    dark: false,
};

export const Standard: Story = {
    args: {
        ...buttonArgs,
        as: 'button',
    },
    render: args => <SecondaryButton {...args}>Sekundærknapp</SecondaryButton>,
};

export const Dark: Story = {
    args: {
        ...buttonArgs,
        as: 'button',
        dark: true,
    },
    render: args => (
        <SecondaryButton {...args}>Mørk sekundærknapp</SecondaryButton>
    ),
};

export const Loading: Story = {
    args: {
        ...buttonArgs,
        as: 'button',
        isLoading: true,
    },
    render: args => <SecondaryButton {...args}>Laster inn...</SecondaryButton>,
};

export const WithIcon: Story = {
    args: {
        ...buttonArgs,
        as: 'button',
    },
    render: args => (
        <SecondaryButton {...args}>
            <span role="img" aria-label="settings">
                ⚙️
            </span>{' '}
            Innstillinger
        </SecondaryButton>
    ),
};
