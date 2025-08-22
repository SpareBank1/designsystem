import type { StoryObj, Meta } from '@storybook/react';
import { BulletList } from './BulletList';
import { BulletListItem } from './BulletListItem';
import { CheckList } from './CheckList';
import { CheckListItem } from './CheckListItem';
import { NumberedList } from './NumberedList';
import { NumberedListItem } from './NumberedListItem';
import { StylizedNumberedList } from './StylizedNumberedList';
import { StylizedNumberedListItem } from './StylizedNumberedListItem';
import { DescriptionList } from './DescriptionList';
import { DescriptionListTerm } from './DescriptionListTerm';
import { DescriptionListDescription } from './DescriptionListDescription';
import { DescriptionListMultiCol } from './DescriptionListMultiCol';
import { DetailListCard } from './DetailListCard';
import { DetailListCardItem } from './DetailListCardItem';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof BulletList> = {
    title: 'Komponenter/Lists/Live Code Editor',
    component: BulletList,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all list components in the FFE Lists package. Explore BulletList, CheckList, NumberedList, DescriptionList, DetailListCard and their variations with interactive examples and real-world scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof BulletList>;

// Define comprehensive templates for all list components
const listsTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📝',
        code: `function SimpleLists() {
    return (
        <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h4 style={{ margin: '0 0 16px 0' }}>📝 Punktliste</h4>
                <BulletList>
                    <BulletListItem>Første punkt i listen</BulletListItem>
                    <BulletListItem>Andre punkt med mer informasjon</BulletListItem>
                    <BulletListItem>Tredje punkt som avslutter listen</BulletListItem>
                </BulletList>
            </div>
            
            <div>
                <h4 style={{ margin: '0 0 16px 0' }}>🔢 Nummerert liste</h4>
                <NumberedList>
                    <NumberedListItem>Start med det første steget</NumberedListItem>
                    <NumberedListItem>Fortsett med steg nummer to</NumberedListItem>
                    <NumberedListItem>Fullfør med det siste steget</NumberedListItem>
                </NumberedList>
            </div>
            
            <div>
                <h4 style={{ margin: '0 0 16px 0' }}>✅ Sjekkliste</h4>
                <CheckList>
                    <CheckListItem isChecked={true}>Fullført oppgave</CheckListItem>
                    <CheckListItem isChecked={false}>Ventende oppgave</CheckListItem>
                    <CheckListItem isChecked={false}>Fremtidig oppgave</CheckListItem>
                </CheckList>
            </div>
        </div>
    );
}

render(<SimpleLists />);`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveLists() {
    const [todoItems, setTodoItems] = useState([
        { id: 1, text: 'Gjennomgå prosjektplan', completed: true },
        { id: 2, text: 'Møte med teamet', completed: false },
        { id: 3, text: 'Oppdater dokumentasjon', completed: false }
    ]);
    const [newTodo, setNewTodo] = useState('');
    
    const toggleTodo = (id) => {
        setTodoItems(prev => prev.map(item => 
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };
    
    const addTodo = () => {
        if (newTodo.trim()) {
            setTodoItems(prev => [...prev, {
                id: Date.now(),
                text: newTodo.trim(),
                completed: false
            }]);
            setNewTodo('');
        }
    };
    
    const completedCount = todoItems.filter(item => item.completed).length;
    
    return (
        <div style={{ maxWidth: '600px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-primary)', 
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center',
                marginBottom: '24px'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>⚡ Interaktiv Todo Liste</h3>
                <p style={{ margin: 0 }}>Administrer dine oppgaver ({completedCount}/{todoItems.length} fullført)</p>
            </div>
            
            <div style={{ marginBottom: '20px', display: 'flex', gap: '8px' }}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Legg til ny oppgave..."
                    style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid var(--ffe-color-border-subtle)',
                        borderRadius: '4px'
                    }}
                />
                <button
                    onClick={addTodo}
                    disabled={!newTodo.trim()}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: newTodo.trim() ? 'var(--ffe-color-background-success)' : 'var(--ffe-color-background-disabled)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: newTodo.trim() ? 'pointer' : 'not-allowed'
                    }}
                >
                    Legg til
                </button>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '20px',
                border: '1px solid var(--ffe-color-border-subtle)'
            }}>
                <CheckList>
                    {todoItems.map(item => (
                        <CheckListItem 
                            key={item.id}
                            isChecked={item.completed}
                            onClick={() => toggleTodo(item.id)}
                        >
                            <span style={{ 
                                textDecoration: item.completed ? 'line-through' : 'none',
                                color: item.completed ? 'var(--ffe-color-text-subtle)' : 'inherit'
                            }}>
                                {item.text}
                            </span>
                        </CheckListItem>
                    ))}
                </CheckList>
            </div>
            
            <div style={{ 
                marginTop: '20px',
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-success-subtle)', 
                borderRadius: '8px' 
            }}>
                <h4 style={{ margin: '0 0 8px 0' }}>📊 Fremgang</h4>
                <div style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
                    <div><strong>Fullført:</strong> {completedCount}</div>
                    <div><strong>Gjenstående:</strong> {todoItems.length - completedCount}</div>
                    <div><strong>Prosent:</strong> {Math.round((completedCount / todoItems.length) * 100)}%</div>
                </div>
            </div>
        </div>
    );
}

