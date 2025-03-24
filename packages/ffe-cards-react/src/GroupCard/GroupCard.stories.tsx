import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardRenderProps } from '../types';
import { GroupCard } from './GroupCard';
import { GroupCardElement } from './GroupCardElement';
import { GroupCardFooter } from './GroupCardFooter';
import { GroupCardTitle } from './GroupCardTitle';

const Custom: React.FC<React.ComponentProps<'div'>> = props => (
    <div {...props}>
        {`Custom `}
        {props.children}
    </div>
);

const meta: Meta<typeof GroupCard<any>> = {
    title: 'Komponenter/Cards/GroupCard',
    component: GroupCard,
    argTypes: {
        as: {
            options: ['span', 'div', 'custom'],
            mapping: {
                div: 'div',
                span: 'span',
                custom: Custom,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof GroupCard<any>>;

export const Standard: Story = {
    args: {
        as: 'div',
    },
    render: args => (
        <GroupCard {...args}>
            <GroupCardTitle>
                <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
            </GroupCardTitle>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
            <GroupCardFooter>
                {({ CardAction }: CardRenderProps) => (
                    <CardAction href="https://design.sparebank1.no">
                        Vis mer
                    </CardAction>
                )}
            </GroupCardFooter>
        </GroupCard>
    ),
};

export const NoSeparator: Story = {
    args: {
        ...Standard.args,
    },
    render: args => (
        <GroupCard {...args}>
            <GroupCardTitle noSeparator={true}>
                <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
            </GroupCardTitle>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
            <GroupCardFooter>Footer</GroupCardFooter>
        </GroupCard>
    ),
};

export const AsList: Story = {
    args: {
        as: 'ul',
    },
    render: args => (
        <GroupCard {...args}>
            <GroupCardElement as={'li'}>
                {({ CardAction, CardName, Title }: CardRenderProps) => (
                    <>
                        <CardName>Kortnavn</CardName>
                        <Title>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke men hele kortet er klikkbart
                            </CardAction>
                        </Title>
                    </>
                )}
            </GroupCardElement>
            <GroupCardElement as={'li'}>
                Dette er ett ikke-klikkbart liste element i GroupCard
            </GroupCardElement>
            <GroupCardElement as={'li'}>
                {({ CardAction, CardName, Title }: CardRenderProps) => (
                    <>
                        <CardName>Kortnavn</CardName>
                        <Title>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke men hele kortet er klikkbart
                            </CardAction>
                        </Title>
                    </>
                )}
            </GroupCardElement>
            <GroupCardElement as={'li'}>
                {({ CardAction, CardName, Title }: CardRenderProps) => (
                    <>
                        <CardName>Kortnavn</CardName>
                        <Title>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke men hele kortet er klikkbart
                            </CardAction>
                        </Title>
                    </>
                )}
            </GroupCardElement>
        </GroupCard>
    ),
};

export const WithCardAction: Story = {
    args: {
        ...Standard.args,
    },
    render: args => (
        <GroupCard {...args}>
            <GroupCardTitle>
                <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
            </GroupCardTitle>
            <GroupCardElement>
                {({
                    CardAction,
                    CardName,
                    Title,
                    Subtext,
                    Text,
                }: CardRenderProps) => (
                    <>
                        <CardName>Kortnavn</CardName>
                        <Title>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke men hele kortet er klikkbart
                            </CardAction>
                        </Title>
                        <Subtext>En liten undertekst</Subtext>
                        <Text>Her kan man ha tekst</Text>
                    </>
                )}
            </GroupCardElement>
            <GroupCardElement>
                {({ CardAction }: CardRenderProps) => (
                    <>
                        <Heading2>
                            <CardAction as="button">Knapp</CardAction>
                        </Heading2>
                        <Paragraph>Hele kortet er klikkbart</Paragraph>
                    </>
                )}
            </GroupCardElement>
            <GroupCardElement>
                {({ CardAction }: CardRenderProps) => (
                    <>
                        <Heading2>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke
                            </CardAction>
                        </Heading2>
                        <Paragraph>Hele kortet er klikkbart</Paragraph>
                    </>
                )}
            </GroupCardElement>
            <GroupCardFooter>
                {({ CardAction }: CardRenderProps) => (
                    <CardAction href="https://design.sparebank1.no">
                        Vis mer
                    </CardAction>
                )}
            </GroupCardFooter>
        </GroupCard>
    ),
};
