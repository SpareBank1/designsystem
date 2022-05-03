import React from 'react';
import { useThemeProvider } from '../context/ThemeContext';
import Dropdown from '@sb1/ffe-dropdown-react';
import { Label } from '@sb1/ffe-form-react';

export default function BackgroundColors() {
    const context = useThemeProvider();
    const backgroundColors = context.prefersDarkMode
        ? context.allDarkThemes
        : context.allLightThemes;
    return (
        <div className="sb1ex-background-colors-select">
            <Label htmlFor="background-dropdown">Velg bakgrunnsfarge</Label>
            <Dropdown
                id="background-dropdown"
                onChange={e => {
                    context.setTheme(e.target.value);
                }}
                value={context.chosenTheme}
            >
                {backgroundColors.map(color => (
                    <option key={`color-${color}`} value={color}>
                        {color}
                    </option>
                ))}
            </Dropdown>
        </div>
    );
}
