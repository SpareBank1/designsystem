import React from 'react';
import { GroupCard } from './GroupCard';
import { GroupCardTitle } from './GroupCardTitle';
import { GroupCardElement } from './GroupCardElement';
import { GroupCardFooter } from './GroupCardFooter';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof GroupCard> = {
    title: 'Komponenter/Cards/GroupCard',
    component: GroupCard,
};
export default meta;

type Story = StoryObj<typeof GroupCard>;

export const Standard: Story = {
    args: {
        shadow: true,
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
                {({ CardAction }) => (
                    <CardAction href="https://design.sparebank1.no">
                        Vis mer
                    </CardAction>
                )}
            </GroupCardFooter>
        </GroupCard>
    ),
};

export const ShadowFalse: Story = {
    args: {
        ...Standard.args,
        shadow: false,
    },
    render: args => (
        <GroupCard {...args}>
            <GroupCardElement>Innhold nr 1</GroupCardElement>
            <GroupCardElement>Innhold nr 2</GroupCardElement>
            <GroupCardElement>Innhold nr 3</GroupCardElement>
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
                {({ CardAction, CardName, Title, Subtext, Text }) => (
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
                {({ CardAction }) => (
                    <>
                        <Heading2>
                            <CardAction as="button">Knapp</CardAction>
                        </Heading2>
                        <Paragraph>Hele kortet er klikkbart</Paragraph>
                    </>
                )}
            </GroupCardElement>
            <GroupCardElement>
                {({ CardAction }) => (
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
                {({ CardAction }) => (
                    <CardAction href="https://design.sparebank1.no">
                        Vis mer
                    </CardAction>
                )}
            </GroupCardFooter>
        </GroupCard>
    ),
};
