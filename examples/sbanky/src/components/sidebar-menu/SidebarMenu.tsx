import React from 'react';
import { Heading4 } from '@sb1/ffe-core-react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
                    className="p-2 rounded-lg hover:bg-gray-100"
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
                } md:relative md:translate-x-0 z-30 transition-transform duration-300 ease-in-out`}
            >
                <div className="h-full w-64 bg-white border-r border-gray-200 shadow-lg md:shadow-none">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 md:hidden">
                        <Heading4>Meny</Heading4>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-gray-100"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-4">
                        <nav>
                            <ul className="list-none space-y-2">
                                {menuItems.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            to={item.path}
                                            onClick={() => onMenuItemClick?.(item.path)}
                                            className={`w-full flex items-center gap-2 px-4 py-2 rounded no-underline cursor-pointer hover:bg-gray-100 ${
                                                location.pathname === item.path ? 'bg-gray-100' : ''
                                            }`}
                                        >
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
