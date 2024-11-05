import React from 'react';
import { IllustrationCard } from './IllustrationCard';
import type { StoryObj, Meta } from '@storybook/react';
import utvalgte from './illustrations/utvalgte.svg';
import finansieringsbevis from './illustrations/finansieringsbevis.svg';

const Custom: React.FC<React.ComponentProps<'div'>> = props => (
    <div {...props}>
        {`Custom `}
        {props.children}
    </div>
);

const meta: Meta<typeof IllustrationCard<any>> = {
    title: 'Komponenter/Cards/IllustrationCard',
    component: IllustrationCard,
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

type Story = StoryObj<typeof IllustrationCard<any>>;

export const Standard: Story = {
    args: {
        as: 'div',
        img: <img src={utvalgte} alt="" />,
    },
    render: args => (
        <IllustrationCard {...args}>
            {({ CardName, Title, Subtext, Text }) => (
                <>
                    <CardName>Kortnavn</CardName>
                    <Title>Tittel</Title>
                    <Subtext>En liten undertekst</Subtext>
                    <Text>Her kan man ha tekst</Text>
                </>
            )}
        </IllustrationCard>
    ),
};

export const Condensed: Story = {
    args: {
        as: 'div',
        img: <img src={finansieringsbevis} alt="" />,
        condensed: true,
    },
    render: args => (
        <IllustrationCard {...args}>
            {({ Title, Text }) => (
                <>
                    <Title>Finansieringsbevis</Title>
                    <Text>For deg som skal kjøpe ny bolig</Text>
                </>
            )}
        </IllustrationCard>
    ),
};
