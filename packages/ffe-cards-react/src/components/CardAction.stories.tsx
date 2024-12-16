import React from 'react';
import { CardAction as CardActionComponent } from './CardAction';
import type { StoryObj, Meta } from '@storybook/react';
import { CardBase } from '../CardBase';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import { Icon } from '@sb1/ffe-icons-react';
import { IconCard } from '../IconCard/IconCard';
import { CardActionRenderProps, CardRenderProps } from '../types';

const Custom: React.FC<React.ComponentProps<'a'>> = props => (
    <a {...props}>
        {`Custom `}
        {props.children}
    </a>
);

const meta: Meta<typeof CardActionComponent<any>> = {
    title: 'Komponenter/Cards/CardAction',
    component: CardActionComponent,
    argTypes: {
        as: {
            options: ['a', 'button', 'custom'],
            mapping: {
                '': 'a',
                a: 'a',
                button: 'button',
                custom: Custom,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof CardActionComponent<any>>;

export const Standard: Story = {
    args: {
        as: 'a',
        href: 'https://design.sparebank1.no',
    },
    render: args => (
        <CardBase shadow={true}>
            {({ CardAction }: CardActionRenderProps) => (
                <>
                    <Heading2>
                        <CardAction {...args}>Lenke</CardAction>
                    </Heading2>
                    <Paragraph>Hele kortet er klikkbart</Paragraph>
                </>
            )}
        </CardBase>
    ),
};

export const AsButton: Story = {
    args: {
        as: 'button',
        type: 'button',
    },
    render: args => (
        <CardBase shadow={true}>
            {({ CardAction }: CardActionRenderProps) => (
                <>
                    <Heading2>
                        <CardAction {...args}>Knapp</CardAction>
                    </Heading2>
                    <Paragraph>Hele kortet er klikkbart</Paragraph>
                </>
            )}
        </CardBase>
    ),
};

export const WithinTitle: Story = {
    args: {
        as: 'a',
        href: 'https://design.sparebank1.no',
    },
    render: args => (
        <IconCard
            icon={<Icon fileUrl="icons/open/300/xl/savings.svg" size="xl" />}
        >
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
                        <CardAction {...args}>
                            Lenke men hele kortet er klikkbart
                        </CardAction>
                    </Title>
                    <Subtext>En liten undertekst</Subtext>
                    <Text>Her kan man ha tekst</Text>
                </>
            )}
        </IconCard>
    ),
};