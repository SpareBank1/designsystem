import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { TertiaryButton } from './TertiaryButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ButtonGroup> = {
    title: 'Komponenter/Buttons/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        docs: {
            description: {
                component:
                    'ButtonGroup brukes for å gruppere relaterte knapper sammen. Den sørger for riktig spacing mellom knappene og korrekt visuell presentasjon.',
            },
        },
    },
    argTypes: {
        thin: {
            description: 'Reduserer avstanden mellom knappene',
            control: 'boolean',
        },
        ariaLabel: {
            description: 'Beskrivende tekst for skjermlesere',
            control: 'text',
        },
    },
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

const groupArgs = {
    ariaLabel: 'Knappegruppe',
    thin: false,
};

export const Standard: Story = {
    args: {
        ...groupArgs,
    },
    render: args => (
        <ButtonGroup {...args}>
            <SecondaryButton>Forrige</SecondaryButton>
            <PrimaryButton>Neste</PrimaryButton>
            <TertiaryButton>Avbryt</TertiaryButton>
        </ButtonGroup>
    ),
};

export const ThinSpacing: Story = {
    args: {
        ...groupArgs,
        thin: true,
    },
    render: args => (
        <ButtonGroup {...args}>
            <SecondaryButton>Nei</SecondaryButton>
            <PrimaryButton>Ja</PrimaryButton>
        </ButtonGroup>
    ),
};

export const WithLoadingState: Story = {
    args: {
        ...groupArgs,
    },
    render: args => (
        <ButtonGroup {...args}>
            <SecondaryButton>Tilbake</SecondaryButton>
            <PrimaryButton
                isLoading={true}
                ariaLoadingMessage="Sender inn skjema"
            >
                Send inn
            </PrimaryButton>
        </ButtonGroup>
    ),
};