render(<InteractiveLists />);`
    },
    descriptions: {
        name: 'Beskrivelser',
        icon: '📖',
        code: `function DescriptionLists() {
    const [selectedProduct, setSelectedProduct] = useState('laptop');
    
    const products = {
        laptop: {
            name: 'Laptop Pro 15"',
            specs: [
                { term: 'Prosessor', description: 'Intel Core i7-12700H 2.3GHz' },
                { term: 'Minne', description: '16GB DDR4 RAM' },
                { term: 'Lagring', description: '512GB SSD NVMe' },
                { term: 'Skjerm', description: '15.6" Full HD IPS' },
                { term: 'Operativsystem', description: 'Windows 11 Pro' }
            ]
        },
        phone: {
            name: 'Smartphone X1',
            specs: [
                { term: 'Skjerm', description: '6.7" OLED Super Retina' },
                { term: 'Prosessor', description: 'A16 Bionic chip' },
                { term: 'Lagring', description: '256GB intern lagring' },
                { term: 'Kamera', description: '48MP hovedkamera + 12MP ultrawide' },
                { term: 'Batteri', description: 'Opptil 29 timer video' }
            ]
        }
    };
    
    const currentProduct = products[selectedProduct];
    
    return (
        <div style={{ maxWidth: '600px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '8px',
                textAlign: 'center',
                marginBottom: '24px'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>📖 Produktspesifikasjoner</h3>
                <p style={{ margin: 0 }}>Detaljerte beskrivelser av våre produkter</p>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
                <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    style={{
                        padding: '8px 12px',
                        border: '1px solid var(--ffe-color-border-subtle)',
                        borderRadius: '4px',
                        fontSize: '16px'
                    }}
                >
                    <option value="laptop">💻 Laptop Pro 15"</option>
                    <option value="phone">📱 Smartphone X1</option>
                </select>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '24px',
                border: '1px solid var(--ffe-color-border-subtle)'
            }}>
                <h4 style={{ margin: '0 0 20px 0' }}>{currentProduct.name}</h4>
                
                <DescriptionList>
                    {currentProduct.specs.map((spec, index) => (
                        <div key={index}>
                            <DescriptionListTerm>{spec.term}</DescriptionListTerm>
                            <DescriptionListDescription>{spec.description}</DescriptionListDescription>
                        </div>
                    ))}
                </DescriptionList>
            </div>
        </div>
    );
}

render(<DescriptionLists />);`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function ListsShowcase() {
    const [employees] = useState([
        { name: 'Anna Hansen', position: 'Senior Utvikler', email: 'anna@firma.no', skills: ['React', 'TypeScript'] },
        { name: 'Lars Olsen', position: 'UX Designer', email: 'lars@firma.no', skills: ['Figma', 'Prototyping'] }
    ]);
    
    const [projectSteps] = useState([
        'Planlegge prosjektstruktur',
        'Designe brukergrensesnitt', 
        'Implementere backend API',
        'Skrive enhetstester',
        'Lansere til produksjon'
    ]);
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '800px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🏆 Prosjekt Oversikt</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Komplett oversikt over team og fremdrift
                </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '8px', 
                    padding: '20px'
                }}>
                    <h3 style={{ margin: '0 0 16px 0' }}>👥 Teammedlemmer</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {employees.map((employee, index) => (
                            <DetailListCard key={index}>
                                <DetailListCardItem label="👤 Navn" value={employee.name} />
                                <DetailListCardItem label="💼 Stilling" value={employee.position} />
                                <DetailListCardItem label="📧 E-post" value={employee.email} />
                                <DetailListCardItem 
                                    label="🛠️ Ferdigheter" 
                                    value={employee.skills.join(', ')}
                                />
                            </DetailListCard>
                        ))}
                    </div>
                </div>
                
                <div style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '8px', 
                    padding: '20px'
                }}>
                    <h3 style={{ margin: '0 0 16px 0' }}>📋 Prosjektplan</h3>
                    <StylizedNumberedList>
                        {projectSteps.map((step, index) => (
                            <StylizedNumberedListItem key={index}>
                                {step}
                            </StylizedNumberedListItem>
                        ))}
                    </StylizedNumberedList>
                    
                    <div style={{ 
                        marginTop: '20px',
                        padding: '12px', 
                        backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                        borderRadius: '4px' 
                    }}>
                        <strong>Status:</strong> {projectSteps.length} steg planlagt
                    </div>
                </div>
            </div>
        </div>
    );
}

render(<ListsShowcase />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(BulletList, {
    templates: listsTemplates,
    additionalComponents: {
        BulletListItem,
        CheckList,
        CheckListItem,
        NumberedList,
        NumberedListItem,
        StylizedNumberedList,
        StylizedNumberedListItem,
        DescriptionList,
        DescriptionListTerm,
        DescriptionListDescription,
        DescriptionListMultiCol,
        DetailListCard,
        DetailListCardItem
    },
    defaultTemplate: 'simple',
    title: 'Lists Live Code Editor',
    description: 'Comprehensive live code editor for all list components in the FFE Lists package. Explore BulletList, CheckList, NumberedList, DescriptionList, DetailListCard and their variations with interactive examples and real-world scenarios.'
});
