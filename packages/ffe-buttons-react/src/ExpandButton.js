import React from 'react';
import { bool, func, node } from 'prop-types';
import classNames from 'classnames';

export default function ExpandButton(props) {
    const { children, isExpanded, onClick, ...rest } = props;

    return (
        <button
            aria-expanded={String(isExpanded)}
            className={classNames('ffe-expand-button', {
                'ffe-expand-button--expanded': isExpanded,
            })}
            onClick={onClick}
            {...rest}
        >
            <span
                className={classNames('ffe-expand-button__label', {
                    'ffe-expand-button__label--expanded': isExpanded,
                })}
            >
                {children}
            </span>
        </button>
    );
}

ExpandButton.propTypes = {
    /** The content shown inside the button when it's in a non-expanded state. */
    children: node,
    /**
     * When true the component will render a circle with an X indicating whatever is controlled is in an expanded state.
     */
    isExpanded: bool.isRequired,
    /** Use to listen for clicks and toggle the `isExpanded` property together with whatever it is you're expanding. */
    onClick: func.isRequired,
};
