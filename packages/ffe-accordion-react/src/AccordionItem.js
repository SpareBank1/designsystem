import React, { useRef, useState } from 'react';
import { bool, func, node, string } from 'prop-types';
import { v4 as uuid } from 'uuid';
import { ChevronIkon } from '@sb1/ffe-icons-react';
import Collapse from '@sb1/ffe-collapse-react';
import classNames from 'classnames';

const AccordionItem = ({
    children,
    heading,
    defaultOpen,
    className,
    onToggleOpen = Function.prototype,
    ...accordionProps
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultOpen);
    const buttonId = useRef(uuid());
    const contentId = useRef(uuid());

    const {
        headingLevel,
        onFocus,
        onBlur,
        forwardedRef,
        ...rest
    } = accordionProps;

    return (
        <div className={classNames(className, 'ffe-accordion-item')} {...rest}>
            {React.createElement(
                `h${headingLevel}`,
                { className: 'ffe-h6' },
                <button
                    type="button"
                    id={buttonId.current}
                    ref={forwardedRef}
                    aria-expanded={isExpanded ? 'true' : 'false'}
                    aria-controls={contentId.current}
                    className={classNames('ffe-accordion__heading-button', {
                        'ffe-accordion__heading-button--open': isExpanded,
                    })}
                    onClick={() => {
                        setIsExpanded(prevState => {
                            onToggleOpen(!prevState);
                            return !prevState;
                        });
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                >
                    <span className="ffe-accordion__heading-button-content">
                        {heading}
                        <ChevronIkon className="ffe-accordion__heading-icon" />
                    </span>
                </button>,
            )}
            <div
                id={contentId.current}
                aria-labelledby={buttonId.current}
                hidden={!isExpanded}
                role="region"
            >
                <Collapse isOpen={isExpanded}>
                    <div className="ffe-accordion-body">{children}</div>
                </Collapse>
            </div>
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
    /** Class assigned the container */
    className: string,
    /** Callback when the item is open/closed */
    onToggleOpen: func,
};

export default React.forwardRef((props, ref) => {
    return <AccordionItem {...props} forwardedRef={ref} />;
});
