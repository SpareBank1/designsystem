import React from 'react';

const Sidebar = ({ toc }) => (
    <div className="sb1ds-sidebar__wrapper">
        <div className="sb1ds-sidebar">
            <nav className="sb1ds-sidebar__menu">
                {toc}
            </nav>
        </div>
    </div>
);

export default Sidebar;
