import { Icon } from '@sb1/ffe-icons-react';
import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import type { StoryObj, Meta } from '@storybook/react';
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

const meta: Meta<typeof PrimaryButton<any>> = {
    title: 'Komponenter/Buttons/PrimaryButton',
    component: PrimaryButton,
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

type Story = StoryObj<typeof PrimaryButton<any>>;

export const Standard: Story = {
    args: {
        as: 'button',
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
    },
    render: args => <PrimaryButton {...args}>Primary Button</PrimaryButton>,
};

export const DifferentSizes: Story = {
    args: {
        as: 'button',
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
    },
    render: args => (
        <div className="ffe-button-display-group">
            <PrimaryButton {...args} size="lg">
                Stor knapp
            </PrimaryButton>
            <PrimaryButton {...args}>Default knapp</PrimaryButton>
            <PrimaryButton {...args} size="sm">
                Liten knapp
            </PrimaryButton>
        </div>
    ),
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
            <PrimaryButton {...args} size="lg">
                <Icon fileUrl={addReactionIconLg} size="lg" />
            </PrimaryButton>
            <PrimaryButton {...args} size="md">
                <Icon fileUrl={addReactionIconMd} size="md" />
            </PrimaryButton>
            <PrimaryButton {...args} size="sm">
                <Icon fileUrl={addReactionIconSm} size="sm" />
            </PrimaryButton>
        </div>
    ),
};
