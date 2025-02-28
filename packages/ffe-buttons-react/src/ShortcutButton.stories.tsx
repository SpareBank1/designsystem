import React from 'react';
import { ShortcutButton } from './ShortcutButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ShortcutButton<any>> = {
    title: 'Komponenter/Buttons/ShortcutButton',
    component: ShortcutButton,
    parameters: {
        docs: {
            description: {
                component:
                    'ShortcutButton brukes for å gi rask tilgang til vanlige funksjoner eller handlinger. Den har et enkelt og tydelig design.',
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

type Story = StoryObj<typeof ShortcutButton<any>>;

const buttonArgs = {
    as: 'button',
};

export const Standard: Story = {
    args: {
        ...buttonArgs,
    },
    render: args => <ShortcutButton {...args}>Snarvei</ShortcutButton>,
};

export const WithLongText: Story = {
    args: {
        ...buttonArgs,
    },
    render: args => (
        <ShortcutButton {...args}>Gå til mine forsikringer</ShortcutButton>
    ),
};

export const WithIcon: Story = {
    args: {
        ...buttonArgs,
    },
    render: args => (
        <ShortcutButton {...args}>
            <span role="img" aria-label="dokument">
                📄
            </span>{' '}
            Mine dokumenter
        </ShortcutButton>
    ),
};
