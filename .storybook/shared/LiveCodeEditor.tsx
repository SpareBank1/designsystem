import Editor from '@monaco-editor/react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import type { ComponentType } from 'react';
import React, { useState } from 'react';
import { LiveError, LivePreview, LiveProvider } from 'react-live';

// Import major FFE components to make them available in live code editor
// Buttons
import {
    ActionButton,
    BackButton,
    ButtonGroup,
    ExpandButton,
    InlineExpandButton,
    PrimaryButton,
    SecondaryButton,
    ShortcutButton,
    TaskButton,
    TertiaryButton,
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
    LinkIcon,
    LinkText,
    MicroText,
    Paragraph,
    PreformattedText,
    SmallText,
    StrongText,
    Wave,
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
import { InputGroup } from '@sb1/ffe-form-react';
import {
    BulletList,
    BulletListItem,
    CheckList,
    CheckListItem,
    DescriptionList,
    DescriptionListDescription,
    DescriptionListMultiCol,
    DescriptionListTerm,
    DetailListCard,
    DetailListCardItem,
    NumberedList,
    NumberedListItem,
    StylizedNumberedList,
    StylizedNumberedListItem,
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
    DetailListCardItem,
});

interface Template {
    name: string;
    icon?: string;
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

export function LiveCodeEditor({
    component,
    additionalComponents = {},
    templates,
    defaultTemplate = Object.keys(templates)[0],
    storageKey,
    title = 'Live Code Editor',
    description = 'Her kan du redigere komponenten og se resultatet før du tar den i bruk.',
}: LiveCodeEditorProps) {
    const [selectedTemplate, setSelectedTemplate] =
        useState<string>(defaultTemplate);
    const [code, setCode] = useState<string>(
        templates[defaultTemplate]?.code || '',
    );
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
    const [autoSave, setAutoSave] = useState<boolean>(true);
    const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);
    const [pendingTemplate, setPendingTemplate] = useState<string | null>(null);
    const [showResetDialog, setShowResetDialog] = useState<boolean>(false);

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
                localStorage.setItem(
                    `${storageKey}-livecode-template`,
                    selectedTemplate,
                );
            }, 500);
            return () => clearTimeout(timeoutId);
        }
    }, [code, autoSave, hasUnsavedChanges, selectedTemplate, storageKey]);

    // Load saved code on mount
    React.useEffect(() => {
        const saved = localStorage.getItem(`${storageKey}-livecode`);
        const savedTemplate =
            localStorage.getItem(`${storageKey}-livecode-template`) ||
            defaultTemplate;

        if (saved && autoSave && templates[savedTemplate]) {
            setCode(saved);
            setSelectedTemplate(savedTemplate);
            setHasUnsavedChanges(false);
        }
    }, [storageKey, autoSave, defaultTemplate, templates]);

    // Track code changes
    const handleCodeChange = (newCode: string) => {
        setCode(newCode);

        // Check if code has been modified from original template
        const isModified =
            newCode.trim() !== templates[selectedTemplate].code.trim();
        setHasUnsavedChanges(isModified);

        // Update selected template if code matches a template exactly
        const matchingTemplate = getCurrentTemplate();
        if (matchingTemplate && matchingTemplate !== selectedTemplate) {
            setSelectedTemplate(matchingTemplate);
            setHasUnsavedChanges(false);
        }
    };

    const resetToTemplate = () => {
        setShowResetDialog(true);
    };

    const handleConfirmReset = React.useCallback(() => {
        const template = templates[selectedTemplate];
        if (template) {
            setCode(template.code);
            setHasUnsavedChanges(false);
            localStorage.removeItem(`${storageKey}-livecode`);
            localStorage.removeItem(`${storageKey}-livecode-template`);
        }
        setShowResetDialog(false);
    }, [selectedTemplate, storageKey, templates]);

    const handleCancelReset = () => {
        setShowResetDialog(false);
    };

    const handleConfirmTemplateChange = React.useCallback(() => {
        if (pendingTemplate) {
            setSelectedTemplate(pendingTemplate);
            setCode(templates[pendingTemplate].code);
            setHasUnsavedChanges(false);
        }
        setShowConfirmDialog(false);
        setPendingTemplate(null);
    }, [pendingTemplate, templates]);

    // Handle keyboard events for confirmation dialogs
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                if (showConfirmDialog) {
                    event.preventDefault();
                    handleConfirmTemplateChange();
                } else if (showResetDialog) {
                    event.preventDefault();
                    handleConfirmReset();
                }
            } else if (event.key === 'Escape') {
                if (showConfirmDialog) {
                    event.preventDefault();
                    handleCancelTemplateChange();
                } else if (showResetDialog) {
                    event.preventDefault();
                    handleCancelReset();
                }
            }
        };

        if (showConfirmDialog || showResetDialog) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [
        showConfirmDialog,
        showResetDialog,
        handleConfirmReset,
        handleConfirmTemplateChange,
    ]);

    const loadTemplate = (templateKey: string) => {
        const newTemplate = templates[templateKey];
        if (!newTemplate) return;

        // If user has unsaved changes, show custom confirmation dialog
        if (hasUnsavedChanges) {
            setPendingTemplate(templateKey);
            setShowConfirmDialog(true);
            return;
        }

        setSelectedTemplate(templateKey);
        setCode(newTemplate.code);
        setHasUnsavedChanges(false);

        // Clear saved code when switching templates
        localStorage.removeItem(`${storageKey}-livecode`);
        localStorage.setItem(`${storageKey}-livecode-template`, templateKey);
    };

    const handleCancelTemplateChange = () => {
        setShowConfirmDialog(false);
        setPendingTemplate(null);
    };

    // Create scope object
    const scope = {
        ...createFFEScope(),
        [component.displayName || component.name || 'Component']: component,
        ...additionalComponents,
    };

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <h3 className="ffe-h3">{title}</h3>
            <p>{description}</p>

            {/* Controls */}
            <div
                style={{
                    marginBottom: '16px',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: '12px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    border: `1px solid #ddd`,
                }}
            >
                {/* Kodemal selector - only show if more than one template */}
                {Object.keys(templates).length > 1 && (
                    <InputGroup label="Eksempler">
                        <Dropdown
                            value={selectedTemplate}
                            onChange={e => loadTemplate(e.target.value)}
                            style={{
                                backgroundColor: 'white',
                                color: 'black',
                                border: `1px solid #ddd`,
                                width: 'auto',
                                minWidth: '200px',
                                maxWidth: '300px',
                            }}
                        >
                            {Object.entries(templates).map(
                                ([key, template]) => (
                                    <option key={key} value={key}>
                                        {template.name}
                                    </option>
                                ),
                            )}
                        </Dropdown>
                    </InputGroup>
                )}
            </div>

            {/* Custom confirmation dialog */}
            {showConfirmDialog && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '24px',
                            borderRadius: '8px',
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                            maxWidth: '400px',
                            width: '90%',
                            border: `1px solid #e2e8f0`,
                        }}
                    >
                        <h3
                            style={{
                                margin: '0 0 16px 0',
                                fontSize: '18px',
                                fontWeight: '600',
                            }}
                        >
                            Ulagrede endringer
                        </h3>
                        <p
                            style={{
                                margin: '0 0 24px 0',
                                lineHeight: '1.5',
                                color: '#4a5568',
                            }}
                        >
                            Ved å tilbakestille vil dine kodeendringer
                            forsvinne. Er du sikker på at du vil tilbakestille?
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                gap: '12px',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <SecondaryButton
                                onClick={handleCancelTemplateChange}
                                size="md"
                            >
                                Avbryt
                            </SecondaryButton>
                            <PrimaryButton
                                onClick={handleConfirmTemplateChange}
                                size="md"
                            >
                                Bytt kodemal
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            )}

            {/* Reset confirmation dialog */}
            {showResetDialog && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '24px',
                            borderRadius: '8px',
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                            maxWidth: '400px',
                            width: '90%',
                            border: `1px solid #e2e8f0`,
                        }}
                    >
                        <h3
                            style={{
                                margin: '0 0 16px 0',
                                fontSize: '18px',
                                fontWeight: '600',
                            }}
                        >
                            Tilbakestill kode
                        </h3>
                        <p
                            style={{
                                margin: '0 0 24px 0',
                                lineHeight: '1.5',
                                color: '#4a5568',
                            }}
                        >
                            Er du sikker på at du vil tilbakestille til "
                            {templates[selectedTemplate]?.name}" kodemal? Alle
                            endringer vil gå tapt.
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                gap: '12px',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <SecondaryButton
                                onClick={handleCancelReset}
                                size="md"
                            >
                                Avbryt
                            </SecondaryButton>
                            <PrimaryButton
                                onClick={handleConfirmReset}
                                size="md"
                            >
                                Tilbakestill
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            )}

            {/* Live Code Provider */}
            <LiveProvider
                code={code}
                scope={scope}
                noInline={code.includes('function ')}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px',
                        height: '500px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                    }}
                >
                    {/* Code Editor */}
                    <div
                        style={{
                            border: `1px solid #ddd`,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'white',
                        }}
                    >
                        <div
                            style={{
                                padding: '12px',
                                backgroundColor: '#f8f9fa',
                                borderBottom: `1px solid #ddd`,
                                fontWeight: '600',
                                fontSize: '14px',
                                color: 'black',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <span>Kodeeditor</span>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                }}
                            >
                                {hasUnsavedChanges && (
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            color: '#28a745',
                                            backgroundColor: '#d4edda',
                                            padding: '2px 6px',
                                            borderRadius: '3px',
                                        }}
                                    >
                                        ● Lagret
                                    </span>
                                )}
                                <label
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        color: 'black',
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={autoSave}
                                        onChange={e =>
                                            setAutoSave(e.target.checked)
                                        }
                                    />
                                    Lagre kodeendringer automatisk
                                </label>
                                <TertiaryButton
                                    size="md"
                                    onClick={resetToTemplate}
                                >
                                    Tilbakestill
                                </TertiaryButton>
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <Editor
                                height="100%"
                                defaultLanguage="typescript"
                                theme="light"
                                value={code}
                                onChange={value =>
                                    handleCodeChange(value || '')
                                }
                                beforeMount={monaco => {
                                    // Completely disable TypeScript diagnostics to prevent squiggly lines
                                    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(
                                        {
                                            noSemanticValidation: true,
                                            noSyntaxValidation: true,
                                            noSuggestionDiagnostics: true,
                                        },
                                    );
                                    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions(
                                        {
                                            noSemanticValidation: true,
                                            noSyntaxValidation: true,
                                            noSuggestionDiagnostics: true,
                                        },
                                    );

                                    // Disable all hover providers
                                    monaco.languages.registerHoverProvider(
                                        'typescript',
                                        {
                                            provideHover: () => null,
                                        },
                                    );
                                    monaco.languages.registerHoverProvider(
                                        'javascript',
                                        {
                                            provideHover: () => null,
                                        },
                                    );
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
                                        indentation: true,
                                    },
                                    // Disable all IntelliSense features
                                    quickSuggestions: false,
                                    suggestOnTriggerCharacters: false,
                                    acceptSuggestionOnEnter: 'off',
                                    tabCompletion: 'off',
                                    wordBasedSuggestions: 'off',
                                    parameterHints: { enabled: false },
                                    hover: { enabled: false },
                                    occurrencesHighlight: 'off',
                                    selectionHighlight: false,
                                    codeLens: false,
                                    folding: false,
                                    foldingHighlight: false,
                                    links: false,
                                    colorDecorators: false,
                                    lightbulb: { enabled: 'off' as any },
                                }}
                            />
                        </div>
                    </div>

                    {/* Preview */}
                    <div
                        style={{
                            border: `1px solid #ddd`,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'white',
                        }}
                    >
                        <div
                            style={{
                                padding: '12px',
                                backgroundColor: '#f8f9fa',
                                borderBottom: `1px solid #ddd`,
                                fontWeight: '600',
                                fontSize: '14px',
                                color: 'black',
                            }}
                        >
                            Forhåndsvisning
                        </div>
                        <div
                            style={{
                                flex: 1,
                                padding: '24px',
                                backgroundColor: 'white',
                                color: 'black',
                                overflow: 'auto',
                            }}
                        >
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
                                    fontSize: '14px',
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
    },
) {
    const storageKey = component.displayName || component.name || 'component';

    return {
        parameters: {
            docs: {
                description: {
                    story:
                        config.description ||
                        `
**🔥 Live ${storageKey} Code Editor**

Skriv JSX-kode og se resultatet umiddelbart!`,
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
