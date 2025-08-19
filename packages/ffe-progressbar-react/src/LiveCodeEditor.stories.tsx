import type { StoryObj, Meta } from '@storybook/react';
import { Progressbar } from './Progressbar';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Progressbar> = {
    title: 'Komponenter/Progressbar/Live Code Editor',
    component: Progressbar,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all progressbar components in the FFE Progressbar package. Explore Progressbar with interactive examples for different progress states, animations, and real-world usage scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Progressbar>;

// Define comprehensive templates for all progressbar components
const progressbarTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📊',
        code: `function SimpleProgressbar() {
    const [progress, setProgress] = useState(45);
    
    return (
        <div style={{ maxWidth: '600px' }}>
            <h4 style={{ margin: '0 0 16px 0' }}>📊 Enkel fremdriftsindikator</h4>
            
            <div style={{ marginBottom: '24px' }}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '8px'
                }}>
                    <span style={{ fontWeight: '500' }}>Fremdrift</span>
                    <span style={{ fontSize: '14px', color: 'var(--ffe-color-text-subtle)' }}>
                        {progress}%
                    </span>
                </div>
                <Progressbar progress={progress} />
            </div>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
                gap: '12px',
                marginBottom: '24px'
            }}>
                <button
                    onClick={() => setProgress(0)}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: 'var(--ffe-color-background-subtle)',
                        border: '1px solid var(--ffe-color-border-subtle)',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    0%
                </button>
                <button
                    onClick={() => setProgress(25)}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: 'var(--ffe-color-background-subtle)',
                        border: '1px solid var(--ffe-color-border-subtle)',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    25%
                </button>
                <button
                    onClick={() => setProgress(50)}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: 'var(--ffe-color-background-subtle)',
                        border: '1px solid var(--ffe-color-border-subtle)',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    50%
                </button>
                <button
                    onClick={() => setProgress(75)}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: 'var(--ffe-color-background-subtle)',
                        border: '1px solid var(--ffe-color-border-subtle)',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    75%
                </button>
                <button
                    onClick={() => setProgress(100)}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: 'var(--ffe-color-background-success-subtle)',
                        border: '1px solid var(--ffe-color-border-success)',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    100%
                </button>
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '8px' 
            }}>
                <h5 style={{ margin: '0 0 8px 0' }}>💡 Tips</h5>
                <p style={{ margin: 0, fontSize: '14px' }}>
                    Fremdriftsindikatorer viser hvor langt en prosess har kommet. Bruk dem for å gi brukere oversikt over status.
                </p>
            </div>
        </div>
    );
}

render(<SimpleProgressbar />);`
    },
    animated: {
        name: 'Animert',
        icon: '🎬',
        code: `function AnimatedProgressbar() {
    const [isRunning, setIsRunning] = useState(false);
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        let interval;
        if (isRunning && progress < 100) {
            interval = setInterval(() => {
                setProgress(prev => {
                    const newProgress = prev + Math.random() * 5;
                    return newProgress >= 100 ? 100 : newProgress;
                });
            }, 200);
        } else if (progress >= 100) {
            setIsRunning(false);
        }
        
        return () => clearInterval(interval);
    }, [isRunning, progress]);
    
    const startProgress = () => {
        setProgress(0);
        setIsRunning(true);
    };
    
    const pauseProgress = () => {
        setIsRunning(false);
    };
    
    const resetProgress = () => {
        setIsRunning(false);
        setProgress(0);
    };
    
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
                <h3 style={{ margin: '0 0 8px 0' }}>🎬 Animert fremdriftsindikator</h3>
                <p style={{ margin: 0 }}>Simulerer en realistisk prosess med animert fremdrift</p>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '12px'
                }}>
                    <span style={{ fontWeight: '500', fontSize: '16px' }}>
                        {progress >= 100 ? '✅ Fullført!' : isRunning ? '⏳ Behandler...' : '⏸️ Pauset'}
                    </span>
                    <span style={{ 
                        fontSize: '18px', 
                        fontWeight: 'bold',
                        color: progress >= 100 ? 'var(--ffe-color-text-success)' : 'var(--ffe-color-text)'
                    }}>
                        {Math.round(progress)}%
                    </span>
                </div>
                <Progressbar progress={progress} />
                
                <div style={{ 
                    marginTop: '8px', 
                    fontSize: '12px', 
                    color: 'var(--ffe-color-text-subtle)',
                    textAlign: 'center'
                }}>
                    {progress < 100 ? 
                        \`Estimert tid igjen: \${Math.max(1, Math.round((100 - progress) / 10))} sekunder\` :
                        'Prosessen er fullført!'
                    }
                </div>
            </div>
            
            <div style={{ 
                display: 'flex', 
                gap: '12px', 
                justifyContent: 'center',
                marginBottom: '24px'
            }}>
                <button
                    onClick={startProgress}
                    disabled={isRunning || progress >= 100}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: (!isRunning && progress < 100) ? 'var(--ffe-color-background-success)' : 'var(--ffe-color-background-disabled)',
                        color: (!isRunning && progress < 100) ? 'white' : 'var(--ffe-color-text-disabled)',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: (!isRunning && progress < 100) ? 'pointer' : 'not-allowed',
                        fontWeight: '500'
                    }}
                >
                    ▶️ Start
                </button>
                
                <button
                    onClick={pauseProgress}
                    disabled={!isRunning}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: isRunning ? 'var(--ffe-color-background-warning)' : 'var(--ffe-color-background-disabled)',
                        color: isRunning ? 'white' : 'var(--ffe-color-text-disabled)',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: isRunning ? 'pointer' : 'not-allowed',
                        fontWeight: '500'
                    }}
                >
                    ⏸️ Pause
                </button>
                
                <button
                    onClick={resetProgress}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: 'var(--ffe-color-background-subtle)',
                        color: 'var(--ffe-color-text)',
                        border: '1px solid var(--ffe-color-border-subtle)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '500'
                    }}
                >
                    🔄 Reset
                </button>
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: progress >= 100 ? 'var(--ffe-color-background-success-subtle)' : 'var(--ffe-color-background-warning-subtle)', 
                borderRadius: '8px',
                border: \`1px solid \${progress >= 100 ? 'var(--ffe-color-border-success)' : 'var(--ffe-color-border-warning)'}\`
            }}>
                <h5 style={{ margin: '0 0 8px 0' }}>
                    {progress >= 100 ? '🎉 Status: Fullført' : '⚙️ Status: Pågående'}
                </h5>
                <p style={{ margin: 0, fontSize: '14px' }}>
                    {progress >= 100 ? 
                        'Prosessen er fullført og alle data er behandlet.' :
                        'Prosessen kjører og behandler data. Du kan pause eller fortsette når som helst.'
                    }
                </p>
            </div>
        </div>
    );
}

render(<AnimatedProgressbar />);`
    },
    variants: {
        name: 'Varianter',
        icon: '🎨',
        code: `function ProgressbarVariants() {
    const [uploadProgress, setUploadProgress] = useState(65);
    const [downloadProgress, setDownloadProgress] = useState(30);
    const [installProgress, setInstallProgress] = useState(85);
    
    const progressItems = [
        {
            label: 'Opplasting av filer',
            progress: uploadProgress,
            setProgress: setUploadProgress,
            icon: '📤',
            color: 'var(--ffe-color-background-primary)'
        },
        {
            label: 'Nedlasting av data',
            progress: downloadProgress,
            setProgress: setDownloadProgress,
            icon: '📥',
            color: 'var(--ffe-color-background-info)'
        },
        {
            label: 'Installasjon av pakker',
            progress: installProgress,
            setProgress: setInstallProgress,
            icon: '⚙️',
            color: 'var(--ffe-color-background-warning)'
        }
    ];
    
    return (
        <div style={{ maxWidth: '800px' }}>
            <h4 style={{ margin: '0 0 24px 0' }}>🎨 Fremdriftsindikator varianter</h4>
            
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '24px',
                marginBottom: '32px'
            }}>
                {progressItems.map((item, index) => (
                    <div 
                        key={index}
                        style={{ 
                            padding: '20px', 
                            backgroundColor: 'var(--ffe-color-background-subtle)', 
                            borderRadius: '8px',
                            border: '1px solid var(--ffe-color-border-subtle)'
                        }}
                    >
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            marginBottom: '12px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                                <span style={{ fontWeight: '500' }}>{item.label}</span>
                            </div>
                            <span style={{ 
                                fontSize: '16px', 
                                fontWeight: 'bold',
                                color: item.progress >= 100 ? 'var(--ffe-color-text-success)' : 'var(--ffe-color-text)'
                            }}>
                                {Math.round(item.progress)}%
                            </span>
                        </div>
                        
                        <Progressbar progress={item.progress} />
                        
                        <div style={{ 
                            display: 'flex', 
                            gap: '8px', 
                            marginTop: '12px',
                            justifyContent: 'center'
                        }}>
                            <button
                                onClick={() => item.setProgress(Math.max(0, item.progress - 10))}
                                style={{
                                    padding: '4px 8px',
                                    backgroundColor: 'white',
                                    border: '1px solid var(--ffe-color-border-subtle)',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '12px'
                                }}
                            >
                                -10%
                            </button>
                            <button
                                onClick={() => item.setProgress(Math.min(100, item.progress + 10))}
                                style={{
                                    padding: '4px 8px',
                                    backgroundColor: 'white',
                                    border: '1px solid var(--ffe-color-border-subtle)',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '12px'
                                }}
                            >
                                +10%
                            </button>
                            <button
                                onClick={() => item.setProgress(100)}
                                style={{
                                    padding: '4px 8px',
                                    backgroundColor: 'var(--ffe-color-background-success)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '12px'
                                }}
                            >
                                Fullfør
                            </button>
                        </div>
                        
                        <div style={{ 
                            marginTop: '8px', 
                            fontSize: '12px', 
                            color: 'var(--ffe-color-text-subtle)',
                            textAlign: 'center'
                        }}>
                            {item.progress >= 100 ? 
                                '✅ Fullført' : 
                                item.progress > 0 ? 
                                    \`🔄 Pågår (\${Math.round(item.progress)}% fullført)\` : 
                                    '⏳ Venter på start'
                            }
                        </div>
                    </div>
                ))}
            </div>
            
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '8px',
                textAlign: 'center'
            }}>
                <h5 style={{ margin: '0 0 8px 0' }}>📋 Oversikt</h5>
                <p style={{ margin: '0 0 12px 0', fontSize: '14px' }}>
                    Totalt fremgang: {Math.round((uploadProgress + downloadProgress + installProgress) / 3)}%
                </p>
                <div style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <button
                        onClick={() => {
                            setUploadProgress(0);
                            setDownloadProgress(0);
                            setInstallProgress(0);
                        }}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'var(--ffe-color-background-subtle)',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Reset alle
                    </button>
                    <button
                        onClick={() => {
                            setUploadProgress(100);
                            setDownloadProgress(100);
                            setInstallProgress(100);
                        }}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'var(--ffe-color-background-success)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Fullfør alle
                    </button>
                </div>
            </div>
        </div>
    );
}

render(<ProgressbarVariants />);`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function ProgressbarShowcase() {
    const [activeStep, setActiveStep] = useState(0);
    const [stepProgress, setStepProgress] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    
    const steps = [
        { name: 'Validering', icon: '✅', description: 'Validerer innsendt data' },
        { name: 'Behandling', icon: '⚙️', description: 'Behandler og prosesserer informasjon' },
        { name: 'Lagring', icon: '💾', description: 'Lagrer data i systemet' },
        { name: 'Fullført', icon: '🎉', description: 'Prosessen er fullført' }
    ];
    
    const startProcess = () => {
        setIsProcessing(true);
        setActiveStep(0);
        setStepProgress(0);
        
        const processStep = (stepIndex) => {
            if (stepIndex >= steps.length) {
                setIsProcessing(false);
                return;
            }
            
            setActiveStep(stepIndex);
            setStepProgress(0);
            
            const progressInterval = setInterval(() => {
                setStepProgress(prev => {
                    const newProgress = prev + Math.random() * 15;
                    if (newProgress >= 100) {
                        clearInterval(progressInterval);
                        setTimeout(() => processStep(stepIndex + 1), 500);
                        return 100;
                    }
                    return newProgress;
                });
            }, 200);
        };
        
        processStep(0);
    };
    
    const resetProcess = () => {
        setIsProcessing(false);
        setActiveStep(0);
        setStepProgress(0);
    };
    
    const getStepStatus = (stepIndex) => {
        if (stepIndex < activeStep) return 'completed';
        if (stepIndex === activeStep) return isProcessing ? 'active' : 'pending';
        return 'pending';
    };
    
    const overallProgress = activeStep >= steps.length ? 100 : 
        (activeStep * 100 + stepProgress) / steps.length;
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '800px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🏆 Prosessbehandling</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Komplett løsning for å vise fremdrift i flertrinns prosesser
                </p>
            </div>
            
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'white', 
                borderRadius: '8px',
                marginBottom: '24px'
            }}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '16px'
                }}>
                    <h3 style={{ margin: 0 }}>📊 Total fremdrift</h3>
                    <span style={{ 
                        fontSize: '18px', 
                        fontWeight: 'bold',
                        color: overallProgress >= 100 ? 'var(--ffe-color-text-success)' : 'var(--ffe-color-text-primary)'
                    }}>
                        {Math.round(overallProgress)}%
                    </span>
                </div>
                <Progressbar progress={overallProgress} />
                <div style={{ 
                    marginTop: '8px', 
                    fontSize: '14px', 
                    color: 'var(--ffe-color-text-subtle)',
                    textAlign: 'center'
                }}>
                    {overallProgress >= 100 ? 
                        '🎉 Alle steg er fullført!' : 
                        \`Steg \${activeStep + 1} av \${steps.length} - \${steps[activeStep]?.name || 'Venter'}\`
                    }
                </div>
            </div>
            
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px',
                marginBottom: '24px'
            }}>
                {steps.map((step, index) => {
                    const status = getStepStatus(index);
                    const isCurrentStep = index === activeStep;
                    
                    return (
                        <div 
                            key={index}
                            style={{
                                padding: '16px',
                                backgroundColor: status === 'completed' ? 'var(--ffe-color-background-success-subtle)' : 
                                              status === 'active' ? 'var(--ffe-color-background-primary-subtle)' : 'white',
                                border: \`1px solid \${status === 'completed' ? 'var(--ffe-color-border-success)' : 
                                                    status === 'active' ? 'var(--ffe-color-border-primary)' : 'var(--ffe-color-border-subtle)'}\`,
                                borderRadius: '8px',
                                opacity: status === 'pending' && !isCurrentStep ? 0.6 : 1
                            }}
                        >
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                marginBottom: isCurrentStep && isProcessing ? '12px' : '0'
                            }}>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: status === 'completed' ? 'var(--ffe-color-background-success)' :
                                                   status === 'active' ? 'var(--ffe-color-background-primary)' : 'var(--ffe-color-background-disabled)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '12px',
                                    fontSize: '16px'
                                }}>
                                    {status === 'completed' ? '✓' : step.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: '500', fontSize: '16px' }}>
                                        {step.name}
                                    </div>
                                    <div style={{ fontSize: '14px', color: 'var(--ffe-color-text-subtle)' }}>
                                        {step.description}
                                    </div>
                                </div>
                                <div style={{ fontSize: '14px', fontWeight: '500' }}>
                                    {status === 'completed' ? '✅ Fullført' :
                                     status === 'active' ? \`\${Math.round(stepProgress)}%\` :
                                     '⏳ Venter'}
                                </div>
                            </div>
                            
                            {isCurrentStep && isProcessing && (
                                <Progressbar progress={stepProgress} />
                            )}
                        </div>
                    );
                })}
            </div>
            
            <div style={{ 
                display: 'flex', 
                gap: '12px', 
                justifyContent: 'center'
            }}>
                <button
                    onClick={startProcess}
                    disabled={isProcessing}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: !isProcessing ? 'var(--ffe-color-background-primary)' : 'var(--ffe-color-background-disabled)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: !isProcessing ? 'pointer' : 'not-allowed',
                        fontWeight: '500'
                    }}
                >
                    {isProcessing ? '⏳ Behandler...' : '🚀 Start prosess'}
                </button>
                
                <button
                    onClick={resetProcess}
                    disabled={isProcessing}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: 'var(--ffe-color-background-subtle)',
                        color: 'var(--ffe-color-text)',
                        border: '1px solid var(--ffe-color-border-subtle)',
                        borderRadius: '6px',
                        cursor: !isProcessing ? 'pointer' : 'not-allowed',
                        fontWeight: '500'
                    }}
                >
                    🔄 Reset
                </button>
            </div>
        </div>
    );
}

render(<ProgressbarShowcase />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Progressbar, {
    templates: progressbarTemplates,
    additionalComponents: {},
    defaultTemplate: 'simple',
    title: 'Progressbar Live Code Editor',
    description: 'Comprehensive live code editor for all progressbar components in the FFE Progressbar package. Explore Progressbar with interactive examples for different progress states, animations, and real-world usage scenarios.'
});
