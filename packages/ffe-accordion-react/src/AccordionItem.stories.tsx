import React from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof AccordionItem> = {
    title: 'Komponenter/Accordion/AccordionItem',
    component: AccordionItem,
    parameters: {
        docs: {
            description: {
                component: 'Et individuelt element i en accordion. Må brukes sammen med Accordion-komponenten.',
            },
            source: {
                type: 'dynamic',
                language: 'tsx',
            },
        },
    },
    argTypes: {
        heading: {
            control: { type: 'text' },
            description: 'Tekst eller JSX-element for accordion-overskriften',
            table: {
                type: { summary: 'string | ReactNode' },
            },
        },
        children: {
            control: { type: 'text' },
            description: 'Innholdet som vises når accordion-elementet er utvidet',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        isOpen: {
            control: { type: 'boolean' },
            description: 'Om accordion-elementet skal være åpent som standard',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        ariaLabel: {
            control: { type: 'text' },
            description: 'Tilgjengelighets-label for accordion-knappen',
            table: {
                type: { summary: 'string' },
            },
        },
        onToggleOpen: {
            action: 'toggled',
            control: false,
            description: 'Callback-funksjon som kalles når accordion-elementet åpnes/lukkes',
            table: {
                type: { summary: '(isOpen: boolean) => void' },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof AccordionItem>;

export const Playground: Story = {
    args: {
        heading: 'Rediger denne overskriften',
        children: 'Rediger dette innholdet for å se endringene i real-time!',
        isOpen: false,
        ariaLabel: '',
    },
    parameters: {
        docs: {
            description: {
                story: 'Eksperimenter med AccordionItem-komponenten. Bruk kontrollene under for å endre egenskaper i real-time.',
            },

        },
    },
    render: args => (
        <Accordion headingLevel={2}>
            <AccordionItem {...args} />
        </Accordion>
    ),
};

export const Standard: Story = {
    args: {
        heading: 'Tittel',
        children: 'Skjult innhold',
        isOpen: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Standard AccordionItem med grunnleggende egenskaper.',
            },
        },
    },
    render: args => (
        <Accordion headingLevel={2}>
            <AccordionItem {...args} />
        </Accordion>
    ),
};

export const WithCustomContent: Story = {
    args: {
        heading: 'Avansert innhold',
        isOpen: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'AccordionItem med rikt JSX-innhold. Viser hvordan du kan bruke komplekse elementer inne i accordion-elementet.',
            },
        },
    },
    render: args => (
        <Accordion headingLevel={2}>
            <AccordionItem {...args}>
                <div style={{ padding: '16px 0' }}>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>
                        Rikt innhold
                    </h4>
                    <p style={{ margin: '0 0 12px 0' }}>
                        Du kan inkludere enhver JSX i accordion-innholdet:
                    </p>
                    <ul style={{ margin: '0 0 12px 16px' }}>
                        <li>Lister</li>
                        <li>Knapper</li>
                        <li>Bilder</li>
                        <li>Andre komponenter</li>
                    </ul>
                    <button 
                        type="button" 
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'var(--ffe-color-background-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                        onClick={() => alert('Knapp klikket!')}
                    >
                        Eksempel-knapp
                    </button>
                </div>
            </AccordionItem>
        </Accordion>
    ),
};
