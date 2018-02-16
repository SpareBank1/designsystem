import React from 'react';
import { bool, func, node, string } from 'prop-types';
import classNames from 'classnames';
import ChevronIkon from 'ffe-icons-react/lib/chevron-ikon';

const InlineExpandButton = (props) => {
    const {
        children,
        className,
        isExpanded,
        onClick,
        ...rest
    } = props;
    return (
        <button
            className={classNames(
                'ffe-inline-expand-button',
                { 'ffe-inline-expand-button--expanded': isExpanded },
                className,
            )}
            onClick={onClick}
            {...rest}
        >
            {children}
            <ChevronIkon
                className={classNames(
                    'ffe-inline-expand-button__icon',
                    { 'ffe-inline-expand-button__icon--expanded': isExpanded },
                )}
            />
        </button>
    );
}

InlineExpandButton.propTypes = {
    /** Text that should reflect the isExpanded state. */
    children: node,
    className: string,
    isExpanded: bool.isRequired,
    /** Listen for clicks to toggle the isExpanded state. */
    onClick: func.isRequired,
};

export default InlineExpandButton;
