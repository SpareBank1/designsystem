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

// Define comprehensive templates for all tag components
const tagTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '🏷️',
        code: `function SimpleTags() {
    return (
        <div style={{ maxWidth: '600px' }}>
            <h4 style={{ margin: '0 0 16px 0' }}>🏷️ Enkle tags</h4>
            
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginBottom: '24px'
            }}>
                <Tag>Teknologi</Tag>
                <Tag>Design</Tag>
                <Tag>Frontend</Tag>
                <Tag>React</Tag>
                <Tag>TypeScript</Tag>
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px',
                marginBottom: '16px'
            }}>
                <h5 style={{ margin: '0 0 8px 0' }}>📝 Eksempel bruk</h5>
                <p style={{ margin: 0, fontSize: '14px' }}>
                    Tags brukes for å kategorisere innhold, vise metadata eller som navigasjonshjelp.
                </p>
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '8px' 
            }}>
                <h5 style={{ margin: '0 0 8px 0' }}>💡 Tips</h5>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
                    <li>Hold tag-tekst kort og beskrivende</li>
                    <li>Bruk konsistente farger for samme type innhold</li>
                    <li>Vurder å gjøre tags klikkbare for filtrering</li>
                </ul>
            </div>
        </div>
    );
}

render(<SimpleTags />);`
    },
    removable: {
        name: 'Fjernbare',
        icon: '❌',
        code: `function RemovableTags() {
    const [tags, setTags] = useState([
        'JavaScript',
        'React',
        'TypeScript',
        'Node.js',
        'CSS',
        'HTML'
    ]);
    
    const removeTag = (tagToRemove) => {
        setTags(prev => prev.filter(tag => tag !== tagToRemove));
    };
    
    const resetTags = () => {
        setTags(['JavaScript', 'React', 'TypeScript', 'Node.js', 'CSS', 'HTML']);
    };
    
    return (
        <div style={{ maxWidth: '700px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-warning-subtle)', 
                borderRadius: '8px',
                textAlign: 'center',
                marginBottom: '24px'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>❌ Fjernbare tags</h3>
                <p style={{ margin: 0 }}>Klikk på × for å fjerne tags. Nyttig for filtrering og valg.</p>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '12px'
                }}>
                    <h4 style={{ margin: 0 }}>Teknologier ({tags.length})</h4>
                    <button
                        onClick={resetTags}
                        style={{
                            padding: '4px 8px',
                            backgroundColor: 'var(--ffe-color-background-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        Reset alle
                    </button>
                </div>
                
                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px',
                    minHeight: '40px',
                    padding: '12px',
                    backgroundColor: 'var(--ffe-color-background-subtle)',
                    borderRadius: '8px',
                    border: '1px solid var(--ffe-color-border-subtle)'
                }}>
                    {tags.length > 0 ? (
                        tags.map((tag, index) => (
                            <Tag 
                                key={index}
                                onRemove={() => removeTag(tag)}
                            >
                                {tag}
                            </Tag>
                        ))
                    ) : (
                        <div style={{ 
                            color: 'var(--ffe-color-text-subtle)', 
                            fontStyle: 'italic',
                            display: 'flex',
                            alignItems: 'center',
                            height: '32px'
                        }}>
                            Ingen tags valgt
                        </div>
                    )}
                </div>
            </div>
            
            {tags.length === 0 && (
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                        🎉 Alle tags er fjernet! Klikk "Reset alle" for å legge dem tilbake.
                    </p>
                </div>
            )}
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px',
                marginTop: '20px'
            }}>
                <h5 style={{ margin: '0 0 8px 0' }}>📊 Statistikk</h5>
                <div style={{ fontSize: '14px' }}>
                    <div>Totalt antall tags: {tags.length}</div>
                    <div>Fjernede tags: {6 - tags.length}</div>
                </div>
            </div>
        </div>
    );
}

render(<RemovableTags />);`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveTags() {
    const [selectedTags, setSelectedTags] = useState(new Set());
    const [filterText, setFilterText] = useState('');
    
    const allTags = [
        { name: 'Frontend', category: 'development' },
        { name: 'Backend', category: 'development' },
        { name: 'Design', category: 'creative' },
        { name: 'UX', category: 'creative' },
        { name: 'Marketing', category: 'business' },
        { name: 'Sales', category: 'business' },
        { name: 'React', category: 'development' },
        { name: 'Node.js', category: 'development' },
        { name: 'Figma', category: 'creative' },
        { name: 'Analytics', category: 'business' }
    ];
    
    const categories = {
        development: { name: 'Utvikling', color: 'var(--ffe-color-background-primary)' },
        creative: { name: 'Kreativt', color: 'var(--ffe-color-background-success)' },
        business: { name: 'Business', color: 'var(--ffe-color-background-warning)' }
    };
    
    const filteredTags = allTags.filter(tag => 
        tag.name.toLowerCase().includes(filterText.toLowerCase())
    );
    
    const toggleTag = (tagName) => {
        setSelectedTags(prev => {
            const newSet = new Set(prev);
            if (newSet.has(tagName)) {
                newSet.delete(tagName);
            } else {
                newSet.add(tagName);
            }
            return newSet;
        });
    };
    
    const clearSelection = () => {
        setSelectedTags(new Set());
    };
    
    const selectAll = () => {
        setSelectedTags(new Set(filteredTags.map(tag => tag.name)));
    };
    
    return (
        <div style={{ maxWidth: '800px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-primary)', 
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center',
                marginBottom: '24px'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>⚡ Interaktiv tag-velger</h3>
                <p style={{ margin: 0 }}>Søk, filtrer og velg tags for å bygge din profil</p>
            </div>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '24px',
                marginBottom: '24px'
            }}>
                <div>
                    <h4 style={{ margin: '0 0 12px 0' }}>🔍 Tilgjengelige tags</h4>
                    
                    <div style={{ marginBottom: '16px' }}>
                        <input
                            type="text"
                            placeholder="Søk etter tags..."
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px',
                                fontSize: '14px'
                            }}
                        />
                    </div>
                    
                    <div style={{ 
                        display: 'flex', 
                        gap: '8px', 
                        marginBottom: '16px'
                    }}>
                        <button
                            onClick={selectAll}
                            style={{
                                padding: '4px 8px',
                                backgroundColor: 'var(--ffe-color-background-success)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px'
                            }}
                        >
                            Velg alle
                        </button>
                        <button
                            onClick={clearSelection}
                            style={{
                                padding: '4px 8px',
                                backgroundColor: 'var(--ffe-color-background-subtle)',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px'
                            }}
                        >
                            Fjern alle
                        </button>
                    </div>
                    
                    <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '8px',
                        maxHeight: '200px',
                        overflowY: 'auto',
                        padding: '12px',
                        backgroundColor: 'var(--ffe-color-background-subtle)',
                        borderRadius: '8px'
                    }}>
                        {filteredTags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => toggleTag(tag.name)}
                                style={{
                                    padding: '6px 12px',
                                    backgroundColor: selectedTags.has(tag.name) ? 
                                        categories[tag.category].color : 'white',
                                    color: selectedTags.has(tag.name) ? 'white' : 'var(--ffe-color-text)',
                                    border: \`1px solid \${selectedTags.has(tag.name) ? 
                                        categories[tag.category].color : 'var(--ffe-color-border-subtle)'}\`,
                                    borderRadius: '16px',
                                    cursor: 'pointer',
                                    fontSize: '12px',
                                    fontWeight: selectedTags.has(tag.name) ? '500' : 'normal'
                                }}
                            >
                                {selectedTags.has(tag.name) ? '✓ ' : ''}{tag.name}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div>
                    <h4 style={{ margin: '0 0 12px 0' }}>✅ Valgte tags ({selectedTags.size})</h4>
                    
                    <div style={{ 
                        minHeight: '200px',
                        padding: '12px',
                        backgroundColor: 'var(--ffe-color-background-subtle)',
                        borderRadius: '8px',
                        border: '1px solid var(--ffe-color-border-subtle)'
                    }}>
                        {selectedTags.size > 0 ? (
                            <div style={{ 
                                display: 'flex', 
                                flexWrap: 'wrap', 
                                gap: '8px'
                            }}>
                                {Array.from(selectedTags).map((tagName, index) => {
                                    const tag = allTags.find(t => t.name === tagName);
                                    return (
                                        <Tag 
                                            key={index}
                                            onRemove={() => toggleTag(tagName)}
                                        >
                                            {tagName}
                                        </Tag>
                                    );
                                })}
                            </div>
                        ) : (
                            <div style={{ 
                                color: 'var(--ffe-color-text-subtle)', 
                                fontStyle: 'italic',
                                textAlign: 'center',
                                paddingTop: '60px'
                            }}>
                                Ingen tags valgt ennå
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '8px'
            }}>
                <h5 style={{ margin: '0 0 8px 0' }}>📊 Sammendrag</h5>
                <div style={{ fontSize: '14px' }}>
                    <div>Totalt {filteredTags.length} tags tilgjengelig (filtrert fra {allTags.length})</div>
                    <div>Du har valgt {selectedTags.size} tags</div>
                    {selectedTags.size > 0 && (
                        <div style={{ marginTop: '8px' }}>
                            <strong>Dine tags:</strong> {Array.from(selectedTags).join(', ')}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

render(<InteractiveTags />);`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function TagShowcase() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    
    const articles = [
        {
            id: 1,
            title: 'Introduksjon til React Hooks',
            tags: ['React', 'JavaScript', 'Frontend', 'Tutorial'],
            category: 'development',
            date: '2024-01-15'
        },
        {
            id: 2,
            title: 'Design System Best Practices',
            tags: ['Design', 'UX', 'System', 'Guidelines'],
            category: 'design',
            date: '2024-01-10'
        },
        {
            id: 3,
            title: 'TypeScript for Beginners',
            tags: ['TypeScript', 'JavaScript', 'Tutorial', 'Beginner'],
            category: 'development',
            date: '2024-01-08'
        },
        {
            id: 4,
            title: 'Marketing Strategy 2024',
            tags: ['Marketing', 'Strategy', 'Business', '2024'],
            category: 'business',
            date: '2024-01-05'
        }
    ];
    
    const categories = {
        all: { name: 'Alle', color: 'var(--ffe-color-text)' },
        development: { name: 'Utvikling', color: 'var(--ffe-color-text-primary)' },
        design: { name: 'Design', color: 'var(--ffe-color-text-success)' },
        business: { name: 'Business', color: 'var(--ffe-color-text-warning)' }
    };
    
    const filteredArticles = articles.filter(article => {
        const matchesCategory = activeFilter === 'all' || article.category === activeFilter;
        const matchesSearch = searchTerm === '' || 
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });
    
    const allTags = [...new Set(articles.flatMap(article => article.tags))];
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '900px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🏆 Artikkelbibliotek</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Utforsk artikler med tag-basert filtrering og søk
                </p>
            </div>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 2fr', 
                gap: '24px',
                marginBottom: '24px'
            }}>
                <div>
                    <h4 style={{ margin: '0 0 12px 0' }}>🔍 Filtrer innhold</h4>
                    
                    <div style={{ marginBottom: '16px' }}>
                        <input
                            type="text"
                            placeholder="Søk i titler og tags..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px'
                            }}
                        />
                    </div>
                    
                    <div style={{ marginBottom: '16px' }}>
                        <h5 style={{ margin: '0 0 8px 0' }}>Kategorier</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {Object.entries(categories).map(([key, category]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveFilter(key)}
                                    style={{
                                        padding: '8px 12px',
                                        backgroundColor: activeFilter === key ? 'var(--ffe-color-background-primary)' : 'white',
                                        color: activeFilter === key ? 'white' : 'var(--ffe-color-text)',
                                        border: '1px solid var(--ffe-color-border-subtle)',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        textAlign: 'left'
                                    }}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h5 style={{ margin: '0 0 8px 0' }}>Alle tags</h5>
                        <div style={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            gap: '4px'
                        }}>
                            {allTags.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '16px'
                    }}>
                        <h4 style={{ margin: 0 }}>📚 Artikler</h4>
                        <span style={{ fontSize: '14px', color: 'var(--ffe-color-text-subtle)' }}>
                            {filteredArticles.length} av {articles.length} artikler
                        </span>
                    </div>
                    
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '16px'
                    }}>
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map(article => (
                                <div 
                                    key={article.id}
                                    style={{
                                        padding: '16px',
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                        border: '1px solid var(--ffe-color-border-subtle)'
                                    }}
                                >
                                    <h5 style={{ margin: '0 0 8px 0' }}>{article.title}</h5>
                                    <div style={{ 
                                        fontSize: '12px', 
                                        color: 'var(--ffe-color-text-subtle)',
                                        marginBottom: '8px'
                                    }}>
                                        {article.date} • {categories[article.category].name}
                                    </div>
                                    <div style={{ 
                                        display: 'flex', 
                                        flexWrap: 'wrap', 
                                        gap: '4px'
                                    }}>
                                        {article.tags.map((tag, index) => (
                                            <Tag key={index}>{tag}</Tag>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ 
                                padding: '40px', 
                                textAlign: 'center',
                                color: 'var(--ffe-color-text-subtle)'
                            }}>
                                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
                                <h5 style={{ margin: '0 0 8px 0' }}>Ingen artikler funnet</h5>
                                <p style={{ margin: 0, fontSize: '14px' }}>
                                    Prøv å endre søkekriteriene eller velg en annen kategori
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

render(<TagShowcase />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Tag, {
    templates: tagTemplates,
    additionalComponents: {},
    defaultTemplate: 'simple',
    title: 'Tag Live Code Editor',
    description: 'Comprehensive live code editor for all tag components in the FFE Tags package. Explore Tag with interactive examples for different variants, removable tags, filtering, and real-world usage scenarios.'
});
