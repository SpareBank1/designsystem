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

// Define comprehensive templates for all tab components
const tabsTemplates = {
    simple: {
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
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveTabs() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Gjennomgå rapport', completed: false },
        { id: 2, title: 'Møte med team', completed: true },
        { id: 3, title: 'Oppdater dokumentasjon', completed: false }
    ]);
    const [userData, setUserData] = useState({
        name: 'Ola Nordmann',
        email: 'ola@example.com',
        notifications: true
    });
    
    const toggleTask = (id) => {
        setTasks(prev => prev.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };
    
    const completedTasks = tasks.filter(task => task.completed).length;
    
    return (
        <div style={{ maxWidth: '700px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-primary)', 
                color: 'white',
                borderRadius: '8px 8px 0 0',
                textAlign: 'center'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>⚡ Bruker Dashboard</h3>
                <p style={{ margin: 0 }}>Velkommen tilbake, {userData.name}!</p>
            </div>
            
            <TabGroup>
                <Tab
                    isSelected={activeTab === 'dashboard'}
                    onClick={() => setActiveTab('dashboard')}
                >
                    📊 Dashboard
                </Tab>
                <Tab
                    isSelected={activeTab === 'tasks'}
                    onClick={() => setActiveTab('tasks')}
                >
                    ✅ Oppgaver ({completedTasks}/{tasks.length})
                </Tab>
                <Tab
                    isSelected={activeTab === 'profile'}
                    onClick={() => setActiveTab('profile')}
                >
                    👤 Profil
                </Tab>
                <Tab
                    isSelected={activeTab === 'settings'}
                    onClick={() => setActiveTab('settings')}
                >
                    ⚙️ Innstillinger
                </Tab>
            </TabGroup>
            
            <div style={{ 
                padding: '24px', 
                backgroundColor: 'white',
                borderRadius: '0 0 8px 8px',
                minHeight: '300px',
                border: '1px solid var(--ffe-color-border-subtle)',
                borderTop: 'none'
            }}>
                {activeTab === 'dashboard' && (
                    <div>
                        <h4 style={{ margin: '0 0 20px 0' }}>📊 Dashboard oversikt</h4>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                            gap: '16px'
                        }}>
                            <div style={{ 
                                padding: '16px', 
                                backgroundColor: 'var(--ffe-color-background-success-subtle)', 
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <h5 style={{ margin: '0 0 8px 0' }}>Fullførte</h5>
                                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{completedTasks}</div>
                            </div>
                            <div style={{ 
                                padding: '16px', 
                                backgroundColor: 'var(--ffe-color-background-warning-subtle)', 
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <h5 style={{ margin: '0 0 8px 0' }}>Ventende</h5>
                                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{tasks.length - completedTasks}</div>
                            </div>
                        </div>
                    </div>
                )}
                
                {activeTab === 'tasks' && (
                    <div>
                        <h4 style={{ margin: '0 0 20px 0' }}>✅ Mine oppgaver</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {tasks.map(task => (
                                <div
                                    key={task.id}
                                    style={{
                                        padding: '12px 16px',
                                        border: '1px solid var(--ffe-color-border-subtle)',
                                        borderRadius: '6px',
                                        backgroundColor: task.completed ? 'var(--ffe-color-background-success-subtle)' : 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px'
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTask(task.id)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <span style={{ 
                                        flex: 1, 
                                        textDecoration: task.completed ? 'line-through' : 'none'
                                    }}>
                                        {task.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {activeTab === 'profile' && (
                    <div>
                        <h4 style={{ margin: '0 0 20px 0' }}>👤 Min profil</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                                    Navn
                                </label>
                                <input
                                    type="text"
                                    value={userData.name}
                                    onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '1px solid var(--ffe-color-border-subtle)',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                                    E-post
                                </label>
                                <input
                                    type="email"
                                    value={userData.email}
                                    onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '1px solid var(--ffe-color-border-subtle)',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
                
                {activeTab === 'settings' && (
                    <div>
                        <h4 style={{ margin: '0 0 20px 0' }}>⚙️ Innstillinger</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <input
                                    type="checkbox"
                                    id="notifications"
                                    checked={userData.notifications}
                                    onChange={(e) => setUserData(prev => ({ ...prev, notifications: e.target.checked }))}
                                />
                                <label htmlFor="notifications">Aktiver varsler</label>
                            </div>
                            
                            <div style={{ 
                                padding: '16px', 
                                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                                borderRadius: '8px' 
                            }}>
                                <h5 style={{ margin: '0 0 8px 0' }}>💡 Tips</h5>
                                <p style={{ margin: 0, fontSize: '14px' }}>
                                    Bruk fanene for å navigere mellom forskjellige seksjoner av dashboardet.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

render(<InteractiveTabs />);`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function TabsShowcase() {
    const [activeSection, setActiveSection] = useState('products');
    const [products] = useState([
        { id: 1, name: 'Laptop Pro', category: 'electronics', price: 15999, stock: 12 },
        { id: 2, name: 'Wireless Mouse', category: 'electronics', price: 599, stock: 45 },
        { id: 3, name: 'Office Chair', category: 'furniture', price: 2999, stock: 8 }
    ]);
    const [orders] = useState([
        { id: 'ORD-001', customer: 'Anna Hansen', amount: 15999, status: 'delivered' },
        { id: 'ORD-002', customer: 'Lars Olsen', amount: 3598, status: 'shipped' },
        { id: 'ORD-003', customer: 'Kari Nordahl', amount: 799, status: 'pending' }
    ]);
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '800px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🏆 E-handel Dashboard</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Administrasjonspanel med faner og statistikk
                </p>
            </div>
            
            <TabGroup>
                <Tab
                    isSelected={activeSection === 'products'}
                    onClick={() => setActiveSection('products')}
                >
                    🛍️ Produkter ({products.length})
                </Tab>
                <Tab
                    isSelected={activeSection === 'orders'}
                    onClick={() => setActiveSection('orders')}
                >
                    📦 Bestillinger ({orders.length})
                </Tab>
                <Tab
                    isSelected={activeSection === 'analytics'}
                    onClick={() => setActiveSection('analytics')}
                >
                    📊 Analyse
                </Tab>
            </TabGroup>
            
            <div style={{ 
                padding: '24px', 
                backgroundColor: 'white',
                borderRadius: '0 0 8px 8px',
                minHeight: '300px',
                border: '1px solid var(--ffe-color-border-subtle)',
                borderTop: 'none'
            }}>
                {activeSection === 'products' && (
                    <div>
                        <h3 style={{ margin: '0 0 20px 0' }}>🛍️ Produktkatalog</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                            {products.map(product => (
                                <div
                                    key={product.id}
                                    style={{
                                        padding: '16px',
                                        border: '1px solid var(--ffe-color-border-subtle)',
                                        borderRadius: '8px',
                                        backgroundColor: 'var(--ffe-color-background-subtle)'
                                    }}
                                >
                                    <h4 style={{ margin: '0 0 8px 0' }}>{product.name}</h4>
                                    <div style={{ fontSize: '14px', color: 'var(--ffe-color-text-subtle)', marginBottom: '8px' }}>
                                        {product.category}
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <strong>{product.price.toLocaleString()} kr</strong>
                                        <span style={{ fontSize: '12px' }}>{product.stock} på lager</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {activeSection === 'orders' && (
                    <div>
                        <h3 style={{ margin: '0 0 20px 0' }}>📦 Bestillinger</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {orders.map(order => (
                                <div
                                    key={order.id}
                                    style={{
                                        padding: '16px',
                                        border: '1px solid var(--ffe-color-border-subtle)',
                                        borderRadius: '6px',
                                        backgroundColor: 'white',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <div>
                                        <strong>{order.id}</strong>
                                        <div style={{ fontSize: '14px', color: 'var(--ffe-color-text-subtle)' }}>
                                            {order.customer}
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div><strong>{order.amount.toLocaleString()} kr</strong></div>
                                        <span style={{
                                            padding: '2px 8px',
                                            borderRadius: '12px',
                                            fontSize: '12px',
                                            backgroundColor: 
                                                order.status === 'delivered' ? 'var(--ffe-color-background-success-subtle)' :
                                                order.status === 'shipped' ? 'var(--ffe-color-background-info-subtle)' :
                                                'var(--ffe-color-background-warning-subtle)'
                                        }}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {activeSection === 'analytics' && (
                    <div>
                        <h3 style={{ margin: '0 0 20px 0' }}>📊 Forretningsanalyse</h3>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                            gap: '16px'
                        }}>
                            <div style={{ 
                                padding: '20px', 
                                backgroundColor: 'var(--ffe-color-background-success-subtle)', 
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <h4 style={{ margin: '0 0 8px 0' }}>Omsetning</h4>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>125 430 kr</div>
                            </div>
                            <div style={{ 
                                padding: '20px', 
                                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <h4 style={{ margin: '0 0 8px 0' }}>Bestillinger</h4>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>89</div>
                            </div>
                            <div style={{ 
                                padding: '20px', 
                                backgroundColor: 'var(--ffe-color-background-warning-subtle)', 
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <h4 style={{ margin: '0 0 8px 0' }}>Snittverdi</h4>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>1 409 kr</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

render(<TabsShowcase />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(TabGroup, {
    templates: tabsTemplates,
    additionalComponents: {
        Tab
    },
    defaultTemplate: 'simple',
    title: 'Tabs Live Code Editor',
    description: 'Comprehensive live code editor for all tab components in the FFE Tabs package. Explore TabGroup and Tab with interactive examples for navigation, content organization, and real-world scenarios.'
});
