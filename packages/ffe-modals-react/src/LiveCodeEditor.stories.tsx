import type { StoryObj, Meta } from '@storybook/react';
import { Modal } from './Modal';
import { ModalBlock } from './ModalBlock';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Modal> = {
    title: 'Komponenter/Modals/Live Code Editor',
    component: Modal,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all modal components in the FFE Modals package. Explore Modal and ModalBlock with interactive examples for dialogs, confirmations, forms, and overlay scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

// Define comprehensive templates for all modal components
const modalsTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '🪟',
        code: `function SimpleModal() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
            <button 
                onClick={() => setIsOpen(true)}
                style={{
                    padding: '12px 24px',
                    backgroundColor: 'var(--ffe-color-background-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Åpne modal
            </button>
            
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                heading="Enkel modal"
            >
                <p>Dette er en enkel modal med grunnleggende funksjonalitet.</p>
                <p>Klikk utenfor eller trykk ESC for å lukke.</p>
                
                <div style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button 
                        onClick={() => setIsOpen(false)}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'var(--ffe-color-background-subtle)',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Lukk
                    </button>
                </div>
            </Modal>
        </div>
    );
}

render(<SimpleModal />);`
    },
    confirmation: {
        name: 'Bekreftelse',
        icon: '❓',
        code: `function ConfirmationModal() {
    const [showConfirm, setShowConfirm] = useState(false);
    const [action, setAction] = useState('');
    
    const handleConfirm = (actionType) => {
        setAction(actionType);
        setShowConfirm(true);
    };
    
    const executeAction = () => {
        setShowConfirm(false);
        alert(\`Handling "\${action}" ble utført!\`);
    };
    
    return (
        <div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button 
                    onClick={() => handleConfirm('slette')}
                    style={{
                        padding: '10px 16px',
                        backgroundColor: 'var(--ffe-color-background-error)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Slett element
                </button>
                
                <button 
                    onClick={() => handleConfirm('arkivere')}
                    style={{
                        padding: '10px 16px',
                        backgroundColor: 'var(--ffe-color-background-warning)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Arkiver element
                </button>
            </div>
            
            <Modal
                isOpen={showConfirm}
                onRequestClose={() => setShowConfirm(false)}
                heading="Bekreft handling"
            >
                <p>Er du sikker på at du vil <strong>{action}</strong> dette elementet?</p>
                <p>Denne handlingen kan ikke angres.</p>
                
                <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button 
                        onClick={() => setShowConfirm(false)}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: 'var(--ffe-color-background-subtle)',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Avbryt
                    </button>
                    <button 
                        onClick={executeAction}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: action === 'slette' ? 'var(--ffe-color-background-error)' : 'var(--ffe-color-background-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Ja, {action}
                    </button>
                </div>
            </Modal>
        </div>
    );
}

render(<ConfirmationModal />);`
    },
    form: {
        name: 'Skjema',
        icon: '📝',
        code: `function FormModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simuler API-kall
        setTimeout(() => {
            setIsSubmitting(false);
            setIsOpen(false);
            setFormData({ name: '', email: '', message: '' });
            alert('Skjema sendt inn med suksess!');
        }, 2000);
    };
    
    return (
        <div>
            <button 
                onClick={() => setIsOpen(true)}
                style={{
                    padding: '12px 24px',
                    backgroundColor: 'var(--ffe-color-background-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Åpne kontaktskjema
            </button>
            
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                heading="Kontakt oss"
                style={{ maxWidth: '500px' }}
            >
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                            Navn *
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            required
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    
                    <div>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                            E-post *
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            required
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    
                    <div>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                            Melding *
                        </label>
                        <textarea
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            required
                            rows={4}
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px',
                                boxSizing: 'border-box',
                                resize: 'vertical'
                            }}
                        />
                    </div>
                    
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
                        <button 
                            type="button"
                            onClick={() => setIsOpen(false)}
                            disabled={isSubmitting}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: 'var(--ffe-color-background-subtle)',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                opacity: isSubmitting ? 0.6 : 1
                            }}
                        >
                            Avbryt
                        </button>
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: isSubmitting ? 'var(--ffe-color-background-disabled)' : 'var(--ffe-color-background-primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {isSubmitting ? 'Sender...' : 'Send inn'}
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

render(<FormModal />);`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveModals() {
    const [activeModal, setActiveModal] = useState(null);
    const [modalHistory, setModalHistory] = useState([]);
    
    const openModal = (modalType) => {
        setActiveModal(modalType);
        setModalHistory(prev => [...prev, { type: modalType, timestamp: new Date().toLocaleTimeString() }]);
    };
    
    const closeModal = () => {
        setActiveModal(null);
    };
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px' }}>
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px' 
            }}>
                <h4>Modal kontroller</h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <button 
                        onClick={() => openModal('info')}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'var(--ffe-color-background-info)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Info modal
                    </button>
                    
                    <button 
                        onClick={() => openModal('warning')}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'var(--ffe-color-background-warning)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Advarsel
                    </button>
                    
                    <button 
                        onClick={() => openModal('success')}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'var(--ffe-color-background-success)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Suksess
                    </button>
                </div>
            </div>
            
            <div>
                <h4>Modal historikk ({modalHistory.length})</h4>
                {modalHistory.length === 0 ? (
                    <p style={{ color: 'var(--ffe-color-text-subtle)' }}>Ingen modaler åpnet ennå.</p>
                ) : (
                    <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                        {modalHistory.map((entry, index) => (
                            <div key={index} style={{ 
                                padding: '8px 12px', 
                                backgroundColor: 'white', 
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px',
                                marginBottom: '4px',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <span>{entry.type} modal</span>
                                <small style={{ color: 'var(--ffe-color-text-subtle)' }}>{entry.timestamp}</small>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            {/* Info Modal */}
            <Modal
                isOpen={activeModal === 'info'}
                onRequestClose={closeModal}
                heading="Informasjon"
            >
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>ℹ️</div>
                    <h4>Velkommen til modal demo!</h4>
                    <p>Dette er en informasjonsmodal som viser hvordan modaler kan brukes.</p>
                </div>
                <button 
                    onClick={closeModal}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: 'var(--ffe-color-background-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Forstått
                </button>
            </Modal>
            
            {/* Warning Modal */}
            <Modal
                isOpen={activeModal === 'warning'}
                onRequestClose={closeModal}
                heading="Advarsel"
            >
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
                    <h4>Viktig informasjon</h4>
                    <p>Dette er en advarsel som krever din oppmerksomhet.</p>
                </div>
                <button 
                    onClick={closeModal}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: 'var(--ffe-color-background-warning)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Jeg forstår
                </button>
            </Modal>
            
            {/* Success Modal */}
            <Modal
                isOpen={activeModal === 'success'}
                onRequestClose={closeModal}
                heading="Suksess"
            >
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                    <h4>Operasjon fullført!</h4>
                    <p>Handlingen ble utført med suksess.</p>
                </div>
                <button 
                    onClick={closeModal}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: 'var(--ffe-color-background-success)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Flott!
                </button>
            </Modal>
        </div>
    );
}

render(<InteractiveModals />);`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function ModalsShowcase() {
    const [currentStep, setCurrentStep] = useState(0);
    const [showOnboarding, setShowOnboarding] = useState(false);
    
    const onboardingSteps = [
        {
            title: 'Velkommen!',
            content: 'Takk for at du valgte vår tjeneste. La oss vise deg rundt.',
            icon: '👋'
        },
        {
            title: 'Dine funksjoner',
            content: 'Her finner du alle verktøyene du trenger for å komme i gang.',
            icon: '🛠️'
        },
        {
            title: 'Kom i gang',
            content: 'Du er nå klar til å begynne! Lykke til med din reise.',
            icon: '🚀'
        }
    ];
    
    const startOnboarding = () => {
        setCurrentStep(0);
        setShowOnboarding(true);
    };
    
    const nextStep = () => {
        if (currentStep < onboardingSteps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            setShowOnboarding(false);
        }
    };
    
    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '600px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🪟 Modal Showcase</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Utforsk modaler i realistiske brukerscenarioer
                </p>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '24px',
                textAlign: 'center'
            }}>
                <button 
                    onClick={startOnboarding}
                    style={{
                        padding: '16px 32px',
                        backgroundColor: 'var(--ffe-color-background-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '500'
                    }}
                >
                    Start onboarding-demo
                </button>
                
                <p style={{ marginTop: '16px', color: 'var(--ffe-color-text-subtle)' }}>
                    Opplev en flersteg onboarding-prosess med modaler
                </p>
            </div>
            
            <Modal
                isOpen={showOnboarding}
                onRequestClose={() => setShowOnboarding(false)}
                heading={\`Steg \${currentStep + 1} av \${onboardingSteps.length}\`}
            >
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{ fontSize: '64px', marginBottom: '20px' }}>
                        {onboardingSteps[currentStep]?.icon}
                    </div>
                    <h3>{onboardingSteps[currentStep]?.title}</h3>
                    <p>{onboardingSteps[currentStep]?.content}</p>
                </div>
                
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginTop: '24px' 
                }}>
                    <button 
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: currentStep === 0 ? 'var(--ffe-color-background-disabled)' : 'var(--ffe-color-background-subtle)',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px',
                            cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
                        }}
                    >
                        Forrige
                    </button>
                    
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {onboardingSteps.map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: index === currentStep ? 'var(--ffe-color-background-primary)' : 'var(--ffe-color-background-subtle)'
                                }}
                            />
                        ))}
                    </div>
                    
                    <button 
                        onClick={nextStep}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'var(--ffe-color-background-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {currentStep === onboardingSteps.length - 1 ? 'Fullfør' : 'Neste'}
                    </button>
                </div>
            </Modal>
        </div>
    );
}

render(<ModalsShowcase />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Modal, {
    templates: modalsTemplates,
    additionalComponents: {
        ModalBlock
    },
    defaultTemplate: 'simple',
    title: 'Modals Live Code Editor',
    description: 'Comprehensive live code editor for all modal components in the FFE Modals package. Explore Modal and ModalBlock with interactive examples for dialogs, confirmations, forms, and overlay scenarios.'
});
