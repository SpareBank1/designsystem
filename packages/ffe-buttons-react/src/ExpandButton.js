import React from 'react';
import {
    bool,
    func,
    oneOfType,
    string,
    node,
    object,
    shape,
    elementType,
} from 'prop-types';
import classNames from 'classnames';
import Symbol from '@sb1/ffe-symbols-react';

const ExpandButton = props => {
    const {
        children,
        className,
        closeLabel,
        element: Element,
        innerRef,
        isExpanded,
        ...rest
    } = props;
    return (
        <Element
            aria-expanded={isExpanded}
            aria-label={isExpanded ? closeLabel : undefined}
            className={classNames(
                'ffe-button',
                'ffe-button--expand',
                { 'ffe-button--expanded': isExpanded },
                className,
            )}
            ref={innerRef}
            {...rest}
        >
            {isExpanded && (
                <Symbol
                    className="ffe-button__icon"
                    ariaLabel=""
                    size="sm"
                    weight={300}
                >
                    close
                </Symbol>
            )}
            {!isExpanded && <span>{children}</span>}
        </Element>
    );
};

ExpandButton.propTypes = {
    /** The button label */
    children: node.isRequired,
    /** Extra class names */
    className: string,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string, elementType]),
    /** An accessible label for the close-button, only shown in the "isExpanded" state  */
    closeLabel: string,
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** When true the component will render a circle with an X indicating whatever is controlled is in an expanded state. */
    isExpanded: bool.isRequired,
    /** Use to listen for clicks and toggle the `isExpanded` property together with whatever it is you're expanding. */
    onClick: func.isRequired,
};

ExpandButton.defaultProps = {
    closeLabel: 'Lukk',
    element: 'button',
};

export default ExpandButton;
