import type { StoryObj, Meta } from '@storybook/react';
import { Icon } from './Icon';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Icon> = {
    title: 'Komponenter/Icon/Live Code Editor',
    component: Icon,
    parameters: {
        docs: {
            description: {
                component: 'Live code editor for icon components. Simple examples with two basic icons.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Icon>;

const iconTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '🎨',
        code: `<div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
    <div style={{ textAlign: 'center' }}>
        <Icon fileUrl="./icons/open/300/md/star.svg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Stjerne</div>
    </div>
    
    <div style={{ textAlign: 'center' }}>
        <Icon fileUrl="./icons/open/300/md/house.svg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Hjem</div>
    </div>
</div>`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Icon, {
    templates: iconTemplates,
    additionalComponents: {},
    defaultTemplate: 'simple',
    title: 'Icon Live Code Editor',
    description: 'Live code editor for icon components. Simple examples with two basic icons.'
});
