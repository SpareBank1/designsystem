import React from 'react';
import { Heading3, StrongText } from '@sb1/ffe-core-react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { List } from '../list';
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
            <div
                className={`fixed inset-y-0 left-0 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:relative md:translate-x-0 z-30 transition-transform duration-300 ease-in-out bg-ffe-frost-30`}
            >
                <div className="h-full w-64 border-r ffe-border-grey-light shadow-lg md:shadow-none">
                    {/* Tittel for desktop sidebar */}
                    <div className="border-b ffe-border-grey-light hidden md:block">
                        <Heading3>Sbanky Meny</Heading3>
                    </div>
                    {/* Tittel og lukkeknapp for mobil sidebar */}
                    <div className="flex items-center justify-between border-b ffe-border-grey-light md:hidden">
                        <Heading3>Meny</Heading3>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-surface-primary-default-hover"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="">
                        <nav>
                            {/* Bruker den nye List-komponenten */}
                            <List itemSpacing="1">
                                {menuItems.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <List.Item key={item.id}>
                                            <Link
                                                to={item.path}
                                                onClick={() => {
                                                    onMenuItemClick?.(item.path);
                                                    if (isOpen && onClose) {
                                                        onClose();
                                                    }
                                                }}
                                                className={`w-full flex items-center gap-x-2 px-3 py-2 rounded no-underline cursor-pointer 
                                                            text-foreground-interactive-link hover:bg-surface-primary-default-hover
                                                            ${isActive 
                                                                ? 'bg-ffe-vann' // Beholder bg-ffe-vann for aktiv tilstand
                                                                : ''
                                                            }`}
                                            >
                                                {item.icon}
                                                {isActive ? (
                                                    <StrongText>{item.label}</StrongText>
                                                ) : (
                                                    <span className="text-sm">{item.label}</span>
                                                )}
                                            </Link>
                                        </List.Item>
                                    );
                                })}
                            </List>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
