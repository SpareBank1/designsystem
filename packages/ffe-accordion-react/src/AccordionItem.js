import React, { useEffect, useRef, useState } from 'react';
import { bool, func, node, string } from 'prop-types';
import { v4 as uuid } from 'uuid';
import { ChevronIkon } from '@sb1/ffe-icons-react';
import Collapse from '@sb1/ffe-collapse-react';
import classNames from 'classnames';
import { Heading6 } from '@sb1/ffe-core-react';

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
    const [isFocused, setFocus] = useState(false);
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

    const { headingLevel, forwardedRef, ...rest } = accordionProps;

    const collapseHidden = !isExpanded && !isAnimating;

    return (
        <div
            className={classNames(className, 'ffe-accordion-item', {
                'ffe-accordion-item--open': isExpanded,
                'ffe-accordion-item--focus': isFocused,
            })}
            {...rest}
        >
            <Heading6
                className="ffe-accordion-item__heading"
                aria-level={headingLevel}
            >
                <button
                    type="button"
                    id={buttonId.current}
                    ref={forwardedRef}
                    aria-expanded={isExpanded ? 'true' : 'false'}
                    aria-controls={contentId.current}
                    aria-label={ariaLabel}
                    className={classNames(
                        'ffe-accordion-item__heading-button',
                        {
                            'ffe-accordion-item__heading-button--open': isExpanded,
                        },
                    )}
                    onClick={handleOnClick}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                >
                    <span className="ffe-accordion-item__heading-button-content">
                        {heading}
                        <span className="ffe-accordion-item__heading-icon-wrapper">
                            <ChevronIkon className="ffe-accordion-item__heading-icon" />
                        </span>
                    </span>
                </button>
            </Heading6>
            <Collapse
                isOpen={isExpanded}
                onRest={() => setIsAnimating(false)}
                id={contentId.current}
                aria-labelledby={buttonId.current}
                hidden={collapseHidden}
                role="region"
            >
                {!collapseHidden && (
                    <div className="ffe-accordion-item__body">{children}</div>
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
