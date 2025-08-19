import type { StoryObj, Meta } from '@storybook/react';
import { Collapse } from './Collapse';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Collapse> = {
    title: 'Komponenter/Collapse/Live Code Editor',
    component: Collapse,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for the Collapse component. Explore expandable content sections with smooth animations, interactive controls, and real-world use cases like FAQ sections, settings panels, and content toggles.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Collapse>;

// Define comprehensive templates for Collapse component
const collapseTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📝',
        code: `function SimpleCollapse() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '12px 16px',
                    backgroundColor: 'var(--ffe-color-background-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginBottom: '16px'
                }}
            >
                {isOpen ? 'Skjul' : 'Vis'} innhold
            </button>
            
            <Collapse isOpen={isOpen}>
                <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-subtle)' }}>
                    <h4>Skjult innhold</h4>
                    <p>Dette innholdet vises og skjules med jevn animasjon.</p>
                    <p>Collapse komponenten håndterer høyden automatisk.</p>
                </div>
            </Collapse>
        </div>
    );
}

render(<SimpleCollapse />);`
    },
    multiple: {
        name: 'Flere seksjoner',
        icon: '📚',
        code: `function MultipleSections() {
    const [openSections, setOpenSections] = useState(new Set(['section1']));
    
    const sections = [
        {
            id: 'section1',
            title: 'Personlig informasjon',
            content: (
                <div>
                    <p>Her kan du administrere din personlige informasjon som navn, adresse og kontaktdetaljer.</p>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                        <input placeholder="Fornavn" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                        <input placeholder="Etternavn" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>
                </div>
            )
        },
        {
            id: 'section2',
            title: 'Kontoinnstillinger',
            content: (
                <div>
                    <p>Administrer dine kontoinnstillinger og preferanser.</p>
                    <div style={{ marginTop: '16px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input type="checkbox" />
                            Motta e-postvarsler
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                            <input type="checkbox" defaultChecked />
                            Tofaktorautentisering
                        </label>
                    </div>
                </div>
            )
        }
    ];
    
    const toggleSection = (sectionId) => {
        const newOpenSections = new Set(openSections);
        if (newOpenSections.has(sectionId)) {
            newOpenSections.delete(sectionId);
        } else {
            newOpenSections.add(sectionId);
        }
        setOpenSections(newOpenSections);
    };
    
    return (
        <div style={{ maxWidth: '600px' }}>
            <h3>Innstillinger</h3>
            {sections.map(section => (
                <div key={section.id} style={{ marginBottom: '8px' }}>
                    <button
                        onClick={() => toggleSection(section.id)}
                        style={{
                            width: '100%',
                            padding: '16px',
                            backgroundColor: 'white',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'left',
                            fontSize: '16px',
                            fontWeight: '500'
                        }}
                    >
                        {section.title}
                        <span style={{ fontSize: '12px' }}>
                            {openSections.has(section.id) ? '▼' : '▶'}
                        </span>
                    </button>
                    
                    <Collapse isOpen={openSections.has(section.id)}>
                        <div style={{ 
                            padding: '16px', 
                            backgroundColor: 'var(--ffe-color-background-subtle)',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderTop: 'none',
                            borderRadius: '0 0 4px 4px'
                        }}>
                            {section.content}
                        </div>
                    </Collapse>
                </div>
            ))}
        </div>
    );
}

render(<MultipleSections />);`
    },
    faq: {
        name: 'FAQ seksjon',
        icon: '❓',
        code: `function FAQSection() {
    const [openQuestion, setOpenQuestion] = useState(null);
    
    const faqs = [
        {
            id: 1,
            question: 'Hvordan oppretter jeg en ny konto?',
            answer: 'For å opprette en ny konto, klikk på "Registrer deg" knappen øverst på siden. Fyll ut skjemaet med din e-postadresse og et sikkert passord.'
        },
        {
            id: 2,
            question: 'Kan jeg endre min e-postadresse?',
            answer: 'Ja, du kan endre din e-postadresse i kontoinnstillingene. Gå til "Min profil" > "Kontoinnstillinger" > "E-postadresse".'
        },
        {
            id: 3,
            question: 'Hvordan tilbakestiller jeg passordet mitt?',
            answer: 'Hvis du har glemt passordet ditt, klikk på "Glemt passord?" på innloggingssiden. Skriv inn e-postadressen din.'
        }
    ];
    
    const toggleQuestion = (questionId) => {
        setOpenQuestion(openQuestion === questionId ? null : questionId);
    };
    
    return (
        <div style={{ maxWidth: '700px' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2>Ofte stilte spørsmål</h2>
                <p style={{ color: 'var(--ffe-color-text-subtle)' }}>
                    Finn svar på de mest vanlige spørsmålene våre
                </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {faqs.map(faq => (
                    <div key={faq.id} style={{
                        border: '1px solid var(--ffe-color-border-subtle)',
                        borderRadius: '8px',
                        overflow: 'hidden'
                    }}>
                        <button
                            onClick={() => toggleQuestion(faq.id)}
                            style={{
                                width: '100%',
                                padding: '20px',
                                backgroundColor: openQuestion === faq.id ? 'var(--ffe-color-background-primary)' : 'white',
                                color: openQuestion === faq.id ? 'white' : 'var(--ffe-color-text-primary)',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                textAlign: 'left',
                                fontSize: '16px',
                                fontWeight: '500',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {faq.question}
                            <span style={{ 
                                fontSize: '14px',
                                transform: openQuestion === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s ease'
                            }}>
                                ▼
                            </span>
                        </button>
                        
                        <Collapse isOpen={openQuestion === faq.id}>
                            <div style={{ 
                                padding: '20px',
                                backgroundColor: 'var(--ffe-color-background-subtle)',
                                lineHeight: '1.6'
                            }}>
                                {faq.answer}
                            </div>
                        </Collapse>
                    </div>
                ))}
            </div>
        </div>
    );
}

render(<FAQSection />);`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveCollapse() {
    const [sections, setSections] = useState({
        notifications: false,
        privacy: true,
        advanced: false
    });
    const [restCount, setRestCount] = useState(0);
    
    const toggleSection = (sectionName) => {
        setSections(prev => ({
            ...prev,
            [sectionName]: !prev[sectionName]
        }));
    };
    
    const toggleAll = () => {
        const allOpen = Object.values(sections).every(Boolean);
        const newState = allOpen ? false : true;
        setSections({
            notifications: newState,
            privacy: newState,
            advanced: newState
        });
    };
    
    const handleRest = () => {
        setRestCount(prev => prev + 1);
    };
    
    return (
        <div style={{ maxWidth: '600px' }}>
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h4>Kontroller</h4>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <button
                        onClick={toggleAll}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'var(--ffe-color-background-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {Object.values(sections).every(Boolean) ? 'Lukk alle' : 'Åpne alle'}
                    </button>
                    
                    <span style={{ fontSize: '14px', color: 'var(--ffe-color-text-subtle)' }}>
                        Animasjoner fullført: {restCount}
                    </span>
                </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {Object.entries(sections).map(([key, isOpen]) => (
                    <div key={key}>
                        <button
                            onClick={() => toggleSection(key)}
                            style={{
                                width: '100%',
                                padding: '16px',
                                backgroundColor: isOpen ? 'var(--ffe-color-background-success)' : 'white',
                                color: isOpen ? 'white' : 'var(--ffe-color-text-primary)',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px 4px 0 0',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                textAlign: 'left'
                            }}
                        >
                            {key === 'notifications' && '🔔 Varsler og notifikasjoner'}
                            {key === 'privacy' && '🔒 Personvern og sikkerhet'}
                            {key === 'advanced' && '⚙️ Avanserte innstillinger'}
                            <span>{isOpen ? '▼' : '▶'}</span>
                        </button>
                        
                        <Collapse 
                            isOpen={isOpen}
                            onRest={handleRest}
                        >
                            <div style={{ 
                                padding: '20px',
                                backgroundColor: 'var(--ffe-color-background-subtle)',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderTop: 'none'
                            }}>
                                <h5>Innstillinger for {key}</h5>
                                <p>Her kan du konfigurere {key} relaterte innstillinger.</p>
                                <div style={{ marginTop: '16px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <input type="checkbox" defaultChecked />
                                        Aktiver {key}
                                    </label>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                ))}
            </div>
        </div>
    );
}

render(<InteractiveCollapse />);`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function CollapseShowcase() {
    const [productInfo, setProductInfo] = useState({
        features: false,
        specs: true,
        reviews: false
    });
    
    const toggleProductSection = (section) => {
        setProductInfo(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '600px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🎪 Collapse Showcase</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Utforsk forskjellige bruksområder for Collapse komponenten
                </p>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '24px'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <h3>📱 iPhone 15 Pro</h3>
                    <p style={{ color: 'var(--ffe-color-text-subtle)' }}>Fra 12 999 kr</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>
                        <button
                            onClick={() => toggleProductSection('features')}
                            style={{
                                width: '100%',
                                padding: '16px',
                                backgroundColor: productInfo.features ? 'var(--ffe-color-background-primary)' : 'white',
                                color: productInfo.features ? 'white' : 'var(--ffe-color-text-primary)',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                textAlign: 'left'
                            }}
                        >
                            ✨ Funksjoner
                            <span>{productInfo.features ? '▼' : '▶'}</span>
                        </button>
                        
                        <Collapse isOpen={productInfo.features}>
                            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-subtle)' }}>
                                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                    <li>A17 Pro chip med 6-kjerne CPU</li>
                                    <li>Pro kamerasystem med 48MP hovedkamera</li>
                                    <li>Titanium design</li>
                                    <li>Action Button</li>
                                </ul>
                            </div>
                        </Collapse>
                    </div>
                    
                    <div>
                        <button
                            onClick={() => toggleProductSection('specs')}
                            style={{
                                width: '100%',
                                padding: '16px',
                                backgroundColor: productInfo.specs ? 'var(--ffe-color-background-primary)' : 'white',
                                color: productInfo.specs ? 'white' : 'var(--ffe-color-text-primary)',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                textAlign: 'left'
                            }}
                        >
                            📋 Tekniske spesifikasjoner
                            <span>{productInfo.specs ? '▼' : '▶'}</span>
                        </button>
                        
                        <Collapse isOpen={productInfo.specs}>
                            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-subtle)' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                    <div><strong>Skjerm:</strong> 6.1" Super Retina XDR</div>
                                    <div><strong>Lagring:</strong> 128GB - 1TB</div>
                                    <div><strong>Batteri:</strong> Opptil 23 timer video</div>
                                    <div><strong>Vekt:</strong> 187 gram</div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    
                    <div>
                        <button
                            onClick={() => toggleProductSection('reviews')}
                            style={{
                                width: '100%',
                                padding: '16px',
                                backgroundColor: productInfo.reviews ? 'var(--ffe-color-background-primary)' : 'white',
                                color: productInfo.reviews ? 'white' : 'var(--ffe-color-text-primary)',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                textAlign: 'left'
                            }}
                        >
                            ⭐ Anmeldelser (4.8/5)
                            <span>{productInfo.reviews ? '▼' : '▶'}</span>
                        </button>
                        
                        <Collapse isOpen={productInfo.reviews}>
                            <div style={{ padding: '16px', backgroundColor: 'var(--ffe-color-background-subtle)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '4px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                            <strong>Ole Hansen</strong>
                                            <span>⭐⭐⭐⭐⭐</span>
                                        </div>
                                        <p style={{ margin: 0, fontSize: '14px' }}>Fantastisk telefon! Kameraet er utrolig bra.</p>
                                    </div>
                                    <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '4px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                            <strong>Kari Nordmann</strong>
                                            <span>⭐⭐⭐⭐⭐</span>
                                        </div>
                                        <p style={{ margin: 0, fontSize: '14px' }}>Rask levering og perfekt tilstand. Anbefales!</p>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}

render(<CollapseShowcase />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Collapse, {
    templates: collapseTemplates,
    defaultTemplate: 'simple',
    title: 'Collapse Live Code Editor',
    description: 'Comprehensive live code editor for the Collapse component. Explore expandable content sections with smooth animations, interactive controls, and real-world use cases like FAQ sections, settings panels, and content toggles.'
});
