import React from 'react';
import classNames from 'classnames';
import { string, func, node, oneOfType } from 'prop-types';

import CardBase from '../CardBase';
import * as components from '../components';

const TextCard = props => {
    const { className, children, ...rest } = props;

    return (
        <CardBase className={classNames('ffe-text-card', className)} {...rest}>
            {typeof children === 'function' ? children(components) : children}
        </CardBase>
    );
};

TextCard.propTypes = {
    className: string,
    /** Function that's passed available sub-components as arguments, or regular children */
    children: oneOfType([func, node]),
};

export default TextCard;
