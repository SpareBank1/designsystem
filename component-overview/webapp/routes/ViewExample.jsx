import React, { useState } from 'react';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { InlineExpandButton } from '@sb1/ffe-buttons-react';
import PropTypes from 'prop-types';
import theme from 'prism-react-renderer/themes/vsDark';
import Header from '../components/Header';
import ExpandInfo from '../components/ExpandInfo';
import CodeEditor from '../components/CodeEditor';
import BackgroundColors from '../components/BackgroundColors';

export default function ViewExample({ exampleId, example }) {
    const [expandedMenuItem, setExpandedMenuItem] = useState(null);

    const setExpandedContent = () => {
        switch (expandedMenuItem) {
            case 'Kode':
                return <CodeEditor imports={example.sourceImports} />;

            case 'Info':
                return (
                    <ExpandInfo
                        id={exampleId}
                        filename={example.sourceFileName}
                        dependencies={example.dependencies}
                    />
                );

            case 'Bakgrunn':
                return <BackgroundColors />;
        }
    };
    return (
        <>
            <Header title={example.sourceFileName}>
                <nav>
                    <InlineExpandButton
                        aria-expanded={expandedMenuItem === 'Info'}
                        isExpanded={expandedMenuItem === 'Info'}
                        onClick={() =>
                            expandedMenuItem !== 'Info'
                                ? setExpandedMenuItem('Info')
                                : setExpandedMenuItem(null)
                        }
                    >
                        Info
                    </InlineExpandButton>
                    <InlineExpandButton
                        aria-expanded={expandedMenuItem === 'Kode'}
                        isExpanded={expandedMenuItem === 'Kode'}
                        onClick={() =>
                            expandedMenuItem !== 'Kode'
                                ? setExpandedMenuItem('Kode')
                                : setExpandedMenuItem(null)
                        }
                    >
                        Kode
                    </InlineExpandButton>
                    <InlineExpandButton
                        aria-expanded={expandedMenuItem === 'Bakgrunn'}
                        isExpanded={expandedMenuItem === 'Bakgrunn'}
                        onClick={() =>
                            expandedMenuItem !== 'Bakgrunn'
                                ? setExpandedMenuItem('Bakgrunn')
                                : setExpandedMenuItem(null)
                        }
                    >
                        Bakgrunnsfarger
                    </InlineExpandButton>
                </nav>
            </Header>

            <LiveProvider
                code={example.code}
                scope={example.scope}
                theme={theme}
            >
                {expandedMenuItem && (
                    <div className="sb1ex-expanded__container">
                        {setExpandedContent()}
                    </div>
                )}
                <LivePreview className="sb1ex-live__preview" />
                <LiveError className="sb1ex-live__error" />
            </LiveProvider>
        </>
    );
}

ViewExample.propTypes = {
    exampleId: PropTypes.string,
    example: PropTypes.object,
};
