import React, { useEffect, useState } from 'react';
import { SecondaryButton } from './SecondaryButton';
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
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
    },
    render: args => {
        return <SecondaryButton {...args}>Sekundærknapp</SecondaryButton>;
    },
};

export const DifferentSizes: Story = {
    args: {
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
    },
    render: args => (
        <div className="storybook-button-display-group">
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

export const Progress: Story = {
    args: {
        progress: 40,
    },
    argTypes: {
        progress: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
            description:
                'Determinate fremdrift i prosent (0–100). Viser en fyll-bar som vokser over knappen.',
        },
    },
    render: args => <SecondaryButton {...args}>Lagrer …</SecondaryButton>,
};

export const Pulse: Story = {
    render: function Render() {
        const [progress, setProgress] = useState(0);
        const [pulseKey, setPulseKey] = useState(0);
        // Simulate polling: a tick every second advances progress and pulses.
        useEffect(() => {
            const id = setInterval(() => {
                setProgress(p => (p >= 90 ? 0 : p + 15));
                setPulseKey(k => k + 1);
            }, 1000);
            return () => clearInterval(id);
        }, []);
        return (
            <div className="storybook-button-display-group">
                <SecondaryButton progress={progress} pulseKey={pulseKey}>
                    Henter status …
                </SecondaryButton>
            </div>
        );
    },
};

export const IconOnly: Story = {
    args: {
        ariaLoadingMessage: 'Vennligst vent...',
        isLoading: false,
        iconOnly: true,
    },
    render: args => (
        <div className="storybook-button-display-group">
            <SecondaryButton
                {...args}
                size="lg"
                aria-label="Stor sekundærknapp med ikon"
            >
                <Icon fileUrl={addReactionIconLg} size="lg" />
            </SecondaryButton>
            <SecondaryButton
                {...args}
                size="md"
                aria-label="Vanlig sekundærknapp med ikon"
            >
                <Icon fileUrl={addReactionIconMd} size="md" />
            </SecondaryButton>
            <SecondaryButton
                {...args}
                size="sm"
                aria-label="Liten sekundærknapp med ikon"
            >
                <Icon fileUrl={addReactionIconSm} size="sm" />
            </SecondaryButton>
        </div>
    ),
};
