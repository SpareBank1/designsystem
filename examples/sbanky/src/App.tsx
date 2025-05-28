import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Grid, GridCol, GridRow } from '@sb1/ffe-grid-react';
import { Heading1, Heading4, Paragraph } from '@sb1/ffe-core-react';
import { Link } from 'react-router-dom';
import {
    Home,
    CreditCard,
    PiggyBank,
    LineChart,
    ArrowLeftRight,
    Settings
} from 'lucide-react';

import { SidebarMenu } from './components/sidebar-menu/SidebarMenu';

const menuItems = [
    { id: 'home', label: 'Oversikt', path: '/oversikt', icon: <Home size={20} /> },
    { id: 'accounts', label: 'Kontoer', path: '/kontoer', icon: <CreditCard size={20} /> },
    { id: 'payment', label: 'Ny betaling', path: '/betaling', icon: <ArrowLeftRight size={20} /> },
    { id: 'savings', label: 'Sparing', path: '/sparing', icon: <PiggyBank size={20} /> },
    { id: 'investment', label: 'Investering', path: '/investering', icon: <LineChart size={20} /> },
    { id: 'settings', label: 'Innstillinger', path: '/innstillinger', icon: <Settings size={20} /> }
];

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Grid className="min-h-screen bg-gray-100">
            <GridRow>
                {/* Sidebar */}
                <GridCol md={4} lg={3} className="hidden md:block">
                    <div className="p-4 h-full">
                        <SidebarMenu menuItems={menuItems} />
                    </div>
                </GridCol>

                {/* Main content */}
                <GridCol sm={12} md={8} lg={9} className="p-4 md:p-8">
                    <div className="flex justify-between items-center mb-8">
                        <Heading1>Sbanky</Heading1>
                        <Paragraph>Ditt personlige dashbord</Paragraph>
                    </div>

                    <Outlet />
                </GridCol>
            </GridRow>

            {/* Mobile Sidebar - Conditional rendering based on state */}
            {isSidebarOpen && (
                <GridCol sm={12} className="md:hidden fixed inset-0 z-50">
                    <div className="relative h-full">
                        <SidebarMenu
                            menuItems={menuItems}
                            isOpen={isSidebarOpen}
                            onClose={() => setIsSidebarOpen(false)}
                            onMenuItemClick={() => setIsSidebarOpen(false)}
                        />
                    </div>
                </GridCol>
            )}

            {/* Mobile Header */}
            <header className="md:hidden fixed top-0 left-0 right-0 bg-white p-4 border-b z-40 flex justify-between items-center">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2"
                    aria-label="Åpne meny"
                >
                    <Home size={24} />
                </button>
                <Heading4 className="m-0">Sbanky</Heading4>
                <Link to="/innstillinger" className="p-2">
                    <Settings size={24} />
                </Link>
            </header>
        </Grid>
    );
}

export default App;
