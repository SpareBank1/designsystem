import React, { useState, useEffect } from 'react';
import type { ComponentType } from 'react';
import Editor from '@monaco-editor/react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';

// Import major FFE components to make them available in live code editor
// Buttons
import { 
    PrimaryButton, 
    SecondaryButton, 
    ActionButton, 
    TertiaryButton,
    BackButton,
    ExpandButton,
    InlineExpandButton,
    ShortcutButton,
    TaskButton,
    ButtonGroup
} from '@sb1/ffe-buttons-react';

// Core components
import {
    BodyText,
    DividerLine,
    EmphasizedText,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    LinkText,
    LinkIcon,
    MicroText,
    Paragraph,
    PreformattedText,
    SmallText,
    StrongText,
    Wave
} from '@sb1/ffe-core-react';

// Cards
import { CardBase } from '@sb1/ffe-cards-react';

// Accordion
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

// Collapse
import { Collapse } from '@sb1/ffe-collapse-react';

// Icons
import { Icon as FFEIcon } from '@sb1/ffe-icons-react';

// Badge
import { Badge } from '@sb1/ffe-badge-react';

// Chips
import { Chip, ChipRemovable, ChipSelectable } from '@sb1/ffe-chips-react';

// Lists
import { 
    BulletList, 
    BulletListItem, 
    NumberedList, 
    NumberedListItem,
    CheckList,
    CheckListItem,
    StylizedNumberedList,
    StylizedNumberedListItem,
    DescriptionList,
    DescriptionListTerm,
    DescriptionListDescription,
    DescriptionListMultiCol,
    DetailListCard,
    DetailListCardItem
} from '@sb1/ffe-lists-react';

// Standard FFE scope with all major components
const createFFEScope = () => ({
    React,
    useState: React.useState,
    useEffect: React.useEffect,
    useId: React.useId,
    
    // Buttons
    PrimaryButton,
    SecondaryButton, 
    ActionButton,
    TertiaryButton,
    BackButton,
    ExpandButton,
    InlineExpandButton,
    ShortcutButton,
    TaskButton,
    ButtonGroup,
    
    // Core Typography
    BodyText,
    DividerLine,
    EmphasizedText,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    LinkText,
    LinkIcon,
    MicroText,
    Paragraph,
    PreformattedText,
    SmallText,
    StrongText,
    Wave,
    
    // Cards
    CardBase,
    
    // Accordion
    Accordion,
    AccordionItem,
    
    // Collapse
    Collapse,
    
    // Icons
    Icon: FFEIcon,
    
    // Badge
    Badge,
    
    // Chips
    Chip,
    ChipRemovable,
    ChipSelectable,
    
    // Lists
    BulletList,
    BulletListItem,
    NumberedList,
    NumberedListItem,
    CheckList,
    CheckListItem,
    StylizedNumberedList,
    StylizedNumberedListItem,
    DescriptionList,
    DescriptionListTerm,
    DescriptionListDescription,
    DescriptionListMultiCol,
    DetailListCard,
    DetailListCardItem
});

interface Template {
    name: string;
    icon: string;
    code: string;
}

interface LiveCodeEditorProps {
    /** The main component to include in scope */
    component: ComponentType<any>;
    /** Additional components to include in scope */
    additionalComponents?: Record<string, ComponentType<any>>;
    /** Template examples for the component */
    templates: Record<string, Template>;
    /** Default template key */
    defaultTemplate?: string;
    /** Unique localStorage key prefix for this component */
    storageKey: string;
    /** Title for the editor */
    title?: string;
    /** Description for the story */
    description?: string;
}

// Icon component for use in LiveCodeEditor
const IconInternal = ({ 
    name,
    size = 'md',
    ariaLabel
}: {
    name: string;
    size?: 'sm' | 'md' | 'lg';
    ariaLabel?: string;
}) => {
    // Base path for icons - adjust as needed based on your setup
    const iconPath = `/icons/open/300/md/${name}.svg`;
    
    return (
        <span
            role="img"
            aria-label={ariaLabel}
            aria-hidden={!ariaLabel}
            className={`ffe-icons ffe-icons--${size}`}
            style={{
                maskImage: `url(${iconPath})`,
                WebkitMaskImage: `url(${iconPath})`,
                display: 'inline-block',
                width: '1em',
                height: '1em',
                backgroundColor: 'currentColor',
            }}
        />
    );
};

// Button component with proper ffe-button structure
const Button = ({ 
    variant = 'tertiary', 
    size = 'sm',
    onClick, 
    children, 
    disabled = false,
    leftIcon,
    rightIcon,
    iconOnly = false,
    ...props 
}: {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'action';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    iconOnly?: boolean;
    [key: string]: any;
}) => (
    <button
        className={`ffe-button ffe-button--${variant} ffe-button--${size} ${iconOnly ? 'ffe-button--icon-only' : ''}`}
        onClick={onClick}
        disabled={disabled}
        {...props}
    >
        <span className="ffe-button__label">
            {leftIcon && React.cloneElement(leftIcon, {
                className: 'ffe-button__icon ffe-button__icon--left',
                size: 'md',
            })}
            {children}
            {rightIcon && React.cloneElement(rightIcon, {
                className: 'ffe-button__icon ffe-button__icon--right',
                size: 'md',
            })}
        </span>
    </button>
);

