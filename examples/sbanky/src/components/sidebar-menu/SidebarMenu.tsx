import React from 'react';
import { Heading3 } from '@sb1/ffe-core-react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    onMenuItemClick,
    menuItems,
}) => {
    const location = useLocation();

    return (
        <>
            {/* Mobile menu button */}
            <div className="fixed top-0 left-0 p-4 md:hidden z-20">
                <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-ffe-frost-hover"
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
            <div
                className={`fixed inset-y-0 left-0 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:relative md:translate-x-0 z-30 transition-transform duration-300 ease-in-out bg-ffe-frost-30`}
            >
                <div className="h-full w-64 border-r ffe-border-grey-light shadow-lg md:shadow-none">
                    {/* Tittel for desktop sidebar */}
                    <div className="p-4 border-b ffe-border-grey-light hidden md:block">
                        <Heading3 className="mt-0">Sbanky Meny</Heading3>
                    </div>
                    {/* Tittel og lukkeknapp for mobil sidebar */}
                    <div className="flex items-center justify-between p-4 border-b ffe-border-grey-light md:hidden">
                        <Heading3 className="mt-0">Meny</Heading3>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-ffe-frost-hover"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-4">
                        <nav>
                            {/* Bruker standard ul/li siden FFE-listekomponenter ga feil */}
                            <ul className="list-none ml-0 pl-0 space-y-1">
                                {menuItems.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <li key={item.id} className="pl-0">
                                            <Link
                                                to={item.path}
                                                onClick={() => {
                                                    onMenuItemClick?.(item.path);
                                                    if (isOpen && onClose) {
                                                        onClose();
                                                    }
                                                }}
                                                className={`w-full flex items-center gap-x-2 px-3 py-2 rounded no-underline cursor-pointer 
                                                            text-ffe-blue-dark hover:bg-ffe-frost-hover
                                                            ${isActive 
                                                                ? 'bg-ffe-vann font-bold' // FFE-stil for aktivt element
                                                                : ''
                                                            }`}
                                            >
                                                {item.icon}
                                                <span className="text-sm">{item.label}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
