import React, { useEffect, useRef, useState } from 'react';
import { bool, func, node, string } from 'prop-types';
import { v4 as uuid } from 'uuid';
import { Icon } from '@sb1/ffe-icons-react';
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

    const expandMoreIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+';

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
                            <Icon
                                className="ffe-accordion-item__heading-icon"
                                icon="expand_more"
                                fileUrl={expandMoreIcon}
                                size="sm"
                            />
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
