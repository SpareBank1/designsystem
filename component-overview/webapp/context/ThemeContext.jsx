import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import useDarkColorSchemePreference from '../util/useDarkColorSchemePreference';

const allLightThemes = [
    'frost-30',
    'sand-30',
    'sand-70',
    'syrin-30',
    'syrin-70',
    'hvit',
];
const allDarkThemes = ['svart', 'natt', 'koksgraa'];

const ThemeContext = createContext();

function useThemeProvider() {
    const themeContext = React.useContext(ThemeContext);
    if (themeContext === undefined) {
        throw new Error('useThemeProvider må ligge inni ThemeProvider');
    }
    return themeContext;
}

function ThemeProvider({ children }) {
    const [chosenDarkTheme, setChosenDarkTheme] = useState('svart');
    const [chosenLightTheme, setChosenLightTheme] = useState('syrin-30');
    const { prefersDarkMode, toggleDarkMode } = useDarkColorSchemePreference();
    const setTheme = bgcolor =>
        prefersDarkMode
            ? setChosenDarkTheme(bgcolor)
            : setChosenLightTheme(bgcolor);
    const chosenTheme = prefersDarkMode ? chosenDarkTheme : chosenLightTheme;

    return (
        <ThemeContext.Provider
            value={{
                allDarkThemes,
                allLightThemes,
                setTheme,
                chosenTheme,
                prefersDarkMode,
                toggleDarkMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ThemeProvider, useThemeProvider };
