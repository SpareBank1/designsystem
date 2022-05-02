import React from 'react';
import { Helmet } from 'react-helmet';
import { ToggleSwitch } from '@sb1/ffe-form-react';
import { useThemeProvider } from '../context/ThemeContext.jsx';

export default function DarkmodeButton() {
    const context = useThemeProvider();

    return (
        <>
            <Helmet>
                <body
                    className={
                        context.prefersDarkMode
                            ? 'sb1ds-body native regard-color-scheme-preference'
                            : 'sb1ds-body'
                    }
                />
            </Helmet>

            <ToggleSwitch
                onText="Mørk"
                offText="Lys"
                onChange={context.toggleDarkMode}
                checked={context.prefersDarkMode}
            />
        </>
    );
}
