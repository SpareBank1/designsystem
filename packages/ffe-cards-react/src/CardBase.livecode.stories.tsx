import type { StoryObj, Meta } from '@storybook/react';
import { CardBase } from './CardBase';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof CardBase> = {
    title: 'Komponenter/Cards/Live Code Editor',
    component: CardBase,
    parameters: {
        docs: {
            description: {
                component: 'Interaktiv live code editor for CardBase komponenten. Test forskjellige bakgrunner og egenskaper!',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof CardBase>;

// Define templates for CardBase
const cardbaseTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📝',
        code: `<CardBase>
    <h3>Enkelt kort</h3>
    <p>Dette er et enkelt kort med grunnleggende innhold.</p>
</CardBase>`
    },
    colors: {
        name: 'Bakgrunnsfarger',
        icon: '🎨',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <CardBase bgColor="primary">
        <h4>Primary Card</h4>
        <p>Standard hvit bakgrunn for hovedinnhold.</p>
    </CardBase>
    
    <CardBase bgColor="secondary">
        <h4>Secondary Card</h4>
        <p>Subtil bakgrunn for sekundært innhold.</p>
    </CardBase>
    
    <CardBase bgColor="tertiary">
        <h4>Tertiary Card</h4>
        <p>Enda mer subtil bakgrunn for tredjeparts innhold.</p>
    </CardBase>
</div>`
    },
    layout: {
        name: 'Layout varianter',
        icon: '📐',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <CardBase>
        <h4>Standard kort</h4>
        <p>Med normal margin og padding.</p>
    </CardBase>
    
    <CardBase noMargin>
        <h4>Uten margin</h4>
        <p>Kortet har ingen margin rundt seg.</p>
    </CardBase>
    
    <CardBase noPadding>
        <h4>Uten padding</h4>
        <p>Innholdet går helt ut til kantene.</p>
    </CardBase>
    
    <CardBase textCenter>
        <h4>Sentrert tekst</h4>
        <p>Alt innhold er sentrert i kortet.</p>
    </CardBase>
</div>`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '🖱️',
        code: `function InteractiveCard() {
    const [selected, setSelected] = useState(null);
    const [count, setCount] = useState(0);
    
    const cards = [
        { id: 1, title: 'Første kort', color: 'primary' },
        { id: 2, title: 'Andre kort', color: 'secondary' },
        { id: 3, title: 'Tredje kort', color: 'tertiary' }
    ];
    
    return (
        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
            <p>Valgt kort: {selected ? \`Kort \${selected}\` : 'Ingen'} | Klikk: {count}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                {cards.map(card => (
                    <CardBase
                        key={card.id}
                        bgColor={card.color}
                        style={{
                            cursor: 'pointer',
                            transform: selected === card.id ? 'scale(1.02)' : 'scale(1)',
                            transition: 'transform 0.2s ease',
                            border: selected === card.id ? '2px solid var(--ffe-color-border-primary)' : '1px solid transparent'
                        }}
                        onClick={() => {
                            setSelected(card.id);
                            setCount(prev => prev + 1);
                        }}
                    >
                        <h4>{card.title}</h4>
                        <p>Klikk for å velge dette kortet!</p>
                        {selected === card.id && <p>✓ Valgt</p>}
                    </CardBase>
                ))}
            </div>
        </div>
    );
}

<InteractiveCard />`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `<div style={{ 
    padding: '24px', 
    backgroundColor: 'var(--ffe-color-background-subtle)', 
    borderRadius: '8px' 
}}>
    <h2 style={{ marginTop: 0, marginBottom: '24px', textAlign: 'center' }}>
        Card Showcase
    </h2>
    
    <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '24px' 
    }}>
        <CardBase bgColor="primary">
            <h3>🚀 Produktkort</h3>
            <p>Fremhev viktige produkter og tjenester med primary kort.</p>
            <button 
                onClick={() => alert('Produkt klikket!')}
                style={{
                    padding: '8px 16px',
                    backgroundColor: 'var(--ffe-color-background-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '12px'
                }}
            >
                Les mer
            </button>
        </CardBase>
        
        <CardBase bgColor="secondary" textCenter>
            <h3>📊 Statistikk</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '16px 0' }}>
                1,234
            </div>
            <p>Fornøyde kunder</p>
        </CardBase>
        
        <CardBase bgColor="tertiary" noPadding>
            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-primary)', marginBottom: '16px' }}>
                <h3 style={{ margin: 0 }}>📈 Trend</h3>
            </div>
            <div style={{ padding: '0 16px 16px' }}>
                <p>Salg øker med 15% dette kvartalet!</p>
            </div>
        </CardBase>
    </div>
</div>`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(CardBase, {
    templates: cardbaseTemplates,
    defaultTemplate: 'simple',
    title: 'CardBase Live Code Editor',
    description: 'Interaktiv editor for CardBase komponenten. Test forskjellige bakgrunner, layout og interaksjoner!'
});