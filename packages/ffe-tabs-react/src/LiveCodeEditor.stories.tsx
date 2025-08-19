import type { StoryObj, Meta } from '@storybook/react';
import { Tab } from './Tab';
import { TabGroup } from './TabGroup';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof TabGroup> = {
    title: 'Komponenter/Tabs/Live Code Editor',
    component: TabGroup,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all tab components in the FFE Tabs package. Explore TabGroup and Tab with interactive examples for navigation, content organization, and real-world scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof TabGroup>;

// Define simplified template for tabs
const tabsTemplates = {
    enkelt: {
        name: 'Enkelt',
        icon: '📑',
        code: `function SimpleTabs() {
    const [activeTab, setActiveTab] = useState('overview');
    
    const tabs = [
        { id: 'overview', label: 'Oversikt', content: 'Dette er oversikt-fanen med generell informasjon.' },
        { id: 'details', label: 'Detaljer', content: 'Her finner du detaljert informasjon om produktet.' },
        { id: 'reviews', label: 'Anmeldelser', content: 'Les hva andre kunder sier om dette produktet.' }
    ];
    
    return (
        <div style={{ maxWidth: '600px' }}>
            <TabGroup>
                {tabs.map(tab => (
                    <Tab
                        key={tab.id}
                        isSelected={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </Tab>
                ))}
            </TabGroup>
            
            <div style={{ 
                padding: '24px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '0 0 8px 8px',
                minHeight: '120px'
            }}>
                <h4 style={{ margin: '0 0 12px 0' }}>
                    {tabs.find(tab => tab.id === activeTab)?.label}
                </h4>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    {tabs.find(tab => tab.id === activeTab)?.content}
                </p>
            </div>
        </div>
    );
}

render(<SimpleTabs />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(TabGroup, {
    templates: tabsTemplates,
    additionalComponents: {
        Tab
    },
    defaultTemplate: 'enkelt',
    title: 'Tabs Live Code Editor',
    description: 'Comprehensive live code editor for all tab components in the FFE Tabs package. Explore TabGroup and Tab with interactive examples for navigation, content organization, and real-world scenarios.'
});
