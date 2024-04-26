import React from 'react';
import { node, oneOf, string } from 'prop-types';
import classNames from 'classnames';
import { AccordionProvider } from './AccordionContext';

export const Accordion = ({ children, headingLevel, className, ...rest }) => {
    return (
        <AccordionProvider headingLevel={headingLevel}>
            <div
                className={classNames(className, 'ffe-accordion')}
                role="group"
                aria-label="Trekkspillmeny"
                {...rest}
            >
                {children}
            </div>
        </AccordionProvider>
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
