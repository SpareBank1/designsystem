import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const allThemes = [
    'frost-30',
    'sand',
    'sand-70',
    'sand-30',
    'syrin-70',
    'syrin-30',
    'vann',
    'vann-30',
    'fjell',
    'hvit',
];

const ThemeContext = createContext();

function useThemeProvider() {
    const themeContext = React.useContext(ThemeContext);
    if (themeContext === undefined) {
        throw new Error('useThemeProvider må ligge inni ThemeProvider');
    }
    return themeContext;
}

function ThemeProvider({ children }) {
    const [chosenTheme, setChosenTheme] = useState('syrin-30');
    const setTheme = bgcolor => setChosenTheme(bgcolor);
    const bgColor = { backgroundColor: `var(--ffe-farge-${chosenTheme}` };
    return (
        <ThemeContext.Provider value={{ allThemes, chosenTheme, setTheme }}>
            <div className="sb1ex-wrapper" style={bgColor}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ThemeProvider, useThemeProvider };
