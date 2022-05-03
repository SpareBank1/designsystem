import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import { ToggleSwitch } from '@sb1/ffe-form-react';
import { useThemeProvider } from '../context/ThemeContext.jsx';

export default function DarkmodeButton({ className }) {
    const context = useThemeProvider();

    return (
        <>
            <Helmet>
                <body
                    className={classNames({
                        'sb1ex-body': true,
                        native: context.prefersDarkMode,
                        'regard-color-scheme-preference':
                            context.prefersDarkMode,
                    })}
                />
            </Helmet>

            <ToggleSwitch
                onText="Mørk"
                offText="Lys"
                onChange={context.toggleDarkMode}
                checked={context.prefersDarkMode}
                className={className}
            />
        </>
    );
}

DarkmodeButton.propTypes = {
    className: PropTypes.string,
};
