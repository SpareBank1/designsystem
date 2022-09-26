import React, { useEffect, useRef, useState } from 'react';
import { bool, func, node, string } from 'prop-types';
import { v4 as uuid } from 'uuid';
import { ChevronIkon } from '@sb1/ffe-icons-react';
import Collapse from '@sb1/ffe-collapse-react';
import classNames from 'classnames';

const AccordionItem = ({
    children,
    heading,
    defaultOpen,
    isOpen,
    className,
    onToggleOpen = Function.prototype,
    ariaLabel,
    ...accordionProps
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultOpen);
    const [isAnimating, setIsAnimating] = useState(false);
    const buttonId = useRef(uuid());
    const contentId = useRef(uuid());

    useEffect(() => {
        if (isOpen != null) {
            setIsAnimating(true);
            setIsExpanded(isOpen);
        }
    }, [isOpen]);

    const handleOnClick = () => {
        onToggleOpen(!isExpanded);
        if (isOpen == null) {
            setIsAnimating(true);
            setIsExpanded(!isExpanded);
        }
    };

    const {
        headingLevel,
        onFocus,
        onBlur,
        forwardedRef,
        ...rest
    } = accordionProps;

    const collapseHidden = !isExpanded && !isAnimating;

    return (
        <div
            className={classNames('ffe-accordion-item', {
                'ffe-accordion-item--open': isExpanded,
            }, className)}
            {...rest}
        >
            {React.createElement(
                `h${headingLevel}`,
                { className: 'ffe-h6' },
                <button
                    type="button"
                    id={buttonId.current}
                    ref={forwardedRef}
                    aria-expanded={isExpanded ? 'true' : 'false'}
                    aria-controls={contentId.current}
                    aria-label={ariaLabel}
                    className={classNames('ffe-accordion__heading-button', {
                        'ffe-accordion__heading-button--open': isExpanded,
                    })}
                    onClick={handleOnClick}
                    onFocus={onFocus}
                    onBlur={onBlur}
                >
                    <span className="ffe-accordion__heading-button-content">
                        {heading}
                        <ChevronIkon className="ffe-accordion__heading-icon" />
                    </span>
                </button>,
            )}
            <Collapse
                isOpen={isExpanded}
                onRest={() => setIsAnimating(false)}
                id={contentId.current}
                aria-labelledby={buttonId.current}
                hidden={collapseHidden}
                role="region"
            >
                {!collapseHidden && (
                    <div className="ffe-accordion-body">{children}</div>
                )}
            </Collapse>
        </div>
    );
};

AccordionItem.propTypes = {
    /** The heading */
    heading: node.isRequired,
    /** The content to appear when expanded */
    children: node.isRequired,
    /** Should it be open by default */
    defaultOpen: bool,
    /** Is the item open or collapsed? Used for overriding default behaviour */
    isOpen: bool,
    /** Class assigned the container */
    className: string,
    /** Callback when the item is open/closed */
    onToggleOpen: func,
    /** aria-label for the button */
    ariaLabel: string,
};

export default React.forwardRef((props, ref) => {
    return <AccordionItem {...props} forwardedRef={ref} />;
});
