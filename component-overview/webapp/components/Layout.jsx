import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { camel } from 'case';
import classNames from 'classnames';
import * as colors from '@sb1/ffe-core/lib/colors';
import { useThemeProvider } from '../context';

const setCSSBgColor = colorName => {
    if (document) {
        document.documentElement.style.setProperty(
            '--sb1ex-page-bg',
            `var(--ffe-farge-${colorName})`,
        );
    }
};

export default function Layout({ children }) {
    const context = useThemeProvider();

    useEffect(() => {
        setCSSBgColor(context.currentTheme);
    }, [context.currentTheme]);

    return (
        <>
            <Helmet>
                <body
                    className={classNames({
                        'sb1ex-body': true,
                        'ffe-body': true,
                        native: context.prefersDarkMode,
                        'regard-color-scheme-preference':
                            context.prefersDarkMode,
                    })}
                />
                <meta
                    name="theme-color"
                    content={colors[camel(`farge-${context.currentTheme}`)]}
                />
            </Helmet>
            {children}
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
