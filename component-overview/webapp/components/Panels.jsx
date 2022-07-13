import React from 'react';
import PropTypes from 'prop-types';
import { InlineExpandButton } from '@sb1/ffe-buttons-react';
import CodeEditorPanel from './CodeEditorPanel';
import ThemingEditorPanel from './ThemingEditorPanel';

const panelId = {
    CODE_EDITOR: 'c',
    THEMING_EDITOR: 't',
};

const renderPanel = (id, { exampleId, example }) => {
    switch (id) {
        case panelId.CODE_EDITOR:
            return <CodeEditorPanel {...{ exampleId, example }} />;

        case panelId.THEMING_EDITOR:
            return <ThemingEditorPanel />;
    }
};

export default function Panels({
    exampleId,
    example,
    expandedPanelId,
    setExpandedPanelId,
}) {
    const expandButtonProps = id => {
        const isExpanded = expandedPanelId === id;

        return {
            isExpanded,
            'aria-expanded': isExpanded,
            onClick: () => setExpandedPanelId(isExpanded ? null : id),
            className: 'sb1ex-page__expand-menu-button',
        };
    };

    return (
        <div className="sb1ex-editor-panels">
            <nav className="sb1ex-editor-panels__expand-buttons">
                <InlineExpandButton {...expandButtonProps(panelId.CODE_EDITOR)}>
                    Kode
                </InlineExpandButton>
                <InlineExpandButton
                    {...expandButtonProps(panelId.THEMING_EDITOR)}
                >
                    Farge
                </InlineExpandButton>
            </nav>
            {expandedPanelId && (
                <div className="sb1ex-editor-panels__expanded-content">
                    {renderPanel(expandedPanelId, {
                        exampleId,
                        example,
                    })}
                </div>
            )}
        </div>
    );
}

Panels.propTypes = {
    exampleId: PropTypes.string.isRequired,
    example: PropTypes.object.isRequired,
    expandedPanelId: PropTypes.string,
    setExpandedPanelId: PropTypes.func,
};
