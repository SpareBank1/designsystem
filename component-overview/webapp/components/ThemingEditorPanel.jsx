import React from 'react';
import { useThemeProvider } from '../context/ThemeContext';
import { Label, ToggleSwitch } from '@sb1/ffe-form-react';
import Dropdown from '@sb1/ffe-dropdown-react';

export default function ThemingEditorPanel() {
    const context = useThemeProvider();

    return (
        <div className="sb1ex-theme-editor-panel">
            <div>
                <ToggleSwitch
                    onText="Mørk"
                    offText="Lys"
                    onChange={context.toggleDarkMode}
                    checked={context.prefersDarkMode}
                >
                    Fargemodus
                </ToggleSwitch>

                <Label htmlFor="background-dropdown">Bakgrunnsfarge</Label>
                <Dropdown
                    id="background-dropdown"
                    onChange={e => {
                        context.setTheme(e.target.value);
                    }}
                    value={context.currentTheme}
                >
                    {context.themes.map(color => (
                        <option key={`color-${color}`} value={color}>
                            {color}
                        </option>
                    ))}
                </Dropdown>
            </div>
        </div>
    );
}
