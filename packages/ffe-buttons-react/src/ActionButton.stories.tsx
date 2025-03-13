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
    title: 'Komponenter/Buttons/ActionButton',
    component: ActionButton,
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
        size: {
            options: ['lg', 'md', 'sm'],
            control: { type: 'radio' },
            description: "Størrelse på knappen, 'md' default",
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
    render: args => {
        return (
            <div className="ffe-button-display-group">
                <ActionButton {...args}>Actionknapp</ActionButton>
            </div>
        );
    },
};

export const DifferentSizes: Story = {
    args: {
        as: 'button',
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
    },
    render: args => {
        return (
            <div className="ffe-button-display-group">
                <ActionButton {...args} size="lg">
                    Actionknapp
                </ActionButton>
                <ActionButton {...args}>Actionknapp</ActionButton>
                <ActionButton {...args} size="sm">
                    Actionknapp
                </ActionButton>
            </div>
        );
    },
};
