import React from 'react';
import { ActionButton } from './ActionButton';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@sb1/ffe-icons-react';
import {
    addReactionIconLg,
    addReactionIconMd,
    addReactionIconSm,
} from './assets/IconExamples';

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
                    Stor Actionknapp
                </ActionButton>
                <ActionButton {...args}>Actionknapp</ActionButton>
                <ActionButton {...args} size="sm">
                    Liten Actionknapp
                </ActionButton>
            </div>
        );
    },
};

export const IconOnly: Story = {
    args: {
        as: 'button',
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
        iconOnly: true,
    },
    render: args => (
        <div className="ffe-button-display-group">
            <ActionButton
                {...args}
                size="lg"
                aria-label="Stor actionknapp med ikon"
            >
                <Icon fileUrl={addReactionIconLg} size="lg" />
            </ActionButton>
            <ActionButton
                {...args}
                size="md"
                aria-label="Vanlig actionknapp med ikon"
            >
                <Icon fileUrl={addReactionIconMd} size="md" />
            </ActionButton>
            <ActionButton
                {...args}
                size="sm"
                aria-label="Liten actionknapp med ikon"
            >
                <Icon fileUrl={addReactionIconSm} size="sm" />
            </ActionButton>
        </div>
    ),
};
