import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { ActionButton } from './ActionButton';
import { TertiaryButton } from './TertiaryButton';
import { ButtonGroup } from './ButtonGroup';
import { CardBase } from '@sb1/ffe-cards-react';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof PrimaryButton> = {
    title: 'Komponenter/Buttons/Live Code Editor',
    component: PrimaryButton,
    parameters: {
        docs: {
            description: {
                component: 'Interaktiv live code editor for alle Button komponenter. Test PrimaryButton, SecondaryButton, ActionButton, TertiaryButton og mer!',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

// Define comprehensive templates for all Button components
const buttonTemplates = {
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
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <PrimaryButton size="sm">Liten</PrimaryButton>
        <PrimaryButton size="md">Medium (default)</PrimaryButton>
        <PrimaryButton size="lg">Stor</PrimaryButton>
    </div>
    
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <SecondaryButton size="sm">Liten</SecondaryButton>
        <SecondaryButton size="md">Medium</SecondaryButton>
        <SecondaryButton size="lg">Stor</SecondaryButton>
    </div>
    
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <ActionButton size="sm">Liten</ActionButton>
        <ActionButton size="md">Medium</ActionButton>
        <ActionButton size="lg">Stor</ActionButton>
    </div>
</div>`
    },
    states: {
        name: 'Tilstander',
        icon: '⚡',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Primary Button</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <PrimaryButton>Normal</PrimaryButton>
            <PrimaryButton isDisabled>Deaktivert</PrimaryButton>
            <PrimaryButton isLoading>Laster...</PrimaryButton>
        </div>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Secondary Button</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <SecondaryButton>Normal</SecondaryButton>
            <SecondaryButton isDisabled>Deaktivert</SecondaryButton>
            <SecondaryButton isLoading>Laster...</SecondaryButton>
        </div>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Action Button</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <ActionButton>Normal</ActionButton>
            <ActionButton isDisabled>Deaktivert</ActionButton>
            <ActionButton isLoading>Laster...</ActionButton>
        </div>
    </div>
</div>`
    },
    icons: {
        name: 'Med ikoner',
        icon: '🔗',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Ikoner til venstre</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <PrimaryButton leftIcon={<span>📧</span>}>
                Send e-post
            </PrimaryButton>
            <SecondaryButton leftIcon={<span>📁</span>}>
                Åpne fil
            </SecondaryButton>
            <ActionButton leftIcon={<span>💾</span>}>
                Lagre
            </ActionButton>
        </div>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Ikoner til høyre</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <PrimaryButton rightIcon={<span>→</span>}>
                Neste
            </PrimaryButton>
            <SecondaryButton rightIcon={<span>🔗</span>}>
                Ekstern lenke
            </SecondaryButton>
            <ActionButton rightIcon={<span>⬇️</span>}>
                Last ned
            </ActionButton>
        </div>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Kun ikoner</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <PrimaryButton iconOnly ariaLabel="Lukk">
                ✕
            </PrimaryButton>
            <SecondaryButton iconOnly ariaLabel="Innstillinger">
                ⚙️
            </SecondaryButton>
            <ActionButton iconOnly ariaLabel="Mer">
                ⋯
            </ActionButton>
        </div>
    </div>
</div>`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '🖱️',
        code: `function InteractiveButtons() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);
    
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
    
    const toggleFavorite = (item) => {
        setFavorites(prev => 
            prev.includes(item) 
                ? prev.filter(f => f !== item)
                : [...prev, item]
        );
    };
    
    return (
        <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
            <div>
                <h4 style={{ margin: '0 0 12px 0' }}>Teller: {count}</h4>
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
            
            <div>
                <h4 style={{ margin: '0 0 12px 0' }}>Favoritter ({favorites.length})</h4>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {['Produkt A', 'Produkt B', 'Produkt C'].map(item => (
                        <SecondaryButton
                            key={item}
                            onClick={() => toggleFavorite(item)}
                            leftIcon={<span>{favorites.includes(item) ? '❤️' : '🤍'}</span>}
                        >
                            {item}
                        </SecondaryButton>
                    ))}
                </div>
            </div>
        </div>
    );
}

render(<InteractiveButtons />);`
    },
    buttonGroups: {
        name: 'Button grupper',
        icon: '👥',
        code: `<div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Standard gruppe</h4>
        <ButtonGroup>
            <PrimaryButton>Primær handling</PrimaryButton>
            <SecondaryButton>Sekundær handling</SecondaryButton>
            <TertiaryButton>Avbryt</TertiaryButton>
        </ButtonGroup>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Verktøylinje</h4>
        <ButtonGroup>
            <ActionButton leftIcon={<span>📝</span>}>
                Rediger
            </ActionButton>
            <ActionButton leftIcon={<span>📋</span>}>
                Kopier
            </ActionButton>
            <ActionButton leftIcon={<span>🗑️</span>}>
                Slett
            </ActionButton>
        </ButtonGroup>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Navigasjon</h4>
        <ButtonGroup>
            <SecondaryButton leftIcon={<span>←</span>}>
                Forrige
            </SecondaryButton>
            <SecondaryButton>
                Side 1 av 5
            </SecondaryButton>
            <SecondaryButton rightIcon={<span>→</span>}>
                Neste
            </SecondaryButton>
        </ButtonGroup>
    </div>
</div>`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `<div style={{ 
    padding: '24px', 
    backgroundColor: 'var(--ffe-color-background-subtle)', 
    borderRadius: '8px' 
}}>
    <h3 style={{ marginTop: 0, marginBottom: '24px', textAlign: 'center' }}>
        Button Components Showcase
    </h3>
    
    <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '24px' 
    }}>
        <CardBase>
            <h4>🛒 E-handel handlinger</h4>
            <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                <PrimaryButton size="lg" leftIcon={<span>🛒</span>}>
                    Legg i handlekurv
                </PrimaryButton>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <SecondaryButton leftIcon={<span>❤️</span>}>
                        Favoritt
                    </SecondaryButton>
                    <SecondaryButton leftIcon={<span>🔗</span>}>
                        Del
                    </SecondaryButton>
                </div>
                <TertiaryButton>
                    Sammenlign produkter
                </TertiaryButton>
            </div>
        </CardBase>
        
        <CardBase>
            <h4>📝 Skjema handlinger</h4>
            <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <PrimaryButton>
                        Lagre
                    </PrimaryButton>
                    <SecondaryButton>
                        Lagre utkast
                    </SecondaryButton>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <ActionButton leftIcon={<span>👁️</span>}>
                        Forhåndsvis
                    </ActionButton>
                    <ActionButton leftIcon={<span>📤</span>}>
                        Send
                    </ActionButton>
                </div>
                <TertiaryButton>
                    Avbryt
                </TertiaryButton>
            </div>
        </CardBase>
        
        <CardBase>
            <h4>⚙️ Admin handlinger</h4>
            <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                <ButtonGroup>
                    <ActionButton leftIcon={<span>📝</span>}>
                        Rediger
                    </ActionButton>
                    <ActionButton leftIcon={<span>📋</span>}>
                        Dupliser
                    </ActionButton>
                    <ActionButton leftIcon={<span>🗑️</span>}>
                        Slett
                    </ActionButton>
                </ButtonGroup>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                    <SecondaryButton size="sm">
                        Eksporter
                    </SecondaryButton>
                    <SecondaryButton size="sm">
                        Importer
                    </SecondaryButton>
                </div>
                
                <PrimaryButton leftIcon={<span>💾</span>}>
                    Lagre endringer
                </PrimaryButton>
            </div>
        </CardBase>
        
        <CardBase>
            <h4>🎮 Interaktive eksempler</h4>
            <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                <div style={{ 
                    padding: '12px', 
                    backgroundColor: 'var(--ffe-color-background-secondary)', 
                    borderRadius: '4px' 
                }}>
                    <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                        Status: Ikke lagret
                    </div>
                    <PrimaryButton 
                        size="sm" 
                        onClick={() => alert('Lagret!')}
                    >
                        Lagre nå
                    </PrimaryButton>
                </div>
                
                <div style={{ 
                    padding: '12px', 
                    backgroundColor: 'var(--ffe-color-background-secondary)', 
                    borderRadius: '4px' 
                }}>
                    <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                        Laster data...
                    </div>
                    <SecondaryButton 
                        size="sm" 
                        isLoading
                        ariaLoadingMessage="Laster..."
                    >
                        Oppdater
                    </SecondaryButton>
                </div>
                
                <div style={{ 
                    padding: '12px', 
                    backgroundColor: 'var(--ffe-color-background-secondary)', 
                    borderRadius: '4px' 
                }}>
                    <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                        Handling ikke tilgjengelig
                    </div>
                    <ActionButton 
                        size="sm" 
                        isDisabled
                    >
                        Ikke tilgjengelig
                    </ActionButton>
                </div>
            </div>
        </CardBase>
    </div>
</div>`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(PrimaryButton, {
    templates: buttonTemplates,
    additionalComponents: {
        PrimaryButton,
        SecondaryButton,
        ActionButton,
        TertiaryButton,
        ButtonGroup,
        CardBase
    },
    defaultTemplate: 'simple',
    title: 'Button Components Live Code Editor',
    description: 'Interaktiv editor for alle Button komponenter. Test PrimaryButton, SecondaryButton, ActionButton, TertiaryButton, ButtonGroup og mer i ett samlet grensesnitt!'
});
