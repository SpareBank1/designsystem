import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import theme from 'prism-react-renderer/themes/vsDark';
import { withRouter } from 'react-router-dom';
import { HamburgerButton, Panels, Navigation } from '../components';

const ViewExample = ({ history, exampleId, example }) => {
    const [showOverlayMenu, setShowOverlayMenu] = useState(false);
    const [expandedPanelId, setExpandedPanelId] = useState(null);

    useEffect(
        () =>
            history.listen(() => {
                if (history.location.hash.startsWith('#toc_')) {
                    // most likely a click on an item of the inpage navigation in the overlay menu
                    return;
                }

                // hidde overlay and panels on navigation to new page
                setShowOverlayMenu(false);
                setExpandedPanelId(null);
            }),
        [history],
    );

    return (
        <LiveProvider code={example.code} scope={example.scope} theme={theme}>
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
    history: PropTypes.object.isRequired,
};

export default withRouter(ViewExample);
