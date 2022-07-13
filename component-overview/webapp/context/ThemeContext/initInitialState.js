import {
    defaultLightTheme,
    defaultDarkTheme,
    allLightThemes,
    allDarkThemes,
} from './themes';

export default function initInitialState(prefersDarkMode) {
    return prefersDarkMode
        ? {
              currentTheme: defaultDarkTheme,
              colorScheme: 'dark',
              themes: allDarkThemes,
              lastSchemesTheme: defaultLightTheme,
              prefersDarkMode,
          }
        : {
              currentTheme: defaultLightTheme,
              colorScheme: 'light',
              themes: allLightThemes,
              lastSchemesTheme: defaultDarkTheme,
              prefersDarkMode,
          };
}
