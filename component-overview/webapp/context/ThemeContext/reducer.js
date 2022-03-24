import { allLightThemes, allDarkThemes } from './themes';

const toggleDarkModeReducer = state => {
    const nextPrefersDarkMode = !state.prefersDarkMode;
    let nextColorScheme, nextThemes;

    if (nextPrefersDarkMode) {
        nextColorScheme = 'dark';
        nextThemes = allDarkThemes;
    } else {
        nextColorScheme = 'light';
        nextThemes = allLightThemes;
    }

    return {
        ...state,
        currentTheme: state.lastSchemesTheme,
        lastSchemesTheme: state.currentTheme,
        colorScheme: nextColorScheme,
        themes: nextThemes,
        prefersDarkMode: nextPrefersDarkMode,
    };
};

const setThemeReducer = (state, action) => {
    return {
        ...state,
        currentTheme: action.payload,
    };
};

export default function reducer(state, action) {
    switch (action.type) {
        case 'setTheme':
            return setThemeReducer(state, action);

        case 'toggleDarkMode':
            return toggleDarkModeReducer(state, action);

        default:
            return state;
    }
}
