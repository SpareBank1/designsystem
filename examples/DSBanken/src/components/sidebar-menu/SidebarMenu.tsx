import { Menu } from 'lucide-react';
import React from 'react';
// Fjerner listekomponent-import midlertidig pga. feil
// import { UnorderedList, ListItem } from '@sb1/ffe-lists-react';

interface MenuItem {
    id: string;
    label: string;
    path: string;
    icon: React.ReactNode;
}

interface SidebarMenuProps {
    isOpen?: boolean;
    onClose?: () => void;
    onMenuItemClick?: (path: string) => void;
    menuItems: MenuItem[];
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
    isOpen = false,
    onClose,
}) => {
    return (
        <>
            {/* TODO, rydd opp i denne fila, kanskje fjerne? */}
            <div className="fixed top-0 left-0 md:hidden z-20">
                <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-surface-primary-default-hover"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <nav className='flex justify-center'>
                
            </nav>
        </>
    );
};
