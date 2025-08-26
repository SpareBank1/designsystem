import type { StoryObj, Meta } from '@storybook/react';
import { CardBase } from './CardBase';
import { TextCard } from './TextCard/TextCard';
import { IconCard } from './IconCard/IconCard';
import { GroupCard } from './GroupCard/GroupCard';
import { GroupCardElement } from './GroupCard/GroupCardElement';
import { GroupCardTitle } from './GroupCard/GroupCardTitle';
import { GroupCardFooter } from './GroupCard/GroupCardFooter';
import { IllustrationCard } from './IllustrationCard/IllustrationCard';
import { ImageCard } from './ImageCard/ImageCard';
import { StippledCard } from './StippledCard/StippledCard';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof CardBase> = {
    title: 'Komponenter/Cards/Live Code Editor',
    component: CardBase,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all card components in the FFE Cards package. Explore CardBase, TextCard, IconCard, GroupCard, IllustrationCard, ImageCard, and StippledCard with interactive examples.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof CardBase>;

// Define simplified template for cards
const cardsTemplates = {
    enkelt: {
        name: 'Grunnleggende',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <CardBase>
        <h3>CardBase</h3>
        <p>Det grunnleggende kortet med standard styling.</p>
    </CardBase>
    
    <TextCard>
        {({ Title, Text }) => (
            <>
                <Title>TextCard</Title>
                <Text>Kort optimalisert for tekstinnhold med semantiske komponenter.</Text>
            </>
        )}
    </TextCard>
</div>`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(CardBase, {
    templates: cardsTemplates,
    additionalComponents: {
        TextCard,
        IconCard,
        GroupCard,
        GroupCardElement,
        GroupCardTitle,
        GroupCardFooter,
        IllustrationCard,
        ImageCard,
        StippledCard
    },
    defaultTemplate: 'enkelt',
    title: 'Cards Live Code Editor',
    description: 'Comprehensive live code editor for all card components in the FFE Cards package. Explore CardBase, TextCard, IconCard, GroupCard, IllustrationCard, ImageCard, and StippledCard with interactive examples and real-world use cases.'
});
