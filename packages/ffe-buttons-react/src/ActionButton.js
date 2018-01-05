import React from 'react';
import { bool, string, node } from 'prop-types';
import classNames from 'classnames';

import Button from './Button';

export default function ActionButton(props) {
    const { children, className, ghost, ...rest } = props;

    return (
        <Button
            {...rest}
            buttonType="action"
            className={classNames(className, {
                'ffe-action-button--ghost': ghost,
            })}
        >
            {children}
        </Button>
    );
}

ActionButton.defaultProps = {
    ghost: false,
};

ActionButton.propTypes = {
    children: node,
    className: string,
    /** Applies the ghost modifier if true. */
    ghost: bool,
};
