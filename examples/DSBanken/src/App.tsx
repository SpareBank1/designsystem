import { Heading4 } from '@sb1/ffe-core-react';
import { Grid, GridCol, GridRow } from '@sb1/ffe-grid-react';
import { Wave } from '@sb1/ffe-shapes-react';
import {
    ArrowLeftRight,
    Home,
    LineChart,
    PiggyBank,
    Settings
} from 'lucide-react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import DSHeader from './components/header/DSHeader';
import { SidebarMenu } from './components/sidebar-menu/SidebarMenu';

const menuItems = [
    { id: 'home', label: 'Oversikt', path: '/oversikt', icon: <Home size={20} /> },
    { id: 'payment', label: 'Ny betaling', path: '/betaling', icon: <ArrowLeftRight size={20} /> },
    { id: 'savings', label: 'Sparing', path: '/sparing', icon: <PiggyBank size={20} /> },
    { id: 'investment', label: 'Investering', path: '/investering', icon: <LineChart size={20} /> },
    { id: 'settings', label: 'Innstillinger', path: '/innstillinger', icon: <Settings size={20} /> }
];

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <DSHeader menuItems={menuItems} />
            <Grid className="min-h-screen">
                <GridRow>
                    {/* Main content */}
                    <GridCol className="p-4 md:p-8">
                        <SidebarMenu menuItems={menuItems} />
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
                    <Heading4 className="m-0">DSBanken</Heading4>
                    <Link to="/innstillinger" className="p-2">
                        <Settings size={24} />
                    </Link>
                </header>
            </Grid>
            <Wave />
        </>
    );
}

export default App;
