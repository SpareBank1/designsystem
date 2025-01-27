import React, { useState, useId } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InlineExpandButton } from './InlineExpandButton';
import { Collapse } from '@sb1/ffe-collapse-react';
import { Paragraph } from '@sb1/ffe-core-react';

const meta: Meta<typeof InlineExpandButton<any>> = {
    title: 'Komponenter/Buttons/InlineExpandButton',
    component: InlineExpandButton,
    parameters: {
        docs: {
            description: {
                component:
                    'InlineExpandButton er en knapp som brukes inne i tekst for å vise eller skjule mer innhold. Den er designet for å passe naturlig inn i tekstflyt.',
            },
        },
    },
    argTypes: {
        as: {
            description: 'HTML-elementet som skal brukes',
            options: ['button'],
            mapping: {
                '': 'button',
                button: 'button',
            },
        },
        isExpanded: {
            description: 'Angir om innholdet er ekspandert',
            control: 'boolean',
        },
    },
};
export default meta;

type Story = StoryObj<typeof InlineExpandButton<any>>;

const buttonArgs = {
    as: 'button',
    isExpanded: false,
};

export const Standard: Story = {
    args: {
        ...buttonArgs,
    },
    render: function Render(args) {
        const collapseId = useId();
        const [isExpanded, setExpanded] = useState(args.isExpanded);

        return (
            <>
                <Paragraph>
                    Jeg samtykker til at selskapene i SpareBank 1 deler og
                    benytter opplysningene om meg, slik at jeg kan få bedre og
                    relevante tilbud.
                    <InlineExpandButton
                        {...args}
                        aria-controls={collapseId}
                        aria-expanded={isExpanded}
                        isExpanded={isExpanded}
                        onClick={() => setExpanded(!isExpanded)}
                    >
                        Les mer om samtykke
                    </InlineExpandButton>
                </Paragraph>
                <Collapse id={collapseId} isOpen={isExpanded}>
                    <Paragraph>
                        Dette er mer informasjon om samtykke som vises når
                        knappen klikkes. Informasjonen kan inneholde viktige
                        detaljer som brukeren bør vite om.
                    </Paragraph>
                </Collapse>
            </>
        );
    },
};

export const WithLongText: Story = {
    args: {
        ...buttonArgs,
    },
    render: function Render(args) {
        const collapseId = useId();
        const [isExpanded, setExpanded] = useState(args.isExpanded);

        return (
            <>
                <Paragraph>
                    Her er et eksempel på en lengre tekst som kan være nyttig i
                    enkelte sammenhenger. Teksten kan inneholde viktig
                    informasjon som ikke alle trenger å se med en gang.
                    <InlineExpandButton
                        {...args}
                        aria-controls={collapseId}
                        aria-expanded={isExpanded}
                        isExpanded={isExpanded}
                        onClick={() => setExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Vis mindre' : 'Les hele teksten'}
                    </InlineExpandButton>
                </Paragraph>
                <Collapse id={collapseId} isOpen={isExpanded}>
                    <Paragraph>
                        Dette er den utvidede teksten som vises når knappen
                        klikkes. Den kan inneholde mer detaljert informasjon,
                        forklaringer, eller andre relevante detaljer som ikke
                        trenger å vises umiddelbart.
                    </Paragraph>
                </Collapse>
            </>
        );
    },
};
