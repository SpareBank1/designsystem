import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { ExpandButton } from './ExpandButton';
import { Paragraph } from '@sb1/ffe-core-react';

const meta: Meta<typeof ExpandButton> = {
    title: 'Komponenter/Buttons/ExpandButton',
    component: ExpandButton,
    parameters: {
        docs: {
            description: {
                component:
                    'ExpandButton er en knapp som brukes for å vise eller skjule innhold. Den har et innebygd ekspander-ikon som roterer når innholdet vises eller skjules.',
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
        onClick: {
            description: 'Callback-funksjon som kalles når knappen klikkes',
        },
    },
};
export default meta;

type Story = StoryObj<typeof ExpandButton>;

const buttonArgs = {
    isExpanded: false,
    as: 'button',
};

export const Standard: Story = {
    args: {
        ...buttonArgs,
    },
    render: function Render(args) {
        const [isExpanded, setExpanded] = useState(args.isExpanded);

        return (
            <div>
                <ExpandButton
                    {...args}
                    isExpanded={isExpanded}
                    onClick={() => setExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Vis mindre' : 'Vis mer'}
                </ExpandButton>
                {isExpanded && (
                    <Paragraph>
                        Dette er innholdet som vises når knappen er ekspandert.
                        Du kan legge til så mye innhold du vil her.
                    </Paragraph>
                )}
            </div>
        );
    },
};

export const MedVilkår: Story = {
    args: {
        ...buttonArgs,
    },
    render: function Render(args) {
        const [isExpanded, setExpanded] = useState(args.isExpanded);

        return (
            <div>
                <Paragraph>
                    Ved å fortsette godtar du våre vilkår for behandling av
                    personopplysninger.
                </Paragraph>
                <ExpandButton
                    {...args}
                    isExpanded={isExpanded}
                    onClick={() => setExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Skjul vilkår' : 'Les vilkårene'}
                </ExpandButton>
                {isExpanded && (
                    <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                        <Paragraph>
                            <strong>
                                Vilkår for behandling av personopplysninger:
                            </strong>
                        </Paragraph>
                        <Paragraph>
                            1. Vi behandler dine personopplysninger for å kunne
                            gi deg best mulig tjenester og kundeopplevelse.
                        </Paragraph>
                        <Paragraph>
                            2. Dine opplysninger blir lagret sikkert og deles
                            kun med tredjeparter når det er nødvendig for å
                            levere tjenesten.
                        </Paragraph>
                        <Paragraph>
                            3. Du har rett til innsyn i dine personopplysninger
                            og kan når som helst be om å få dem slettet.
                        </Paragraph>
                    </div>
                )}
            </div>
        );
    },
};

export const MedDetaljer: Story = {
    args: {
        ...buttonArgs,
    },
    render: function Render(args) {
        const [isExpanded, setExpanded] = useState(args.isExpanded);

        return (
            <div>
                <div
                    style={{
                        padding: '1rem',
                        backgroundColor: '#f8f8f8',
                        borderRadius: '4px',
                        marginBottom: isExpanded ? '0' : '1rem',
                    }}
                >
                    <Paragraph style={{ margin: 0 }}>
                        <strong>Totalt å betale: 1.250 kr</strong>
                    </Paragraph>
                </div>
                {isExpanded && (
                    <div
                        style={{
                            padding: '1rem',
                            backgroundColor: '#f8f8f8',
                            borderBottomLeftRadius: '4px',
                            borderBottomRightRadius: '4px',
                            marginTop: '-4px',
                        }}
                    >
                        <Paragraph>Månedspris: 1.000 kr</Paragraph>
                        <Paragraph>Gebyr: 150 kr</Paragraph>
                        <Paragraph>Fakturagebyr: 100 kr</Paragraph>
                    </div>
                )}
                <ExpandButton
                    {...args}
                    isExpanded={isExpanded}
                    onClick={() => setExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Skjul prisdetaljer' : 'Vis prisdetaljer'}
                </ExpandButton>
            </div>
        );
    },
};
