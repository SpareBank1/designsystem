import React from 'react';
import { ActionButton } from './ActionButton';
import type { StoryObj, Meta } from '@storybook/react';

const Custom: React.FC<React.ComponentProps<'a'>> = props => (
    <a {...props}>
        {`Custom `}
        {props.children}
    </a>
);

const meta: Meta<typeof ActionButton<any>> = {
    title: 'components/buttons/ActionButton',
    component: ActionButton,
    tags: ['autodocs'],
    argTypes: {
        as: {
            options: ['a', 'button', 'custom'],
            mapping: {
                '': 'a',
                a: 'a',
                button: 'button',
                custom: Custom,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof ActionButton<any>>;

export const Standard: Story = {
    args: {
        as: 'button',
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
    },
    render: args => <ActionButton {...args}>Actionknapp</ActionButton>,
};
