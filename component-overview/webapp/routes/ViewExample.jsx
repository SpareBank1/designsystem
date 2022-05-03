import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import theme from 'prism-react-renderer/themes/vsDark';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { InlineExpandButton } from '@sb1/ffe-buttons-react';
import {
    BackgroundColors,
    CodeEditor,
    DarkmodeButton,
    ExpandInfo,
    HamburgerButton,
    Navigation,
} from '../components';
import { useThemeProvider } from '../context';

const menuItem = {
    INFO: 'i',
    CODE: 'c',
    BG_COLOR: 'b',
};

const renderExpandedContent = (menuItemKey, { exampleId, example }) => {
    switch (menuItemKey) {
        case menuItem.INFO:
            return (
                <ExpandInfo
                    id={exampleId}
                    filename={example.sourceFileName}
                    dependencies={example.dependencies}
                />
            );

        case menuItem.CODE:
            return <CodeEditor imports={example.sourceImports} />;

        case menuItem.BG_COLOR:
            return <BackgroundColors />;
    }
};

const ViewExample = ({ history, exampleId, example }) => {
    const [expandedMenuItem, setExpandedMenuItem] = useState(null);
    const [showOverlayMenu, setShowOverlayMenu] = useState(false);
    const context = useThemeProvider();

    const bgColor = {
        backgroundColor: `var(--ffe-farge-${context.chosenTheme}`,
    };

    const expandButtonProps = menuItemKey => {
        const isExpanded = expandedMenuItem === menuItemKey;

        return {
            isExpanded,
            'aria-expanded': isExpanded,
            onClick: () => setExpandedMenuItem(isExpanded ? null : menuItemKey),
            className: 'sb1ex-example-page__expand-menu-button',
        };
    };

    useEffect(
        () =>
            history.listen(() => {
                setExpandedMenuItem(null);
                setShowOverlayMenu(false);
            }),
        [history],
    );

    return (
        <div
            className={classNames({
                'sb1ex-example-page': true,
                'sb1ex-example-page--with-nav-overlay': showOverlayMenu,
                'sb1ex-example-page--with-expanded-item': expandedMenuItem,
            })}
            style={bgColor}
        >
            <header className="sb1ex-header">
                <h1 className="sb1ex-header__headline">
                    {example.sourceFileName}
                </h1>
                <nav className="sb1ex-header__nav">
                    <InlineExpandButton {...expandButtonProps(menuItem.INFO)}>
                        Info
                    </InlineExpandButton>
                    <InlineExpandButton {...expandButtonProps(menuItem.CODE)}>
                        Kode
                    </InlineExpandButton>
                    <InlineExpandButton
                        {...expandButtonProps(menuItem.BG_COLOR)}
                    >
                        Bakgrunnsfarger
                    </InlineExpandButton>
                </nav>
                <DarkmodeButton className="sb1ex-example-page__darkmode-button" />
                <HamburgerButton
                    isOpen={showOverlayMenu}
                    onToggle={() => setShowOverlayMenu(prev => !prev)}
                />
            </header>

            <div className="sb1ex-example-page__nav-overlay">
                <Navigation />
            </div>

            <div className="sb1ex-example-page__main-content">
                <LiveProvider
                    code={example.code}
                    scope={example.scope}
                    theme={theme}
                >
                    {expandedMenuItem && (
                        <div className="sb1ex-example-page__expanded-content">
                            {renderExpandedContent(expandedMenuItem, {
                                exampleId,
                                example,
                            })}
                        </div>
                    )}
                    <LivePreview className="sb1ex-live__preview" />
                    <LiveError className="sb1ex-live__error" />
                </LiveProvider>
            </div>
        </div>
    );
};

ViewExample.propTypes = {
    exampleId: PropTypes.string.isRequired,
    example: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(ViewExample);
