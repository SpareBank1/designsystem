import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useTheming from './useTheming';

const ThemeContext = createContext();

export function useThemeProvider() {
    const themeContext = useContext(ThemeContext);
    if (themeContext === undefined) {
        throw new Error('useThemeProvider må ligge inni ThemeProvider');
    }
    return themeContext;
}

export function ThemeProvider({ children }) {
    const provisions = useTheming();

    return (
        <ThemeContext.Provider value={provisions}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