export function LiveCodeEditor({
    component,
    additionalComponents = {},
    templates,
    defaultTemplate = Object.keys(templates)[0],
    storageKey,
    title = 'Live Code Editor',
    description = 'Skriv JSX-kode og se resultatet umiddelbart!'
}: LiveCodeEditorProps) {
    const [code, setCode] = React.useState(templates[defaultTemplate]?.code || '');
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
    const [autoSave, setAutoSave] = React.useState(true);
    const [selectedTemplate, setSelectedTemplate] = React.useState(defaultTemplate);
    const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);
    const [originalTemplateCode, setOriginalTemplateCode] = React.useState(templates[defaultTemplate]?.code || '');

    // Check if current code matches any template
    const getCurrentTemplate = () => {
        for (const [key, template] of Object.entries(templates)) {
            if (code.trim() === template.code.trim()) {
                return key;
            }
        }
        return null;
    };

    // Auto-save functionality with debounce
    React.useEffect(() => {
        if (autoSave && hasUnsavedChanges) {
            const timeoutId = setTimeout(() => {
                localStorage.setItem(`${storageKey}-livecode`, code);
                localStorage.setItem(`${storageKey}-livecode-template`, selectedTemplate);
            }, 500);
            return () => clearTimeout(timeoutId);
        }
    }, [code, autoSave, hasUnsavedChanges, selectedTemplate, storageKey]);

    // Load saved code on mount
    React.useEffect(() => {
        const saved = localStorage.getItem(`${storageKey}-livecode`);
        const savedTemplate = localStorage.getItem(`${storageKey}-livecode-template`) || defaultTemplate;
        
        if (saved && autoSave && templates[savedTemplate]) {
            setCode(saved);
            setSelectedTemplate(savedTemplate);
            setOriginalTemplateCode(templates[savedTemplate].code);
            
            // Check if saved code is different from the template
            const isModified = saved.trim() !== templates[savedTemplate].code.trim();
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
            setOriginalTemplateCode(templates[matchingTemplate].code);
            setHasUnsavedChanges(false);
        }
    };

    const downloadCode = () => {
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${storageKey}-component.tsx`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const resetToTemplate = () => {
        const template = templates[selectedTemplate];
        if (template && confirm(`Er du sikker på at du vil tilbakestille til "${template.name}" template?`)) {
            setCode(template.code);
            setOriginalTemplateCode(template.code);
            setHasUnsavedChanges(false);
            localStorage.removeItem(`${storageKey}-livecode`);
            localStorage.removeItem(`${storageKey}-livecode-template`);
        }
    };

    const loadTemplate = (templateKey: string) => {
        const newTemplate = templates[templateKey];
        if (!newTemplate) return;
        
        // If user has unsaved changes, ask for confirmation
        if (hasUnsavedChanges) {
            if (!confirm('Du har ulagrede endringer. Er du sikker på at du vil bytte template?')) {
                return;
            }
        }
        
        setSelectedTemplate(templateKey);
        setCode(newTemplate.code);
        setOriginalTemplateCode(newTemplate.code);
        setHasUnsavedChanges(false);
        
        // Clear saved code when switching templates
        localStorage.removeItem(`${storageKey}-livecode`);
        localStorage.setItem(`${storageKey}-livecode-template`, templateKey);
    };

    // Create scope object
    const scope = {
        ...createFFEScope(),
        [component.displayName || component.name || 'Component']: component,
        ...additionalComponents
    };

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <h3 className="ffe-h3">{title} - {theme === 'light' ? 'Light' : 'Dark'} mode</h3>
            <p>{description}</p>
            
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
                    Auto-save
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
                    {Object.entries(templates).map(([key, template]) => (
                        <option key={key} value={key}>
                            {template.icon} {template.name}
                        </option>
                    ))}
                </select>
                
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button
                        variant="secondary"
                        size="md"
                        onClick={downloadCode}
                        leftIcon={<IconInternal name="cloud_download" ariaLabel="Download code" />}
                    >
                        Last ned
                    </Button>
                    
                    <Button
                        variant="primary"
                        size="md"
                        onClick={resetToTemplate}
                        leftIcon={<IconInternal name="restart_alt" ariaLabel="Reset to template" />}
                    >
                        Tilbakestill
                    </Button>
                </div>
            </div>

            {/* Live Code Provider */}
            <LiveProvider code={code} scope={scope} noInline={code.includes('function ')}>
                <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    height: '500px',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
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
                                beforeMount={(monaco) => {
                                    // Disable TypeScript diagnostics to prevent squiggly lines
                                    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
                                        noSemanticValidation: true,
                                        noSyntaxValidation: false,
                                        noSuggestionDiagnostics: true
                                    });
                                    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                                        noSemanticValidation: true,
                                        noSyntaxValidation: false,
                                        noSuggestionDiagnostics: true
                                    });
                                }}
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
        </div>
    );
}

/**
 * Utility function for creating a live code story for any component
 */
export function createLiveCodeStory<T extends ComponentType<any>>(
    component: T,
    config: {
        templates: Record<string, Template>;
        additionalComponents?: Record<string, ComponentType<any>>;
        defaultTemplate?: string;
        title?: string;
        description?: string;
    }
) {
    const storageKey = component.displayName || component.name || 'component';
    
    return {
        parameters: {
            docs: {
                description: {
                    story: config.description || `
**🔥 Live ${storageKey} Code Editor**

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
- Bruk "Tilbakestill" for å gå tilbake til originalversjon
`,
                },
            },
        },
        render: () => (
            <LiveCodeEditor
                component={component}
                templates={config.templates}
                additionalComponents={config.additionalComponents}
                defaultTemplate={config.defaultTemplate}
                storageKey={storageKey}
                title={config.title}
                description={config.description}
            />
        ),
    };
} 