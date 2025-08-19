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

// Define comprehensive templates for all chip components
const chipsTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '🏷️',
        code: `<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Chip>Standard chip</Chip>
    <Chip>Kategori</Chip>
    <Chip>Tag</Chip>
</div>`
    },
    removable: {
        name: 'Fjernbare',
        icon: '❌',
        code: `<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <ChipRemovable onRemove={() => alert('Fjernet: Design')}>
        Design
    </ChipRemovable>
    <ChipRemovable onRemove={() => alert('Fjernet: Utvikling')}>
        Utvikling
    </ChipRemovable>
    <ChipRemovable onRemove={() => alert('Fjernet: Testing')}>
        Testing
    </ChipRemovable>
</div>`
    },
    selectable: {
        name: 'Valgbare',
        icon: '✅',
        code: `<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <ChipSelectable 
        selected={false}
        onToggle={(selected) => alert(\`Frontend: \${selected ? 'valgt' : 'ikke valgt'}\`)}
    >
        Frontend
    </ChipSelectable>
    <ChipSelectable 
        selected={true}
        onToggle={(selected) => alert(\`Backend: \${selected ? 'valgt' : 'ikke valgt'}\`)}
    >
        Backend
    </ChipSelectable>
    <ChipSelectable 
        selected={false}
        onToggle={(selected) => alert(\`DevOps: \${selected ? 'valgt' : 'ikke valgt'}\`)}
    >
        DevOps
    </ChipSelectable>
</div>`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveChips() {
    const [selectedSkills, setSelectedSkills] = useState(new Set(['React', 'TypeScript']));
    const [appliedFilters, setAppliedFilters] = useState(['Frontend', 'Senior']);
    const [availableFilters] = useState(['Frontend', 'Backend', 'Senior', 'Junior', 'Remote', 'Oslo']);
    
    const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS', 'GraphQL', 'MongoDB'];
    
    const toggleSkill = (skill) => {
        const newSelected = new Set(selectedSkills);
        if (newSelected.has(skill)) {
            newSelected.delete(skill);
        } else {
            newSelected.add(skill);
        }
        setSelectedSkills(newSelected);
    };
    
    const removeFilter = (filter) => {
        setAppliedFilters(prev => prev.filter(f => f !== filter));
    };
    
    const addFilter = (filter) => {
        if (!appliedFilters.includes(filter)) {
            setAppliedFilters(prev => [...prev, filter]);
        }
    };
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h4>Velg dine ferdigheter ({selectedSkills.size} valgt)</h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {skills.map(skill => (
                        <ChipSelectable
                            key={skill}
                            selected={selectedSkills.has(skill)}
                            onToggle={() => toggleSkill(skill)}
                        >
                            {skill}
                        </ChipSelectable>
                    ))}
                </div>
            </div>
            
            <div>
                <h4>Aktive filtre ({appliedFilters.length})</h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {appliedFilters.map(filter => (
                        <ChipRemovable
                            key={filter}
                            onRemove={() => removeFilter(filter)}
                        >
                            {filter}
                        </ChipRemovable>
                    ))}
                </div>
            </div>
            
            <div>
                <h4>Tilgjengelige filtre</h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {availableFilters
                        .filter(filter => !appliedFilters.includes(filter))
                        .map(filter => (
                            <Chip
                                key={filter}
                                onClick={() => addFilter(filter)}
                                style={{ cursor: 'pointer' }}
                            >
                                + {filter}
                            </Chip>
                        ))}
                </div>
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px' 
            }}>
                <strong>Sammendrag:</strong>
                <p>Ferdigheter: {Array.from(selectedSkills).join(', ') || 'Ingen valgt'}</p>
                <p>Filtre: {appliedFilters.join(', ') || 'Ingen aktive'}</p>
            </div>
        </div>
    );
}

render(<InteractiveChips />);`
    },
    categories: {
        name: 'Kategorier',
        icon: '📂',
        code: `function CategoryChips() {
    const [selectedCategory, setSelectedCategory] = useState('alle');
    const [tags, setTags] = useState(['React', 'Design', 'UX']);
    
    const categories = [
        { id: 'alle', name: 'Alle', count: 24 },
        { id: 'frontend', name: 'Frontend', count: 12 },
        { id: 'backend', name: 'Backend', count: 8 },
        { id: 'design', name: 'Design', count: 4 }
    ];
    
    const removeTag = (tagToRemove) => {
        setTags(prev => prev.filter(tag => tag !== tagToRemove));
    };
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h4>Kategorier</h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {categories.map(category => (
                        <ChipSelectable
                            key={category.id}
                            selected={selectedCategory === category.id}
                            onToggle={() => setSelectedCategory(category.id)}
                        >
                            {category.name} ({category.count})
                        </ChipSelectable>
                    ))}
                </div>
            </div>
            
            <div>
                <h4>Tags</h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {tags.map(tag => (
                        <ChipRemovable
                            key={tag}
                            onRemove={() => removeTag(tag)}
                        >
                            #{tag}
                        </ChipRemovable>
                    ))}
                    {tags.length === 0 && (
                        <Chip style={{ opacity: 0.6 }}>
                            Ingen tags valgt
                        </Chip>
                    )}
                </div>
            </div>
            
            <div style={{ 
                padding: '16px', 
                border: '1px solid var(--ffe-color-border-subtle)', 
                borderRadius: '8px' 
            }}>
                <h5>Innhold for "{categories.find(c => c.id === selectedCategory)?.name}"</h5>
                <p>Viser {categories.find(c => c.id === selectedCategory)?.count} elementer</p>
                {tags.length > 0 && (
                    <p><small>Filtrert på: {tags.join(', ')}</small></p>
                )}
            </div>
        </div>
    );
}

