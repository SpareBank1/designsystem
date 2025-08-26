import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AnimatedWave } from './AnimatedWave';

const meta: Meta<typeof AnimatedWave> = {
    title: 'Komponenter/Shapes/AnimatedWave',
    component: AnimatedWave,
    parameters: {
        docs: {
            description: {
                component: 'En animert bølge-komponent som kan brukes som bakgrunn eller dekorativt element. Støtter tilpassbar høyde, amplitude, hastighet og farger.',
            },
        },
    },
    argTypes: {
        height: {
            control: { type: 'range', min: 100, max: 800, step: 50 },
            description: 'Høyde på SVG-elementet',
        },
        amplitude: {
            control: { type: 'range', min: 10, max: 100, step: 5 },
            description: 'Amplitude på bølgen (bølgehøyde)',
        },
        speed: {
            control: { type: 'range', min: 0.1, max: 5, step: 0.1 },
            description: 'Animasjonshastighet',
        },
        points: {
            control: { type: 'range', min: 3, max: 15, step: 1 },
            description: 'Antall punkter som brukes for bølgen',
        },
        align: {
            control: { type: 'select' },
            options: ['top', 'bottom'],
            description: 'Bølgejustering - topp eller bunn',
        },
        sharpness: {
            control: { type: 'range', min: 0, max: 1, step: 0.1 },
            description: 'Hvor skarp/glatt kurven er (0-1)',
        },
        fill: {
            control: { type: 'color' },
            description: 'Fyllkfarge for bølgen',
        },
        paused: {
            control: { type: 'boolean' },
            description: 'Om animasjonen er pauset',
        },
        dynamicHeight: {
            control: { type: 'boolean' },
            description: 'Setter høyde på bølge i henhold til innholdshøyde',
        },
    },
};

export default meta;

type Story = StoryObj<typeof AnimatedWave>;

export const Standard: Story = {
    args: {
        height: 300,
        dynamicHeight: false,
    },
    render: args => (
        <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <AnimatedWave {...args} />
        </div>
    ),
};

export const WithContent: Story = {
    args: {
        height: 400,
        dynamicHeight: false,
        amplitude: 40,
        fill: '#005AA4',
    },
    render: args => (
        <div style={{ width: '100%', height: '500px', position: 'relative' }}>
            <AnimatedWave {...args}>
                <div style={{ padding: '60px 20px', textAlign: 'center', color: 'white' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', margin: 0 }}>
                        Animert Bølge
                    </h2>
                    <p style={{ fontSize: '1.2rem', margin: 0 }}>
                        Dette er innhold som vises over den animerte bølgen
                    </p>
                </div>
            </AnimatedWave>
        </div>
    ),
};

export const TopAligned: Story = {
    args: {
        height: 300,
        align: 'top',
        amplitude: 30,
        fill: '#00C896',
        dynamicHeight: false,
    },
    render: args => (
        <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <AnimatedWave {...args}>
                <div style={{ padding: '20px', textAlign: 'center', color: 'white' }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>Topp-justert bølge</h3>
                    <p style={{ margin: 0 }}>Bølgen starter fra toppen</p>
                </div>
            </AnimatedWave>
        </div>
    ),
};

export const HighAmplitude: Story = {
    args: {
        height: 350,
        amplitude: 80,
        speed: 0.8,
        fill: '#FF6B35',
        dynamicHeight: false,
    },
    render: args => (
        <div style={{ width: '100%', height: '450px', position: 'relative' }}>
            <AnimatedWave {...args}>
                <div style={{ padding: '40px 20px', textAlign: 'center', color: 'white' }}>
                    <h3 style={{ margin: '0 0 15px 0' }}>Høy amplitude</h3>
                    <p style={{ margin: 0 }}>Store bølger med høy amplitude</p>
                </div>
            </AnimatedWave>
        </div>
    ),
};

export const FastAnimation: Story = {
    args: {
        height: 250,
        amplitude: 25,
        speed: 3,
        fill: '#8E44AD',
        dynamicHeight: false,
    },
    render: args => (
        <div style={{ width: '100%', height: '350px', position: 'relative' }}>
            <AnimatedWave {...args}>
                <div style={{ padding: '30px 20px', textAlign: 'center', color: 'white' }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>Rask animasjon</h3>
                    <p style={{ margin: 0 }}>Høy hastighet på animasjonen</p>
                </div>
            </AnimatedWave>
        </div>
    ),
};

export const ManyPoints: Story = {
    args: {
        height: 300,
        amplitude: 35,
        points: 12,
        speed: 1.2,
        fill: '#E74C3C',
        dynamicHeight: false,
    },
    render: args => (
        <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <AnimatedWave {...args}>
                <div style={{ padding: '40px 20px', textAlign: 'center', color: 'white' }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>Mange punkter</h3>
                    <p style={{ margin: 0 }}>Mer detaljerte bølger med flere punkter</p>
                </div>
            </AnimatedWave>
        </div>
    ),
};

export const Paused: Story = {
    args: {
        height: 300,
        amplitude: 40,
        paused: true,
        fill: '#95A5A6',
        dynamicHeight: false,
    },
    render: args => (
        <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <AnimatedWave {...args}>
                <div style={{ padding: '40px 20px', textAlign: 'center', color: 'white' }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>Pauset animasjon</h3>
                    <p style={{ margin: 0 }}>Bølgen er statisk når animasjonen er pauset</p>
                </div>
            </AnimatedWave>
        </div>
    ),
};

export const Playground: Story = {
    args: {
        height: 300,
        amplitude: 30,
        speed: 1,
        points: 6,
        align: 'bottom',
        sharpness: 0.5,
        fill: '#005AA4',
        paused: false,
        dynamicHeight: false,
    },
    render: args => (
        <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <AnimatedWave {...args}>
                <div style={{ padding: '40px 20px', textAlign: 'center', color: 'white' }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>Eksperimenter</h3>
                    <p style={{ margin: 0 }}>Bruk kontrollene til å justere bølgen</p>
                </div>
            </AnimatedWave>
        </div>
    ),
};
