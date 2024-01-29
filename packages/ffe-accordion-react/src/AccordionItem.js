import React, { useEffect, useRef, useState } from 'react';
import { bool, func, node, string } from 'prop-types';
import { v4 as uuid } from 'uuid';
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

    const H = `h${headingLevel}`;

    return (
        <div
            className={classNames(className, 'ffe-accordion-item', {
                'ffe-accordion-item--open': isExpanded,
                'ffe-accordion-item--focus': isFocused,
            })}
            {...rest}
        >
            <H className="ffe-h6 ffe-accordion-item__heading">
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
                            <svg
                                className="ffe-accordion-item__heading-icon"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 -960 960 960"
                                width="24"
                            >
                                <path d="M480-373.539q-7.231 0-13.461-2.308-6.231-2.308-11.846-7.923L274.924-563.539q-8.308-8.307-8.5-20.884-.193-12.577 8.5-21.269 8.692-8.692 21.076-8.692t21.076 8.692L480-442.768l162.924-162.924q8.307-8.307 20.884-8.5 12.576-.192 21.268 8.5 8.693 8.692 8.693 21.077 0 12.384-8.693 21.076L505.307-383.77q-5.615 5.615-11.846 7.923-6.23 2.308-13.461 2.308Z" />
                            </svg>
                        </span>
                    </span>
                </button>
            </H>
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
