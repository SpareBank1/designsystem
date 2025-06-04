import React, { useState, useId } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InlineExpandButton } from './InlineExpandButton';
import { Collapse } from '@sb1/ffe-collapse-react';
import { Paragraph } from '@sb1/ffe-core-react';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const Custom: React.FC<React.ComponentProps<'a'>> = props => (
    <a {...props}>
        {`Custom `}
        {props.children}
    </a>
);

const meta: Meta<typeof InlineExpandButton<any>> = {
    title: 'Komponenter/Buttons/InlineExpandButton',
    component: InlineExpandButton,
    argTypes: {
        as: {
            options: ['a', 'button', 'custom'],
            mapping: {
                '': 'button',
                a: 'a',
                button: 'button',
                custom: Custom,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof InlineExpandButton<any>>;

export const Standard: Story = {
    args: {
        as: 'button',
        isExpanded: false,
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
                        {isExpanded ? 'Vis mindre' : 'Vis mer'}
                    </InlineExpandButton>
                </Paragraph>

                <Collapse id={collapseId} isOpen={isExpanded} role="region">
                    <div>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                    </div>
                </Collapse>
            </>
        );
    },
};

export const LiveCodeEditor: Story = createLiveCodeStory(InlineExpandButton, {
    templates: {
        simple: {
            name: 'Enkelt',
            icon: '📝',
            code: `() => {
    const [expanded, setExpanded] = useState(false);
    
    return (
        <div>
            <Paragraph>
                Dette er en tekst med utvidet innhold.
                <InlineExpandButton 
                    isExpanded={expanded}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'Vis mindre' : 'Vis mer'}
                </InlineExpandButton>
            </Paragraph>
            
            <Collapse isOpen={expanded}>
                <div style={{ 
                    padding: '12px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)',
                    borderRadius: '4px',
                    marginTop: '8px'
                }}>
                    <BodyText>
                        Her er det utvidede innholdet som vises når du klikker "Vis mer". 
                        Dette kan inneholde ekstra informasjon, detaljer eller annen relevant tekst.
                    </BodyText>
                </div>
            </Collapse>
        </div>
    );
}`
        },
        withCollapse: {
            name: 'Med Collapse',
            icon: '📋',
            code: `() => {
    const [expanded, setExpanded] = useState(false);
    const collapseId = useId();
    
    return (
        <div>
            <Paragraph>
                Jeg samtykker til at selskapene i SpareBank 1 deler og
                benytter opplysningene om meg, slik at jeg kan få bedre og
                relevante tilbud.
                <InlineExpandButton
                    aria-controls={collapseId}
                    aria-expanded={expanded}
                    isExpanded={expanded}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'Vis mindre' : 'Vis mer'}
                </InlineExpandButton>
            </Paragraph>

            <Collapse id={collapseId} isOpen={expanded} role="region">
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)',
                    borderRadius: '4px',
                    marginTop: '8px'
                }}>
                    <Paragraph>
                        Dette er det utvidede innholdet som vises når brukeren 
                        klikker "Vis mer". Her kan du legge inn mer detaljert 
                        informasjon som ikke er nødvendig å vise som standard.
                    </Paragraph>
                    <Paragraph>
                        Du kan ha flere avsnitt og annet innhold her. Informasjonen
                        kan være juridiske detaljer, tekniske spesifikasjoner, eller
                        andre utdypende forklaringer.
                    </Paragraph>
                </div>
            </Collapse>
        </div>
    );
}`
        },
        multiple: {
            name: 'Flere seksjoner',
            icon: '📑',
            code: `() => {
    const [section1, setSection1] = useState(false);
    const [section2, setSection2] = useState(false);
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <Heading4>Seksjon 1: Produktinformasjon</Heading4>
                <Paragraph>
                    Dette er første seksjon med kort innhold om produktet.
                    <InlineExpandButton 
                        isExpanded={section1}
                        onClick={() => setSection1(!section1)}
                    >
                        {section1 ? 'Vis mindre' : 'Les mer'}
                    </InlineExpandButton>
                </Paragraph>
                <Collapse isOpen={section1}>
                    <div style={{ 
                        padding: '12px', 
                        backgroundColor: 'var(--ffe-color-background-subtle)',
                        borderRadius: '4px',
                        marginTop: '8px'
                    }}>
                        <BodyText style={{ fontStyle: 'italic' }}>
                            Utvidet innhold for første seksjon med detaljert produktinformasjon,
                            spesifikasjoner og bruksområder. Her kan du lese om alle funksjonene
                            og hvordan produktet kan hjelpe deg.
                        </BodyText>
                    </div>
                </Collapse>
            </div>
            
            <div>
                <Heading4>Seksjon 2: Priser og vilkår</Heading4>
                <Paragraph>
                    Dette er andre seksjon med informasjon om priser.
                    <InlineExpandButton 
                        isExpanded={section2}
                        onClick={() => setSection2(!section2)}
                    >
                        {section2 ? 'Lukk' : 'Utvid'}
                    </InlineExpandButton>
                </Paragraph>
                <Collapse isOpen={section2}>
                    <div style={{ 
                        padding: '12px', 
                        backgroundColor: 'var(--ffe-color-background-subtle)',
                        borderRadius: '4px',
                        marginTop: '8px'
                    }}>
                        <BulletList>
                            <BulletListItem>Startpris: Fra 299 kr/måned</BulletListItem>
                            <BulletListItem>Ingen bindingstid eller oppstartsavgift</BulletListItem>
                            <BulletListItem>Kan sies opp når som helst</BulletListItem>
                            <BulletListItem>Tilgang til alle premium-funksjoner</BulletListItem>
                        </BulletList>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}`
        }
    },
    additionalComponents: {
        InlineExpandButton,
        Collapse,
        Paragraph
    },
    defaultTemplate: 'simple',
    title: 'InlineExpandButton Live Code Editor',
    description: 'Test InlineExpandButton komponenten interaktivt! Perfekt for utvidbar tekst og seksjoner.'
}); 