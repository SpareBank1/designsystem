import React, { useState, useEffect } from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import type { StoryObj, Meta } from '@storybook/react';
import Editor from '@monaco-editor/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const meta: Meta<typeof Accordion> = {
    title: 'Komponenter/Accordion/Live Code Editor',
    component: Accordion,
    parameters: {
        docs: {
            description: {
                component: 'Avansert live code editor med syntax highlighting og real-time preview! Skriv kode og se resultatet umiddelbart.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Simple working templates
const templates = {
    simple: `<Accordion headingLevel={2}>
    <AccordionItem heading="Enkelt eksempel">
        Dette er et enkelt accordion-eksempel som fungerer!
    </AccordionItem>
</Accordion>`,

    multiple: `<Accordion headingLevel={2}>
    <AccordionItem heading="Første seksjon">
        Innhold i første seksjon.
    </AccordionItem>
    <AccordionItem heading="Andre seksjon" isOpen={true}>
        Denne er åpen som standard.
    </AccordionItem>
    <AccordionItem heading="Tredje seksjon">
        Mer innhold her.
    </AccordionItem>
</Accordion>`,

    interactive: `function InteractiveExample() {
    const [count, setCount] = useState(0);
    return (
        <Accordion headingLevel={2}>
            <AccordionItem heading="Interaktiv eksempel">
                <div>
                    <p>Du har klikket {count} ganger</p>
                    <button 
                        onClick={() => setCount(count + 1)}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Klikk meg
                    </button>
                </div>
            </AccordionItem>
        </Accordion>
    );
}

<InteractiveExample />`,

    styled: `<Accordion headingLevel={2}>
    <AccordionItem heading="Stylet eksempel">
        <div style={{ 
            padding: '16px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '4px',
            border: '1px solid var(--ffe-color-border-primary-subtle)'
        }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Du kan legge til HTML!</h4>
            <p style={{ margin: '0 0 12px 0' }}>Dette er et avansert eksempel med ffe-farger.</p>
            <button 
                onClick={() => alert('Knapp klikket!')}
                style={{
                    padding: '8px 16px',
                    backgroundColor: 'var(--ffe-color-background-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Klikk meg
            </button>
        </div>
    </AccordionItem>
</Accordion>`
};

export const LiveCodeEditor: Story = {
    parameters: {
        docs: {
            description: {
                story: `
**🔥 Live Accordion Code Editor**

Skriv JSX-kode og se resultatet umiddelbart! Editoren støtter:
- **TypeScript/JSX syntax highlighting** 
- **Real-time preview** med feilhåndtering
- **React hooks** (useState, useEffect)
- **FFE design tokens** (var(--ffe-color-*))
- **Smart auto-save** med template-gjenoppretting
- **Templates** for rask start

**Tips:**
- Velg en template fra dropdown-menyen for å starte
- Din kode lagres automatisk mens du skriver
- Bruk "Tilbakestill til template" for å gå tilbake til originalversjon
- "Rens lagret kode" sletter kun din lagrede versjon

**Eksempel-kode:**
\`\`\`jsx
<Accordion headingLevel={2}>
    <AccordionItem heading="Min accordion">
        Skriv innhold her!
    </AccordionItem>
</Accordion>
\`\`\`
`,
            },
        },
    },
    render: () => {
        const [code, setCode] = React.useState(templates.simple);
        const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
        const [isFullscreen, setIsFullscreen] = React.useState(false);
        const [autoSave, setAutoSave] = React.useState(true);
        const [selectedTemplate, setSelectedTemplate] = React.useState('simple');
        const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);
        const [originalTemplateCode, setOriginalTemplateCode] = React.useState(templates.simple);

        // Check if current code matches any template
        const getCurrentTemplate = () => {
            for (const [key, templateCode] of Object.entries(templates)) {
                if (code.trim() === templateCode.trim()) {
                    return key;
                }
            }
            return null;
        };

        // Auto-save functionality with debounce
        React.useEffect(() => {
            if (autoSave && hasUnsavedChanges) {
                const timeoutId = setTimeout(() => {
                    localStorage.setItem('accordion-livecode', code);
                    localStorage.setItem('accordion-livecode-template', selectedTemplate);
                }, 500);
                return () => clearTimeout(timeoutId);
            }
        }, [code, autoSave, hasUnsavedChanges, selectedTemplate]);

        // Load saved code on mount
        React.useEffect(() => {
            const saved = localStorage.getItem('accordion-livecode');
            const savedTemplate = localStorage.getItem('accordion-livecode-template') || 'simple';
            
            if (saved && autoSave) {
                setCode(saved);
                setSelectedTemplate(savedTemplate);
                setOriginalTemplateCode(templates[savedTemplate as keyof typeof templates]);
                
                // Check if saved code is different from the template
                const isModified = saved.trim() !== templates[savedTemplate as keyof typeof templates].trim();
                setHasUnsavedChanges(isModified);
            }
        }, []);

        // Track code changes
        const handleCodeChange = (newCode: string) => {
            setCode(newCode);
            
            // Check if code has been modified from original template
            const isModified = newCode.trim() !== originalTemplateCode.trim();
            setHasUnsavedChanges(isModified);
            
            // Update selected template if code matches a template exactly
            const matchingTemplate = getCurrentTemplate();
            if (matchingTemplate && matchingTemplate !== selectedTemplate) {
                setSelectedTemplate(matchingTemplate);
                setOriginalTemplateCode(templates[matchingTemplate as keyof typeof templates]);
                setHasUnsavedChanges(false);
            }
        };

        const downloadCode = () => {
            const blob = new Blob([code], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'accordion-component.tsx';
            a.click();
            URL.revokeObjectURL(url);
        };

        const resetToTemplate = () => {
            const templateCode = templates[selectedTemplate as keyof typeof templates];
            if (confirm(`Er du sikker på at du vil tilbakestille til "${getTemplateName(selectedTemplate)}" template?`)) {
                setCode(templateCode);
                setOriginalTemplateCode(templateCode);
                setHasUnsavedChanges(false);
                localStorage.removeItem('accordion-livecode');
                localStorage.removeItem('accordion-livecode-template');
            }
        };

        const clearSavedCode = () => {
            if (confirm('Er du sikker på at du vil slette lagret kode? Dette vil gå tilbake til standard template.')) {
                const templateCode = templates[selectedTemplate as keyof typeof templates];
                setCode(templateCode);
                setOriginalTemplateCode(templateCode);
                setHasUnsavedChanges(false);
                localStorage.removeItem('accordion-livecode');
                localStorage.removeItem('accordion-livecode-template');
            }
        };

        const loadTemplate = (templateKey: string) => {
            const newTemplateCode = templates[templateKey as keyof typeof templates];
            
            // If user has unsaved changes, ask for confirmation
            if (hasUnsavedChanges) {
                if (!confirm('Du har ulagrede endringer. Er du sikker på at du vil bytte template?')) {
                    return;
                }
            }
            
            setSelectedTemplate(templateKey);
            setCode(newTemplateCode);
            setOriginalTemplateCode(newTemplateCode);
            setHasUnsavedChanges(false);
            
            // Clear saved code when switching templates
            localStorage.removeItem('accordion-livecode');
            localStorage.setItem('accordion-livecode-template', templateKey);
        };

        const getTemplateName = (templateKey: string) => {
            const names: Record<string, string> = {
                simple: 'Enkelt',
                multiple: 'Flere elementer',
                interactive: 'Interaktiv',
                styled: 'Stylet'
            };
            return names[templateKey] || templateKey;
        };

        // Scope object for react-live
        const scope = {
            React,
            useState: React.useState,
            useEffect: React.useEffect,
            Accordion,
            AccordionItem
        };

        return (
            <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <h3 className="ffe-h3">Live Code Editor - {theme === 'light' ? 'Light' : 'Dark'} mode</h3>
                
                {/* Status indicator */}
                {hasUnsavedChanges && (
                    <div style={{
                        marginBottom: '12px',
                        padding: '8px 12px',
                        backgroundColor: '#fff3cd',
                        border: '1px solid #ffeaa7',
                        borderRadius: '4px',
                        color: '#856404',
                        fontSize: '14px'
                    }}>
                        💾 Du har ulagrede endringer - koden lagres automatisk
                    </div>
                )}
                
                {/* Controls */}
                <div style={{ 
                    marginBottom: '16px', 
                    display: 'flex', 
                    gap: '8px', 
                    alignItems: 'center', 
                    flexWrap: 'wrap',
                    padding: '12px',
                    backgroundColor: theme === 'light' ? '#f8f9fa' : '#2d3748',
                    borderRadius: '8px',
                    border: `1px solid ${theme === 'light' ? '#ddd' : '#4a5568'}`
                }}>
                    <button
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: theme === 'light' ? 'white' : '#4a5568',
                            color: theme === 'light' ? 'black' : 'white',
                            border: `1px solid ${theme === 'light' ? '#ddd' : '#6b7280'}`,
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                    </button>
                    
                    <button
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: theme === 'light' ? 'white' : '#4a5568',
                            color: theme === 'light' ? 'black' : 'white',
                            border: `1px solid ${theme === 'light' ? '#ddd' : '#6b7280'}`,
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {isFullscreen ? '🗗 Exit' : '🗖 Fullscreen'}
                    </button>
                    
                    <label style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px',
                        color: theme === 'light' ? 'black' : 'white'
                    }}>
                        <input 
                            type="checkbox" 
                            checked={autoSave}
                            onChange={(e) => setAutoSave(e.target.checked)}
                        />
                        💾 Auto-save
                    </label>

                    {/* Template selector */}
                    <select 
                        value={selectedTemplate}
                        onChange={(e) => loadTemplate(e.target.value)}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: theme === 'light' ? 'white' : '#4a5568',
                            color: theme === 'light' ? 'black' : 'white',
                            border: `1px solid ${theme === 'light' ? '#ddd' : '#6b7280'}`,
                            borderRadius: '4px'
                        }}
                    >
                        <option value="simple">📝 Enkelt</option>
                        <option value="multiple">📚 Flere elementer</option>
                        <option value="interactive">⚡ Interaktiv</option>
                        <option value="styled">🎨 Stylet</option>
                    </select>
                    
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                        <button
                            onClick={downloadCode}
                            style={{
                                padding: '6px 12px',
                                backgroundColor: '#17a2b8',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            📥 Last ned
                        </button>
                        
                        <button
                            onClick={resetToTemplate}
                            style={{
                                padding: '6px 12px',
                                backgroundColor: '#ffc107',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            🔄 Tilbakestill til template
                        </button>
                        
                        <button
                            onClick={clearSavedCode}
                            style={{
                                padding: '6px 12px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            🗑️ Rens lagret kode
                        </button>
                    </div>
                </div>

                {/* Live Code Provider */}
                <LiveProvider code={code} scope={scope} noInline={code.includes('function ')}>
                    <div style={{ 
                        position: isFullscreen ? 'fixed' : 'relative',
                        top: isFullscreen ? '0' : 'auto',
                        left: isFullscreen ? '0' : 'auto',
                        right: isFullscreen ? '0' : 'auto',
                        bottom: isFullscreen ? '0' : 'auto',
                        zIndex: isFullscreen ? 9999 : 'auto',
                        backgroundColor: isFullscreen ? (theme === 'light' ? 'white' : '#1a202c') : 'transparent',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px',
                        height: isFullscreen ? '100vh' : '500px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        padding: isFullscreen ? '20px' : '0'
                    }}>
                        
                        {/* Code Editor */}
                        <div style={{ 
                            border: `1px solid ${theme === 'light' ? '#ddd' : '#4a5568'}`,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: theme === 'light' ? 'white' : '#2d3748'
                        }}>
                            <div style={{ 
                                padding: '12px', 
                                backgroundColor: theme === 'light' ? '#f8f9fa' : '#1a202c',
                                borderBottom: `1px solid ${theme === 'light' ? '#ddd' : '#4a5568'}`,
                                fontWeight: '600',
                                fontSize: '14px',
                                color: theme === 'light' ? 'black' : 'white',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <span>📝 Live Code Editor</span>
                                {hasUnsavedChanges && (
                                    <span style={{ 
                                        fontSize: '12px', 
                                        color: '#ffc107',
                                        backgroundColor: theme === 'light' ? '#fff3cd' : '#2d3748',
                                        padding: '2px 6px',
                                        borderRadius: '3px'
                                    }}>
                                        ● Endret
                                    </span>
                                )}
                            </div>
                            <div style={{ flex: 1 }}>
                                <Editor
                                    height="100%"
                                    defaultLanguage="typescript"
                                    theme={theme === 'light' ? 'light' : 'vs-dark'}
                                    value={code}
                                    onChange={(value) => handleCodeChange(value || '')}
                                    options={{
                                        minimap: { enabled: false },
                                        fontSize: 14,
                                        lineNumbers: 'on',
                                        roundedSelection: false,
                                        scrollBeyondLastLine: false,
                                        automaticLayout: true,
                                        tabSize: 2,
                                        insertSpaces: true,
                                        wordWrap: 'on',
                                        bracketPairColorization: { enabled: true },
                                        guides: {
                                            bracketPairs: true,
                                            indentation: true
                                        },
                                        suggest: {
                                            showKeywords: true,
                                            showSnippets: true
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        {/* Preview */}
                        <div style={{ 
                            border: `1px solid ${theme === 'light' ? '#ddd' : '#4a5568'}`,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: theme === 'light' ? 'white' : '#2d3748'
                        }}>
                            <div style={{ 
                                padding: '12px', 
                                backgroundColor: theme === 'light' ? '#f8f9fa' : '#1a202c',
                                borderBottom: `1px solid ${theme === 'light' ? '#ddd' : '#4a5568'}`,
                                fontWeight: '600',
                                fontSize: '14px',
                                color: theme === 'light' ? 'black' : 'white'
                            }}>
                                👁️ Live Preview
                            </div>
                            <div style={{ 
                                flex: 1,
                                padding: '24px',
                                backgroundColor: theme === 'light' ? 'white' : '#2d3748',
                                color: theme === 'light' ? 'black' : 'white',
                                overflow: 'auto'
                            }}>
                                <LivePreview />
                                <LiveError 
                                    style={{
                                        marginTop: '16px',
                                        padding: '16px',
                                        backgroundColor: '#ffe6e6',
                                        border: '1px solid #ff9999',
                                        borderRadius: '4px',
                                        color: '#cc0000',
                                        fontFamily: 'monospace',
                                        fontSize: '14px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </LiveProvider>
                
                {isFullscreen && (
                    <div 
                        style={{
                            position: 'fixed',
                            top: '10px',
                            right: '10px',
                            zIndex: 10000
                        }}
                    >
                        <button
                            onClick={() => setIsFullscreen(false)}
                            style={{
                                padding: '8px 12px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}
                        >
                            ✕ Lukk fullscreen
                        </button>
                    </div>
                )}
            </div>
        );
    },
}; 