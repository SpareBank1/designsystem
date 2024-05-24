import React, { Component } from 'react';
// @ts-ignore
import autoBind from 'react-auto-bind';
import { InputField } from './InputField';
import { SuggestionListContainer } from './SuggestionListContainer';
import { Locale } from '../types';

export interface BaseSelectorProps<Suggestion> {
    suggestions: Suggestion[];
    renderSuggestion: (suggestion: Suggestion) => React.ReactNode;
    value: string;
    locale: Locale;
    shouldSelectHighlightedOnTab: boolean;
    shouldHideSuggestionsOnReset: boolean;
    shouldShowSuggestionsOnFocus?: boolean;
    onSuggestionSelect: (suggestion: Suggestion) => void;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    onClick?: () => void;
    onReset?: () => void;
    onFocus?: () => void;
    onSuggestionListChange?: (height: number) => void;
    renderNoMatches?: () => React.ReactNode;
    placeholder?: string;
    ariaInvalid?: boolean;
    suggestionsHeightMax?: number;
    id?: string;
    name?: string;
    readOnly?: boolean;
}

interface BaseSelectorState {
    showSuggestions: boolean;
    highlightedSuggestionIndex: number;
    suggestionListId: string;
}

export class BaseSelector<Suggestion> extends Component<
    BaseSelectorProps<Suggestion>,
    BaseSelectorState
