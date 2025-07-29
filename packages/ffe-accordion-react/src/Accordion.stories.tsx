import React from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
    title: 'Komponenter/Accordion',
    component: Accordion,
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const WithSubtleBackground: Story = {
    args: {
        headingLevel: 2,
    },
    parameters: {
        docs: {
            description: {
                story: 'Dette eksempelet viser ',
            },
        },
    },
    render: args => (
        <div
            style={{
                backgroundColor: 'var(--ffe-color-background-subtle)',
                padding: 'var(--ffe-spacing-md)',
                borderRadius: '8px',
                border: '1px dashed var(--ffe-color-border-primary-subtle)',
            }}
        >
            <Accordion {...args}>
                <AccordionItem heading="Accordion med subtil bakgrunn">
                    Denne accordionen vises på en subtil bakgrunn
                </AccordionItem>
                <AccordionItem heading="Mer informasjon">
                    Accordion-innholdet har standard bakgrunnsfarge
                </AccordionItem>
                <AccordionItem heading="Ytterligere detaljer">
                    Legg merke til kontrasten mellom den subtile
                    container-bakgrunnen og standardbakgrunnen til det utvidede
                    innholdet
                </AccordionItem>
            </Accordion>
        </div>
    ),
};

export const Standard: Story = {
    args: {
        headingLevel: 2,
    },
    render: args => (
        <Accordion {...args}>
            <AccordionItem heading="Tittel">Skjult innhold</AccordionItem>
            <AccordionItem heading={<span>Enda en tittel</span>}>
                Mer skjult innhold
            </AccordionItem>
            <AccordionItem heading="En siste tittel">
                Enda mer innhold
            </AccordionItem>
        </Accordion>
    ),
};


export const noBodyPadding: Story = {
    args: {
        headingLevel: 2,
    },
    render: args => (
        <Accordion {...args}>
            <AccordionItem heading="Mer informasjon" noPadding>
                <div>
                    <div style={{
                        borderTop: '1px solid var(--ffe-color-border-primary-subtle)',
                        padding: 'var(--ffe-spacing-xs) var(--ffe-spacing-sm)'
                    }}>
                        Her er en liste med noe greier
                    </div>
                    <div style={{
                        borderTop: '1px solid var(--ffe-color-border-primary-subtle)',
                        padding: 'var(--ffe-spacing-xs) var(--ffe-spacing-sm)'
                    }}>
                        Dette er elementer som skal visuelt skille seg fra hverandre
                    </div>
                    <div style={{
                        borderTop: '1px solid var(--ffe-color-border-primary-subtle)',
                        padding: 'var(--ffe-spacing-xs) var(--ffe-spacing-sm)'
                    }}>
                        Dette er et eksempel
                    </div>
                </div>
            </AccordionItem>
        </Accordion >
    ),
};
