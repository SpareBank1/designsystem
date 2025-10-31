import {
    CardRenderProps,
    GroupCard,
    GroupCardElement,
    GroupCardFooter,
    GroupCardTitle,
} from '@sb1/ffe-cards-react';
import { Heading1, Heading2, Paragraph } from '@sb1/ffe-core-react';
import { InputGroup } from '@sb1/ffe-form-react';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { WaveSection } from './WaveSection';

const meta: Meta<typeof WaveSection> = {
    title: 'Komponenter/Shapes/WaveSection',
    component: WaveSection,
};
export default meta;

type Story = StoryObj<typeof WaveSection>;

const defaultArgs = {
    children: (
        <div style={{ padding: '32px' }}>
            <Heading1 id="section-heading">Dette er en overskrift</Heading1>
            <Paragraph>Her er litt innhold</Paragraph>
        </div>
    ),
    'aria-labelledby': 'section-heading',
};

export const Standard: Story = {
    args: { ...defaultArgs },
    render: args => <WaveSection {...args} />,
};

export const Subtle: Story = {
    args: {
        children: (
            <div style={{ padding: '32px' }}>
                <Heading1 id="section-heading">Dette er en overskrift</Heading1>
                <Paragraph>Her er litt innhold</Paragraph>
            </div>
        ),
        'aria-labelledby': 'section-heading',
        backgroundColor: 'subtle',
    },
    render: args => <WaveSection {...args} id="test" />,
};

export const WithHeading: Story = {
    args: {
        ...defaultArgs,
    },
    render: args => (
        <WaveSection {...args}>
            <Heading2 id="section-heading" noMargin>
                Dette er en overskrift
            </Heading2>
        </WaveSection>
    ),
};

export const Example: Story = {
    args: {
        wavePosition: 'both',
        'aria-labelledby': 'section-heading-eksempel',
    },
    render: args => (
        <div>
            <nav className="ffe-header__secondary-nav" role="navigation">
                <ul className="ffe-header__list ffe-header__secondary-nav-list">
                    <li className="ffe-header__list-item">
                        <a
                            className="ffe-header__link ffe-header__link--active"
                            href="#"
                        >
                            Privat
                        </a>
                    </li>
                    <li className="ffe-header__list-item">
                        <a className="ffe-header__link" href="#">
                            Bedrift
                        </a>
                    </li>
                    <li className="ffe-header__list-item">
                        <a className="ffe-header__link" href="#">
                            Om oss
                        </a>
                    </li>
                </ul>
            </nav>
            <div
                style={{
                    backgroundColor: 'var(--ffe-color-background-default)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Heading2>Overskrift</Heading2>
                <Paragraph>
                    Her er litt innhold over bølgen for å vise hvordan den kan
                    brukes
                </Paragraph>
                <InputGroup label="Velg bedrift">
                    <SearchableDropdown
                        dropdownList={[
                            { id: '1', name: 'SpareBank 1' },
                            { id: '2', name: 'DnB' },
                            { id: '3', name: 'Nordea' },
                        ]}
                        dropdownAttributes={['name']}
                        searchAttributes={['name']}
                        id={'id'}
                    />
                </InputGroup>
            </div>
            <WaveSection {...args}>
                <div
                    style={{
                        padding: '32px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Heading2 id="section-heading-eksempel">
                        Dette er en overskrift
                    </Heading2>
                    <Paragraph>
                        Her er litt innhold over bølgen for å vise hvordan den
                        kan brukes
                    </Paragraph>
                    <GroupCard>
                        <GroupCardTitle>
                            <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
                        </GroupCardTitle>
                        <GroupCardElement>
                            Dette er et element i GroupCard
                        </GroupCardElement>
                        <GroupCardElement>
                            Dette er et element i GroupCard
                        </GroupCardElement>
                        <GroupCardFooter>
                            {({ CardAction }: CardRenderProps) => (
                                <CardAction href="https://design.sparebank1.no">
                                    Vis mer
                                </CardAction>
                            )}
                        </GroupCardFooter>
                    </GroupCard>
                </div>
            </WaveSection>
            <div
                style={{
                    backgroundColor: 'var(--ffe-color-background-default)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Heading2>Innholdet fortsetter her</Heading2>
                <Paragraph>
                    Her er litt innhold under bølgen for å vise hvordan den kan
                    brukes
                </Paragraph>
            </div>
            <WaveSection {...args}>
                <div
                    style={{
                        padding: '32px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Heading2 id="section-heading-eksempel">
                        Dette er en overskrift
                    </Heading2>
                    <Paragraph>
                        Her er litt innhold over bølgen for å vise hvordan den
                        kan brukes
                    </Paragraph>
                    <GroupCard>
                        <GroupCardTitle>
                            <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
                        </GroupCardTitle>
                        <GroupCardElement>
                            Dette er et element i GroupCard
                        </GroupCardElement>
                        <GroupCardElement>
                            Dette er et element i GroupCard
                        </GroupCardElement>
                        <GroupCardFooter>
                            {({ CardAction }: CardRenderProps) => (
                                <CardAction href="https://design.sparebank1.no">
                                    Vis mer
                                </CardAction>
                            )}
                        </GroupCardFooter>
                    </GroupCard>
                </div>
            </WaveSection>
        </div>
    ),
};

export const ExampleSubtleBg: Story = {
    args: {
        wavePosition: 'both',
        'aria-labelledby': 'section-heading-subtle',
        backgroundColor: 'default',
    },
    render: args => (
        <div
            style={{
                backgroundColor: 'var(--ffe-color-background-subtle)',
            }}
        >
            <div
                style={{
                    backgroundColor: 'var(--ffe-color-background-subtle)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Heading1>Dette er en overskrift</Heading1>
                <Paragraph>
                    Her er litt innhold over bølgen for å vise hvordan den kan
                    brukes
                </Paragraph>
            </div>
            <WaveSection {...args}>
                <div
                    style={{
                        padding: '32px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Heading2 id="section-heading-subtle">
                        Innholdet fortsetter her
                    </Heading2>
                    <Paragraph>
                        Her er en seksjon med bølge i accent mode for å vise
                        hvordan den kan brukes
                    </Paragraph>
                    <GroupCard>
                        <GroupCardTitle>
                            <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
                        </GroupCardTitle>
                        <GroupCardElement>
                            Dette er et element i GroupCard
                        </GroupCardElement>
                        <GroupCardElement>
                            Dette er et element i GroupCard
                        </GroupCardElement>
                        <GroupCardFooter>
                            {({ CardAction }: CardRenderProps) => (
                                <CardAction href="https://design.sparebank1.no">
                                    Vis mer
                                </CardAction>
                            )}
                        </GroupCardFooter>
                    </GroupCard>
                </div>
            </WaveSection>
            <div
                style={{
                    backgroundColor: 'var(--ffe-color-background-subtle)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Heading2>Dette er en overskrift</Heading2>
                <Paragraph>Og litt innhold under bølgen</Paragraph>
            </div>
        </div>
    ),
};
