import React, { useState, useRef } from 'react';
import { bool, func, node, string, number } from 'prop-types';
import classNames from 'classnames';
import Collapse from '@sb1/ffe-collapse-react';
import { v4 as uuid } from 'uuid';

const Tooltip = React.forwardRef(
    (
        {
            isOpen,
            'aria-controls': ariaControls,
            'aria-label': ariaLabel,
            children,
            className,
            onClick,
            tabIndex,
            ...rest
        },
        ref,
    ) => {
        const tooltipButtonId = useRef(uuid()).current;
        const tooltipId = useRef(uuid()).current;

        const [_isOpen, setIsOpen] = useState(!!isOpen);

        const handleClick = evt => {
            setIsOpen(prev => !prev);
            if (onClick) {
                onClick(evt);
            }
        };

        return (
            <span
                {...rest}
                className={classNames('ffe-tooltip', {
                    'ffe-tooltip--open': _isOpen,
                })}
            >
                <button
                    ref={ref}
                    aria-expanded={_isOpen}
                    aria-controls={children ? tooltipId : ariaControls}
                    aria-label={ariaLabel}
                    className="ffe-tooltip__icon"
                    onClick={handleClick}
                    type="button"
                    tabIndex={tabIndex}
                    id={tooltipButtonId}
                >
                    <span aria-hidden={true}>?</span>
                </button>
                {children && (
                    <Collapse
                        className="ffe-tooltip__text"
                        id={tooltipId}
                        isOpen={_isOpen}
                    >
                        <div
                            className={classNames('ffe-small-text', className)}
                            role={_isOpen ? 'status' : 'none'}
                        >
                            {children}
                        </div>
                    </Collapse>
                )}
            </span>
        );
    },
);

Tooltip.propTypes = {
    /** Provide the id of the controlled element *unless* you're sending in children */
    'aria-controls': string,
    /** Descriptive text for the Tooltip expand icon */
    'aria-label': string,
    /** The children are rendered in the expanded tooltip. */
    children: node,
    /** The className is set on the root node of the expanded tooltip. */
    className: string,
    isOpen: bool,
    /** Optional listener for clicks on the tooltip button. Is passed the event object. */
    onClick: func,
    /** Sets the tabIndex of the tooltip button. */
    tabIndex: number,
};

Tooltip.defaultProps = {
    'aria-label': 'Vis hjelpetekst',
};

export default Tooltip;
