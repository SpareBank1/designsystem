import React from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
    title: 'Komponenter/Accordion',
    component: Accordion,
    parameters: {
        docs: {
            description: {
                component: 'En Accordion-komponent som lar brukere vise og skjule innhold i sammenleggbare seksjoner.',
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
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '2' },
            },
        },
        children: {
            control: false,
            description: 'AccordionItem-komponenter',
        },
    },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Playground: Story = {
    args: {
        headingLevel: 2,
    },
    parameters: {
        docs: {
            description: {
                story: 'Eksperimenter med accordion-komponenten. Du kan redigere innhold, overskrifter og andre egenskaper i real-time ved å bruke kontrollene under.',
            },
            source: {
                transform: (_code: string, storyContext: any) => {
                    return `<Accordion headingLevel={${storyContext.args.headingLevel}}>
    <AccordionItem heading="Første seksjon">
        Dette er innholdet i den første seksjonen. 
        Du kan endre dette innholdet ved å redigere stories-filen.
    </AccordionItem>
    <AccordionItem heading="Andre seksjon">
        Mer innhold her. Accordions er nyttige for å organisere 
        store mengder informasjon på en kompakt måte.
    </AccordionItem>
    <AccordionItem heading="Tredje seksjon">
        Enda mer innhold som kan utvides etter behov.
    </AccordionItem>
</Accordion>`;
                },
            },
        },
    },
    render: args => (
        <Accordion {...args}>
            <AccordionItem heading="Første seksjon">
                Dette er innholdet i den første seksjonen. 
                Du kan endre dette innholdet ved å redigere stories-filen.
            </AccordionItem>
            <AccordionItem heading="Andre seksjon">
                Mer innhold her. Accordions er nyttige for å organisere 
                store mengder informasjon på en kompakt måte.
            </AccordionItem>
            <AccordionItem heading="Tredje seksjon">
                Enda mer innhold som kan utvides etter behov.
            </AccordionItem>
        </Accordion>
    ),
};

export const WithSubtleBackground: Story = {
    args: {
        headingLevel: 2,
    },
    parameters: {
        docs: {
            description: {
                story: 'Dette eksempelet viser accordion på en subtil bakgrunn for å demonstrere kontrast.',
            },
            source: {
                transform: (_code: string, storyContext: any) => {
                    return `<div style={{
    backgroundColor: 'var(--ffe-color-background-subtle)',
    padding: 'var(--ffe-spacing-md)',
    borderRadius: '8px',
    border: '1px dashed var(--ffe-color-border-primary-subtle)',
}}>
    <Accordion headingLevel={${storyContext.args.headingLevel}}>
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
</div>`;
                },
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
    parameters: {
        docs: {
            description: {
                story: 'Standard accordion med enkelt innhold.',
            },
        },
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
