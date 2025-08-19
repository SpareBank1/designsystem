import type { StoryObj, Meta } from '@storybook/react';
import { Pagination } from './Pagination';
import { usePagination } from './usePagination';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Pagination> = {
    title: 'Komponenter/Pagination/Live Code Editor',
    component: Pagination,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all pagination components in the FFE Pagination package. Explore Pagination component and usePagination hook with interactive examples for data navigation, page size controls, and real-world scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

// Define comprehensive templates for all pagination components
const paginationTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📄',
        code: `function SimplePagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 150;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    return (
        <div style={{ maxWidth: '600px' }}>
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Produktliste</h4>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Viser {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, totalItems)} av {totalItems} produkter
                </p>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
                {Array.from({ length: itemsPerPage }, (_, i) => {
                    const itemNumber = (currentPage - 1) * itemsPerPage + i + 1;
                    if (itemNumber > totalItems) return null;
                    
                    return (
                        <div
                            key={itemNumber}
                            style={{
                                padding: '12px',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px',
                                marginBottom: '8px',
                                backgroundColor: 'white'
                            }}
                        >
                            <strong>Produkt #{itemNumber}</strong>
                            <div style={{ fontSize: '14px', color: 'var(--ffe-color-text-subtle)' }}>
                                Beskrivelse av produkt nummer {itemNumber}
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

<SimplePagination />`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractivePagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    
    // Simuler data
    const allItems = Array.from({ length: 247 }, (_, i) => ({
        id: i + 1,
        name: \`Produkt \${i + 1}\`,
        category: ['Elektronikk', 'Klær', 'Bøker', 'Sport', 'Hjem'][i % 5],
        price: Math.floor(Math.random() * 1000) + 100,
        inStock: Math.random() > 0.2
    }));
    
    // Filtrer basert på søk
    const filteredItems = allItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
    
    // Reset til side 1 når søk eller items per page endres
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, itemsPerPage]);
    
    const handlePageSizeChange = (newSize) => {
        setItemsPerPage(newSize);
    };
    
    return (
        <div style={{ maxWidth: '800px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-primary)', 
                color: 'white',
                borderRadius: '8px',
                marginBottom: '24px',
                textAlign: 'center'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>🛍️ Produktkatalog</h3>
                <p style={{ margin: 0 }}>Utforsk vårt utvalg av produkter</p>
            </div>
            
            <div style={{ 
                display: 'flex', 
                gap: '16px', 
                marginBottom: '20px',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '200px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                        Søk i produkter
                    </label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Søk etter navn eller kategori..."
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
                        Produkter per side
                    </label>
                    <select
                        value={itemsPerPage}
                        onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
                        style={{
                            padding: '8px 12px',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px'
                        }}
                    >
                        <option value={5}>5 per side</option>
                        <option value={10}>10 per side</option>
                        <option value={20}>20 per side</option>
                        <option value={50}>50 per side</option>
                    </select>
                </div>
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <strong>Viser {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredItems.length)} av {filteredItems.length}</strong>
                        {searchTerm && (
                            <span style={{ color: 'var(--ffe-color-text-subtle)', marginLeft: '8px' }}>
                                (filtrert fra {allItems.length} totalt)
                            </span>
                        )}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--ffe-color-text-subtle)' }}>
                        Side {currentPage} av {totalPages}
                    </div>
                </div>
            </div>
            
            {currentItems.length === 0 ? (
                <div style={{ 
                    textAlign: 'center', 
                    padding: '40px',
                    color: 'var(--ffe-color-text-subtle)'
                }}>
                    {searchTerm ? \`Ingen produkter funnet for "\${searchTerm}"\` : 'Ingen produkter å vise'}
                </div>
            ) : (
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
                    gap: '16px',
                    marginBottom: '24px'
                }}>
                    {currentItems.map(item => (
                        <div
                            key={item.id}
                            style={{
                                padding: '16px',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '8px',
                                backgroundColor: 'white'
                            }}
                        >
                            <h4 style={{ margin: '0 0 8px 0' }}>{item.name}</h4>
                            <div style={{ 
                                fontSize: '14px', 
                                color: 'var(--ffe-color-text-subtle)',
                                marginBottom: '8px'
                            }}>
                                {item.category}
                            </div>
                            <div style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center'
                            }}>
                                <strong>{item.price} kr</strong>
                                <span style={{
                                    padding: '2px 8px',
                                    borderRadius: '12px',
                                    fontSize: '12px',
                                    backgroundColor: item.inStock ? 'var(--ffe-color-background-success-subtle)' : 'var(--ffe-color-background-error-subtle)',
                                    color: item.inStock ? 'var(--ffe-color-text-success)' : 'var(--ffe-color-text-error)'
                                }}>
                                    {item.inStock ? 'På lager' : 'Utsolgt'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
}

<InteractivePagination />`
    },
    hook: {
        name: 'Hook',
        icon: '🎣',
        code: `function PaginationHookDemo() {
    const [data] = useState(() => 
        Array.from({ length: 83 }, (_, i) => ({
            id: i + 1,
            title: \`Artikkel \${i + 1}\`,
            author: ['Anna Hansen', 'Lars Olsen', 'Kari Nordahl', 'Erik Svendsen'][i % 4],
            date: new Date(2024, 0, 1 + i).toLocaleDateString('no-NO'),
            category: ['Teknologi', 'Design', 'Business', 'Utvikling'][i % 4]
        }))
    );
    
    const itemsPerPage = 8;
    const {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        goToPage,
        goToNextPage,
        goToPreviousPage,
        canGoNext,
        canGoPrevious
    } = usePagination({
        totalItems: data.length,
        itemsPerPage,
        initialPage: 1
    });
    
    const currentData = data.slice(startIndex, endIndex + 1);
    
    return (
        <div style={{ maxWidth: '700px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '8px',
                marginBottom: '24px'
            }}>
                <h3 style={{ margin: '0 0 12px 0' }}>🎣 usePagination Hook Demo</h3>
                <p style={{ margin: '0 0 12px 0' }}>
                    Demonstrerer bruk av usePagination hook for tilstandshåndtering
                </p>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                    gap: '8px',
                    fontSize: '14px'
                }}>
                    <div><strong>Nåværende side:</strong> {currentPage}</div>
                    <div><strong>Totale sider:</strong> {totalPages}</div>
                    <div><strong>Start indeks:</strong> {startIndex}</div>
                    <div><strong>Slutt indeks:</strong> {endIndex}</div>
                </div>
            </div>
            
            <div style={{ 
                display: 'flex', 
                gap: '12px', 
                marginBottom: '20px',
                flexWrap: 'wrap'
            }}>
                <button
                    onClick={goToPreviousPage}
                    disabled={!canGoPrevious}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: canGoPrevious ? 'var(--ffe-color-background-primary)' : 'var(--ffe-color-background-disabled)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: canGoPrevious ? 'pointer' : 'not-allowed'
                    }}
                >
                    ← Forrige
                </button>
                
                <button
                    onClick={goToNextPage}
                    disabled={!canGoNext}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: canGoNext ? 'var(--ffe-color-background-primary)' : 'var(--ffe-color-background-disabled)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: canGoNext ? 'pointer' : 'not-allowed'
                    }}
                >
                    Neste →
                </button>
                
                <button
                    onClick={() => goToPage(1)}
                    disabled={currentPage === 1}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: currentPage !== 1 ? 'var(--ffe-color-background-secondary)' : 'var(--ffe-color-background-disabled)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: currentPage !== 1 ? 'pointer' : 'not-allowed'
                    }}
                >
                    Første side
                </button>
                
                <button
                    onClick={() => goToPage(totalPages)}
                    disabled={currentPage === totalPages}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: currentPage !== totalPages ? 'var(--ffe-color-background-secondary)' : 'var(--ffe-color-background-disabled)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: currentPage !== totalPages ? 'pointer' : 'not-allowed'
                    }}
                >
                    Siste side
                </button>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
                <div style={{ 
                    padding: '12px 16px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)', 
                    borderRadius: '4px',
                    marginBottom: '16px'
                }}>
                    Viser artikkel {startIndex + 1}-{Math.min(endIndex + 1, data.length)} av {data.length}
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {currentData.map(article => (
                        <div
                            key={article.id}
                            style={{
                                padding: '16px',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '6px',
                                backgroundColor: 'white'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ margin: '0 0 8px 0' }}>{article.title}</h4>
                                    <div style={{ 
                                        fontSize: '14px', 
                                        color: 'var(--ffe-color-text-subtle)',
                                        display: 'flex',
                                        gap: '16px'
                                    }}>
                                        <span>👤 {article.author}</span>
                                        <span>📅 {article.date}</span>
                                        <span>🏷️ {article.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
            />
        </div>
    );
}

<PaginationHookDemo />`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function PaginationShowcase() {
    const [activeTab, setActiveTab] = useState('products');
    const [filters, setFilters] = useState({
        category: 'all',
        sortBy: 'name',
        sortOrder: 'asc'
    });
    
    // Simuler forskjellige datasett
    const datasets = {
        products: Array.from({ length: 156 }, (_, i) => ({
            id: i + 1,
            name: \`Produkt \${i + 1}\`,
            category: ['Elektronikk', 'Klær', 'Bøker', 'Sport'][i % 4],
            price: Math.floor(Math.random() * 2000) + 100,
            rating: (Math.random() * 2 + 3).toFixed(1)
        })),
        orders: Array.from({ length: 89 }, (_, i) => ({
            id: \`ORD-\${1000 + i}\`,
            customer: \`Kunde \${i + 1}\`,
            amount: Math.floor(Math.random() * 5000) + 500,
            status: ['Pending', 'Shipped', 'Delivered', 'Cancelled'][i % 4],
            date: new Date(2024, 0, 1 + i * 2).toLocaleDateString('no-NO')
        })),
        users: Array.from({ length: 234 }, (_, i) => ({
            id: i + 1,
            name: \`Bruker \${i + 1}\`,
            email: \`bruker\${i + 1}@example.com\`,
            role: ['Admin', 'User', 'Moderator'][i % 3],
            lastLogin: new Date(2024, 0, 1 + i).toLocaleDateString('no-NO')
        }))
    };
    
    const [pagination, setPagination] = useState({
        products: { currentPage: 1, itemsPerPage: 12 },
        orders: { currentPage: 1, itemsPerPage: 10 },
        users: { currentPage: 1, itemsPerPage: 15 }
    });
    
    const currentData = datasets[activeTab];
    const currentPagination = pagination[activeTab];
    const totalPages = Math.ceil(currentData.length / currentPagination.itemsPerPage);
    
    const startIndex = (currentPagination.currentPage - 1) * currentPagination.itemsPerPage;
    const currentItems = currentData.slice(startIndex, startIndex + currentPagination.itemsPerPage);
    
    const handlePageChange = (page) => {
        setPagination(prev => ({
            ...prev,
            [activeTab]: { ...prev[activeTab], currentPage: page }
        }));
    };
    
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    
    const tabs = [
        { id: 'products', label: 'Produkter', icon: '🛍️', count: datasets.products.length },
        { id: 'orders', label: 'Bestillinger', icon: '📦', count: datasets.orders.length },
        { id: 'users', label: 'Brukere', icon: '👥', count: datasets.users.length }
    ];
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '900px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🏆 Admin Dashboard</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Komplett showcase med faner, filtrering og paginering
                </p>
            </div>
            
            {/* Tab Navigation */}
            <div style={{ 
                display: 'flex', 
                borderBottom: '2px solid var(--ffe-color-border-subtle)',
                marginBottom: '24px'
            }}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        style={{
                            padding: '12px 20px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            borderBottom: activeTab === tab.id ? '2px solid var(--ffe-color-background-primary)' : '2px solid transparent',
                            color: activeTab === tab.id ? 'var(--ffe-color-background-primary)' : 'var(--ffe-color-text-subtle)',
                            cursor: 'pointer',
                            fontWeight: activeTab === tab.id ? '600' : '400',
                            marginBottom: '-2px'
                        }}
                    >
                        {tab.icon} {tab.label} ({tab.count})
                    </button>
                ))}
            </div>
            
            {/* Content Area */}
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '20px',
                marginBottom: '20px'
            }}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '20px'
                }}>
                    <h3 style={{ margin: 0 }}>
                        {tabs.find(t => t.id === activeTab)?.label}
                    </h3>
                    <div style={{ 
                        fontSize: '14px', 
                        color: 'var(--ffe-color-text-subtle)' 
                    }}>
                        Viser {startIndex + 1}-{Math.min(startIndex + currentPagination.itemsPerPage, currentData.length)} av {currentData.length}
                    </div>
                </div>
                
                {/* Data Display */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: activeTab === 'products' ? 'repeat(auto-fill, minmax(200px, 1fr))' : '1fr',
                    gap: '12px',
                    marginBottom: '20px'
                }}>
                    {currentItems.map(item => (
                        <div
                            key={item.id}
                            style={{
                                padding: '12px',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '6px',
                                backgroundColor: 'var(--ffe-color-background-subtle)'
                            }}
                        >
                            {activeTab === 'products' && (
                                <>
                                    <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>{item.name}</h4>
                                    <div style={{ fontSize: '12px', color: 'var(--ffe-color-text-subtle)' }}>
                                        {item.category} • {item.price} kr • ⭐ {item.rating}
                                    </div>
                                </>
                            )}
                            {activeTab === 'orders' && (
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <strong style={{ fontSize: '14px' }}>{item.id}</strong>
                                        <span style={{ fontSize: '12px' }}>{item.date}</span>
                                    </div>
                                    <div style={{ fontSize: '12px', color: 'var(--ffe-color-text-subtle)' }}>
                                        {item.customer} • {item.amount} kr • {item.status}
                                    </div>
                                </>
                            )}
                            {activeTab === 'users' && (
                                <>
                                    <div style={{ fontSize: '14px', fontWeight: '500' }}>{item.name}</div>
                                    <div style={{ fontSize: '12px', color: 'var(--ffe-color-text-subtle)' }}>
                                        {item.email} • {item.role} • Sist: {item.lastLogin}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPagination.currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
}

<PaginationShowcase />`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Pagination, {
    templates: paginationTemplates,
    additionalComponents: {
        usePagination
    },
    defaultTemplate: 'simple',
    title: 'Pagination Live Code Editor',
    description: 'Comprehensive live code editor for all pagination components in the FFE Pagination package. Explore Pagination component and usePagination hook with interactive examples for data navigation, page size controls, and real-world scenarios.'
});
