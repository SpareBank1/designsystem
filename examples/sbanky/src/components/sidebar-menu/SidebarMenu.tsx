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
} from 'lucide-react';
import './sidebarMenu.less';

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
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
    className = '',
    activePath,
    title = 'Examples',
}) => {
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
        <aside className={cl('sb1-sidebar', className)}>
            <Grid>
                <GridRow>
                    <GridCol sm={12}>
                        <Heading4 className="sb1-sidebar__title">
                            {title}
                        </Heading4>
                        <nav
                            className="sb1-sidebar__nav"
                            aria-label="Component navigation"
                        >
                            <ul className="sb1-sidebar__list" role="list">
                                {menuItems.map(({ id, label, path, icon }) => (
                                    <li
                                        key={id}
                                        className={cl('sb1-sidebar__item', {
                                            'sb1-sidebar__item--active':
                                                path === activePath,
                                        })}
                                    >
                                        <FFELink
                                            href={path}
                                            underline={false}
                                            variant="primary"
                                            className="sb1-sidebar__link"
                                            aria-current={
                                                path === activePath
                                                    ? 'page'
                                                    : undefined
                                            }
                                        >
                                            {icon}
                                            {label}
                                        </FFELink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </GridCol>
                </GridRow>
            </Grid>
        </aside>
    );
};

export default SidebarMenu;
