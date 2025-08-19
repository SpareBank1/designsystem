import type { StoryObj, Meta } from '@storybook/react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableDataCell } from './TableDataCell';
import { TableFoot } from './TableFoot';
import { TableHead } from './TableHead';
import { TableHeaderCell } from './TableHeaderCell';
import { TableRow } from './TableRow';
import { TableCaption } from './TableCaption';
import { TableRowExpandable } from './TableRowExpandable';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Table> = {
    title: 'Komponenter/Tables/Live Code Editor',
    component: Table,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all table components in the FFE Tables package. Explore Table, TableRow, TableHeaderCell, TableDataCell, TableRowExpandable and more with interactive examples for data display, sorting, filtering, and real-world scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Table>;

// Define comprehensive templates for all table components
const tablesTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📊',
        code: `function SimpleTable() {
    const employees = [
        { id: 1, name: 'Anna Hansen', position: 'Utvikler', department: 'IT', salary: 650000 },
        { id: 2, name: 'Lars Olsen', position: 'Designer', department: 'Design', salary: 580000 },
        { id: 3, name: 'Kari Nordahl', position: 'Produktsjef', department: 'Produkt', salary: 720000 }
    ];
    
    return (
        <div style={{ maxWidth: '800px' }}>
            <h4 style={{ margin: '0 0 16px 0' }}>📊 Ansattoversikt</h4>
            
            <Table>
                <TableCaption>Oversikt over ansatte i bedriften</TableCaption>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Navn</TableHeaderCell>
                        <TableHeaderCell>Stilling</TableHeaderCell>
                        <TableHeaderCell>Avdeling</TableHeaderCell>
                        <TableHeaderCell>Lønn</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(employee => (
                        <TableRow key={employee.id}>
                            <TableDataCell>{employee.name}</TableDataCell>
                            <TableDataCell>{employee.position}</TableDataCell>
                            <TableDataCell>{employee.department}</TableDataCell>
                            <TableDataCell>{employee.salary.toLocaleString()} kr</TableDataCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
            <div style={{ 
                marginTop: '16px', 
                padding: '12px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '4px',
                fontSize: '14px'
            }}>
                <strong>💡 Tips:</strong> Tabeller er perfekte for å vise strukturerte data på en oversiktlig måte.
            </div>
        </div>
    );
}

render(<SimpleTable />);`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveTable() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Laptop Pro', category: 'Elektronikk', price: 15999, stock: 12, status: 'active' },
        { id: 2, name: 'Wireless Mouse', category: 'Elektronikk', price: 599, stock: 45, status: 'active' },
        { id: 3, name: 'Office Chair', category: 'Møbler', price: 2999, stock: 8, status: 'active' },
        { id: 4, name: 'Standing Desk', category: 'Møbler', price: 4999, stock: 3, status: 'low_stock' }
    ]);
    
    const [sortField, setSortField] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };
    
    const updateStock = (id, newStock) => {
        setProducts(prev => prev.map(product => {
            if (product.id === id) {
                const status = newStock === 0 ? 'out_of_stock' : newStock < 5 ? 'low_stock' : 'active';
                return { ...product, stock: newStock, status };
            }
            return product;
        }));
    };
    
    const filteredAndSortedProducts = products
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            const aVal = a[sortField];
            const bVal = b[sortField];
            const modifier = sortDirection === 'asc' ? 1 : -1;
            
            if (typeof aVal === 'string') {
                return aVal.localeCompare(bVal) * modifier;
            }
            return (aVal - bVal) * modifier;
        });
    
    const getStatusColor = (status) => {
        switch (status) {
            case 'active': return 'var(--ffe-color-text-success)';
            case 'low_stock': return 'var(--ffe-color-text-warning)';
            case 'out_of_stock': return 'var(--ffe-color-text-error)';
            default: return 'inherit';
        }
    };
    
    return (
        <div style={{ maxWidth: '900px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-primary)', 
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center',
                marginBottom: '24px'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>⚡ Interaktiv Produkttabell</h3>
                <p style={{ margin: 0 }}>Sorter, filtrer og administrer produkter</p>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Søk etter produktnavn..."
                    style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: '1px solid var(--ffe-color-border-subtle)',
                        borderRadius: '4px',
                        boxSizing: 'border-box'
                    }}
                />
            </div>
            
            <Table>
                <TableCaption>Produktkatalog ({filteredAndSortedProducts.length} produkter)</TableCaption>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell 
                            sortable 
                            onClick={() => handleSort('name')}
                            sortDirection={sortField === 'name' ? sortDirection : undefined}
                        >
                            Produktnavn
                        </TableHeaderCell>
                        <TableHeaderCell 
                            sortable 
                            onClick={() => handleSort('category')}
                            sortDirection={sortField === 'category' ? sortDirection : undefined}
                        >
                            Kategori
                        </TableHeaderCell>
                        <TableHeaderCell 
                            sortable 
                            onClick={() => handleSort('price')}
                            sortDirection={sortField === 'price' ? sortDirection : undefined}
                        >
                            Pris
                        </TableHeaderCell>
                        <TableHeaderCell 
                            sortable 
                            onClick={() => handleSort('stock')}
                            sortDirection={sortField === 'stock' ? sortDirection : undefined}
                        >
                            Lager
                        </TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Handlinger</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredAndSortedProducts.map(product => (
                        <TableRow key={product.id}>
                            <TableDataCell><strong>{product.name}</strong></TableDataCell>
                            <TableDataCell>{product.category}</TableDataCell>
                            <TableDataCell>{product.price.toLocaleString()} kr</TableDataCell>
                            <TableDataCell>
                                <input
                                    type="number"
                                    value={product.stock}
                                    onChange={(e) => updateStock(product.id, parseInt(e.target.value) || 0)}
                                    min="0"
                                    style={{
                                        width: '60px',
                                        padding: '4px 8px',
                                        border: '1px solid var(--ffe-color-border-subtle)',
                                        borderRadius: '4px'
                                    }}
                                />
                            </TableDataCell>
                            <TableDataCell>
                                <span style={{ color: getStatusColor(product.status) }}>
                                    {product.status === 'active' ? '✅ På lager' : 
                                     product.status === 'low_stock' ? '⚠️ Lavt' : '❌ Utsolgt'}
                                </span>
                            </TableDataCell>
                            <TableDataCell>
                                <button
                                    onClick={() => updateStock(product.id, product.stock + 10)}
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
                                    +10
                                </button>
                            </TableDataCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

render(<InteractiveTable />);`
    },
    expandable: {
        name: 'Utvidbar',
        icon: '📋',
        code: `function ExpandableTable() {
    const [orders, setOrders] = useState([
        {
            id: 'ORD-001',
            customer: 'Anna Hansen',
            date: '2024-01-15',
            total: 15999,
            status: 'delivered',
            items: [{ name: 'Laptop Pro', quantity: 1, price: 15999 }]
        },
        {
            id: 'ORD-002',
            customer: 'Lars Olsen',
            date: '2024-01-14',
            total: 3598,
            status: 'shipped',
            items: [
                { name: 'Wireless Mouse', quantity: 2, price: 599 },
                { name: 'Keyboard', quantity: 1, price: 2400 }
            ]
        }
    ]);
    
    const [expandedRows, setExpandedRows] = useState(new Set());
    
    const toggleExpanded = (orderId) => {
        setExpandedRows(prev => {
            const newSet = new Set(prev);
            if (newSet.has(orderId)) {
                newSet.delete(orderId);
            } else {
                newSet.add(orderId);
            }
            return newSet;
        });
    };
    
    return (
        <div style={{ maxWidth: '900px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '8px',
                textAlign: 'center',
                marginBottom: '24px'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>📋 Bestillingsoversikt</h3>
                <p style={{ margin: 0 }}>Klikk på radene for å se detaljert informasjon</p>
            </div>
            
            <Table>
                <TableCaption>Oversikt over kundebestillinger med utvidbare detaljer</TableCaption>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Bestilling</TableHeaderCell>
                        <TableHeaderCell>Kunde</TableHeaderCell>
                        <TableHeaderCell>Dato</TableHeaderCell>
                        <TableHeaderCell>Beløp</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map(order => (
                        <TableRowExpandable
                            key={order.id}
                            isExpanded={expandedRows.has(order.id)}
                            onToggleExpanded={() => toggleExpanded(order.id)}
                            expandedContent={
                                <div style={{ 
                                    padding: '16px', 
                                    backgroundColor: 'var(--ffe-color-background-subtle)',
                                    borderRadius: '4px'
                                }}>
                                    <h5 style={{ margin: '0 0 12px 0' }}>Bestillingsdetaljer</h5>
                                    <div style={{ marginBottom: '16px' }}>
                                        <strong>Bestillings-ID:</strong> {order.id}<br />
                                        <strong>Kunde:</strong> {order.customer}<br />
                                        <strong>Bestillingsdato:</strong> {order.date}
                                    </div>
                                    
                                    <h6 style={{ margin: '0 0 8px 0' }}>Produkter:</h6>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {order.items.map((item, index) => (
                                            <div 
                                                key={index}
                                                style={{ 
                                                    display: 'flex', 
                                                    justifyContent: 'space-between',
                                                    padding: '8px',
                                                    backgroundColor: 'white',
                                                    borderRadius: '4px'
                                                }}
                                            >
                                                <span>{item.name}</span>
                                                <span>{item.quantity} × {item.price.toLocaleString()} kr</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div style={{ 
                                        marginTop: '12px', 
                                        paddingTop: '12px', 
                                        borderTop: '1px solid var(--ffe-color-border-subtle)',
                                        textAlign: 'right'
                                    }}>
                                        <strong>Totalt: {order.total.toLocaleString()} kr</strong>
                                    </div>
                                </div>
                            }
                        >
                            <TableDataCell><strong>{order.id}</strong></TableDataCell>
                            <TableDataCell>{order.customer}</TableDataCell>
                            <TableDataCell>{order.date}</TableDataCell>
                            <TableDataCell>{order.total.toLocaleString()} kr</TableDataCell>
                            <TableDataCell>
                                <span style={{ 
                                    color: order.status === 'delivered' ? 'var(--ffe-color-text-success)' : 'var(--ffe-color-text-info)' 
                                }}>
                                    {order.status === 'delivered' ? '✅ Levert' : '🚚 Sendt'}
                                </span>
                            </TableDataCell>
                        </TableRowExpandable>
                    ))}
                </TableBody>
            </Table>
            
            <div style={{ 
                marginTop: '20px',
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-success-subtle)', 
                borderRadius: '8px' 
            }}>
                <h4 style={{ margin: '0 0 8px 0' }}>📊 Sammendrag</h4>
                <div style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
                    <div><strong>Totale bestillinger:</strong> {orders.length}</div>
                    <div><strong>Utvidede rader:</strong> {expandedRows.size}</div>
                    <div><strong>Total verdi:</strong> {orders.reduce((sum, order) => sum + order.total, 0).toLocaleString()} kr</div>
                </div>
            </div>
        </div>
    );
}

render(<ExpandableTable />);`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function TablesShowcase() {
    const [salesData] = useState([
        { month: 'Januar', revenue: 125000, orders: 45, customers: 38 },
        { month: 'Februar', revenue: 142000, orders: 52, customers: 41 },
        { month: 'Mars', revenue: 158000, orders: 61, customers: 47 }
    ]);
    
    const totalRevenue = salesData.reduce((sum, month) => sum + month.revenue, 0);
    const totalOrders = salesData.reduce((sum, month) => sum + month.orders, 0);
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '800px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🏆 Salgsrapport</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Oversikt over salgsytelse og statistikk
                </p>
            </div>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                gap: '16px',
                marginBottom: '24px'
            }}>
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-success-subtle)', 
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Total omsetning</h4>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        {totalRevenue.toLocaleString()} kr
                    </div>
                </div>
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Bestillinger</h4>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{totalOrders}</div>
                </div>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '20px'
            }}>
                <h3 style={{ margin: '0 0 16px 0' }}>📈 Månedlig salgsutvikling</h3>
                <Table>
                    <TableCaption>Salgsdata per måned for inneværende år</TableCaption>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Måned</TableHeaderCell>
                            <TableHeaderCell>Omsetning</TableHeaderCell>
                            <TableHeaderCell>Bestillinger</TableHeaderCell>
                            <TableHeaderCell>Nye kunder</TableHeaderCell>
                            <TableHeaderCell>Snitt/bestilling</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {salesData.map((month, index) => (
                            <TableRow key={index}>
                                <TableDataCell><strong>{month.month}</strong></TableDataCell>
                                <TableDataCell>{month.revenue.toLocaleString()} kr</TableDataCell>
                                <TableDataCell>{month.orders}</TableDataCell>
                                <TableDataCell>{month.customers}</TableDataCell>
                                <TableDataCell>
                                    {Math.round(month.revenue / month.orders).toLocaleString()} kr
                                </TableDataCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFoot>
                        <TableRow>
                            <TableDataCell><strong>Totalt</strong></TableDataCell>
                            <TableDataCell><strong>{totalRevenue.toLocaleString()} kr</strong></TableDataCell>
                            <TableDataCell><strong>{totalOrders}</strong></TableDataCell>
                            <TableDataCell><strong>{salesData.reduce((sum, m) => sum + m.customers, 0)}</strong></TableDataCell>
                            <TableDataCell><strong>{Math.round(totalRevenue / totalOrders).toLocaleString()} kr</strong></TableDataCell>
                        </TableRow>
                    </TableFoot>
                </Table>
            </div>
        </div>
    );
}

render(<TablesShowcase />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Table, {
    templates: tablesTemplates,
    additionalComponents: {
        TableBody,
        TableDataCell,
        TableFoot,
        TableHead,
        TableHeaderCell,
        TableRow,
        TableCaption,
        TableRowExpandable
    },
    defaultTemplate: 'simple',
    title: 'Tables Live Code Editor',
    description: 'Comprehensive live code editor for all table components in the FFE Tables package. Explore Table, TableRow, TableHeaderCell, TableDataCell, TableRowExpandable and more with interactive examples for data display, sorting, filtering, and real-world scenarios.'
});
