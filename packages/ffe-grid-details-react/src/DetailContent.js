import React from 'react';
import { bool, node, number, string } from 'prop-types';
import classNames from 'classnames';

import { GridCol } from 'ffe-grid-react';

const getColCount = (total, current, md) => {
    if (total === 1) {
        return md ? 6 : 7;
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
                'ffe-grid-details-react__content',
                { 'ffe-grid-details-react__content--action': cta },
            )}
            sm={12}
            md={getColCount(childCount, index, true)}
            lg={getColCount(childCount, index)}
            noBottomPadding={true}
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
    childCount: number.isRequired,
    /**
     * The contents of the column
     */
    children: node.isRequired,
    /**
     * Internal prop used for knowing which column is being rendered, provided by `Detail`
     * @ignore
     */
    index: number.isRequired,
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
