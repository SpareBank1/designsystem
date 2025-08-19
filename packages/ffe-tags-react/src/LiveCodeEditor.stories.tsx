import type { StoryObj, Meta } from '@storybook/react';
import { Tag } from './Tag';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Tag> = {
    title: 'Komponenter/Tag/Live Code Editor',
    component: Tag,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all tag components in the FFE Tags package. Explore Tag with interactive examples for different variants, removable tags, filtering, and real-world usage scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Tag>;

// Define simplified template for tags
const tagTemplates = {
    enkelt: {
        name: 'Enkelt',
        icon: '🏷️',
        code: `<div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
    <Tag>Teknologi</Tag>
    <Tag>Design</Tag>
    <Tag>Frontend</Tag>
    <Tag>React</Tag>
    <Tag>TypeScript</Tag>
</div>`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Tag, {
    templates: tagTemplates,
    additionalComponents: {},
    defaultTemplate: 'enkelt',
    title: 'Tag Live Code Editor',
    description: 'Comprehensive live code editor for all tag components in the FFE Tags package. Explore Tag with interactive examples for different variants, removable tags, filtering, and real-world usage scenarios.'
});
