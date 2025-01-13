import React from 'react';
import { Heading2 } from '@sb1/ffe-core-react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import './sidebarMenu.less';

interface LinkProps {
    href: string;
    children: React.ReactNode;
}

const Link = ({ href, children }: LinkProps) => (
    <a href={href} className="sb1-sidebar__link">
        {children}
    </a>
);

interface SidebarMenuProps {
    className?: string;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ className = '' }) => {
    const menuItems = [
        { id: 'buttons', label: 'Buttons', path: '/buttons' },
        { id: 'grid', label: 'Grid System', path: '/grid' },
        { id: 'typography', label: 'Typography', path: '/typography' },
        { id: 'accordion', label: 'Accordion', path: '/accordion' },
        { id: 'messages', label: 'Messages', path: '/messages' },
        { id: 'forms', label: 'Form Elements', path: '/forms' },
        { id: 'modals', label: 'Modal Dialogs', path: '/modals' },
        { id: 'tables', label: 'Tables', path: '/tables' },
    ];

    return (
        <aside className={`sb1-sidebar ${className}`}>
            <Grid>
                <GridRow>
                    <GridCol sm={12}>
                        <Heading2 className="sb1-sidebar__title">
                            Component Examples
                        </Heading2>
                        <nav className="sb1-sidebar__nav">
                            <ul className="sb1-sidebar__list">
                                {menuItems.map(({ id, label, path }) => (
                                    <li key={id} className="sb1-sidebar__item">
                                        <Link href={path}>{label}</Link>
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
