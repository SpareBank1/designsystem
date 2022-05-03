import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import theme from 'prism-react-renderer/themes/vsDark';
import { InlineExpandButton } from '@sb1/ffe-buttons-react';
import {
    BackgroundColors,
    CodeEditor,
    DarkmodeButton,
    ExpandInfo,
    HamburgerButton,
    OverlayMenu,
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

export default function ViewExample({ exampleId, example }) {
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
        };
    };

    return (
        <>
            {showOverlayMenu && (
                <OverlayMenu
                    title={example.sourceFileName}
                    close={() => setShowOverlayMenu(false)}
                />
            )}
            <div
                className={
                    showOverlayMenu ? 'sb1ex-overlay--hidden' : 'sb1ex-overlay'
                }
            >
                <div className="sb1ex-theme-context-wrapper" style={bgColor}>
                    <header className="sb1ex-header">
                        <h1 className="sb1ex-header__headline">
                            {example.sourceFileName}
                        </h1>
                        <nav className="sb1ex-header__nav">
                            <InlineExpandButton
                                {...expandButtonProps(menuItem.INFO)}
                            >
                                Info
                            </InlineExpandButton>
                            <InlineExpandButton
                                {...expandButtonProps(menuItem.CODE)}
                            >
                                Kode
                            </InlineExpandButton>
                            <InlineExpandButton
                                {...expandButtonProps(menuItem.BG_COLOR)}
                            >
                                Bakgrunnsfarger
                            </InlineExpandButton>
                        </nav>
                        <DarkmodeButton />
                        <HamburgerButton
                            isOpen={false}
                            onToggle={() => setShowOverlayMenu(true)}
                        />
                    </header>
                    <LiveProvider
                        code={example.code}
                        scope={example.scope}
                        theme={theme}
                    >
                        {expandedMenuItem && (
                            <div className="sb1ex-expanded__container">
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
        </>
    );
}

ViewExample.propTypes = {
    exampleId: PropTypes.string,
    example: PropTypes.object,
};