render(<CategoryChips />);`
    },
    states: {
        name: 'Tilstander',
        icon: '🎛️',
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <div>
        <h4>Standard chips</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Chip>Normal</Chip>
            <Chip style={{ opacity: 0.6 }}>Deaktivert</Chip>
            <Chip onClick={() => alert('Klikket!')}>Klikkbar</Chip>
        </div>
    </div>
    
    <div>
        <h4>Valgbare chips</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <ChipSelectable selected={false} onToggle={() => {}}>
                Ikke valgt
            </ChipSelectable>
            <ChipSelectable selected={true} onToggle={() => {}}>
                Valgt
            </ChipSelectable>
            <ChipSelectable selected={false} onToggle={() => {}} disabled>
                Deaktivert
            </ChipSelectable>
        </div>
    </div>
    
    <div>
        <h4>Fjernbare chips</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <ChipRemovable onRemove={() => alert('Fjernet!')}>
                Kan fjernes
            </ChipRemovable>
            <ChipRemovable onRemove={() => {}} style={{ opacity: 0.6 }}>
                Deaktivert
            </ChipRemovable>
        </div>
    </div>
    
    <div>
        <h4>Spesielle varianter</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Chip style={{ 
                backgroundColor: 'var(--ffe-color-background-success-subtle)',
                color: 'var(--ffe-color-text-success)'
            }}>
                ✓ Godkjent
            </Chip>
            <Chip style={{ 
                backgroundColor: 'var(--ffe-color-background-warning-subtle)',
                color: 'var(--ffe-color-text-warning)'
            }}>
                ⚠ Venter
            </Chip>
            <Chip style={{ 
                backgroundColor: 'var(--ffe-color-background-error-subtle)',
                color: 'var(--ffe-color-text-error)'
            }}>
                ✗ Avvist
            </Chip>
        </div>
    </div>
</div>`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function ChipsShowcase() {
    const [searchTags, setSearchTags] = useState(['JavaScript', 'React']);
    const [selectedTopics, setSelectedTopics] = useState(new Set(['Frontend']));
    const [priorities, setPriorities] = useState(['Høy', 'Medium']);
    
    const topics = ['Frontend', 'Backend', 'DevOps', 'Design', 'Testing', 'Security'];
    
    const toggleTopic = (topic) => {
        const newSelected = new Set(selectedTopics);
        if (newSelected.has(topic)) {
            newSelected.delete(topic);
        } else {
            newSelected.add(topic);
        }
        setSelectedTopics(newSelected);
    };
    
    const removePriority = (priority) => {
        setPriorities(prev => prev.filter(p => p !== priority));
    };
    
    const removeSearchTag = (tag) => {
        setSearchTags(prev => prev.filter(t => t !== tag));
    };
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
        }}>
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🏷️ Chips Showcase</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Interaktiv demonstrasjon av alle chip-varianter
                </p>
            </div>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '20px' 
            }}>
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'white', 
                    borderRadius: '8px',
                    border: '1px solid var(--ffe-color-border-subtle)'
                }}>
                    <h4>🔍 Søkefiltre</h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                        {searchTags.map(tag => (
                            <ChipRemovable
                                key={tag}
                                onRemove={() => removeSearchTag(tag)}
                            >
                                {tag}
                            </ChipRemovable>
                        ))}
                        {searchTags.length === 0 && (
                            <Chip style={{ opacity: 0.6 }}>Ingen filtre aktive</Chip>
                        )}
                    </div>
                    <p style={{ fontSize: '0.9em', color: 'var(--ffe-color-text-subtle)', margin: '8px 0 0 0' }}>
                        {searchTags.length} aktive søkefiltre
                    </p>
                </div>
                
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'white', 
                    borderRadius: '8px',
                    border: '1px solid var(--ffe-color-border-subtle)'
                }}>
                    <h4>📚 Emner ({selectedTopics.size} valgt)</h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                        {topics.map(topic => (
                            <ChipSelectable
                                key={topic}
                                selected={selectedTopics.has(topic)}
                                onToggle={() => toggleTopic(topic)}
                            >
                                {topic}
                            </ChipSelectable>
                        ))}
                    </div>
                </div>
                
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'white', 
                    borderRadius: '8px',
                    border: '1px solid var(--ffe-color-border-subtle)'
                }}>
                    <h4>⚡ Prioriteter</h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                        {priorities.map(priority => (
                            <ChipRemovable
                                key={priority}
                                onRemove={() => removePriority(priority)}
                            >
                                {priority}
                            </ChipRemovable>
                        ))}
                        <Chip 
                            onClick={() => setPriorities(prev => [...prev, 'Lav'])}
                            style={{ 
                                cursor: 'pointer',
                                border: '1px dashed var(--ffe-color-border-subtle)'
                            }}
                        >
                            + Legg til
                        </Chip>
                    </div>
                </div>
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-primary)', 
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center'
            }}>
                <h4 style={{ margin: '0 0 8px 0' }}>🎯 Resultater</h4>
                <p style={{ margin: 0 }}>
                    Viser innhold for {Array.from(selectedTopics).join(', ') || 'alle emner'} 
                    {searchTags.length > 0 && \` med tags: \${searchTags.join(', ')}\`}
                    {priorities.length > 0 && \` (prioritet: \${priorities.join(', ')})\`}
                </p>
            </div>
        </div>
    );
}

render(<ChipsShowcase />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Chip, {
    templates: chipsTemplates,
    additionalComponents: {
        ChipRemovable,
        ChipSelectable
    },
    defaultTemplate: 'simple',
    title: 'Chips Live Code Editor',
    description: 'Comprehensive live code editor for all chip components in the FFE Chips package. Explore Chip, ChipRemovable, and ChipSelectable with interactive examples for filtering, tagging, selection, and categorization scenarios.'
});
