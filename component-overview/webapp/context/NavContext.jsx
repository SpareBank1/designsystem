import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import createExampleTree from '../util/createExampleTree';
import { examples } from '../../lib/esm';

const NavContext = createContext();

export function useNavProvider() {
    const navContext = React.useContext(NavContext);
    if (navContext === undefined) {
        throw new Error('useNavProvider må ligge inni NavProvider');
    }
    return navContext;
}

export function NavProvider({ children }) {
    const [filter, setFilter] = useState('');
    const exampleTree = createExampleTree(examples);
    const filteredTree = exampleTree.filteredTree(
        filter === ''
            ? () => true
            : d => d.value.key.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
        <NavContext.Provider
            value={{ filter, setFilter, exampleTree, filteredTree }}
        >
            {children}
        </NavContext.Provider>
    );
}

NavProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
