import type { StoryObj, Meta } from '@storybook/react';
import { Spinner } from './Spinner';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Spinner> = {
    title: 'Komponenter/Spinner/Live Code Editor',
    component: Spinner,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for the Spinner component in the FFE Spinner package. Explore different spinner sizes, loading states, and real-world scenarios for indicating loading progress.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

// Define comprehensive templates for spinner component
const spinnerTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '⭕',
        code: `function SimpleSpinner() {
    const [isLoading, setIsLoading] = useState(true);
    
    const toggleLoading = () => {
        setIsLoading(!isLoading);
    };
    
    return (
        <div style={{ maxWidth: '400px', textAlign: 'center' }}>
            <div style={{ 
                padding: '40px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                {isLoading ? (
                    <div>
                        <Spinner />
                        <p style={{ marginTop: '16px', color: 'var(--ffe-color-text-subtle)' }}>
                            Laster innhold...
                        </p>
                    </div>
                ) : (
                    <div>
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                        <p style={{ margin: 0, color: 'var(--ffe-color-text-success)' }}>
                            Innhold lastet!
                        </p>
                    </div>
                )}
            </div>
            
            <button
                onClick={toggleLoading}
                style={{
                    padding: '12px 24px',
                    backgroundColor: 'var(--ffe-color-background-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                {isLoading ? 'Stopp lasting' : 'Start lasting'}
            </button>
        </div>
    );
}

<SimpleSpinner />`
    },
    sizes: {
        name: 'Størrelser',
        icon: '📏',
        code: `function SpinnerSizes() {
    const sizes = [
        { name: 'Liten', size: 'sm', description: 'For små komponenter og inline bruk' },
        { name: 'Medium', size: 'md', description: 'Standard størrelse for de fleste tilfeller' },
        { name: 'Stor', size: 'lg', description: 'For større områder og hovedlasting' },
        { name: 'Ekstra stor', size: 'xl', description: 'For fullside lasting' }
    ];
    
    return (
        <div style={{ maxWidth: '600px' }}>
            <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>
                Spinner størrelser
            </h3>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '20px' 
            }}>
                {sizes.map(size => (
                    <div
                        key={size.size}
                        style={{
                            padding: '24px',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            textAlign: 'center'
                        }}
                    >
                        <h4 style={{ margin: '0 0 16px 0' }}>{size.name}</h4>
                        
                        <div style={{ 
                            padding: '20px', 
                            backgroundColor: 'var(--ffe-color-background-subtle)', 
                            borderRadius: '4px',
                            marginBottom: '12px'
                        }}>
                            <Spinner size={size.size} />
                        </div>
                        
                        <p style={{ 
                            margin: 0, 
                            fontSize: '14px', 
                            color: 'var(--ffe-color-text-subtle)' 
                        }}>
                            {size.description}
                        </p>
                    </div>
                ))}
            </div>
            
            <div style={{ 
                marginTop: '24px', 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '8px' 
            }}>
                <h4 style={{ margin: '0 0 8px 0' }}>💡 Tips</h4>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Bruk små spinnere for inline lasting</li>
                    <li>Medium er standard for de fleste tilfeller</li>
                    <li>Store spinnere for hovedinnhold</li>
                    <li>Ekstra store for fullside lasting</li>
                </ul>
            </div>
        </div>
    );
}

<SpinnerSizes />`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveSpinner() {
    const [loadingStates, setLoadingStates] = useState({
        profile: false,
        messages: false,
        settings: false,
        data: false
    });
    
    const [progress, setProgress] = useState({
        profile: 0,
        messages: 0,
        settings: 0,
        data: 0
    });
    
    const startLoading = (key) => {
        setLoadingStates(prev => ({ ...prev, [key]: true }));
        setProgress(prev => ({ ...prev, [key]: 0 }));
        
        // Simuler lasting med progress
        const interval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev[key] + Math.random() * 20;
                if (newProgress >= 100) {
                    clearInterval(interval);
                    setLoadingStates(prevStates => ({ ...prevStates, [key]: false }));
                    return { ...prev, [key]: 100 };
                }
                return { ...prev, [key]: Math.min(newProgress, 100) };
            });
        }, 200);
    };
    
    const sections = [
        { key: 'profile', title: 'Profil', icon: '👤', description: 'Last brukerprofilinformasjon' },
        { key: 'messages', title: 'Meldinger', icon: '💬', description: 'Hent nye meldinger' },
        { key: 'settings', title: 'Innstillinger', icon: '⚙️', description: 'Last brukerinnstillinger' },
        { key: 'data', title: 'Data', icon: '📊', description: 'Synkroniser data' }
    ];
    
    return (
        <div style={{ maxWidth: '700px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-primary)', 
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center',
                marginBottom: '24px'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>⚡ Interaktiv Lasting</h3>
                <p style={{ margin: 0 }}>Klikk på knappene for å simulere lasting av forskjellige seksjoner</p>
            </div>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '16px',
                marginBottom: '24px'
            }}>
                {sections.map(section => (
                    <div
                        key={section.key}
                        style={{
                            padding: '20px',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '8px',
                            backgroundColor: 'white'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                            <span style={{ fontSize: '24px', marginRight: '12px' }}>{section.icon}</span>
                            <h4 style={{ margin: 0 }}>{section.title}</h4>
                        </div>
                        
                        <p style={{ 
                            margin: '0 0 16px 0', 
                            fontSize: '14px', 
                            color: 'var(--ffe-color-text-subtle)' 
                        }}>
                            {section.description}
                        </p>
                        
                        <div style={{ 
                            minHeight: '80px', 
                            display: 'flex', 
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'var(--ffe-color-background-subtle)',
                            borderRadius: '4px',
                            marginBottom: '12px'
                        }}>
                            {loadingStates[section.key] ? (
                                <div style={{ textAlign: 'center' }}>
                                    <Spinner size="md" />
                                    <div style={{ 
                                        marginTop: '12px', 
                                        fontSize: '14px',
                                        color: 'var(--ffe-color-text-subtle)'
                                    }}>
                                        {Math.round(progress[section.key])}% fullført
                                    </div>
                                    <div style={{
                                        width: '100px',
                                        height: '4px',
                                        backgroundColor: 'var(--ffe-color-background-disabled)',
                                        borderRadius: '2px',
                                        marginTop: '8px',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            width: \`\${progress[section.key]}%\`,
                                            height: '100%',
                                            backgroundColor: 'var(--ffe-color-background-success)',
                                            transition: 'width 0.3s ease'
                                        }} />
                                    </div>
                                </div>
                            ) : progress[section.key] === 100 ? (
                                <div style={{ textAlign: 'center', color: 'var(--ffe-color-text-success)' }}>
                                    <div style={{ fontSize: '32px' }}>✅</div>
                                    <div style={{ fontSize: '14px', marginTop: '4px' }}>Fullført!</div>
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', color: 'var(--ffe-color-text-subtle)' }}>
                                    <div style={{ fontSize: '32px' }}>⏸️</div>
                                    <div style={{ fontSize: '14px', marginTop: '4px' }}>Klar til lasting</div>
                                </div>
                            )}
                        </div>
                        
                        <button
                            onClick={() => startLoading(section.key)}
                            disabled={loadingStates[section.key]}
                            style={{
                                width: '100%',
                                padding: '10px 16px',
                                backgroundColor: loadingStates[section.key] 
                                    ? 'var(--ffe-color-background-disabled)' 
                                    : 'var(--ffe-color-background-primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: loadingStates[section.key] ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {loadingStates[section.key] ? 'Laster...' : \`Last \${section.title}\`}
                        </button>
                    </div>
                ))}
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '8px' 
            }}>
                <h4 style={{ margin: '0 0 8px 0' }}>📊 Status oversikt</h4>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <div><strong>Aktive:</strong> {Object.values(loadingStates).filter(Boolean).length}</div>
                    <div><strong>Fullførte:</strong> {Object.values(progress).filter(p => p === 100).length}</div>
                    <div><strong>Ventende:</strong> {Object.values(progress).filter(p => p === 0).length}</div>
                </div>
            </div>
        </div>
    );
}

<InteractiveSpinner />`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function SpinnerShowcase() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [completedSteps, setCompletedSteps] = useState(new Set());
    
    const steps = [
        { id: 'validate', title: 'Validerer data', icon: '🔍', duration: 2000 },
        { id: 'process', title: 'Behandler informasjon', icon: '⚙️', duration: 3000 },
        { id: 'save', title: 'Lagrer endringer', icon: '💾', duration: 1500 },
        { id: 'notify', title: 'Sender varsler', icon: '📧', duration: 1000 },
        { id: 'complete', title: 'Fullført', icon: '✅', duration: 0 }
    ];
    
    const startProcess = () => {
        setIsProcessing(true);
        setCurrentStep(0);
        setCompletedSteps(new Set());
        
        const processStep = (stepIndex) => {
            if (stepIndex >= steps.length - 1) {
                setCurrentStep(stepIndex);
                setCompletedSteps(prev => new Set([...prev, steps[stepIndex - 1]?.id]));
                setIsProcessing(false);
                return;
            }
            
            setCurrentStep(stepIndex);
            
            setTimeout(() => {
                setCompletedSteps(prev => new Set([...prev, steps[stepIndex].id]));
                processStep(stepIndex + 1);
            }, steps[stepIndex].duration);
        };
        
        processStep(0);
    };
    
    const resetProcess = () => {
        setCurrentStep(0);
        setIsProcessing(false);
        setCompletedSteps(new Set());
    };
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '600px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🏆 Prosess Showcase</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Demonstrerer spinner i en flerstegs prosess
                </p>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '24px',
                marginBottom: '20px'
            }}>
                <h3 style={{ margin: '0 0 20px 0', textAlign: 'center' }}>
                    📋 Databehandling prosess
                </h3>
                
                <div style={{ marginBottom: '24px' }}>
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '12px 16px',
                                marginBottom: '8px',
                                borderRadius: '6px',
                                backgroundColor: 
                                    completedSteps.has(step.id) ? 'var(--ffe-color-background-success-subtle)' :
                                    currentStep === index && isProcessing ? 'var(--ffe-color-background-info-subtle)' :
                                    'var(--ffe-color-background-subtle)',
                                border: currentStep === index && isProcessing ? '2px solid var(--ffe-color-background-info)' : '1px solid var(--ffe-color-border-subtle)'
                            }}
                        >
                            <div style={{ 
                                width: '40px', 
                                display: 'flex', 
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {completedSteps.has(step.id) ? (
                                    <span style={{ fontSize: '20px' }}>✅</span>
                                ) : currentStep === index && isProcessing ? (
                                    <Spinner size="sm" />
                                ) : (
                                    <span style={{ fontSize: '20px', opacity: 0.5 }}>{step.icon}</span>
                                )}
                            </div>
                            
                            <div style={{ flex: 1, marginLeft: '12px' }}>
                                <div style={{ fontWeight: '500' }}>{step.title}</div>
                                {currentStep === index && isProcessing && (
                                    <div style={{ 
                                        fontSize: '12px', 
                                        color: 'var(--ffe-color-text-subtle)',
                                        marginTop: '2px'
                                    }}>
                                        Behandler...
                                    </div>
                                )}
                                {completedSteps.has(step.id) && (
                                    <div style={{ 
                                        fontSize: '12px', 
                                        color: 'var(--ffe-color-text-success)',
                                        marginTop: '2px'
                                    }}>
                                        Fullført
                                    </div>
                                )}
                            </div>
                            
                            <div style={{ 
                                fontSize: '12px', 
                                color: 'var(--ffe-color-text-subtle)' 
                            }}>
                                {step.duration > 0 ? \`~\${step.duration/1000}s\` : ''}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    justifyContent: 'center',
                    marginTop: '24px'
                }}>
                    <button
                        onClick={startProcess}
                        disabled={isProcessing}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: isProcessing 
                                ? 'var(--ffe-color-background-disabled)' 
                                : 'var(--ffe-color-background-success)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: isProcessing ? 'not-allowed' : 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        {isProcessing ? 'Behandler...' : 'Start prosess'}
                    </button>
                    
                    <button
                        onClick={resetProcess}
                        disabled={isProcessing}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: 'var(--ffe-color-background-secondary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: isProcessing ? 'not-allowed' : 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        Tilbakestill
                    </button>
                </div>
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '8px' 
            }}>
                <h4 style={{ margin: '0 0 8px 0' }}>📈 Prosess statistikk</h4>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <div><strong>Fullførte steg:</strong> {completedSteps.size}/{steps.length - 1}</div>
                    <div><strong>Nåværende steg:</strong> {isProcessing ? currentStep + 1 : 'Ingen'}</div>
                    <div><strong>Status:</strong> {
                        isProcessing ? 'Behandler' : 
                        completedSteps.size === steps.length - 1 ? 'Fullført' : 'Venter'
                    }</div>
                </div>
            </div>
        </div>
    );
}

<SpinnerShowcase />`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Spinner, {
    templates: spinnerTemplates,
    additionalComponents: {},
    defaultTemplate: 'simple',
    title: 'Spinner Live Code Editor',
    description: 'Comprehensive live code editor for the Spinner component in the FFE Spinner package. Explore different spinner sizes, loading states, and real-world scenarios for indicating loading progress.'
});
