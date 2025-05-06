import React from 'react';
import { TertiaryButton } from './TertiaryButton';
import type { StoryObj, Meta } from '@storybook/react';
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

const meta: Meta<typeof TertiaryButton<any>> = {
    title: 'Komponenter/Buttons/TertiaryButton',
    component: TertiaryButton,
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
    },
};
export default meta;

type Story = StoryObj<typeof TertiaryButton<any>>;

export const Standard: Story = {
    args: {},
    render: args => <TertiaryButton {...args}>Tertiærknapp</TertiaryButton>,
};

export const DifferentSizes: Story = {
    args: {},
    render: args => {
        return (
            <div className="storybook-button-display-group">
                <TertiaryButton {...args} size="lg">
                    Stor tertiærknapp
                </TertiaryButton>
                <TertiaryButton {...args}>Tertiærknapp</TertiaryButton>
                <TertiaryButton {...args} size="sm">
                    Liten tertiærknapp
                </TertiaryButton>
            </div>
        );
    },
};

export const IconOnly: Story = {
    args: {
        iconOnly: true,
    },
    render: args => (
        <div className="storybook-button-display-group">
            <TertiaryButton
                {...args}
                size="lg"
                aria-label="Stor tertiærknapp med ikon"
            >
                <Icon fileUrl={addReactionIconLg} size="lg" />
            </TertiaryButton>
            <TertiaryButton
                {...args}
                size="md"
                aria-label="Vanlig tertiærknapp med ikon"
            >
                <Icon fileUrl={addReactionIconMd} size="md" />
            </TertiaryButton>
            <TertiaryButton
                {...args}
                size="sm"
                aria-label="Liten tertiærknapp med ikon"
            >
                <Icon fileUrl={addReactionIconSm} size="sm" />
            </TertiaryButton>
        </div>
    ),
};
