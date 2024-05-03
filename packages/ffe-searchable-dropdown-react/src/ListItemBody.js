import React from 'react';
import { object, arrayOf, string, bool } from 'prop-types';
import classnames from 'classnames';

import { MicroText } from '@sb1/ffe-core-react';

const ListItemBody = ({ item, dropdownAttributes, isHighlighted }) => {
    const [titleAttribute, ...restAttributes] = dropdownAttributes;
    const title = item[titleAttribute];
    const rest = restAttributes.map(attribute => (
        <MicroText key={attribute}>{item[attribute]}</MicroText>
    ));
    return (
        <div
            className={classnames('ffe-searchable-dropdown__list-item-body', {
                'ffe-searchable-dropdown__list-item-body--highlighted':
                    isHighlighted,
            })}
        >
            {title}
            {!!rest.length && (
                <div className="ffe-searchable-dropdown__list-item-body-details">
                    {rest}
                </div>
            )}
        </div>
    );
};

ListItemBody.propTypes = {
    item: object.isRequired,
    dropdownAttributes: arrayOf(string).isRequired,
    isHighlighted: bool.isRequired,
};

export default ListItemBody;
