import React from 'react';

interface SuggestionListStatusBarProps {
    onDone: () => void;
    renderSelectionStatus: () => React.ReactNode;
    labelDoneButton: string;
    style: React.ComponentPropsWithoutRef<'div'>['style'];
}

export const SuggestionListStatusBar: React.FC<
    SuggestionListStatusBarProps
> = ({ onDone, renderSelectionStatus, labelDoneButton, style }) => {
    const onKeyDown = (evt: React.KeyboardEvent) => {
        if ((evt.key === 'Tab' && !evt.shiftKey) || evt.key === 'Enter') {
            onDone();
        }
    };

    return (
        <div
            className="ffe-account-selector-multi__dropdown-statusbar"
            style={style}
        >
            <div className="ffe-account-selector-multi__selection-status">
                {renderSelectionStatus()}
            </div>
            <button
                type="button"
                className="ffe-button ffe-button--primary"
                tabIndex={0}
                onMouseDown={onDone}
                onKeyDown={onKeyDown}
            >
                {labelDoneButton}
            </button>
        </div>
    );
};
