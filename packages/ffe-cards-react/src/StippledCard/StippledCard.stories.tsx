import React from 'react';
import { StippledCard } from './StippledCard';
import type { StoryObj, Meta } from '@storybook/react';
import { Icon } from '@sb1/ffe-icons-react';
import monitoringIconXlarge from '@sb1/ffe-icons/icons/open/300/xl/monitoring.svg';
import utvalgte from './illustrations/utvalgte.svg';

const Custom: React.FC<React.ComponentProps<'div'>> = props => (
    <div {...props}>
        {`Custom `}
        {props.children}
    </div>
);

const meta: Meta<typeof StippledCard<any>> = {
    title: 'components/cards/StippledCard',
    component: StippledCard,
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

type Story = StoryObj<typeof StippledCard<any>>;

export const Standard: Story = {
    args: {
        as: 'div',
    },
    render: args => (
        <StippledCard {...args}>
            {({ CardName, Title, Subtext, Text }) => (
                <>
                    <CardName>CardName</CardName>
                    <Title>Tittel</Title>
                    <Subtext as="span">Subtext er grå</Subtext>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text>
                </>
            )}
        </StippledCard>
    ),
};

export const WithIcon: Story = {
    args: {
        as: 'div',
        img: {
            type: 'icon',
            element: <Icon fileUrl={monitoringIconXlarge} size="xl" />,
        },
    },
    render: args => (
        <StippledCard {...args}>
            {({ CardName, Title, Subtext, Text }) => (
                <>
                    <CardName>CardName</CardName>
                    <Title>Tittel</Title>
                    <Subtext as="span">Subtext er grå</Subtext>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text>
                </>
            )}
        </StippledCard>
    ),
};

export const WithCustom: Story = {
    args: {
        as: 'div',
        img: {
            type: 'custom',
            element: <img alt="" src={utvalgte} />,
        },
    },
    render: args => (
        <StippledCard {...args}>
            {({ CardName, Title, Subtext, Text }) => (
                <>
                    <CardName>CardName</CardName>
                    <Title>Tittel</Title>
                    <Subtext as="span">Subtext er grå</Subtext>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text>
                </>
            )}
        </StippledCard>
    ),
};

export const Condensed: Story = {
    args: {
        as: 'div',
        img: {
            type: 'icon',
            element: <Icon fileUrl={monitoringIconXlarge} size="xl" />,
        },
        condensed: true,
    },
    render: args => (
        <StippledCard {...args}>
            {({ Title, Subtext }) => (
                <>
                    <Title>Sparekonto voksen 25</Title>
                    <Subtext>7 004,00</Subtext>
                </>
            )}
        </StippledCard>
    ),
};
