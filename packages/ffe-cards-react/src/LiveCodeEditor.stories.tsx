import type { StoryObj, Meta } from '@storybook/react';
import { CardBase } from './CardBase';
import { TextCard } from './TextCard/TextCard';
import { IconCard } from './IconCard/IconCard';
import { GroupCard } from './GroupCard/GroupCard';
import { GroupCardElement } from './GroupCard/GroupCardElement';
import { GroupCardTitle } from './GroupCard/GroupCardTitle';
import { GroupCardFooter } from './GroupCard/GroupCardFooter';
import { IllustrationCard } from './IllustrationCard/IllustrationCard';
import { ImageCard } from './ImageCard/ImageCard';
import { StippledCard } from './StippledCard/StippledCard';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof CardBase> = {
    title: 'Komponenter/Cards/Live Code Editor',
    component: CardBase,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all card components in the FFE Cards package. Explore CardBase, TextCard, IconCard, GroupCard, IllustrationCard, ImageCard, and StippledCard with interactive examples.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof CardBase>;

// Define comprehensive templates for all card components
const cardsTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📝',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <CardBase>
        <h3>CardBase</h3>
        <p>Det grunnleggende kortet med standard styling.</p>
    </CardBase>
    
    <TextCard>
        {({ Title, Text }) => (
            <>
                <Title>TextCard</Title>
                <Text>Kort optimalisert for tekstinnhold med semantiske komponenter.</Text>
            </>
        )}
    </TextCard>
</div>`
    },
    variants: {
        name: 'Varianter',
        icon: '🎨',
        code: `<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
    <CardBase bgColor="primary">
        <h4>Primary CardBase</h4>
        <p>Hvit bakgrunn for hovedinnhold.</p>
    </CardBase>
    
    <CardBase bgColor="secondary">
        <h4>Secondary CardBase</h4>
        <p>Subtil bakgrunn for sekundært innhold.</p>
    </CardBase>
    
    <TextCard appearance="default">
        {({ Title, Text }) => (
            <>
                <Title>Default TextCard</Title>
                <Text>Standard utseende for tekstkort.</Text>
            </>
        )}
    </TextCard>
    
    <TextCard appearance="accent">
        {({ Title, Text }) => (
            <>
                <Title>Accent TextCard</Title>
                <Text>Blått utseende i accent kontekst.</Text>
            </>
        )}
    </TextCard>
</div>`
    },
    icons: {
        name: 'Med ikoner',
        icon: '🎯',
        code: `<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
    <IconCard 
        icon={<span style={{ fontSize: '24px' }}>💳</span>}
    >
        {({ Title, Text }) => (
            <>
                <Title>Betalingskort</Title>
                <Text>Administrer dine betalingskort og transaksjoner.</Text>
            </>
        )}
    </IconCard>
    
    <IconCard 
        icon={<span style={{ fontSize: '24px' }}>📊</span>}
        rightIcon={<span style={{ fontSize: '16px' }}>→</span>}
    >
        {({ Title, Text }) => (
            <>
                <Title>Rapporter</Title>
                <Text>Se detaljerte rapporter og analyser.</Text>
            </>
        )}
    </IconCard>
    
    <IconCard 
        icon={<span style={{ fontSize: '20px' }}>⚙️</span>}
        condensed
    >
        {({ Title, Text }) => (
            <>
                <Title>Innstillinger</Title>
                <Text>Kompakt kort for hurtigtilgang.</Text>
            </>
        )}
    </IconCard>
</div>`
    },
    groups: {
        name: 'Gruppekort',
        icon: '📋',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <GroupCard>
        <GroupCardTitle>Mine kontoer</GroupCardTitle>
        
        <GroupCardElement>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <strong>Brukskonto</strong>
                    <div style={{ fontSize: '0.9em', color: 'var(--ffe-color-text-subtle)' }}>
                        1234.56.78901
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <strong>25 430,50 kr</strong>
                </div>
            </div>
        </GroupCardElement>
        
        <GroupCardElement>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <strong>Sparekonto</strong>
                    <div style={{ fontSize: '0.9em', color: 'var(--ffe-color-text-subtle)' }}>
                        1234.56.78902
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <strong>150 000,00 kr</strong>
                </div>
            </div>
        </GroupCardElement>
        
        <GroupCardFooter>
            <button style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--ffe-color-text-action)', 
                cursor: 'pointer',
                textDecoration: 'underline'
            }}>
                Se alle kontoer
            </button>
        </GroupCardFooter>
    </GroupCard>
</div>`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveCards() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [favoriteCards, setFavoriteCards] = useState(new Set());
    const [formData, setFormData] = useState({ name: '', email: '' });
    
    const cards = [
        { id: 1, title: 'Produktkort', icon: '🚀', type: 'product' },
        { id: 2, title: 'Tjenestekort', icon: '⚡', type: 'service' },
        { id: 3, title: 'Infokort', icon: '📋', type: 'info' }
    ];
    
    const toggleFavorite = (cardId) => {
        const newFavorites = new Set(favoriteCards);
        if (newFavorites.has(cardId)) {
            newFavorites.delete(cardId);
        } else {
            newFavorites.add(cardId);
        }
        setFavoriteCards(newFavorites);
    };
    
    return (
        <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-subtle)', borderRadius: '8px' }}>
                <p><strong>Status:</strong> Valgt kort: {selectedCard || 'Ingen'} | Favoritter: {favoriteCards.size}</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                {cards.map(card => (
                    <IconCard
                        key={card.id}
                        icon={<span style={{ fontSize: '24px' }}>{card.icon}</span>}
                        style={{
                            cursor: 'pointer',
                            transform: selectedCard === card.id ? 'scale(1.02)' : 'scale(1)',
                            transition: 'all 0.2s ease',
                            border: selectedCard === card.id ? '2px solid var(--ffe-color-border-primary)' : undefined
                        }}
                        onClick={() => setSelectedCard(card.id)}
                    >
                        {({ Title, Text, CardAction }) => (
                            <>
                                <Title>{card.title}</Title>
                                <Text>Klikk for å velge dette kortet.</Text>
                                <CardAction
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(card.id);
                                    }}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '18px',
                                        cursor: 'pointer',
                                        marginTop: '8px'
                                    }}
                                >
                                    {favoriteCards.has(card.id) ? '❤️' : '🤍'}
                                </CardAction>
                            </>
                        )}
                    </IconCard>
                ))}
            </div>
            
            <TextCard leftAlign>
                {({ Title, Text }) => (
                    <>
                        <Title>Kontaktskjema</Title>
                        <Text>Fyll ut informasjonen nedenfor:</Text>
                        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <input
                                type="text"
                                placeholder="Ditt navn"
                                value={formData.name}
                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                style={{
                                    padding: '8px 12px',
                                    border: '1px solid var(--ffe-color-border-subtle)',
                                    borderRadius: '4px'
                                }}
                            />
                            <input
                                type="email"
                                placeholder="Din e-post"
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                style={{
                                    padding: '8px 12px',
                                    border: '1px solid var(--ffe-color-border-subtle)',
                                    borderRadius: '4px'
                                }}
                            />
                            <button
                                onClick={() => alert(\`Takk \${formData.name}! Vi kontakter deg på \${formData.email}\`)}
                                disabled={!formData.name || !formData.email}
                                style={{
                                    padding: '10px 16px',
                                    backgroundColor: formData.name && formData.email ? 'var(--ffe-color-background-primary)' : 'var(--ffe-color-background-disabled)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: formData.name && formData.email ? 'pointer' : 'not-allowed'
                                }}
                            >
                                Send inn
                            </button>
                        </div>
                    </>
                )}
            </TextCard>
        </div>
    );
}

render(<InteractiveCards />);`
    },
    specialized: {
        name: 'Spesialkort',
        icon: '🎪',
        code: `<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
    <ImageCard
        src="https://via.placeholder.com/300x200/0066CC/FFFFFF?text=Bilde"
        alt="Eksempelbilde"
    >
        {({ Title, Text }) => (
            <>
                <Title>ImageCard</Title>
                <Text>Kort med bilde og tekstinnhold.</Text>
            </>
        )}
    </ImageCard>
    
    <IllustrationCard
        illustration={
            <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--ffe-color-background-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                color: 'white'
            }}>
                🎨
            </div>
        }
    >
        {({ Title, Text }) => (
            <>
                <Title>IllustrationCard</Title>
                <Text>Kort med tilpasset illustrasjon eller ikon.</Text>
            </>
        )}
    </IllustrationCard>
    
    <StippledCard>
        {({ Title, Text }) => (
            <>
                <Title>StippledCard</Title>
                <Text>Kort med stiplet ramme, ofte brukt for "legg til" funksjoner.</Text>
            </>
        )}
    </StippledCard>
</div>`
    },
    layouts: {
        name: 'Layout varianter',
        icon: '📐',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <div>
        <h4>Uten margin</h4>
        <div style={{ display: 'flex', gap: '0', backgroundColor: 'var(--ffe-color-background-subtle)', padding: '16px' }}>
            <CardBase noMargin>
                <p>CardBase uten margin</p>
            </CardBase>
            <TextCard noMargin>
                {({ Text }) => <Text>TextCard uten margin</Text>}
            </TextCard>
        </div>
    </div>
    
    <div>
        <h4>Sentrert vs venstrejustert</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <TextCard>
                {({ Title, Text }) => (
                    <>
                        <Title>Sentrert tekst</Title>
                        <Text>Standard sentrert layout for tekstkort.</Text>
                    </>
                )}
            </TextCard>
            
            <TextCard leftAlign>
                {({ Title, Text }) => (
                    <>
                        <Title>Venstrejustert tekst</Title>
                        <Text>Venstrejustert layout for lengre tekstinnhold.</Text>
                    </>
                )}
            </TextCard>
        </div>
    </div>
    
    <div>
        <h4>Kompakte varianter</h4>
        <div style={{ display: 'flex', gap: '16px' }}>
            <IconCard 
                icon={<span style={{ fontSize: '20px' }}>📱</span>}
                condensed
            >
                {({ Title }) => <Title>Kompakt</Title>}
            </IconCard>
            
            <IconCard 
                icon={<span style={{ fontSize: '24px' }}>💻</span>}
            >
                {({ Title }) => <Title>Standard</Title>}
            </IconCard>
        </div>
    </div>
</div>`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `<div style={{ 
    padding: '24px', 
    backgroundColor: 'var(--ffe-color-background-subtle)', 
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
}}>
    <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 8px 0' }}>FFE Cards Showcase</h2>
        <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
            Utforsk alle korttypene i FFE design systemet
        </p>
    </div>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <GroupCard>
            <GroupCardTitle>📊 Dashboard oversikt</GroupCardTitle>
            <GroupCardElement>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Aktive brukere</span>
                    <strong>1,234</strong>
                </div>
            </GroupCardElement>
            <GroupCardElement>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Månedlig vekst</span>
                    <strong style={{ color: 'var(--ffe-color-text-success)' }}>+15%</strong>
                </div>
            </GroupCardElement>
            <GroupCardFooter>
                <button style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'var(--ffe-color-text-action)', 
                    cursor: 'pointer' 
                }}>
                    Se full rapport →
                </button>
            </GroupCardFooter>
        </GroupCard>
        
        <IconCard 
            icon={<span style={{ fontSize: '32px' }}>🎯</span>}
            onClick={() => alert('Navigerer til mål!')}
            style={{ cursor: 'pointer' }}
        >
            {({ Title, Text, CardAction }) => (
                <>
                    <Title>Oppnå dine mål</Title>
                    <Text>Sett og følg opp personlige og profesjonelle mål med våre verktøy.</Text>
                    <CardAction style={{ 
                        marginTop: '16px',
                        padding: '8px 16px',
                        backgroundColor: 'var(--ffe-color-background-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}>
                        Kom i gang
                    </CardAction>
                </>
            )}
        </IconCard>
        
        <IllustrationCard
            illustration={
                <div style={{
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px'
                }}>
                    🚀
                </div>
            }
        >
            {({ Title, Text }) => (
                <>
                    <Title>Lansering snart!</Title>
                    <Text>Nye funksjoner kommer i neste versjon. Hold deg oppdatert.</Text>
                </>
            )}
        </IllustrationCard>
    </div>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        <TextCard appearance="accent" leftAlign>
            {({ Title, Text }) => (
                <>
                    <Title>💡 Tips</Title>
                    <Text>Bruk forskjellige korttyper for å skape visuell hierarki og forbedre brukeropplevelsen.</Text>
                </>
            )}
        </TextCard>
        
        <StippledCard 
            onClick={() => alert('Legg til nytt kort!')}
            style={{ 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '120px'
            }}
        >
            {({ Title }) => (
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>+</div>
                    <Title>Legg til nytt</Title>
                </div>
            )}
        </StippledCard>
        
        <CardBase bgColor="tertiary" textCenter>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎉</div>
            <h4>Gratulerer!</h4>
            <p>Du har utforsket alle korttypene i FFE Cards pakken.</p>
        </CardBase>
    </div>
</div>`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(CardBase, {
    templates: cardsTemplates,
    additionalComponents: {
        TextCard,
        IconCard,
        GroupCard,
        GroupCardElement,
        GroupCardTitle,
        GroupCardFooter,
        IllustrationCard,
        ImageCard,
        StippledCard
    },
    defaultTemplate: 'simple',
    title: 'Cards Live Code Editor',
    description: 'Comprehensive live code editor for all card components in the FFE Cards package. Explore CardBase, TextCard, IconCard, GroupCard, IllustrationCard, ImageCard, and StippledCard with interactive examples and real-world use cases.'
});
