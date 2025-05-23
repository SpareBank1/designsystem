import React, { useState } from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta = {
    title: 'Komponenter/Accordion/Interactive Playground',
    parameters: {
        docs: {
            description: {
                component: 'Interaktiv sandbox for å eksperimentere med Accordion-komponenten. Endre koden live og se resultatene umiddelbart!',
            },
            source: {
                type: 'dynamic',
                language: 'tsx',
            },
        },
    },
    argTypes: {
        headingLevel: {
            control: { type: 'select' },
            options: [1, 2, 3, 4, 5, 6],
            description: 'Overskriftsnivå for accordion-elementer',
        },
        numberOfItems: {
            control: { type: 'range', min: 1, max: 10, step: 1 },
            description: 'Antall accordion-elementer',
        },
        defaultOpenFirst: {
            control: { type: 'boolean' },
            description: 'Om første element skal være åpent som standard',
        },
        backgroundColor: {
            control: { type: 'select' },
            options: ['', 'var(--ffe-color-background-subtle)', 'var(--ffe-color-background-primary)', 'var(--ffe-color-background-secondary)'],
            labels: {
                '': 'Standard',
                'var(--ffe-color-background-subtle)': 'Subtil',
                'var(--ffe-color-background-primary)': 'Primær',
                'var(--ffe-color-background-secondary)': 'Sekundær',
            },
            description: 'Bakgrunnsfarge for container',
        },
        itemPrefix: {
            control: { type: 'text' },
            description: 'Prefiks for accordion-overskrifter',
        },
        contentTemplate: {
            control: { type: 'text' },
            description: 'Mal for accordion-innhold (bruk {index} for nummer)',
        },
        showBorder: {
            control: { type: 'boolean' },
            description: 'Vis ramme rundt container',
        },
        padding: {
            control: { type: 'select' },
            options: ['0', 'var(--ffe-spacing-sm)', 'var(--ffe-spacing-md)', 'var(--ffe-spacing-lg)', 'var(--ffe-spacing-xl)'],
            labels: {
                '0': 'Ingen',
                'var(--ffe-spacing-sm)': 'Liten',
                'var(--ffe-spacing-md)': 'Medium',
                'var(--ffe-spacing-lg)': 'Stor',
                'var(--ffe-spacing-xl)': 'Ekstra stor',
            },
            description: 'Padding for container',
        },
    },
};

export default meta;

type Story = StoryObj;

export const LiveCodePlayground: Story = {
    args: {
        headingLevel: 2,
        numberOfItems: 3,
        defaultOpenFirst: false,
        backgroundColor: '',
        itemPrefix: 'Seksjon',
        contentTemplate: 'Dette er innholdet for element nummer {index}. Du kan endre denne teksten ved å redigere contentTemplate-kontrollen.',
        showBorder: false,
        padding: 'var(--ffe-spacing-md)',
    },
    parameters: {
        docs: {
            description: {
                story: `
**Live Coding Playground** 🚀

Dette er en fullt interaktiv sandbox hvor du kan:

- **Endre antall elementer** i real-time
- **Tilpasse styling** med kontrollene
- **Modifisere innhold dynamisk**
- **Eksperimentere med ulike konfigurasjoner**

**Hvordan bruke:**
1. Bruk kontrollene under for å endre egenskaper
2. Se endringene umiddelbart i preview
3. Kopier den genererte koden fra "Show code"-knappen
4. Bruk koden i ditt eget prosjekt!

**Tips:** Prøv å endre \`numberOfItems\` og se hvordan accordion-elementene oppdateres automatisk!
`,
            },
            source: {
                transform: (_code: string, storyContext: any) => {
                    const { 
                        headingLevel, 
                        numberOfItems, 
                        defaultOpenFirst, 
                        backgroundColor, 
                        itemPrefix, 
                        contentTemplate, 
                        showBorder, 
                        padding 
                    } = storyContext.args;

                    const items = Array.from({ length: numberOfItems }, (_, index) => {
                        const itemNumber = index + 1;
                        const content = contentTemplate.replace(/{index}/g, itemNumber.toString());
                        return `    <AccordionItem 
        heading="${itemPrefix} ${itemNumber}"
        ${index === 0 && defaultOpenFirst ? 'isOpen={true}' : ''}
    >
        ${content}
    </AccordionItem>`;
                    }).join('\n');

                    const containerStyle = `{${[
                        backgroundColor && `backgroundColor: '${backgroundColor}'`,
                        padding && `padding: '${padding}'`,
                        showBorder && `border: '1px solid var(--ffe-color-border-primary)'`,
                        showBorder && `borderRadius: '8px'`,
                    ].filter(Boolean).join(', ')}}`;

                    const hasContainerStyle = backgroundColor || padding || showBorder;

                    return `${hasContainerStyle ? `<div style=${containerStyle}>` : ''}
<Accordion headingLevel={${headingLevel}}>
${items}
</Accordion>
${hasContainerStyle ? '</div>' : ''}`;
                },
            },
        },
    },
    render: (args: any) => {
        const { 
            headingLevel, 
            numberOfItems, 
            defaultOpenFirst, 
            backgroundColor, 
            itemPrefix, 
            contentTemplate, 
            showBorder, 
            padding 
        } = args;

        const containerStyle: React.CSSProperties = {
            ...(backgroundColor && { backgroundColor }),
            ...(padding && { padding }),
            ...(showBorder && { 
                border: '1px solid var(--ffe-color-border-primary)', 
                borderRadius: '8px' 
            }),
        };

        const hasContainerStyle = backgroundColor || padding || showBorder;

        const accordionContent = (
            <Accordion headingLevel={headingLevel}>
                {Array.from({ length: numberOfItems }, (_, index) => {
                    const itemNumber = index + 1;
                    const content = contentTemplate.replace(/{index}/g, itemNumber.toString());
                    return (
                        <AccordionItem
                            key={index}
                            heading={`${itemPrefix} ${itemNumber}`}
                            isOpen={index === 0 && defaultOpenFirst}
                        >
                            {content}
                        </AccordionItem>
                    );
                })}
            </Accordion>
        );

        return hasContainerStyle ? (
            <div style={containerStyle}>
                {accordionContent}
            </div>
        ) : (
            accordionContent
        );
    },
};

