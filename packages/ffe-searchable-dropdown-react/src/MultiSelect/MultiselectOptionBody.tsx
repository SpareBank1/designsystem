import React from 'react';
import classnames from 'classnames';
import { SmallText } from '@sb1/ffe-core-react';
import { Icon } from '@sb1/ffe-icons-react';

interface MultiselectOptionBodyProps<Item extends Record<string, any>> {
    item: Item;
    dropdownAttributes: (keyof Item)[];
    isHighlighted: boolean;
}

const checkIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPgogICAgPHBhdGgKICAgICAgICBkPSJtMzgyLTM2Mi4xMzEgMzM0LjY5Ni0zMzQuNjk1UTczMC4zNy03MTAuNSA3NDguNzYxLTcxMC41dDMyLjA2NSAxMy42NzRRNzk0LjUtNjgzLjE1MiA3OTQuNS02NjQuMzhxMCAxOC43NzEtMTMuNjc0IDMyLjQ0NUw0MTQuMDY1LTI2NC40MTNRNDAwLjM5MS0yNTAuNzM5IDM4Mi0yNTAuNzM5dC0zMi4wNjUtMTMuNjc0TDE3OC40MTMtNDM1LjkzNXEtMTMuNjc0LTEzLjY3NC0xMy4yOTQtMzIuNDQ1LjM4MS0xOC43NzIgMTQuMDU1LTMyLjQ0NlQyMTEuNjItNTE0LjVxMTguNzcxIDAgMzIuNDQ1IDEzLjY3NEwzODItMzYyLjEzMVoiIC8+Cjwvc3ZnPg==';

export function MultiselectOptionBody<Item extends Record<string, any>>({
    item,
    dropdownAttributes,
    isHighlighted,
}: MultiselectOptionBodyProps<Item>) {
    const [titleAttribute, ...restAttributes] = dropdownAttributes;
    const title = item[titleAttribute];
    const rest = restAttributes.map((attribute, index) => (
        <SmallText className="ffe-searchable-dropdown__detail-text" key={index}>
            {item[attribute]}
        </SmallText>
    ));

    return (
        <div
            className={classnames('ffe-searchable-dropdown__list-item-body', {
                'ffe-searchable-dropdown__list-item-body--highlighted':
                    isHighlighted,
                'ffe-searchable-dropdown__list-item-body--condensed':
                    !!rest.length,
            })}
        >
            <div className="ffe-searchable-dropdown__list-item-body-content">
                {title}
                {!!rest.length && (
                    <div className="ffe-searchable-dropdown__list-item-body-details">
                        {rest}
                    </div>
                )}
            </div>
            <Icon
                fileUrl={checkIcon}
                size="md"
                className="ffe-searchable-dropdown__selected-icon"
            />
        </div>
    );
}
