import React from 'react';
import { Helmet } from 'react-helmet';
import useDarkColorSchemePreference from '../util/useDarkColorSchemePreference.js';
import { ToggleSwitch } from '@sb1/ffe-form-react';

export default function DarkmodeButton() {
    const { prefersDarkMode, toggleDarkMode } = useDarkColorSchemePreference();

    return (
        <>
            <Helmet>
                <body
                    className={
                        prefersDarkMode
                            ? 'sb1ds-body native regard-color-scheme-preference'
                            : 'sb1ds-body'
                    }
                />
            </Helmet>

            <ToggleSwitch
                onText="Mørk"
                offText="Lys"
                onChange={toggleDarkMode}
                checked={prefersDarkMode}
            />
        </>
    );
}
