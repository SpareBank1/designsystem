import {
    CellMeasurer,
    CellMeasurerCache,
    List as VirtualizedList,
    AutoSizer,
} from 'react-virtualized';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import {
    arrayOf,
    any,
    bool,
    func,
    number,
    object,
    oneOf,
    shape,
    string,
} from 'prop-types';

import { locales } from './translations';
import ListItemContainer from './ListItemContainer';
import NoMatch from './NoMatch';

export default class HighCapacityResults extends React.PureComponent {
    state = {
        optionHeight: 40,
    };

    constructor(props, context) {
        super(props, context);

        this._cache = new CellMeasurerCache({
            fixedWidth: true,
            minHeight: 10,
        });

        this.rowRenderer = this.rowRenderer.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        this.listRef = React.createRef();
    }

    handleScroll = event => {
        const { scrollTop, scrollLeft } = event.target;
        const { Grid } = this.listRef.current;
        Grid.handleScrollEvent({ scrollTop, scrollLeft });
    };

    componentDidMount() {
        requestAnimationFrame(() => {
            const firstOption = this.listRef.current?.Grid?._scrollingContainer?.querySelector(
                '[role="option"]',
            );

            if (firstOption?.offsetHeight) {
                this.setState({
                    ...this.state,
                    optionHeight: firstOption.offsetHeight,
                });
            }
        });
    }

    render() {
        const {
            isNoMatch,
            noMatch,
            listToRender,
            noMatchMessageId,
        } = this.props;
        const { optionHeight } = this.state;

        const maxHeight = 335;
        const heightOfAllOptions =
            optionHeight * listToRender.length +
            (isNoMatch && noMatch.text ? optionHeight : 0);
        const height =
            heightOfAllOptions > maxHeight ? maxHeight : heightOfAllOptions;

        return (
            <AutoSizer disableHeight={true}>
                {({ width }) => {
                    return (
                        <Scrollbars
                            onScroll={this.handleScroll}
                            style={{ height, width }}
                        >
                            {isNoMatch && (
                                <NoMatch
                                    noMatch={noMatch}
                                    noMatchMessageId={noMatchMessageId}
                                    listToRender={listToRender}
                                />
                            )}
                            <VirtualizedList
                                ref={this.listRef}
                                deferredMeasurementCache={this._cache}
                                height={height}
                                overscanRowCount={10}
                                // Required to make Scrollbars work
                                style={{
                                    overflowX: false,
                                    overflowY: false,
                                }}
                                rowCount={listToRender.length}
                                rowHeight={this._cache.rowHeight}
                                rowRenderer={this.rowRenderer}
                                width={width}
                            />
                        </Scrollbars>
                    );
                }}
            </AutoSizer>
        );
    }

    rowRenderer({ index, parent, style }) {
        const {
            ListItemBodyElement,
            listToRender,
            highlightedIndex,
            dropdownAttributes,
            locale,
            refs,
            onChange,
        } = this.props;
        const item = listToRender[index];
        const itemKey = Object.values(item).join('-');

        return (
            <CellMeasurer
                cache={this._cache}
                columnIndex={0}
                key={itemKey}
                rowIndex={index}
                parent={parent}
            >
                {({ registerChild }) => (
                    <div
                        ref={registerChild}
                        style={style}
                        className="ffe-searchable-dropdown__list-item-high-capacity-container"
                    >
                        <ListItemContainer
                            key={itemKey}
                            ref={refs[index]}
                            isHighlighted={highlightedIndex === index}
                            onClick={() => {
                                onChange(item);
                            }}
                            item={item}
                        >
                            {props => {
                                return (
                                    <ListItemBodyElement
                                        {...props}
                                        dropdownAttributes={dropdownAttributes}
                                        locale={locale}
                                    />
                                );
                            }}
                        </ListItemContainer>
                    </div>
                )}
            </CellMeasurer>
        );
    }
}

HighCapacityResults.propTypes = {
    listToRender: arrayOf(object).isRequired,
    noMatch: shape({
        text: string,
        dropdownList: arrayOf(object),
    }),
    noMatchMessageId: string,
    ListItemBodyElement: func,
    highlightedIndex: number,
    dropdownAttributes: arrayOf(string).isRequired,
    locale: oneOf(Object.values(locales)).isRequired,
    refs: arrayOf(any).isRequired,
    onChange: func.isRequired,
    isNoMatch: bool.isRequired,
};
