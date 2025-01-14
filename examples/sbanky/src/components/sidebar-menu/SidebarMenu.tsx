// src/components/sidebar-menu/SidebarMenu.tsx
import React from 'react';
import { Heading4 } from '@sb1/ffe-core-react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { FFELink } from '../../alpha-ffe/ffeLink';
import cl from 'classnames';
import {
    LayoutGrid,
    Type,
    ChevronDown,
    MessageSquare,
    FormInput,
    Monitor,
    Table2,
    LayoutIcon,
    X,
    Menu,
} from 'lucide-react';

interface MenuItem {
    id: string;
    label: string;
    path: string;
    icon: React.ReactNode;
}

interface SidebarMenuProps {
    className?: string;
    /**
     * Current active path
     */
    activePath?: string;
    /**
     * Optional title for the sidebar
     */
    title?: string;
    /**
     * Whether the sidebar is open in mobile view
     */
    isOpen?: boolean;
    /**
     * Callback when the close button is clicked in mobile view
     */
    onClose?: () => void;
    /**
     * Callback when the menu button is clicked in mobile view
     */
    onOpen?: () => void;
}

export const SidebarMenu = ({
    className = '',
    activePath,
    title = 'Examples',
    isOpen = false,
    onClose,
    onOpen,
}: SidebarMenuProps) => {
    const menuItems: MenuItem[] = [
        {
            id: 'buttons',
            label: 'Buttons',
            path: '/buttons',
            icon: <LayoutIcon size={18} />,
        },
        {
            id: 'grid',
            label: 'Grid System',
            path: '/grid',
            icon: <LayoutGrid size={18} />,
        },
        {
            id: 'typography',
            label: 'Typography',
            path: '/typography',
            icon: <Type size={18} />,
        },
        {
            id: 'accordion',
            label: 'Accordion',
            path: '/accordion',
            icon: <ChevronDown size={18} />,
        },
        {
            id: 'messages',
            label: 'Messages',
            path: '/messages',
            icon: <MessageSquare size={18} />,
        },
        {
            id: 'forms',
            label: 'Form Elements',
            path: '/forms',
            icon: <FormInput size={18} />,
        },
        {
            id: 'modals',
            label: 'Modal Dialogs',
            path: '/modals',
            icon: <Monitor size={18} />,
        },
        {
            id: 'tables',
            label: 'Tables',
            path: '/tables',
            icon: <Table2 size={18} />,
        },
    ];

    return (
        <>
            {/* Mobile menu button */}
            <button
                type="button"
                onClick={onOpen}
                className={cl(
                    'md:hidden fixed top-4 right-4 z-40 p-2 rounded-md',
                    'bg-white dark:bg-gray-800',
                    'border border-gray-200 dark:border-gray-700',
                    'text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
                )}
                aria-label="Open menu"
            >
                <Menu size={24} />
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 md:hidden"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={cl(
                    'fixed md:sticky top-0 z-50 h-screen w-full md:w-auto',
                    'bg-white dark:bg-gray-900',
                    'border-r border-gray-200 dark:border-gray-800',
                    'transition-transform duration-300 ease-in-out',
                    'md:translate-x-0',
                    {
                        'translate-x-0': isOpen,
                        '-translate-x-full': !isOpen,
                    },
                    className,
                )}
            >
                <Grid className="h-full">
                    <GridRow>
                        <GridCol sm={12}>
                            <div className="flex items-center justify-between p-4">
                                <Heading4 className="text-gray-900 dark:text-gray-100">
                                    {title}
                                </Heading4>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className={cl(
                                        'md:hidden p-2 rounded-md',
                                        'text-gray-500 hover:text-gray-600',
                                        'dark:text-gray-400 dark:hover:text-gray-300',
                                    )}
                                    aria-label="Close menu"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <nav
                                className="mt-2 px-2"
                                aria-label="Component navigation"
                            >
                                <ul className="space-y-1" role="list">
                                    {menuItems.map(
                                        ({ id, label, path, icon }) => (
                                            <li
                                                key={id}
                                                className={cl(
                                                    'rounded-md',
                                                    path === activePath &&
                                                        'bg-blue-50 dark:bg-blue-900/20',
                                                )}
                                            >
                                                <FFELink
                                                    href={path}
                                                    underline={false}
                                                    variant="primary"
                                                    className={cl(
                                                        'flex items-center gap-3 px-3 py-2 rounded-md',
                                                        'transition-colors duration-200',
                                                        'hover:bg-gray-100 dark:hover:bg-gray-800',
                                                        path === activePath &&
                                                            'text-blue-600 dark:text-blue-400',
                                                    )}
                                                    aria-current={
                                                        path === activePath
                                                            ? 'page'
                                                            : undefined
                                                    }
                                                    onClick={() => {
                                                        if (
                                                            window.innerWidth <
                                                            768
                                                        ) {
                                                            onClose?.();
                                                        }
                                                    }}
                                                >
                                                    <span className="opacity-75">
                                                        {icon}
                                                    </span>
                                                    <span>{label}</span>
                                                </FFELink>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </nav>
                        </GridCol>
                    </GridRow>
                </Grid>
            </aside>
        </>
    );
};
