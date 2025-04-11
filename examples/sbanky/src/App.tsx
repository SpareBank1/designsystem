import { useState } from 'react';
import { clsx } from 'clsx';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Paragraph, Wave } from '@sb1/ffe-core-react';
import { ContextMessage } from '@sb1/ffe-messages-react';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';
import { Menu, X, CreditCard, ArrowUpDown, TrendingUp } from 'lucide-react';
import { SidebarMenu } from './components/sidebar-menu/SidebarMenu';
import { AccountOverview } from './pages/AccountOverview';
import { PaymentForm } from './pages/PaymentForm';
import { InvestmentDashboard } from './pages/InvestmentDashboard';

export const SbankyWave = () => (
    <div className="relative z-0 mb-xl">
        <Wave
            className="absolute w-full pt-[200px] sm:pt-[310px] lg:pt-[410px]"
            color="frost-30"
            darkmodeColor="svart"
            bgColor="vann"
            bgDarkmodeColor="svart"
        />
    </div>
);

const MobileMenuButton = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => (
    <button
        className={clsx(
            'fixed top-4 right-4 z-50 p-2 rounded-full',
            'bg-white dark:bg-gray-800',
            'md:hidden',
        )}
        onClick={onClick}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
);

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        {
            id: 'accounts',
            label: 'Kontoer',
            path: '/accounts',
            icon: <CreditCard size={18} />,
        },
        {
            id: 'payments',
            label: 'Betaling',
            path: '/payments',
            icon: <ArrowUpDown size={18} />,
        },
        {
            id: 'investments',
            label: 'Investeringer',
            path: '/investments',
            icon: <TrendingUp size={18} />,
        },
    ];

    const handleMenuItemClick = (path: string) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <MobileMenuButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            <div className="flex min-h-screen">
                <SidebarMenu
                    className={clsx(
                        'fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out',
                        'md:relative md:translate-x-0',
                        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
                    )}
                    activePath={location.pathname}
                    onClose={() => setIsMobileMenuOpen(false)}
                    menuItems={menuItems}
                    onMenuItemClick={handleMenuItemClick}
                />
                <main className="flex-1 p-4 md:p-8">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default App;
