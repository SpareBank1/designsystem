import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { themes } from 'prism-react-renderer';
import { HamburgerButton, Panels, Navigation } from '../components';
import { useLocation } from 'react-router-dom';
import { useThemeProvider } from '../context';

const ViewExample = ({ exampleId, example }) => {
    const [showOverlayMenu, setShowOverlayMenu] = useState(false);
    const [expandedPanelId, setExpandedPanelId] = useState(null);
    const location = useLocation();
    const context = useThemeProvider();

    useEffect(() => {
        if (location.hash.startsWith('#toc_')) {
            // most likely a click on an item of the inpage navigation in the overlay menu
            return;
        }

        // hidde overlay and panels on navigation to new page
        setShowOverlayMenu(false);
        setExpandedPanelId(null);
    }, [location]);

    return (
        <LiveProvider
            code={example.code}
            scope={example.scope}
            theme={
                context.colorScheme === 'light' ? themes.vsLight : themes.vsDark
            }
        >
            <main
                className={classNames({
                    'sb1ex-page': true,
                    'sb1ex-page--with-nav-overlay': showOverlayMenu,
                })}
            >
                <header className="sb1ex-header sb1ex-page__header">
                    <h1 className="sb1ex-header__headline">
                        {example.sourceFileName}
                    </h1>
                    <HamburgerButton
                        isOpen={showOverlayMenu}
                        onToggle={() => setShowOverlayMenu(prev => !prev)}
                    />
                </header>

                <div className="sb1ex-page__nav-overlay">
                    <Navigation focusable={showOverlayMenu} />
                </div>

                <div className="sb1ex-page__panels">
                    <Panels
                        {...{
                            exampleId,
                            example,
                            expandedPanelId,
                            setExpandedPanelId,
                        }}
                    />
                </div>

                <div className="sb1ex-page__main-content">
                    <LivePreview className="sb1ex-live__preview" />
                    <LiveError className="sb1ex-live__error" />
                </div>
            </main>
        </LiveProvider>
    );
};

ViewExample.propTypes = {
    exampleId: PropTypes.string.isRequired,
    example: PropTypes.object.isRequired,
};

export default ViewExample;