export const StateManagementDemo: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: `
**State Management Demo** 🎛️

Dette eksempelet viser hvordan du kan håndtere accordion-state programmatisk.
Bruk knappene for å kontrollere accordion-elementene fra kode.
`,
            },
            source: {
                transform: () => {
                    return `function AccordionWithControls() {
    const [openStates, setOpenStates] = useState([false, false, false]);

    const toggleItem = (index: number) => {
        setOpenStates(prev => prev.map((state, i) => 
            i === index ? !state : state
        ));
    };

    const openAll = () => setOpenStates([true, true, true]);
    const closeAll = () => setOpenStates([false, false, false]);

    return (
        <div>
            <div style={{ marginBottom: '16px', gap: '8px', display: 'flex' }}>
                <button onClick={openAll}>Åpne alle</button>
                <button onClick={closeAll}>Lukk alle</button>
                <button onClick={() => toggleItem(0)}>Toggle 1</button>
                <button onClick={() => toggleItem(1)}>Toggle 2</button>
                <button onClick={() => toggleItem(2)}>Toggle 3</button>
            </div>
            
            <Accordion headingLevel={2}>
                <AccordionItem 
                    heading="Kontrollert element 1" 
                    isOpen={openStates[0]}
                    onToggleOpen={(isOpen) => toggleItem(0)}
                >
                    Dette elementets tilstand kontrolleres av React state
                </AccordionItem>
                <AccordionItem 
                    heading="Kontrollert element 2" 
                    isOpen={openStates[1]}
                    onToggleOpen={(isOpen) => toggleItem(1)}
                >
                    Du kan åpne/lukke dette med knappene over
                </AccordionItem>
                <AccordionItem 
                    heading="Kontrollert element 3" 
                    isOpen={openStates[2]}
                    onToggleOpen={(isOpen) => toggleItem(2)}
                >
                    Eller kontrollere alle på en gang!
                </AccordionItem>
            </Accordion>
        </div>
    );
}`;
                },
            },
        },
    },
    render: () => {
        const [openStates, setOpenStates] = useState([false, false, false]);

        const toggleItem = (index: number) => {
            setOpenStates(prev => prev.map((state, i) => 
                i === index ? !state : state
            ));
        };

        const openAll = () => setOpenStates([true, true, true]);
        const closeAll = () => setOpenStates([false, false, false]);

        return (
            <div>
                <div style={{ 
                    marginBottom: '16px', 
                    gap: '8px', 
                    display: 'flex', 
                    flexWrap: 'wrap' 
                }}>
                    <button 
                        type="button"
                        onClick={openAll}
                        style={{
                            padding: '8px 12px',
                            backgroundColor: 'var(--ffe-color-background-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Åpne alle
                    </button>
                    <button 
                        type="button"
                        onClick={closeAll}
                        style={{
                            padding: '8px 12px',
                            backgroundColor: 'var(--ffe-color-background-secondary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Lukk alle
                    </button>
                    <button 
                        type="button"
                        onClick={() => toggleItem(0)}
                        style={{
                            padding: '8px 12px',
                            backgroundColor: openStates[0] ? 'var(--ffe-color-background-success)' : 'var(--ffe-color-background-info)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Toggle 1
                    </button>
                    <button 
                        type="button"
                        onClick={() => toggleItem(1)}
                        style={{
                            padding: '8px 12px',
                            backgroundColor: openStates[1] ? 'var(--ffe-color-background-success)' : 'var(--ffe-color-background-info)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Toggle 2
                    </button>
                    <button 
                        type="button"
                        onClick={() => toggleItem(2)}
                        style={{
                            padding: '8px 12px',
                            backgroundColor: openStates[2] ? 'var(--ffe-color-background-success)' : 'var(--ffe-color-background-info)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Toggle 3
                    </button>
                </div>
                
                <Accordion headingLevel={2}>
                    <AccordionItem 
                        heading="Kontrollert element 1" 
                        isOpen={openStates[0]}
                        onToggleOpen={() => toggleItem(0)}
                    >
                        Dette elementets tilstand kontrolleres av React state. 
                        Prøv knappene over for å se hvordan programmatisk kontroll fungerer!
                    </AccordionItem>
                    <AccordionItem 
                        heading="Kontrollert element 2" 
                        isOpen={openStates[1]}
                        onToggleOpen={() => toggleItem(1)}
                    >
                        Du kan åpne/lukke dette med knappene over, eller ved å klikke på overskriften.
                        State synkroniseres automatisk!
                    </AccordionItem>
                    <AccordionItem 
                        heading="Kontrollert element 3" 
                        isOpen={openStates[2]}
                        onToggleOpen={() => toggleItem(2)}
                    >
                        Eller kontrollere alle på en gang med "Åpne alle" / "Lukk alle" knappene.
                        Dette er nyttig for komplekse brukergrensesnitt!
                    </AccordionItem>
                </Accordion>
            </div>
        );
    },
}; 