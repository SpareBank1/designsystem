import React from 'react';
import { SecondaryButton } from './SecondaryButton';
import type { StoryObj, Meta } from '@storybook/react';

const Custom: React.FC<React.ComponentProps<'a'>> = props => (
    <a {...props}>
        {`Custom `}
        {props.children}
    </a>
);

const meta: Meta<typeof SecondaryButton<any>> = {
    title: 'Komponenter/Buttons/SecondaryButton',
    component: SecondaryButton,
    argTypes: {
        as: {
            options: ['a', 'button', 'custom'],
            mapping: {
                '': 'button',
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

type Story = StoryObj<typeof SecondaryButton<any>>;

export const Standard: Story = {
    args: {
        as: 'button',
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
    },
    render: args => {
        return (
            <div className="ffe-button-display-group">
                <SecondaryButton {...args}>Sekundærknapp</SecondaryButton>
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
    render: args => (
        <div className="ffe-button-display-group">
            <SecondaryButton {...args} size="lg">
                Sekundærknapp
            </SecondaryButton>
            <SecondaryButton {...args}>Sekundærknapp</SecondaryButton>
            <SecondaryButton {...args} size="sm">
                Sekundærknapp
            </SecondaryButton>
        </div>
    ),
};
