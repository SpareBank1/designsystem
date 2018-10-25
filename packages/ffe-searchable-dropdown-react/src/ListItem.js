import React from 'react';
import { array, number, bool, object, func } from 'prop-types';
import classNames from 'classnames';

const ListItem = ({
    dropdownAttributes,
    id,
    isHighlighted,
    item,
    onSelect,
    renderElement,
    refHighlightedListItem,
    dark,
}) => {
    return (
        <li
            ref={itemRef => {
                if (itemRef && isHighlighted) {
                    refHighlightedListItem(itemRef);
                }
            }}
            role="option"
            aria-selected={isHighlighted}
            id={id}
            onMouseDown={e => {
                e.preventDefault();
                onSelect(item);
            }}
            className={classNames('ffe-searchable-dropdown__item', {
                'ffe-searchable-dropdown--dark__item': dark,
                'ffe-searchable-dropdown__item--highlighted': isHighlighted,
                'ffe-searchable-dropdown--dark__item--highlighted': isHighlighted,
            })}
            tabIndex={-1}
        >
            {renderElement ? (
                renderElement(item)
            ) : (
                <div>
                    <div
                        className={classNames(
                            'ffe-searchable-dropdown__item--header',
                            {
                                'ffe-searchable-dropdown--dark__item--header': dark,
                            },
                        )}
                    >
                        {item[dropdownAttributes[0]]}
                    </div>
                    {dropdownAttributes.length > 1 && (
                        <div
                            className={classNames(
                                'ffe-searchable-dropdown__item--details',
                                {
                                    'ffe-searchable-dropdown--dark__item--details': dark,
                                },
                            )}
                        >
                            {item[dropdownAttributes[1]]}
                        </div>
                    )}
                </div>
            )}
        </li>
    );
};

ListItem.propTypes = {
    dropdownAttributes: array,
    id: number.isRequired,
    isHighlighted: bool,
    item: object.isRequired,
    onSelect: func.isRequired,
    renderElement: func,
    refHighlightedListItem: func.isRequired,
    /** Dark variant */
    dark: bool,
};

ListItem.defaultProps = {
    dark: false,
};

export default ListItem;
