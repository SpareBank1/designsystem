import React from 'react';
import { TaskButton } from './TaskButton';
import type { StoryObj, Meta } from '@storybook/react';
import { Icon } from '@sb1/ffe-icons-react';

const meta: Meta<typeof TaskButton<any>> = {
    title: 'Komponenter/Buttons/TaskButton',
    component: TaskButton,
    parameters: {
        docs: {
            description: {
                component:
                    'TaskButton brukes for å starte en oppgave eller handling. Den har støtte for å vise et ikon sammen med teksten.',
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
        icon: {
            description: 'Ikon som vises før teksten',
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

type Story = StoryObj<typeof TaskButton<any>>;

const buttonArgs = {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
};

export const Standard: Story = {
    args: {
        ...buttonArgs,
    },
    render: function Render(args) {
        return (
            <TaskButton
                {...args}
                icon={<Icon fileUrl="./icons/open/300/md/add.svg" />}
            >
                Legg til bruker
            </TaskButton>
        );
    },
};

export const Loading: Story = {
    args: {
        ...buttonArgs,
        isLoading: true,
    },
    render: function Render(args) {
        return (
            <TaskButton
                {...args}
                icon={<Icon fileUrl="./icons/open/300/md/add.svg" />}
            >
                Legger til bruker...
            </TaskButton>
        );
    },
};
