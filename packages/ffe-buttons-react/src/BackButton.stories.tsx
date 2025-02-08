import React from 'react';
import { BackButton } from './BackButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof BackButton<any>> = {
    title: 'Komponenter/Buttons/BackButton',
    component: BackButton,
    parameters: {
        docs: {
            description: {
                component:
                    'BackButton brukes for å navigere tilbake til forrige side eller visning. Den har et innebygd tilbake-ikon.',
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
    },
};
export default meta;

type Story = StoryObj<typeof BackButton<any>>;

const buttonArgs = {
    as: 'button',
};

export const Standard: Story = {
    args: {
        ...buttonArgs,
    },
    render: args => <BackButton {...args}>Tilbake</BackButton>,
};

export const WithCustomText: Story = {
    args: {
        ...buttonArgs,
    },
    render: args => (
        <BackButton {...args}>Gå tilbake til oversikten</BackButton>
    ),
};
