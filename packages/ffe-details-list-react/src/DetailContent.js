import React from 'react';
import { bool, node, number, string } from 'prop-types';
import classNames from 'classnames';

import { GridCol } from '@sb1/ffe-grid-react';

const getColCount = (total, current) => {
    if (total === 1) {
        return 7;
    }
    if (total < 3 && current === total - 1) {
        return 4;
    }
    return 2;
};

export default function DetailContent(props) {
    const { childCount, children, index, className, cta, ...rest } = props;

    return (
        <GridCol
            className={classNames(
                className,
                'ffe-details-list-react__content',
                { 'ffe-details-list-react__content--action': cta },
            )}
            sm={12}
            md={{ cols: 8, offset: 2 }}
            lg={{ cols: getColCount(childCount, index), offset: 0 }}
            {...rest}
        >
            {children}
        </GridCol>
    );
}

DetailContent.propTypes = {
    /**
     * Internal prop used for knowing the total amount of columns, provided by `Detail`
     * @ignore
     */
    childCount: number,
    /**
     * The contents of the column
     */
    children: node.isRequired,
    /**
     * Internal prop used for knowing which column is being rendered, provided by `Detail`
     * @ignore
     */
    index: number,
    /**
     * Any CSS classes that should be included on the rendered content
     */
    className: string,
    /**
     * Indicate if this should be rendered as a call to action and moved to the end of the row
     * @ignore
     */
    cta: bool,
};
