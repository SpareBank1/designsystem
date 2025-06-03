import type { StoryObj, Meta } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { ActionButton } from './ActionButton';
import { TertiaryButton } from './TertiaryButton';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof PrimaryButton> = {
    title: 'Komponenter/Buttons/Live Code Editor',
    component: PrimaryButton,
    parameters: {
        docs: {
            description: {
                component: 'Interaktiv live code editor for Button komponenter. Test forskjellige button typer og egenskaper i sanntid!',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

// Define templates for Button components
const primarybuttonTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📝',
        code: `<PrimaryButton>
    Klikk meg
</PrimaryButton>`
    },
    variants: {
        name: 'Button typer',
        icon: '🎨',
        code: `<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <PrimaryButton>Primary</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
    <ActionButton>Action</ActionButton>
    <TertiaryButton>Tertiary</TertiaryButton>
</div>`
    },
    sizes: {
        name: 'Størrelser',
        icon: '📏',
        code: `<div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
    <PrimaryButton size="sm">Liten</PrimaryButton>
    <PrimaryButton size="md">Medium (default)</PrimaryButton>
    <PrimaryButton size="lg">Stor</PrimaryButton>
</div>`
    },
    states: {
        name: 'Tilstander',
        icon: '⚡',
        code: `<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <PrimaryButton>Normal</PrimaryButton>
    <PrimaryButton isDisabled>Deaktivert</PrimaryButton>
    <PrimaryButton isLoading>Laster...</PrimaryButton>
</div>`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '🖱️',
        code: `function InteractiveButtons() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    
    const handleClick = () => {
        setCount(prev => prev + 1);
    };
    
    const handleAsyncClick = async () => {
        setLoading(true);
        // Simuler asynkron operasjon
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        setCount(prev => prev + 1);
    };
    
    return (
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', alignItems: 'flex-start' }}>
            <p>Antall klikk: {count}</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <PrimaryButton onClick={handleClick}>
                    Klikk meg (+1)
                </PrimaryButton>
                <SecondaryButton 
                    onClick={handleAsyncClick}
                    isLoading={loading}
                    ariaLoadingMessage="Prosesserer..."
                >
                    Asynkron klikk
                </SecondaryButton>
                <ActionButton onClick={() => setCount(0)}>
                    Reset
                </ActionButton>
            </div>
        </div>
    );
}

<InteractiveButtons />`
    },
    styled: {
        name: 'Custom styling',
        icon: '🎨',
        code: `<div style={{ 
    padding: '24px', 
    backgroundColor: 'var(--ffe-color-background-subtle)', 
    borderRadius: '8px',
    border: '1px solid var(--ffe-color-border-primary-subtle)'
}}>
    <h4 style={{ margin: '0 0 16px 0', color: 'var(--ffe-color-text-primary)' }}>
        Button showcase
    </h4>
    <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '12px' 
    }}>
        <PrimaryButton 
            onClick={() => alert('Primary clicked!')}
            style={{ gridColumn: 'span 2' }}
        >
            🚀 Primary Action
        </PrimaryButton>
        <SecondaryButton onClick={() => alert('Secondary clicked!')}>
            ✨ Secondary
        </SecondaryButton>
        <ActionButton onClick={() => alert('Action clicked!')}>
            ⚡ Quick Action
        </ActionButton>
        <TertiaryButton onClick={() => alert('Tertiary clicked!')}>
            🔗 Link Style
        </TertiaryButton>
    </div>
</div>`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(PrimaryButton, {
    templates: primarybuttonTemplates,
    additionalComponents: {
        SecondaryButton,
        ActionButton,
        TertiaryButton
    },
    defaultTemplate: 'simple',
    title: 'Button Live Code Editor',
    description: 'Interaktiv editor for Button komponenter. Test alle button typer, størrelser og tilstander!'
});