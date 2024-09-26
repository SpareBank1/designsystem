import React from 'react';
import { ImageCard } from './ImageCard';
import type { StoryObj, Meta } from '@storybook/react';

const Custom: React.FC<React.ComponentProps<'div'>> = props => (
    <div {...props}>
        {`Custom `}
        {props.children}
    </div>
);

const meta: Meta<typeof ImageCard<any>> = {
    title: 'components/cards/ImageCard',
    component: ImageCard,
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

type Story = StoryObj<typeof ImageCard<any>>;

export const Standard: Story = {
    args: {
        as: 'div',
        imageSrc:
            'https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg',
        imageAltText: 'To jenter som går å snakker sammen',
    },
    render: args => (
        <ImageCard {...args}>
            {({ CardName, Title, Subtext, Text }) => (
                <>
                    <CardName>Kortnavn</CardName>
                    <Title>Tittel</Title>
                    <Subtext>En liten undertekst</Subtext>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text>
                </>
            )}
        </ImageCard>
    ),
};