> {
    private suggestionList?: SuggestionListContainer<Suggestion> | null;
    private input?: HTMLInputElement | null;

    constructor(props: BaseSelectorProps<Suggestion>) {
        super(props);
        autoBind(this);

        this.state = {
            showSuggestions: false,
            highlightedSuggestionIndex: -1,
            suggestionListId: 'suggestion-list',
        };
    }

    _onSuggestionListChange() {
        if (this.props.onSuggestionListChange) {
            setTimeout(() => {
                const suggestionListHeight = this.getSuggestionListHeight();
                if (typeof suggestionListHeight === 'number') {
                    this.props.onSuggestionListChange?.(suggestionListHeight);
                }
            });
        }
    }

    getSuggestionListHeight() {
        if (this.suggestionList) {
            return this.suggestionList.scrollbars?.getClientHeight();
        }
        return 0;
    }

    setFocus() {
        this.input?.focus();
    }

    getInputHeight() {
        if (this.input) {
            return this.input.getBoundingClientRect().height;
        }
        return 0;
    }

    onInputChange(val: string) {
        if (val !== this.props.value) {
            this.setState(
                { showSuggestions: true, highlightedSuggestionIndex: -1 },
                () => {
                    if (this.props.onChange) {
                        this.props.onChange(val);
                    }
                    this._onSuggestionListChange();
                },
            );
        }
    }

    onFocus() {
        const { shouldShowSuggestionsOnFocus = true, onFocus } = this.props;
        this.showOrHideSuggestions(shouldShowSuggestionsOnFocus, onFocus);
    }

    onBlur() {
        this.showOrHideSuggestions(false, this.props.onBlur);
    }

    onClick() {
        const { onClick } = this.props;
        this.showOrHideSuggestions(true, onClick);
    }

    onInputReset() {
        const shouldShowSuggestions = !this.props.shouldHideSuggestionsOnReset;
        this.showOrHideSuggestions(shouldShowSuggestions, this.props.onReset);
        setTimeout(this.setFocus);
    }

    showOrHideSuggestions(show: boolean, cb = () => {}) {
        const nextState = show
            ? { showSuggestions: show }
            : { showSuggestions: false, highlightedSuggestionIndex: -1 };
        this.setState(prevState => ({ ...prevState, ...nextState }), cb);
        this._onSuggestionListChange();
    }

    setNextHighlighted() {
        const { highlightedSuggestionIndex } = this.state;
        const { suggestions } = this.props;
        const nextHighlightedSuggestionIndex =
            highlightedSuggestionIndex === suggestions.length - 1
                ? 0
                : highlightedSuggestionIndex + 1;
        this.setState({
            highlightedSuggestionIndex: nextHighlightedSuggestionIndex,
        });

        if (nextHighlightedSuggestionIndex === 0) {
            this.suggestionList?.setScrollPosStart();
            return;
        }
        this.suggestionList?.setScrollPosNext();
    }

    setPreviousHighlighted() {
        const { highlightedSuggestionIndex } = this.state;
        const { suggestions } = this.props;
        const nextHighlightedSuggestionIndex =
            highlightedSuggestionIndex === 0
                ? suggestions.length - 1
                : highlightedSuggestionIndex - 1;
        this.setState({
            highlightedSuggestionIndex: nextHighlightedSuggestionIndex,
        });

        if (nextHighlightedSuggestionIndex === suggestions.length - 1) {
            this.suggestionList?.setScrollPosEnd();
            return;
        }
        this.suggestionList?.setScrollPosPrevious();
    }

    setFirstHighlighted() {
        this.setState({ highlightedSuggestionIndex: 0 });
        this.suggestionList?.setScrollPosStart();
    }

    setLastHighlighted() {
        this.setState({
            highlightedSuggestionIndex: this.props.suggestions.length - 1,
        });
        this.suggestionList?.setScrollPosEnd();
    }

    onInputKeyDown(event: React.KeyboardEvent) {
        const { showSuggestions, highlightedSuggestionIndex } = this.state;
        const {
            shouldSelectHighlightedOnTab,
            suggestions,
            onSuggestionSelect,
        } = this.props;
        const { key, altKey } = event;
        switch (key) {
            case 'ArrowDown':
                if (altKey && !showSuggestions) {
                    this.showOrHideSuggestions(true);
                    break;
                }
                if (showSuggestions) {
                    this.setNextHighlighted();
                    event.preventDefault();
                }
                break;
            case 'ArrowUp':
                if (altKey && showSuggestions) {
                    this.showOrHideSuggestions(false);
                    break;
                }
                if (showSuggestions) {
                    this.setPreviousHighlighted();
                    event.preventDefault();
                }
                break;
            case 'Escape':
                this.onInputReset();
                break;
            case 'Home':
                if (showSuggestions && suggestions.length !== 0) {
                    this.setFirstHighlighted();
                    event.preventDefault();
                }
                break;
            case 'End':
                if (showSuggestions && suggestions.length !== 0) {
                    this.setLastHighlighted();
                    event.preventDefault();
                }
                break;
            case 'Enter':
                if (showSuggestions) {
                    event.preventDefault();
                }
                onSuggestionSelect(suggestions[highlightedSuggestionIndex]);
                break;
            case 'Tab':
                if (showSuggestions && shouldSelectHighlightedOnTab) {
                    onSuggestionSelect(suggestions[highlightedSuggestionIndex]);
                }
        }
    }

    render() {
        const {
            value,
            placeholder = '',
            suggestionsHeightMax,
            ariaInvalid = false,
            id,
            name,
            suggestions,
            onSuggestionSelect,
            readOnly,
            locale,
            renderSuggestion,
            renderNoMatches,
        } = this.props;
        const {
            showSuggestions,
            highlightedSuggestionIndex,
            suggestionListId,
        } = this.state;
        return (
            <div className="ffe-base-selector ffe-input-group ffe-input-group--no-extra-margin">
                <InputField
                    inputFieldRef={input => {
                        this.input = input;
                    }}
                    value={value}
                    onChange={this.onInputChange}
                    onReset={this.onInputReset}
                    onKeyDown={this.onInputKeyDown}
                    isSuggestionsShowing={showSuggestions}
                    placeholder={placeholder}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    onClick={this.onClick}
                    highlightedIndex={highlightedSuggestionIndex}
                    suggestionListId={suggestionListId}
                    ariaInvalid={ariaInvalid}
                    id={id}
                    name={name}
                    readOnly={readOnly}
                    locale={locale}
                />
                {showSuggestions && (
                    <SuggestionListContainer<Suggestion>
                        id={suggestionListId}
                        ref={suggestionList => {
                            this.suggestionList = suggestionList;
                        }}
                        highlightedIndex={highlightedSuggestionIndex}
                        suggestions={suggestions}
                        heightMax={suggestionsHeightMax}
                        onSelect={onSuggestionSelect}
                        renderSuggestion={renderSuggestion}
                        renderNoMatches={renderNoMatches ?? (() => null)}
                    />
                )}
            </div>
        );
    }
}
