import React, { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { examples } from '../../lib/esm';
import createExampleTree from './createExampleTree';

const NavContext = createContext();
const exampleTree = createExampleTree(examples);

export function useNavProvider() {
    const navContext = useContext(NavContext);
    if (navContext === undefined) {
        throw new Error('useNavProvider må ligge inni NavProvider');
    }
    return navContext;
}

export function NavProvider({ children }) {
    const [filter, setFilter] = useState('');
    const filteredTree = useMemo(
        () =>
            exampleTree.filteredTree(
                filter === ''
                    ? () => true
                    : d =>
                          d.value.key
                              .toLowerCase()
                              .includes(filter.toLowerCase()),
            ),
        [filter],
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
