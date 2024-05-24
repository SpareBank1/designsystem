import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { SuggestionList } from './SuggestionList';

export interface SuggestionListContainerProps<Suggestion> {
    highlightedIndex: number;
    heightMax?: number;
    autoHeight?: boolean;
    suggestions: Suggestion[];
    renderSuggestion: (suggestion: Suggestion) => React.ReactNode;
    renderNoMatches: () => React.ReactNode;
    onSelect: (suggestion: Suggestion) => void;
    id: string;
}

export class SuggestionListContainer<Suggestion> extends React.Component<
    SuggestionListContainerProps<Suggestion>
> {
    private highlightedSuggestionHeight?: number;
    public scrollbars?: Scrollbars;

    constructor(props: SuggestionListContainerProps<Suggestion>) {
        super(props);
        this.refHighlightedSuggestion =
            this.refHighlightedSuggestion.bind(this);
    }

    refHighlightedSuggestion(suggestionEl: HTMLLIElement | null) {
        this.highlightedSuggestionHeight = suggestionEl?.clientHeight;
    }

    _setScrollPos(pos: number) {
        this.scrollbars?.scrollTop(pos);
    }

    setScrollPosStart() {
        this._setScrollPos(0);
    }

    setScrollPosEnd() {
        if (this.scrollbars) {
            this._setScrollPos(this.scrollbars.getScrollHeight());
        }
    }

    setScrollPosNext() {
        const { highlightedIndex } = this.props;
        if (typeof this.highlightedSuggestionHeight === 'number') {
            this._setScrollPos(
                highlightedIndex * this.highlightedSuggestionHeight,
            );
        }
    }

    setScrollPosPrevious() {
        const { highlightedIndex } = this.props;
        if (typeof this.highlightedSuggestionHeight === 'number') {
            this._setScrollPos(
                highlightedIndex * this.highlightedSuggestionHeight -
                    this.highlightedSuggestionHeight,
            );
        }
    }

    render() {
        const {
            heightMax = 300,
            autoHeight = true,
            suggestions,
            renderSuggestion,
            renderNoMatches,
            highlightedIndex,
            onSelect,
            id,
        } = this.props;
        return (
            <div className="ffe-base-selector__suggestion-container">
                <Scrollbars
                    autoHeight={autoHeight}
                    autoHeightMax={heightMax}
                    ref={scrollbars => {
                        if (scrollbars) {
                            this.scrollbars = scrollbars;
                        }
                    }}
                >
                    <SuggestionList
                        refHighlightedSuggestion={this.refHighlightedSuggestion}
                        suggestions={suggestions}
                        renderSuggestion={renderSuggestion}
                        renderNoMatches={renderNoMatches}
                        highlightedIndex={highlightedIndex}
                        onSelect={onSelect}
                        id={id}
                    />
                </Scrollbars>
            </div>
        );
    }
}
