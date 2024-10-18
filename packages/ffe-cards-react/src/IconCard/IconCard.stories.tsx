import React from 'react';
import { IconCard } from './IconCard';
import type { StoryObj, Meta } from '@storybook/react';
import { Icon } from '@sb1/ffe-icons-react';

const Custom: React.FC<React.ComponentProps<'div'>> = props => (
    <div {...props}>
        {`Custom `}
        {props.children}
    </div>
);

const meta: Meta<typeof IconCard<any>> = {
    title: 'components/cards/IconCard',
    component: IconCard,
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

type Story = StoryObj<typeof IconCard<any>>;

export const Standard: Story = {
    args: {
        as: 'div',
        icon: <Icon fileUrl="./icons/open/300/xl/savings.svg" size="xl" />,
    },
    render: args => (
        <IconCard {...args}>
            {({ CardName, Title, Subtext, Text }) => (
                <>
                    <CardName>Kortnavn</CardName>
                    <Title>Tittel</Title>
                    <Subtext>En liten undertekst</Subtext>
                    <Text>Her kan man ha tekst</Text>
                </>
            )}
        </IconCard>
    ),
};

export const Condensed: Story = {
    args: {
        ...Standard.args,
        icon: <Icon fileUrl="./icons/open/300/lg/savings.svg" size="lg" />,
        condensed: true,
    },
    render: args => (
        <IconCard {...args}>
            {({ CardName, Title, Subtext, Text }) => (
                <>
                    <CardName>Kortnavn</CardName>
                    <Title>Tittel</Title>
                    <Subtext>En liten undertekst</Subtext>
                    <Text>Her kan man ha tekst</Text>
                </>
            )}
        </IconCard>
    ),
};
