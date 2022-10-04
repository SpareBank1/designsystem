import React from 'react';
import { node, oneOf, string } from 'prop-types';
import classNames from 'classnames';

const Accordion = ({ children, headingLevel, className, ...rest }) => {
    return (
        <div className={classNames(className, 'ffe-accordion')} {...rest}>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    headingLevel,
                });
            })}
        </div>
    );
};

Accordion.propTypes = {
    /** Accordion items */
    children: node,
    /** The level of headings in the AccordionItems */
    headingLevel: oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    /** Class assigned the container */
    className: string,
};

export default Accordion;
