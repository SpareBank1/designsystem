import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Grid } from './Grid';
import { GridRow } from './GridRow';
import { GridCol } from './GridCol';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Grid> = {
    title: 'Komponenter/Grid/Live Code Editor',
    component: Grid,
    parameters: {
        docs: {
            description: {
                component: 'Interaktiv live code editor for Grid system. Test Grid, GridRow og GridCol med forskjellige layouts og responsive design!',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Grid>;

// Define comprehensive templates for Grid system
const gridTemplates = {
    basic: {
        name: 'Grunnleggende',
        icon: '📐',
        code: `<Grid>
    <GridRow>
        <GridCol sm="6">
            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px' }}>
                Venstre kolonne
            </div>
        </GridCol>
        <GridCol sm="6">
            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px' }}>
                Høyre kolonne
            </div>
        </GridCol>
    </GridRow>
</Grid>`
    },
    responsive: {
        name: 'Responsiv layout',
        icon: '📱',
        code: `<Grid>
    <GridRow>
        <GridCol sm="12" md="6" lg="4">
            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px', marginBottom: '8px' }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Kolonne 1</h4>
                <p style={{ margin: 0, fontSize: '14px' }}>
                    Mobil: 12/12 (full bredde)<br/>
                    Tablet: 6/12 (halv bredde)<br/>
                    Desktop: 4/12 (tredjedel)
                </p>
            </div>
        </GridCol>
        <GridCol sm="12" md="6" lg="4">
            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px', marginBottom: '8px' }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Kolonne 2</h4>
                <p style={{ margin: 0, fontSize: '14px' }}>
                    Samme responsive oppførsel som kolonne 1
                </p>
            </div>
        </GridCol>
        <GridCol sm="12" md="12" lg="4">
            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px', marginBottom: '8px' }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Kolonne 3</h4>
                <p style={{ margin: 0, fontSize: '14px' }}>
                    Mobil: 12/12<br/>
                    Tablet: 12/12 (full bredde)<br/>
                    Desktop: 4/12 (tredjedel)
                </p>
            </div>
        </GridCol>
    </GridRow>
</Grid>`
    },
    offset: {
        name: 'Offset og sentrering',
        icon: '↔️',
        code: `<Grid>
    <GridRow>
        <GridCol>
            <h4>Sentrert innhold med offset</h4>
        </GridCol>
    </GridRow>
    
    <GridRow>
        <GridCol 
            sm={{ cols: 8, offset: 2 }}
            md={{ cols: 6, offset: 3 }}
            lg={{ cols: 4, offset: 4 }}
        >
            <div style={{ padding: '20px', backgroundColor: 'var(--ffe-color-background-primary)', color: 'white', borderRadius: '4px', textAlign: 'center' }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Sentrert kolonne</h4>
                <p style={{ margin: 0, fontSize: '14px' }}>
                    Mobil: 8/12 med 2 offset<br/>
                    Tablet: 6/12 med 3 offset<br/>
                    Desktop: 4/12 med 4 offset
                </p>
            </div>
        </GridCol>
    </GridRow>
    
    <GridRow>
        <GridCol sm="4">
            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px' }}>
                Venstre
            </div>
        </GridCol>
        <GridCol sm={{ cols: 4, offset: 4 }}>
            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px' }}>
                Høyre (med gap)
            </div>
        </GridCol>
    </GridRow>
</Grid>`
    },
    spacing: {
        name: 'Spacing og bakgrunn',
        icon: '🎨',
        code: `<Grid gap="lg">
    <GridRow margin="xl" padding="lg" bgColor="secondary">
        <GridCol>
            <h4 style={{ margin: '0 0 16px 0' }}>Row med bakgrunn og spacing</h4>
        </GridCol>
    </GridRow>
    
    <GridRow>
        <GridCol sm="6" md="3" bgColor="tertiary" padding="md">
            <div style={{ textAlign: 'center' }}>
                <h5 style={{ margin: '0 0 8px 0' }}>Kolonne 1</h5>
                <p style={{ margin: 0, fontSize: '14px' }}>Med tertiary bakgrunn</p>
            </div>
        </GridCol>
        <GridCol sm="6" md="3" bgColor="tertiary" padding="md">
            <div style={{ textAlign: 'center' }}>
                <h5 style={{ margin: '0 0 8px 0' }}>Kolonne 2</h5>
                <p style={{ margin: 0, fontSize: '14px' }}>Samme styling</p>
            </div>
        </GridCol>
        <GridCol sm="6" md="3" bgColor="tertiary" padding="md">
            <div style={{ textAlign: 'center' }}>
                <h5 style={{ margin: '0 0 8px 0' }}>Kolonne 3</h5>
                <p style={{ margin: 0, fontSize: '14px' }}>Konsistent design</p>
            </div>
        </GridCol>
        <GridCol sm="6" md="3" bgColor="tertiary" padding="md">
            <div style={{ textAlign: 'center' }}>
                <h5 style={{ margin: '0 0 8px 0' }}>Kolonne 4</h5>
                <p style={{ margin: 0, fontSize: '14px' }}>Fire like kolonner</p>
            </div>
        </GridCol>
    </GridRow>
</Grid>`
    },
    complex: {
        name: 'Kompleks layout',
        icon: '🏗️',
        code: `<Grid>
    <GridRow>
        <GridCol>
            <div style={{ padding: '20px', backgroundColor: 'var(--ffe-color-background-primary)', color: 'white', borderRadius: '4px', textAlign: 'center', marginBottom: '16px' }}>
                <h3 style={{ margin: 0 }}>Header (full bredde)</h3>
            </div>
        </GridCol>
    </GridRow>
    
    <GridRow>
        <GridCol sm="12" lg="8">
            <div style={{ padding: '20px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px', marginBottom: '16px' }}>
                <h4 style={{ margin: '0 0 12px 0' }}>Hovedinnhold</h4>
                <p style={{ margin: '0 0 12px 0' }}>
                    Dette er hovedområdet som tar opp det meste av plassen på store skjermer,
                    men full bredde på mobile enheter.
                </p>
                
                <GridRow>
                    <GridCol sm="6">
                        <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '4px', marginBottom: '8px' }}>
                            <h5 style={{ margin: '0 0 8px 0' }}>Artikkel 1</h5>
                            <p style={{ margin: 0, fontSize: '14px' }}>Kort beskrivelse av artikkel...</p>
                        </div>
                    </GridCol>
                    <GridCol sm="6">
                        <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '4px', marginBottom: '8px' }}>
                            <h5 style={{ margin: '0 0 8px 0' }}>Artikkel 2</h5>
                            <p style={{ margin: 0, fontSize: '14px' }}>Kort beskrivelse av artikkel...</p>
                        </div>
                    </GridCol>
                </GridRow>
            </div>
        </GridCol>
        
        <GridCol sm="12" lg="4">
            <div style={{ padding: '20px', backgroundColor: 'var(--ffe-color-background-subtle)', borderRadius: '4px', marginBottom: '16px' }}>
                <h4 style={{ margin: '0 0 12px 0' }}>Sidebar</h4>
                <div style={{ marginBottom: '16px' }}>
                    <h5 style={{ margin: '0 0 8px 0' }}>Hurtiglenker</h5>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </div>
                <div>
                    <h5 style={{ margin: '0 0 8px 0' }}>Informasjon</h5>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                        Ekstra informasjon og verktøy.
                    </p>
                </div>
            </div>
        </GridCol>
    </GridRow>
    
    <GridRow>
        <GridCol>
            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-tertiary)', borderRadius: '4px', textAlign: 'center' }}>
                <p style={{ margin: 0 }}>Footer (full bredde)</p>
            </div>
        </GridCol>
    </GridRow>
</Grid>`
    },
    dashboard: {
        name: 'Dashboard layout',
        icon: '📊',
        code: `function DashboardExample() {
    const [selectedCard, setSelectedCard] = useState(null);
    
    const cards = [
        { id: 1, title: 'Totale brukere', value: '1,234', change: '+12%', color: 'var(--ffe-color-background-success-subtle)' },
        { id: 2, title: 'Aktive sesjoner', value: '567', change: '+5%', color: 'var(--ffe-color-background-info-subtle)' },
        { id: 3, title: 'Konverteringsrate', value: '3.4%', change: '-2%', color: 'var(--ffe-color-background-warning-subtle)' },
        { id: 4, title: 'Inntekt', value: '89,123 kr', change: '+18%', color: 'var(--ffe-color-background-success-subtle)' }
    ];
    
    return (
        <Grid>
            <GridRow>
                <GridCol>
                    <div style={{ padding: '20px', backgroundColor: 'var(--ffe-color-background-primary)', color: 'white', borderRadius: '4px', marginBottom: '24px' }}>
                        <h2 style={{ margin: 0 }}>📊 Dashboard</h2>
                    </div>
                </GridCol>
            </GridRow>
            
            <GridRow>
                {cards.map(card => (
                    <GridCol key={card.id} sm="6" lg="3">
                        <div 
                            style={{ 
                                padding: '20px', 
                                backgroundColor: selectedCard === card.id ? card.color : 'white',
                                border: '1px solid var(--ffe-color-border-primary-subtle)',
                                borderRadius: '4px', 
                                marginBottom: '16px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                transform: selectedCard === card.id ? 'scale(1.02)' : 'scale(1)'
                            }}
                            onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
                        >
                            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'var(--ffe-color-text-secondary)' }}>
                                {card.title}
                            </h4>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px' }}>
                                {card.value}
                            </div>
                            <div style={{ fontSize: '12px', color: card.change.startsWith('+') ? 'green' : 'red' }}>
                                {card.change} fra forrige måned
                            </div>
                        </div>
                    </GridCol>
                ))}
            </GridRow>
            
            <GridRow>
                <GridCol sm="12" lg="8">
                    <div style={{ padding: '20px', backgroundColor: 'white', border: '1px solid var(--ffe-color-border-primary-subtle)', borderRadius: '4px', marginBottom: '16px' }}>
                        <h4 style={{ margin: '0 0 16px 0' }}>📈 Trendanalyse</h4>
                        <div style={{ height: '200px', backgroundColor: 'var(--ffe-color-background-subtle)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ margin: 0, color: 'var(--ffe-color-text-secondary)' }}>
                                Graf placeholder - {selectedCard ? \`Viser data for kort \${selectedCard}\` : 'Velg et kort for å se detaljer'}
                            </p>
                        </div>
                    </div>
                </GridCol>
                
                <GridCol sm="12" lg="4">
                    <div style={{ padding: '20px', backgroundColor: 'white', border: '1px solid var(--ffe-color-border-primary-subtle)', borderRadius: '4px', marginBottom: '16px' }}>
                        <h4 style={{ margin: '0 0 16px 0' }}>🔔 Siste aktivitet</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ padding: '8px', backgroundColor: 'var(--ffe-color-background-subtle)', borderRadius: '4px' }}>
                                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Ny bruker registrert</div>
                                <div style={{ fontSize: '12px', color: 'var(--ffe-color-text-secondary)' }}>2 minutter siden</div>
                            </div>
                            <div style={{ padding: '8px', backgroundColor: 'var(--ffe-color-background-subtle)', borderRadius: '4px' }}>
                                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Ordre fullført</div>
                                <div style={{ fontSize: '12px', color: 'var(--ffe-color-text-secondary)' }}>5 minutter siden</div>
                            </div>
                            <div style={{ padding: '8px', backgroundColor: 'var(--ffe-color-background-subtle)', borderRadius: '4px' }}>
                                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>System oppdatert</div>
                                <div style={{ fontSize: '12px', color: 'var(--ffe-color-text-secondary)' }}>1 time siden</div>
                            </div>
                        </div>
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    );
}

render(<DashboardExample />);`
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
        Grid System Showcase
    </h3>
    
    <Grid>
        <GridRow>
            <GridCol>
                <h4>Responsive produktgalleri</h4>
            </GridCol>
        </GridRow>
        
        <GridRow>
            <GridCol sm="6" md="4" lg="3">
                <CardBase style={{ marginBottom: '16px' }}>
                    <div style={{ height: '120px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        📱
                    </div>
                    <h5 style={{ margin: '0 0 8px 0' }}>Smartphone</h5>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'var(--ffe-color-text-secondary)' }}>
                        Moderne smartphone med alle funksjoner
                    </p>
                    <div style={{ fontWeight: 'bold' }}>4,999 kr</div>
                </CardBase>
            </GridCol>
            
            <GridCol sm="6" md="4" lg="3">
                <CardBase style={{ marginBottom: '16px' }}>
                    <div style={{ height: '120px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        💻
                    </div>
                    <h5 style={{ margin: '0 0 8px 0' }}>Laptop</h5>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'var(--ffe-color-text-secondary)' }}>
                        Kraftig laptop for arbeid og underholdning
                    </p>
                    <div style={{ fontWeight: 'bold' }}>12,999 kr</div>
                </CardBase>
            </GridCol>
            
            <GridCol sm="6" md="4" lg="3">
                <CardBase style={{ marginBottom: '16px' }}>
                    <div style={{ height: '120px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        🎧
                    </div>
                    <h5 style={{ margin: '0 0 8px 0' }}>Hodetelefoner</h5>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'var(--ffe-color-text-secondary)' }}>
                        Trådløse hodetelefoner med noise cancelling
                    </p>
                    <div style={{ fontWeight: 'bold' }}>1,899 kr</div>
                </CardBase>
            </GridCol>
            
            <GridCol sm="6" md="4" lg="3">
                <CardBase style={{ marginBottom: '16px' }}>
                    <div style={{ height: '120px', backgroundColor: 'var(--ffe-color-background-secondary)', borderRadius: '4px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        ⌚
                    </div>
                    <h5 style={{ margin: '0 0 8px 0' }}>Smartklokke</h5>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'var(--ffe-color-text-secondary)' }}>
                        Smartklokke med helseovervåking
                    </p>
                    <div style={{ fontWeight: 'bold' }}>2,499 kr</div>
                </CardBase>
            </GridCol>
        </GridRow>
        
        <GridRow margin="lg">
            <GridCol sm="12" md="8" lg="6" offset={{ md: 2, lg: 3 }}>
                <div style={{ 
                    padding: '24px', 
                    backgroundColor: 'var(--ffe-color-background-primary)', 
                    color: 'white', 
                    borderRadius: '8px', 
                    textAlign: 'center' 
                }}>
                    <h4 style={{ margin: '0 0 12px 0' }}>Sentrert call-to-action</h4>
                    <p style={{ margin: '0 0 16px 0' }}>
                        Utforsk hele vårt produktsortiment og finn det perfekte for deg
                    </p>
                    <PrimaryButton>Se alle produkter</PrimaryButton>
                </div>
            </GridCol>
        </GridRow>
    </Grid>
</div>`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Grid, {
    templates: gridTemplates,
    additionalComponents: {
        Grid,
        GridRow,
        GridCol
    },
    defaultTemplate: 'basic',
    title: 'Grid System Live Code Editor',
    description: 'Interaktiv editor for Grid system. Test Grid, GridRow og GridCol med responsive layouts, offset, spacing og komplekse layouter!'
});
