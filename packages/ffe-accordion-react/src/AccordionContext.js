import React, { createContext } from 'react';
import { node, oneOf } from 'prop-types';

export const AccordionContext = createContext({});

export const AccordionProvider = ({ children, headingLevel }) => {
    return (
        <AccordionContext.Provider value={{ headingLevel }}>
            {children}
        </AccordionContext.Provider>
    );
};

AccordionProvider.propTypes = {
    children: node,
    headingLevel: oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};
