import type { StoryObj, Meta } from '@storybook/react';
import { Chip } from './Chip';
import { ChipRemovable } from './ChipRemovable';
import { ChipSelectable } from './ChipSelectable';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Chip> = {
    title: 'Komponenter/Chips/Live Code Editor',
    component: Chip,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all chip components in the FFE Chips package. Explore Chip, ChipRemovable, and ChipSelectable with interactive examples for filtering, tagging, and selection scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Chip>;

// Define simplified template for chips
const chipsTemplates = {
    enkelt: {
        name: 'Enkelt',
        icon: '🏷️',
        code: `<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Chip>Standard chip</Chip>
    <Chip>Kategori</Chip>
    <Chip>Tag</Chip>
</div>`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Chip, {
    templates: chipsTemplates,
    additionalComponents: {
        ChipRemovable,
        ChipSelectable
    },
    defaultTemplate: 'enkelt',
    title: 'Chips Live Code Editor',
    description: 'Comprehensive live code editor for all chip components in the FFE Chips package. Explore Chip, ChipRemovable, and ChipSelectable with interactive examples for filtering, tagging, selection, and categorization scenarios.'
});
